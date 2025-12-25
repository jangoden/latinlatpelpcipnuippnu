'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import {
    Search,
    Filter,
    Eye,
    CheckCircle,
    XCircle,
    Trash2,
    Loader2,
    ChevronLeft,
    ChevronRight,
    Download
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

type Registrant = {
    id: string;
    full_name: string;
    nik: string;
    email: string;
    org_level: string;
    org_name: string;
    created_at: string;
    registration_status: string;
};

export default function PendaftarPage() {
    const { toast } = useToast();
    const [registrants, setRegistrants] = useState<Registrant[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [statusFilter, setStatusFilter] = useState('all');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalCount, setTotalCount] = useState(0);
    const itemsPerPage = 10;

    useEffect(() => {
        fetchRegistrants();
    }, [currentPage, statusFilter, searchQuery]);

    const fetchRegistrants = async () => {
        setLoading(true);
        try {
            let query = supabase
                .from('registrants')
                .select('id, full_name, nik, email, org_level, org_name, created_at, registration_status', { count: 'exact' });

            // Apply status filter
            if (statusFilter !== 'all') {
                if (statusFilter === 'pending') {
                    query = query.or('registration_status.is.null,registration_status.eq.pending');
                } else {
                    query = query.eq('registration_status', statusFilter);
                }
            }

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
        } catch (error) {
            console.error('Error fetching registrants:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleStatusUpdate = async (id: string, status: 'approved' | 'rejected') => {
        try {
            const { error } = await supabase
                .from('registrants')
                .update({ registration_status: status })
                .eq('id', id);

            if (error) throw error;

            toast({
                title: status === 'approved' ? "Pendaftar Disetujui ✅" : "Pendaftar Ditolak ❌",
                description: "Status pendaftar berhasil diperbarui.",
            });
            fetchRegistrants();
        } catch (error) {
            console.error('Error updating status:', error);
            toast({
                variant: "destructive",
                title: "Gagal memperbarui status",
                description: "Terjadi kesalahan.",
            });
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

    const getStatusBadge = (status: string) => {
        switch (status) {
            case 'approved':
                return <span className="px-2 py-1 text-xs font-medium rounded-full bg-emerald-100 text-emerald-700">Disetujui</span>;
            case 'rejected':
                return <span className="px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-700">Ditolak</span>;
            default:
                return <span className="px-2 py-1 text-xs font-medium rounded-full bg-amber-100 text-amber-700">Pending</span>;
        }
    };

    const getOrgLabel = (level: string) => {
        const labels: Record<string, string> = {
            'pkpt': 'PKPT',
            'pr': 'PR',
            'pac': 'PAC',
            'pc_internal': 'PC (Int)',
            'pc_eksternal': 'PC (Ext)',
        };
        return labels[level] || level;
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
                <Select value={statusFilter} onValueChange={(v) => { setStatusFilter(v); setCurrentPage(1); }}>
                    <SelectTrigger className="w-full sm:w-48">
                        <Filter className="w-4 h-4 mr-2" />
                        <SelectValue placeholder="Filter Status" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">Semua Status</SelectItem>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="approved">Disetujui</SelectItem>
                        <SelectItem value="rejected">Ditolak</SelectItem>
                    </SelectContent>
                </Select>
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
                                    <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider hidden md:table-cell">NIK</th>
                                    <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider hidden lg:table-cell">Asal</th>
                                    <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                                    <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider hidden sm:table-cell">Tanggal</th>
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
                                                <p className="text-xs text-slate-500 md:hidden">{r.nik}</p>
                                            </td>
                                            <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-400 hidden md:table-cell">{r.nik}</td>
                                            <td className="px-4 py-3 hidden lg:table-cell">
                                                <span className="text-xs px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                                                    {getOrgLabel(r.org_level)}
                                                </span>
                                            </td>
                                            <td className="px-4 py-3">{getStatusBadge(r.registration_status)}</td>
                                            <td className="px-4 py-3 text-sm text-slate-500 hidden sm:table-cell">
                                                {new Date(r.created_at).toLocaleDateString('id-ID')}
                                            </td>
                                            <td className="px-4 py-3">
                                                <div className="flex items-center justify-center gap-1">
                                                    <Link href={`/admin/pendaftar/${r.id}`}>
                                                        <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-500 hover:text-blue-600">
                                                            <Eye className="w-4 h-4" />
                                                        </Button>
                                                    </Link>
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        className="h-8 w-8 text-slate-500 hover:text-emerald-600"
                                                        onClick={() => handleStatusUpdate(r.id, 'approved')}
                                                    >
                                                        <CheckCircle className="w-4 h-4" />
                                                    </Button>
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        className="h-8 w-8 text-slate-500 hover:text-red-600"
                                                        onClick={() => handleStatusUpdate(r.id, 'rejected')}
                                                    >
                                                        <XCircle className="w-4 h-4" />
                                                    </Button>
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        className="h-8 w-8 text-slate-500 hover:text-red-600"
                                                        onClick={() => handleDelete(r.id, r.full_name)}
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
