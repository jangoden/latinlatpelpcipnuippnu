'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import {
    ArrowLeft,
    CheckCircle,
    XCircle,
    Loader2,
    User,
    Mail,
    Phone,
    MapPin,
    Building,
    Calendar,
    FileText,
    ExternalLink,
    Camera
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

type Registrant = {
    id: string;
    nik: string;
    username: string;
    email: string;
    full_name: string;
    birth_place: string;
    birth_date: string;
    address: string;
    province: string;
    regency: string;
    district: string;
    village: string;
    phone_number: string;
    hobby: string;
    status: string;
    nia: string | null;
    org_level: string;
    org_name: string;
    instagram_video_link: string;
    file_urls: Record<string, string>;
    created_at: string;
    registration_status: string;
};

export default function RegistrantDetailPage() {
    const params = useParams();
    const router = useRouter();
    const { toast } = useToast();
    const [registrant, setRegistrant] = useState<Registrant | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (params.id) {
            fetchRegistrant(params.id as string);
        }
    }, [params.id]);

    const fetchRegistrant = async (id: string) => {
        setLoading(true);
        try {
            const { data, error } = await supabase
                .from('registrants')
                .select('*')
                .eq('id', id)
                .single();

            if (error) throw error;
            setRegistrant(data);
        } catch (error) {
            console.error('Error fetching registrant:', error);
            toast({
                variant: "destructive",
                title: "Data tidak ditemukan",
                description: "Pendaftar dengan ID tersebut tidak ada.",
            });
            router.push('/admin/pendaftar');
        } finally {
            setLoading(false);
        }
    };

    const handleStatusUpdate = async (status: 'approved' | 'rejected') => {
        if (!registrant) return;

        try {
            const { error } = await supabase
                .from('registrants')
                .update({ registration_status: status })
                .eq('id', registrant.id);

            if (error) throw error;

            toast({
                title: status === 'approved' ? "Pendaftar Disetujui ✅" : "Pendaftar Ditolak ❌",
                description: "Status pendaftar berhasil diperbarui.",
            });
            fetchRegistrant(registrant.id);
        } catch (error) {
            console.error('Error updating status:', error);
            toast({
                variant: "destructive",
                title: "Gagal memperbarui status",
                description: "Terjadi kesalahan.",
            });
        }
    };

    const getStatusBadge = (status: string) => {
        switch (status) {
            case 'approved':
                return <span className="px-3 py-1.5 text-sm font-medium rounded-full bg-emerald-100 text-emerald-700">Disetujui</span>;
            case 'rejected':
                return <span className="px-3 py-1.5 text-sm font-medium rounded-full bg-red-100 text-red-700">Ditolak</span>;
            default:
                return <span className="px-3 py-1.5 text-sm font-medium rounded-full bg-amber-100 text-amber-700">Pending</span>;
        }
    };

    const getOrgLabel = (level: string) => {
        const labels: Record<string, string> = {
            'pkpt': 'Pimpinan Komisariat Perguruan Tinggi (PKPT)',
            'pr': 'Pimpinan Ranting (PR)',
            'pac': 'Pimpinan Anak Cabang (PAC)',
            'pc_internal': 'PC IPNU IPPNU Ciamis (Internal)',
            'pc_eksternal': 'PC IPNU IPPNU (Eksternal)',
        };
        return labels[level] || level;
    };

    const getFileLabel = (key: string) => {
        const labels: Record<string, string> = {
            'kta': 'Scan KTA',
            'sertifikat': 'Sertifikat Makesta & Lakmud',
            'rekomendasi': 'Surat Rekomendasi',
            'foto': 'Pas Foto 3x4',
            'essay': 'Esai Kontribusi',
        };
        return labels[key] || key;
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <Loader2 className="w-8 h-8 animate-spin text-emerald-500" />
            </div>
        );
    }

    if (!registrant) {
        return null;
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center gap-4">
                    <Link href="/admin/pendaftar">
                        <Button variant="ghost" size="icon" className="rounded-full">
                            <ArrowLeft className="w-5 h-5" />
                        </Button>
                    </Link>
                    <div>
                        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">{registrant.full_name}</h1>
                        <p className="text-slate-500 dark:text-slate-400">NIK: {registrant.nik}</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    {getStatusBadge(registrant.registration_status)}
                </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap gap-3">
                <Button
                    className="bg-emerald-500 hover:bg-emerald-600"
                    onClick={() => handleStatusUpdate('approved')}
                >
                    <CheckCircle className="w-4 h-4 mr-2" /> Setujui
                </Button>
                <Button
                    variant="destructive"
                    onClick={() => handleStatusUpdate('rejected')}
                >
                    <XCircle className="w-4 h-4 mr-2" /> Tolak
                </Button>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Personal Info */}
                <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
                    <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                        <User className="w-5 h-5 text-blue-500" /> Data Diri
                    </h2>
                    <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <p className="text-xs text-slate-500 uppercase">Username</p>
                                <p className="text-sm font-medium text-slate-900 dark:text-white">{registrant.username}</p>
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 uppercase">NIA</p>
                                <p className="text-sm font-medium text-slate-900 dark:text-white">{registrant.nia || '-'}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <Mail className="w-4 h-4 text-slate-400" />
                            <span className="text-sm text-slate-700 dark:text-slate-300">{registrant.email}</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Phone className="w-4 h-4 text-slate-400" />
                            <span className="text-sm text-slate-700 dark:text-slate-300">{registrant.phone_number}</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Calendar className="w-4 h-4 text-slate-400" />
                            <span className="text-sm text-slate-700 dark:text-slate-300">{registrant.birth_place}, {new Date(registrant.birth_date).toLocaleDateString('id-ID')}</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <MapPin className="w-4 h-4 text-slate-400 mt-0.5" />
                            <span className="text-sm text-slate-700 dark:text-slate-300">
                                {registrant.address}, {registrant.village}, {registrant.district}, {registrant.regency}, {registrant.province}
                            </span>
                        </div>
                        <div className="pt-2 border-t border-slate-200 dark:border-slate-700">
                            <p className="text-xs text-slate-500 uppercase mb-1">Hobi</p>
                            <p className="text-sm text-slate-700 dark:text-slate-300">{registrant.hobby}</p>
                        </div>
                        <div>
                            <p className="text-xs text-slate-500 uppercase mb-1">Status</p>
                            <p className="text-sm text-slate-700 dark:text-slate-300">{registrant.status}</p>
                        </div>
                    </div>
                </div>

                {/* Organization Info */}
                <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
                    <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                        <Building className="w-5 h-5 text-purple-500" /> Asal Pimpinan
                    </h2>
                    <div className="space-y-4">
                        <div>
                            <p className="text-xs text-slate-500 uppercase mb-1">Tingkat Pimpinan</p>
                            <p className="text-sm font-medium text-slate-900 dark:text-white">{getOrgLabel(registrant.org_level)}</p>
                        </div>
                        <div>
                            <p className="text-xs text-slate-500 uppercase mb-1">Nama Pimpinan</p>
                            <p className="text-sm font-medium text-slate-900 dark:text-white">{registrant.org_name}</p>
                        </div>
                        <div>
                            <p className="text-xs text-slate-500 uppercase mb-1">Link Video Instagram</p>
                            <a
                                href={registrant.instagram_video_link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-blue-600 hover:underline flex items-center gap-1"
                            >
                                {registrant.instagram_video_link} <ExternalLink className="w-3 h-3" />
                            </a>
                        </div>
                        <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                            <p className="text-xs text-slate-500 uppercase mb-1">Tanggal Daftar</p>
                            <p className="text-sm text-slate-700 dark:text-slate-300">
                                {new Date(registrant.created_at).toLocaleString('id-ID', {
                                    weekday: 'long',
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                    hour: '2-digit',
                                    minute: '2-digit'
                                })}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Uploaded Files */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
                <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-emerald-500" /> Berkas yang Diupload
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                    {registrant.file_urls && Object.keys(registrant.file_urls).length > 0 ? (
                        Object.entries(registrant.file_urls).map(([key, url]) => (
                            <a
                                key={key}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col items-center justify-center p-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group"
                            >
                                {key === 'foto' ? (
                                    <Camera className="w-8 h-8 text-slate-400 group-hover:text-blue-500 mb-2" />
                                ) : (
                                    <FileText className="w-8 h-8 text-slate-400 group-hover:text-blue-500 mb-2" />
                                )}
                                <span className="text-xs text-center text-slate-600 dark:text-slate-400 group-hover:text-blue-600">{getFileLabel(key)}</span>
                                <span className="text-xs text-blue-500 mt-1 flex items-center gap-1">
                                    Lihat <ExternalLink className="w-3 h-3" />
                                </span>
                            </a>
                        ))
                    ) : (
                        <p className="text-sm text-slate-500 col-span-full">Tidak ada berkas yang diupload.</p>
                    )}
                </div>
            </div>
        </div>
    );
}
