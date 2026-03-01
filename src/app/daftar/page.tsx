'use client';

import { Navbar } from '@/components/Navbar';
import Link from 'next/link';

export default function DaftarPage() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans selection:bg-primary/20">
            {/* Background Image Fixed */}
            <div
                className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-20 dark:opacity-10"
                style={{ backgroundImage: "url('/images/bg-herosection.png')" }}
            />
            <div className="fixed inset-0 z-0 bg-gradient-to-b from-slate-50/90 via-slate-50/80 to-slate-200/90 dark:from-slate-950/90 dark:via-slate-950/80 dark:to-slate-900/90" />

            <Navbar />

            <section className="relative z-10 pt-32 pb-20 px-6 min-h-screen flex items-center justify-center">
                <div className="max-w-2xl mx-auto text-center">
                    {/* Icon */}
                    <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                        <span className="material-symbols-outlined text-blue-500 dark:text-blue-400 text-5xl">school</span>
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight mb-4 font-lobster">
                        Pendaftaran MAP NU
                    </h1>

                    {/* Description */}
                    <p className="text-slate-600 dark:text-slate-400 text-lg max-w-xl mx-auto mb-8">
                        Informasi pendaftaran untuk <strong>Madrasah Aswaja Pelajar NU (MAP NU)</strong> dalam rangkaian peringatan <strong>Harlah IPNU ke-72 & IPPNU ke-71</strong> akan segera diumumkan.
                    </p>

                    {/* Info Card */}
                    <div className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-white/50 dark:border-slate-800 rounded-2xl p-6 md:p-8 shadow-lg mb-8">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="material-symbols-outlined text-blue-500 text-2xl">info</span>
                            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200">Informasi Peserta</h3>
                        </div>
                        <div className="space-y-4 text-left">
                            <div className="bg-emerald-50/50 p-4 rounded-xl border border-emerald-100/50">
                                <h4 className="font-bold text-emerald-700 text-sm mb-2">Pasaran Kitab — GRATIS</h4>
                                <p className="text-slate-600 text-sm">Terbuka untuk umum. Tidak perlu pendaftaran khusus.</p>
                            </div>
                            <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100/50">
                                <h4 className="font-bold text-blue-700 text-sm mb-2">MAP NU — Rp 20.000</h4>
                                <p className="text-slate-600 text-sm">Delegasi resmi dari PAC/PK/PR/PAR. Minimal 1 delegasi per pimpinan. Pendaftaran akan dibuka segera.</p>
                            </div>
                        </div>
                    </div>

                    {/* Jadwal Info */}
                    <div className="bg-slate-100/80 dark:bg-slate-800/50 rounded-xl p-4 mb-8">
                        <h4 className="text-sm font-bold text-slate-700 dark:text-slate-300 mb-3">Jadwal Kegiatan:</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                                <span className="material-symbols-outlined text-emerald-500 text-lg">auto_stories</span>
                                <span>Pasaran Kitab: 21–22 Ramadhan</span>
                            </div>
                            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                                <span className="material-symbols-outlined text-purple-500 text-lg">build</span>
                                <span>Persiapan: 23 Ramadhan</span>
                            </div>
                            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                                <span className="material-symbols-outlined text-blue-500 text-lg">school</span>
                                <span>MAP NU: 24 Ramadhan</span>
                            </div>
                            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                                <span className="material-symbols-outlined text-red-500 text-lg">celebration</span>
                                <span>Resepsi Harlah: 24 Ramadhan</span>
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-base font-semibold bg-primary text-white hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/30"
                    >
                        <span className="material-symbols-outlined text-lg">home</span>
                        Kembali ke Beranda
                    </Link>
                </div>
            </section>
        </main>
    );
}
