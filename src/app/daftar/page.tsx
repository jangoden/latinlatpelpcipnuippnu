'use client';

import { Navbar } from '@/components/Navbar';
import { XCircle } from 'lucide-react';
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
                    <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                        <XCircle className="w-12 h-12 text-red-500 dark:text-red-400" />
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight mb-4 font-lobster">
                        Pendaftaran Ditutup
                    </h1>

                    {/* Description */}
                    <p className="text-slate-600 dark:text-slate-400 text-lg max-w-xl mx-auto mb-8">
                        Mohon maaf, masa pendaftaran untuk <strong>Latin & Latpel 2026</strong> telah berakhir pada tanggal <strong>03 Januari 2026</strong>.
                    </p>

                    {/* Info Card */}
                    <div className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-white/50 dark:border-slate-800 rounded-2xl p-6 md:p-8 shadow-lg mb-8">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="material-symbols-outlined text-amber-500 text-2xl">info</span>
                            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200">Informasi</h3>
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                            Bagi para peserta yang telah mendaftar, silakan pantau terus informasi terbaru melalui Group WhatsApp dan akun Instagram resmi PC IPNU IPPNU Ciamis untuk pengumuman selanjutnya.
                        </p>
                    </div>

                    {/* Timeline Info */}
                    <div className="bg-slate-100/80 dark:bg-slate-800/50 rounded-xl p-4 mb-8">
                        <h4 className="text-sm font-bold text-slate-700 dark:text-slate-300 mb-3">Jadwal Selanjutnya:</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                                <span className="material-symbols-outlined text-purple-500 text-lg">fact_check</span>
                                <span>Seleksi Berkas: 04 Jan 2026</span>
                            </div>
                            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                                <span className="material-symbols-outlined text-emerald-500 text-lg">campaign</span>
                                <span>Pengumuman: 05 Jan 2026</span>
                            </div>
                            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                                <span className="material-symbols-outlined text-blue-500 text-lg">groups</span>
                                <span>Technical Meeting: 07 Jan 2026</span>
                            </div>
                            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                                <span className="material-symbols-outlined text-red-500 text-lg">event</span>
                                <span>Pelaksanaan: 09-11 Jan 2026</span>
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
