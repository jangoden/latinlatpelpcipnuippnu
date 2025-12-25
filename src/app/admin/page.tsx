'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import { Users, Clock, CheckCircle, XCircle, ArrowRight, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

type Stats = {
    total: number;
    approved: number;
    ipnu: number;
    ippnu: number;
};

type Registrant = {
    id: string;
    full_name: string;
    nik: string;
    org_name: string;
    created_at: string;
    registration_status: string;
};

export default function AdminDashboard() {
    const [stats, setStats] = useState<Stats>({ total: 0, pending: 0, approved: 0, rejected: 0 });
    const [recentRegistrants, setRecentRegistrants] = useState<Registrant[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setLoading(true);
        try {
            // Fetch all registrants for stats
            const { data: allData, error: allError } = await supabase
                .from('registrants')
                .select('id, registration_status, gender');

            if (allError) throw allError;

            const total = allData?.length || 0;
            const approved = allData?.filter(r => r.registration_status === 'approved').length || 0;
            const ipnu = allData?.filter(r => r.gender === 'ipnu').length || 0;
            const ippnu = allData?.filter(r => r.gender === 'ippnu').length || 0;

            setStats({ total, approved, ipnu, ippnu });

            // Fetch recent 5 registrants
            const { data: recentData, error: recentError } = await supabase
                .from('registrants')
                .select('id, full_name, nik, org_name, created_at, registration_status')
                .order('created_at', { ascending: false })
                .limit(5);

            if (recentError) throw recentError;
            setRecentRegistrants(recentData || []);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };

    const statCards = [
        { label: 'Total Pendaftar', value: stats.total, icon: Users, color: 'bg-blue-500', bgColor: 'bg-blue-50 dark:bg-blue-900/20' },
        { label: 'Disetujui', value: stats.approved, icon: CheckCircle, color: 'bg-emerald-500', bgColor: 'bg-emerald-50 dark:bg-emerald-900/20' },
        { label: 'Total IPNU', value: stats.ipnu, icon: Users, color: 'bg-green-600', bgColor: 'bg-green-50 dark:bg-green-900/20' },
        { label: 'Total IPPNU', value: stats.ippnu, icon: Users, color: 'bg-purple-500', bgColor: 'bg-purple-50 dark:bg-purple-900/20' },
    ];

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

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <Loader2 className="w-8 h-8 animate-spin text-emerald-500" />
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div>
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Dashboard</h1>
                <p className="text-slate-500 dark:text-slate-400">Selamat datang di Admin Panel Latin & Latpel 2026</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {statCards.map((card) => (
                    <div key={card.label} className={`${card.bgColor} rounded-2xl p-6 border border-slate-200/50 dark:border-slate-700/50`}>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-slate-600 dark:text-slate-400">{card.label}</p>
                                <p className="text-3xl font-bold text-slate-900 dark:text-white mt-1">{card.value}</p>
                            </div>
                            <div className={`w-12 h-12 rounded-xl ${card.color} flex items-center justify-center`}>
                                <card.icon className="w-6 h-6 text-white" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Recent Registrations */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
                <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Pendaftaran Terbaru</h2>
                    <Link href="/admin/pendaftar">
                        <Button variant="ghost" size="sm" className="text-emerald-600 hover:text-emerald-700">
                            Lihat Semua <ArrowRight className="w-4 h-4 ml-1" />
                        </Button>
                    </Link>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-slate-50 dark:bg-slate-800/50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Nama</th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">NIK</th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Asal</th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Tanggal</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                            {recentRegistrants.length === 0 ? (
                                <tr>
                                    <td colSpan={5} className="px-6 py-8 text-center text-slate-500">
                                        Belum ada data pendaftar.
                                    </td>
                                </tr>
                            ) : (
                                recentRegistrants.map((registrant) => (
                                    <tr key={registrant.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                        <td className="px-6 py-4 text-sm font-medium text-slate-900 dark:text-white">{registrant.full_name}</td>
                                        <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">{registrant.nik}</td>
                                        <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">{registrant.org_name || '-'}</td>
                                        <td className="px-6 py-4">{getStatusBadge(registrant.registration_status)}</td>
                                        <td className="px-6 py-4 text-sm text-slate-500">
                                            {new Date(registrant.created_at).toLocaleDateString('id-ID')}
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
