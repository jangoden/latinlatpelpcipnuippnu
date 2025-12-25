"use client";

import React, { useEffect, useState } from "react";

export function StatusBadge() {
    // Determine status based on current date
    const [status, setStatus] = useState({
        label: "Memuat...",
        color: "bg-slate-200",
        textColor: "text-slate-500",
        pulse: false
    });

    useEffect(() => {
        // SIMULATED DATE for Demo Purposes (Matches Timeline.tsx)
        // Set to Dec 25, 2025 to show "Pendaftaran Dibuka"
        const now = new Date('2025-12-25');

        // Use this line for Real Production Date:
        // const now = new Date();

        const dates = {
            sosialisasiStart: new Date('2025-12-15'),
            pendaftaranStart: new Date('2025-12-16'),
            pendaftaranEnd: new Date('2026-01-03'),
            seleksi: new Date('2026-01-04'),
            pengumuman: new Date('2026-01-05'),
            techMeet: new Date('2026-01-07'),
            kegiatanStart: new Date('2026-01-09'),
            kegiatanEnd: new Date('2026-01-11'),
        };

        // Helper to set time to end of day for range checks
        Object.values(dates).forEach(d => d.setHours(0, 0, 0, 0));
        dates.pendaftaranEnd.setHours(23, 59, 59, 999);
        dates.kegiatanEnd.setHours(23, 59, 59, 999);


        if (now < dates.sosialisasiStart) {
            setStatus({ label: "Segera Hadir", color: "bg-blue-500", textColor: "text-blue-700", pulse: false });
        } else if (now < dates.pendaftaranStart) {
            setStatus({ label: "Sosialisasi", color: "bg-blue-400", textColor: "text-blue-600", pulse: false });
        } else if (now <= dates.pendaftaranEnd) {
            setStatus({ label: "Pendaftaran Dibuka", color: "bg-emerald-500", textColor: "text-emerald-700", pulse: true });
        } else if (now <= dates.seleksi) {
            setStatus({ label: "Seleksi Berkas", color: "bg-orange-500", textColor: "text-orange-600", pulse: false });
        } else if (now <= dates.pengumuman) {
            setStatus({ label: "Pengumuman", color: "bg-purple-500", textColor: "text-purple-600", pulse: true });
        } else if (now < dates.kegiatanStart) {
            setStatus({ label: "Menuju Kegiatan", color: "bg-blue-500", textColor: "text-blue-600", pulse: false });
        } else if (now <= dates.kegiatanEnd) {
            setStatus({ label: "Kegiatan Berlangsung", color: "bg-red-500", textColor: "text-red-700", pulse: true });
        } else {
            setStatus({ label: "Kegiatan Selesai", color: "bg-slate-400", textColor: "text-slate-500", pulse: false });
        }

    }, []);

    return (
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 border border-white/50 backdrop-blur-md shadow-sm mb-4">
            <span className="relative flex h-2.5 w-2.5">
                {status.pulse && (
                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${status.color}`}></span>
                )}
                <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${status.color}`}></span>
            </span>
            <span className={`text-[11px] font-bold uppercase tracking-wider ${status.textColor}`}>
                {status.label}
            </span>
        </div>
    );
}
