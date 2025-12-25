"use client";

import React, { useEffect, useState } from "react";

// Define the schedule data
const scheduleData = [
    {
        title: "Sosialisasi Latin & Latpel",
        desc: "Penyebaran informasi ke seluruh pimpinan dan kader.",
        dateDisplay: "15 Desember 2025",
        startDate: "2025-12-15",
        endDate: "2025-12-15",
        color: "primary", // maps to 'primary' or specific colors
        bgColor: "bg-blue-50",
        textColor: "text-primary",
    },
    {
        title: "Pendaftaran Peserta",
        desc: "Masa pendaftaran dan pengumpulan berkas persyaratan.",
        dateDisplay: "16 Des 2025 - 03 Jan 2026",
        startDate: "2025-12-16",
        endDate: "2026-01-03",
        color: "emerald-500",
        bgColor: "bg-emerald-50",
        textColor: "text-emerald-600",
    },
    {
        title: "Seleksi Berkas & Screening",
        desc: "Verifikasi kelayakan peserta oleh panitia SC.",
        dateDisplay: "04 Januari 2026",
        startDate: "2026-01-04",
        endDate: "2026-01-04",
        color: "orange-500",
        bgColor: "bg-orange-50",
        textColor: "text-orange-600",
    },
    {
        title: "Pengumuman Kepesertaan",
        desc: "Publikasi peserta yang dinyatakan lolos seleksi.",
        dateDisplay: "05 Januari 2026",
        startDate: "2026-01-05",
        endDate: "2026-01-05",
        color: "purple-500",
        bgColor: "bg-purple-50",
        textColor: "text-purple-600",
    },
    {
        title: "Technical Meeting",
        desc: "Pembekalan awal dan penjelasan teknis pelaksanaan.",
        dateDisplay: "07 Januari 2026",
        startDate: "2026-01-07",
        endDate: "2026-01-07",
        color: "pink-500",
        bgColor: "bg-pink-50",
        textColor: "text-pink-600",
    },
    {
        title: "Pelaksanaan Kegiatan",
        desc: "Pelaksanaan Latpel di Pondok Pesantren Baitul Hikmah.",
        dateDisplay: "09 - 11 Januari 2026",
        startDate: "2026-01-09",
        endDate: "2026-01-11",
        color: "red-500",
        bgColor: "bg-red-50",
        textColor: "text-red-600",
    },
];

export function Timeline() {
    const [currentDate, setCurrentDate] = useState<Date | null>(null);

    useEffect(() => {
        // Set current date to simulated date (Dec 25, 2025) for demo purposes
        setCurrentDate(new Date('2025-12-25'));
    }, []);

    const isActive = (start: string, end: string) => {
        if (!currentDate) return false;

        // Parse dates (assuming YYYY-MM-DD format)
        const startDate = new Date(start);
        startDate.setHours(0, 0, 0, 0);

        const endDate = new Date(end);
        endDate.setHours(23, 59, 59, 999);

        // Check if current date is within range
        return currentDate >= startDate && currentDate <= endDate;
    };

    return (
        <section
            className="relative z-10 py-24 px-6 bg-white/40 border-y border-white/50 backdrop-blur-sm"
            id="schedule"
        >
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-16 text-center">
                    Timeline
                </h2>
                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 transform md:-translate-x-1/2" />

                    {scheduleData.map((item, index) => {
                        const active = isActive(item.startDate, item.endDate);
                        const isEven = index % 2 === 0;

                        // Dynamic background color for animation
                        const bgColorClass =
                            item.color === 'primary' ? 'bg-primary' :
                                item.color === 'emerald-500' ? 'bg-emerald-500' :
                                    item.color === 'orange-500' ? 'bg-orange-500' :
                                        item.color === 'purple-500' ? 'bg-purple-500' :
                                            item.color === 'pink-500' ? 'bg-pink-500' :
                                                'bg-red-500';

                        // Dynamic border for the dot
                        const borderColorClass =
                            item.color === 'primary' ? 'border-primary' :
                                item.color === 'emerald-500' ? 'border-emerald-500' :
                                    item.color === 'orange-500' ? 'border-orange-500' :
                                        item.color === 'purple-500' ? 'border-purple-500' :
                                            item.color === 'pink-500' ? 'border-pink-500' :
                                                'border-red-500';

                        // Shared Content Component
                        const TimelineContent = () => (
                            <div className="flex flex-col gap-2">
                                <div>
                                    <span className={`inline-block py-1 px-3 rounded-md ${item.bgColor} ${item.textColor} text-sm font-bold shadow-sm`}>
                                        {item.dateDisplay}
                                    </span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-800 leading-tight">{item.title}</h3>
                                    <p className="text-slate-500 mt-1 leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        );

                        return (
                            <div key={index} className="relative flex flex-col md:flex-row items-center justify-between mb-16 group w-full">

                                {/* LEFT COLUMN */}
                                <div className={`w-full md:w-5/12 mb-4 md:mb-0 relative z-20 ${isEven ? 'md:text-right pl-20 md:pl-0 md:pr-14 order-2 md:order-1' : 'order-2 md:order-1 hidden md:block opacity-0'}`}>
                                    {isEven ? <TimelineContent /> : null}
                                </div>

                                {/* CENTER DOT */}
                                <div className={`absolute left-8 md:left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-white border-4 ${borderColorClass} z-30 shadow-md transition-transform duration-300 order-1 ${active ? 'scale-125' : 'group-hover:scale-125'}`}>
                                    {active && (
                                        <div className={`absolute -inset-2 rounded-full ${bgColorClass} opacity-60 animate-ping`} />
                                    )}
                                </div>

                                {/* RIGHT COLUMN */}
                                <div className={`w-full md:w-5/12 mt-2 md:mt-0 relative z-20 ${!isEven ? 'text-left pl-20 md:pl-14 order-2 md:order-3' : 'order-2 md:order-3 hidden md:block opacity-0'}`}>
                                    {!isEven ? <TimelineContent /> : null}
                                </div>

                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
