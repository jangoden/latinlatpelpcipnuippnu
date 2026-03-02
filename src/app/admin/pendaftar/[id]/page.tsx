'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import {
    ArrowLeft,
    Loader2,
    User,
    Mail,
    Phone,
    MapPin,
    Building2,
    Briefcase,
    Calendar,
    FileText,
    CreditCard,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

type Registrant = {
    id: string;
    full_name: string;
    gender: string;
    birth_place: string;
    birth_date: string;
    address: string;
    email: string;
    phone_number: string;
    org_name: string;
    jabatan: string | null;
    created_at: string;
};

function InfoRow({ icon: Icon, label, value }: { icon: React.ElementType; label: string; value: string | null | undefined }) {
    return (
        <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0 mt-0.5">
                <Icon className="w-4 h-4 text-slate-500" />
            </div>
            <div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{label}</p>
                <p className="text-sm font-medium text-slate-800 dark:text-white mt-0.5">{value || <span className="text-slate-400 italic">-</span>}</p>
            </div>
        </div>
    );
}

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
                variant: 'destructive',
                title: 'Data tidak ditemukan',
                description: 'Pendaftar dengan ID tersebut tidak ada.',
            });
            router.push('/admin/pendaftar');
        } finally {
            setLoading(false);
        }
    };

    const getGenderLabel = (gender: string) => {
        if (gender === 'rekan') return 'Rekan (IPNU)';
        if (gender === 'rekanita') return 'Rekanita (IPPNU)';
        return '-';
    };

    const getGenderColor = (gender: string) => {
        if (gender === 'rekan') return 'bg-green-100 text-green-700';
        if (gender === 'rekanita') return 'bg-purple-100 text-purple-700';
        return 'bg-slate-100 text-slate-700';
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <Loader2 className="w-8 h-8 animate-spin text-emerald-500" />
            </div>
        );
    }

    if (!registrant) return null;

    const birthDateFormatted = registrant.birth_date
        ? new Date(registrant.birth_date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
        : '-';

    const createdAtFormatted = new Date(registrant.created_at).toLocaleString('id-ID', {
        day: 'numeric', month: 'long', year: 'numeric',
        hour: '2-digit', minute: '2-digit',
    });

    return (
        <div className="space-y-6 max-w-3xl mx-auto">
            {/* Header */}
            <div className="flex items-center gap-4 bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <Link href="/admin/pendaftar">
                    <Button variant="ghost" size="icon" className="rounded-full hover:bg-slate-100 dark:hover:bg-slate-800">
                        <ArrowLeft className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                    </Button>
                </Link>
                <div className="flex-1 min-w-0">
                    <h1 className="text-xl font-bold text-slate-900 dark:text-white truncate">{registrant.full_name}</h1>
                    <div className="flex items-center gap-2 mt-1 flex-wrap">
                        <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${getGenderColor(registrant.gender)}`}>
                            {getGenderLabel(registrant.gender)}
                        </span>
                        <span className="text-xs text-slate-500 flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            Daftar: {createdAtFormatted}
                        </span>
                    </div>
                </div>
                <Button variant="outline" onClick={() => window.print()} className="hidden sm:flex shrink-0">
                    <FileText className="w-4 h-4 mr-2" /> Cetak
                </Button>
            </div>

            {/* Identity Card */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
                <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 flex items-center gap-2">
                    <User className="w-4 h-4 text-blue-500" />
                    <h2 className="font-semibold text-slate-800 dark:text-white">Identitas Diri</h2>
                </div>
                <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <InfoRow icon={User} label="Nama Lengkap" value={registrant.full_name} />
                    <InfoRow icon={MapPin} label="Tempat Lahir" value={registrant.birth_place} />
                    <InfoRow icon={Calendar} label="Tanggal Lahir" value={birthDateFormatted} />
                    <div className="sm:col-span-2">
                        <InfoRow icon={MapPin} label="Alamat Lengkap" value={registrant.address} />
                    </div>
                </div>
            </div>

            {/* Contact Card */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
                <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-emerald-500" />
                    <h2 className="font-semibold text-slate-800 dark:text-white">Kontak</h2>
                </div>
                <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <InfoRow icon={Mail} label="Email" value={registrant.email} />
                    <InfoRow icon={Phone} label="No. HP / WhatsApp" value={registrant.phone_number} />
                </div>
            </div>

            {/* Delegation Card */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
                <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-amber-500" />
                    <h2 className="font-semibold text-slate-800 dark:text-white">Data Delegasi</h2>
                </div>
                <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <InfoRow icon={Building2} label="Asal Pimpinan" value={registrant.org_name} />
                    <InfoRow icon={Briefcase} label="Jabatan" value={registrant.jabatan || '-'} />
                </div>
            </div>

            {/* System Info */}
            <div className="bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800 p-4">
                <p className="text-xs text-slate-500 font-mono">ID: {registrant.id}</p>
                <p className="text-xs text-slate-500 mt-1">Didaftarkan: {createdAtFormatted}</p>
            </div>
        </div>
    );
}
