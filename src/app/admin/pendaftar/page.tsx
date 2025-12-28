'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import * as XLSX from 'xlsx';
import {
    Search,
    Eye,
    Trash2,
    Loader2,
    ChevronLeft,
    ChevronRight,
    FileDown,
    Download
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

type Registrant = {
    id: string;
    full_name: string;
    nik: string;
    email: string;
    gender: string;
    nia?: string;
    tshirt_size?: string;
    org_name: string;
    instagram_video_link: string;
    file_urls: { [key: string]: string } | null;
    created_at: string;
    // Additional fields for Export
    username?: string;
    birth_place?: string;
    birth_date?: string;
    address?: string;
    province?: string;
    regency?: string;
    district?: string;
    village?: string;
    phone_number?: string;
    hobby?: string;
    status?: string;
    org_level?: string;
};

export default function PendaftarPage() {
    const { toast } = useToast();
    const [registrants, setRegistrants] = useState<Registrant[]>([]);
    const [loading, setLoading] = useState(true);
    const [isExporting, setIsExporting] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalCount, setTotalCount] = useState(0);
    const itemsPerPage = 10;

    useEffect(() => {
        fetchRegistrants();

        // Realtime subscription
        const channel = supabase
            .channel('registrants-list-changes')
            .on(
                'postgres_changes',
                {
                    event: '*',
                    schema: 'public',
                    table: 'registrants'
                },
                (payload) => {
                    console.log('Change received!', payload);
                    fetchRegistrants();
                }
            )
            .subscribe();

        return () => {
            supabase.removeChannel(channel);
        };
    }, [currentPage, searchQuery]);

    const fetchRegistrants = async () => {
        setLoading(true);
        try {
            let query = supabase
                .from('registrants')
                .select('id, full_name, nik, email, gender, nia, tshirt_size, org_name, instagram_video_link, file_urls, created_at', { count: 'exact' });

            // Apply search filter
            if (searchQuery) {
                query = query.or(`full_name.ilike.%${searchQuery}%,nik.ilike.%${searchQuery}%,email.ilike.%${searchQuery}%`);
            }

            // Pagination
            const from = (currentPage - 1) * itemsPerPage;
            const to = from + itemsPerPage - 1;

            const { data, error, count } = await query
                .order('created_at', { ascending: false })
                .range(from, to);

            if (error) throw error;
            setRegistrants(data || []);
            setTotalCount(count || 0);
        } catch (error: any) {
            console.error('Error fetching registrants:', JSON.stringify(error, null, 2));
            toast({
                variant: 'destructive',
                title: 'Gagal memuat data',
                description: error.message || 'Terjadi kesalahan saat mengambil data.',
            });
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: string, name: string) => {
        if (!confirm(`Yakin ingin menghapus data "${name}"?`)) return;

        try {
            const { error } = await supabase
                .from('registrants')
                .delete()
                .eq('id', id);

            if (error) throw error;

            toast({
                title: "Data Dihapus",
                description: `Data ${name} berhasil dihapus.`,
            });
            fetchRegistrants();
        } catch (error) {
            console.error('Error deleting registrant:', error);
            toast({
                variant: "destructive",
                title: "Gagal menghapus data",
                description: "Terjadi kesalahan.",
            });
        }
    };

    const handleExportExcel = async () => {
        setIsExporting(true);
        try {
            // Fetch ALL data for export (bypassing pagination)
            const { data: allData, error } = await supabase
                .from('registrants')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) throw error;

            if (!allData || allData.length === 0) {
                toast({
                    title: "Tidak ada data",
                    description: "Belum ada data pendaftar untuk diexport.",
                });
                return;
            }

            // Format Data for Excel
            const formattedData = allData.map((item, index) => ({
                "No": index + 1,
                "Nama Lengkap": item.full_name,
                "NIK": `'${item.nik}`, // Force string to prevent scientific notation
                "Gender": item.gender === 'ipnu' ? 'Rekan (IPNU)' : 'Rekanita (IPPNU)',
                "NIA": item.nia ? `'${item.nia}` : '-',
                "Email": item.email,
                "No. HP": `'${item.phone_number}`,
                "Asal Pimpinan": item.org_name,
                "Tingkat Pimpinan": item.org_level ? item.org_level.toUpperCase() : '-',
                "Tempat Lahir": item.birth_place,
                "Tanggal Lahir": item.birth_date ? new Date(item.birth_date).toLocaleDateString('id-ID') : '-',
                "Alamat": item.address,
                "Desa/Kelurahan": item.village,
                "Kecamatan": item.district,
                "Kabupaten/Kota": item.regency,
                "Provinsi": item.province,
                "Hobi": item.hobby,
                "Status": item.status,
                "Username": item.username,
                "Link Video": item.instagram_video_link,
                "File Esai": item.file_urls?.essay || '-',
                "File Sertifikat": item.file_urls?.sertifikat || '-',
                "File Foto": item.file_urls?.foto || '-',
                "Tanggal Daftar": new Date(item.created_at).toLocaleString('id-ID'),
                "Ukuran Kaos": item.tshirt_size || '-',
            }));

            // Create Worksheet
            const worksheet = XLSX.utils.json_to_sheet(formattedData);

            // Auto-width columns (simple estimation)
            const wscols = Object.keys(formattedData[0]).map(key => ({ wch: 20 }));
            wscols[1] = { wch: 30 }; // Nama longer
            wscols[2] = { wch: 20 }; // NIK
            wscols[5] = { wch: 25 }; // Email
            wscols[18] = { wch: 40 }; // Video Link
            worksheet['!cols'] = wscols;

            // Create Workbook
            const workbook = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(workbook, worksheet, "Data Pendaftar");

            // Save File
            XLSX.writeFile(workbook, `Data_Pendaftar_LatinLatpel_${new Date().toISOString().split('T')[0]}.xlsx`);

            toast({
                title: "Berhasil Export",
                description: "File Excel berhasil diunduh.",
            });

        } catch (error: any) {
            console.error('Export Error:', error);
            toast({
                variant: 'destructive',
                title: "Gagal Export",
                description: "Terjadi kesalahan saat mengunduh data.",
            });
        } finally {
            setIsExporting(false);
        }
    };

    const getGenderLabel = (gender: string) => {
        if (gender === 'ipnu') return 'IPNU';
        if (gender === 'ippnu') return 'IPPNU';
        return '-';
    };

    const totalPages = Math.ceil(totalCount / itemsPerPage);

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Data Pendaftar</h1>
                    <p className="text-slate-500 dark:text-slate-400">Total: {totalCount} pendaftar</p>
                </div>
                <div className="flex items-center gap-2">
                    <Button
                        variant="outline"
                        onClick={handleExportExcel}
                        disabled={isExporting}
                        className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800"
                    >
                        {isExporting ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <FileDown className="w-4 h-4 mr-2 text-emerald-600" />}
                        Export Excel
                    </Button>
                </div>
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <Input
                        placeholder="Cari nama, NIK, atau email..."
                        value={searchQuery}
                        onChange={(e) => {
                            setSearchQuery(e.target.value);
                            setCurrentPage(1);
                        }}
                        className="pl-10"
                    />
                </div>
            </div>

            {/* Table */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
                {loading ? (
                    <div className="flex items-center justify-center h-64">
                        <Loader2 className="w-8 h-8 animate-spin text-emerald-500" />
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-slate-50 dark:bg-slate-800/50">
                                <tr>
                                    <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">No</th>
                                    <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Nama</th>
                                    <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Gender</th>
                                    <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Delegasi</th>
                                    <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Instagram</th>
                                    <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Esai</th>
                                    <th className="px-4 py-3 text-center text-xs font-semibold text-slate-500 uppercase tracking-wider">Aksi</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                                {registrants.length === 0 ? (
                                    <tr>
                                        <td colSpan={7} className="px-6 py-12 text-center text-slate-500">
                                            Tidak ada data ditemukan.
                                        </td>
                                    </tr>
                                ) : (
                                    registrants.map((r, idx) => (
                                        <tr key={r.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                            <td className="px-4 py-3 text-sm text-slate-500">{(currentPage - 1) * itemsPerPage + idx + 1}</td>
                                            <td className="px-4 py-3">
                                                <p className="text-sm font-medium text-slate-900 dark:text-white">{r.full_name}</p>
                                                <p className="text-xs text-slate-500 md:hidden">{getGenderLabel(r.gender)}</p>
                                            </td>
                                            <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-400">
                                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${r.gender === 'ipnu' ? 'bg-green-100 text-green-700' : 'bg-purple-100 text-purple-700'}`}>
                                                    {getGenderLabel(r.gender)}
                                                </span>
                                            </td>
                                            <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-400">{r.org_name || '-'}</td>
                                            <td className="px-4 py-3 text-sm">
                                                {r.instagram_video_link ? (
                                                    <a href={r.instagram_video_link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 hover:underline flex items-center gap-1">
                                                        <Eye className="w-3 h-3" /> Lihat
                                                    </a>
                                                ) : '-'}
                                            </td>
                                            <td className="px-4 py-3 text-sm">
                                                {r.file_urls && r.file_urls['essay'] ? (
                                                    <a href={r.file_urls['essay']} target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 hover:underline flex items-center gap-1">
                                                        <Download className="w-3 h-3" /> Unduh
                                                    </a>
                                                ) : '-'}
                                            </td>
                                            <td className="px-4 py-3">
                                                <div className="flex items-center justify-center gap-1">
                                                    <Link href={`/admin/pendaftar/${r.id}`}>
                                                        <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-500 hover:text-blue-600" title="Detail">
                                                            <Eye className="w-4 h-4" />
                                                        </Button>
                                                    </Link>
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        className="h-8 w-8 text-slate-500 hover:text-red-600"
                                                        onClick={() => handleDelete(r.id, r.full_name)}
                                                        title="Hapus"
                                                    >
                                                        <Trash2 className="w-4 h-4" />
                                                    </Button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                )}
                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="px-4 py-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                        <p className="text-sm text-slate-500">
                            Halaman {currentPage} dari {totalPages}
                        </p>
                        <div className="flex gap-2">
                            <Button
                                variant="outline"
                                size="sm"
                                disabled={currentPage === 1}
                                onClick={() => setCurrentPage(p => p - 1)}
                            >
                                <ChevronLeft className="w-4 h-4" />
                            </Button>
                            <Button
                                variant="outline"
                                size="sm"
                                disabled={currentPage === totalPages}
                                onClick={() => setCurrentPage(p => p + 1)}
                            >
                                <ChevronRight className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
