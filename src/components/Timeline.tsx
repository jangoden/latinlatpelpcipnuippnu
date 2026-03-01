"use client";

import React, { useEffect, useState } from "react";

// Define the schedule data for Harlah & MAP NU
const scheduleData = [
    {
        title: "Pendaftaran MAP NU",
        desc: "Pendaftaran delegasi resmi dari pimpinan (PAC/PK/PR/PAR).",
        dateDisplay: "Segera Diumumkan",
        startDate: "2026-03-01",
        endDate: "2026-03-15",
        color: "primary",
        bgColor: "bg-blue-50",
        textColor: "text-primary",
    },
    {
        title: "Pasaran Kitab — Hari 1",
        desc: "Kajian Qanun Asasi NU di Mesjid An-Namiroh.",
        dateDisplay: "Rabu, 21 Ramadhan 1447 H",
        startDate: "2026-03-18",
        endDate: "2026-03-18",
        color: "emerald-500",
        bgColor: "bg-emerald-50",
        textColor: "text-emerald-600",
    },
    {
        title: "Pasaran Kitab — Hari 2",
        desc: "Kajian Risalah Aswaja di Mesjid An-Namiroh.",
        dateDisplay: "Kamis, 22 Ramadhan 1447 H",
        startDate: "2026-03-19",
        endDate: "2026-03-19",
        color: "orange-500",
        bgColor: "bg-orange-50",
        textColor: "text-orange-600",
    },
    {
        title: "Persiapan MAP NU",
        desc: "Persiapan teknis MAP NU di Asrama Haji.",
        dateDisplay: "Jum'at, 23 Ramadhan 1447 H",
        startDate: "2026-03-20",
        endDate: "2026-03-20",
        color: "purple-500",
        bgColor: "bg-purple-50",
        textColor: "text-purple-600",
    },
    {
        title: "MAP NU & Resepsi Harlah",
        desc: "Madrasah Aswaja Pelajar NU + Harlah IPNU ke-72 & IPPNU ke-71.",
        dateDisplay: "Sabtu, 24 Ramadhan 1447 H",
        startDate: "2026-03-21",
        endDate: "2026-03-21",
        color: "red-500",
        bgColor: "bg-red-50",
        textColor: "text-red-600",
    },
];

export function Timeline() {
    const [currentDate, setCurrentDate] = useState<Date | null>(null);

    useEffect(() => {
        // Set current date to real-time date
        setCurrentDate(new Date());
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
                                            'bg-red-500';

                        // Dynamic border for the dot
                        const borderColorClass =
                            item.color === 'primary' ? 'border-primary' :
                                item.color === 'emerald-500' ? 'border-emerald-500' :
                                    item.color === 'orange-500' ? 'border-orange-500' :
                                        item.color === 'purple-500' ? 'border-purple-500' :
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
