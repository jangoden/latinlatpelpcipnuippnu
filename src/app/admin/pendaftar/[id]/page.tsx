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
    gender: string;
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

    const getGenderLabel = (gender: string) => {
        if (gender === 'ipnu') return 'Rekan (IPNU)';
        if (gender === 'ippnu') return 'Rekanita (IPPNU)';
        return '-';
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
            {/* Header with Navigation and Actions */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="flex items-center gap-4">
                    <Link href="/admin/pendaftar">
                        <Button variant="ghost" size="icon" className="rounded-full hover:bg-slate-100 dark:hover:bg-slate-800">
                            <ArrowLeft className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                        </Button>
                    </Link>
                    <div>
                        <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">{registrant.full_name}</h1>
                        <div className="flex items-center gap-2 mt-1">
                            <span className="text-sm font-mono text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
                                {registrant.nik}
                            </span>
                            <span className="hidden sm:inline text-slate-300">|</span>
                            <span className="text-sm text-slate-500 flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                {new Date(registrant.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <Button
                        variant="outline"
                        onClick={() => window.print()}
                        className="hidden sm:flex"
                    >
                        <FileText className="w-4 h-4 mr-2" />
                        Cetak Data
                    </Button>
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

                {/* Left Column: Personal Identity (2/3) */}
                <div className="xl:col-span-2 space-y-6">
                    {/* Data Diri Card */}
                    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
                        <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/20 flex items-center gap-2">
                            <User className="w-5 h-5 text-blue-500" />
                            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Identitas Diri</h2>
                        </div>
                        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">

                            <div className="space-y-1">
                                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Nama Lengkap</p>
                                <p className="text-base font-medium text-slate-900 dark:text-white">{registrant.full_name}</p>
                            </div>

                            <div className="space-y-1">
                                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Gender</p>
                                <p className="text-base text-slate-700 dark:text-slate-300 flex items-center gap-2">
                                    {getGenderLabel(registrant.gender)}
                                </p>
                            </div>

                            <div className="space-y-1">
                                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Tempat, Tanggal Lahir</p>
                                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                                    <Calendar className="w-4 h-4 text-slate-400" />
                                    <span>{registrant.birth_place}, {new Date(registrant.birth_date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                                </div>
                            </div>

                            <div className="space-y-1">
                                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Alamat Lengkap</p>
                                <div className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                                    <MapPin className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                                    <span className="text-sm leading-relaxed">
                                        {registrant.address}, <br />
                                        Desa {registrant.village}, Kec. {registrant.district}, <br />
                                        Kab. {registrant.regency}, Prov. {registrant.province}
                                    </span>
                                </div>
                            </div>

                            <div className="space-y-1">
                                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Email</p>
                                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                                    <Mail className="w-4 h-4 text-slate-400" />
                                    <span>{registrant.email}</span>
                                </div>
                            </div>

                            <div className="space-y-1">
                                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Nomor HP / WhatsApp</p>
                                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                                    <Phone className="w-4 h-4 text-slate-400" />
                                    <span>{registrant.phone_number}</span>
                                </div>
                            </div>

                            <div className="space-y-1">
                                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Hobi</p>
                                <p className="text-base text-slate-700 dark:text-slate-300">{registrant.hobby}</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Status Pernikahan</p>
                                <p className="text-base text-slate-700 dark:text-slate-300">{registrant.status}</p>
                            </div>

                        </div>
                    </div>

                    {/* Organisasi & Delegasi Card */}
                    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
                        <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/20 flex items-center gap-2">
                            <Building className="w-5 h-5 text-purple-500" />
                            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Data Organisasi & Delegasi</h2>
                        </div>
                        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">

                            <div className="space-y-1">
                                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Asal Pimpinan (Delegasi)</p>
                                <p className="text-lg font-medium text-purple-700 dark:text-purple-400">{registrant.org_name}</p>
                            </div>

                            <div className="space-y-1">
                                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Tingkat Kepengurusan</p>
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
                                    {getOrgLabel(registrant.org_level)}
                                </span>
                            </div>

                            <div className="space-y-1">
                                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Nomor Induk Anggota (NIA)</p>
                                <p className="text-base font-mono text-slate-700 dark:text-slate-300">
                                    {registrant.nia || <span className="text-slate-400 italic">Belum memiliki NIA</span>}
                                </p>
                            </div>

                            <div className="space-y-1">
                                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Video Profil Instagram</p>
                                <a
                                    href={registrant.instagram_video_link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 hover:underline mt-1"
                                >
                                    <ExternalLink className="w-4 h-4" />
                                    Lihat Video Profil
                                </a>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Right Column: Files & Metadata (1/3) */}
                <div className="space-y-6">
                    {/* Berkas Uploaded Card */}
                    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
                        <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/20 flex items-center gap-2">
                            <FileText className="w-5 h-5 text-emerald-500" />
                            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Berkas Pendaftaran</h2>
                        </div>
                        <div className="p-4 space-y-3">
                            {registrant.file_urls && Object.keys(registrant.file_urls).length > 0 ? (
                                Object.entries(registrant.file_urls).map(([key, url]) => (
                                    <a
                                        key={key}
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center p-3 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all group"
                                    >
                                        <div className="p-2 rounded-md bg-slate-100 dark:bg-slate-800 mr-3 text-slate-500 group-hover:text-blue-500 group-hover:bg-blue-50 transition-colors">
                                            {key === 'foto' ? <Camera className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-slate-900 dark:text-white truncate group-hover:text-blue-600 transition-colors">
                                                {getFileLabel(key)}
                                            </p>
                                            <p className="text-xs text-slate-500 flex items-center gap-1">
                                                Klik untuk melihat
                                            </p>
                                        </div>
                                        <ExternalLink className="w-4 h-4 text-slate-300 group-hover:text-blue-400" />
                                    </a>
                                ))
                            ) : (
                                <div className="text-center py-8 text-slate-500">
                                    <FileText className="w-10 h-10 mx-auto text-slate-200 mb-2" />
                                    <p className="text-sm">Tidak ada berkas yang diupload</p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* System Metadata Card */}
                    <div className="bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
                        <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">Informasi Sistem</h3>
                        <div className="space-y-3">
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-500">ID Registrasi</span>
                                <span className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700">
                                    {registrant.id.split('-')[0]}...
                                </span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-500">Dibuat Pada</span>
                                <span className="text-slate-700 dark:text-slate-300 text-right">
                                    {new Date(registrant.created_at).toLocaleString('id-ID')}
                                </span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-500">Username</span>
                                <span className="text-slate-700 dark:text-slate-300 font-medium">@{registrant.username}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
