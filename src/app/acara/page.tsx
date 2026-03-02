"use client";


import { Navbar } from '@/components/Navbar';
import React from 'react';

const rundownData = [
    {
        date: "Rabu, 21 Ramadhan 1447 H — Pasaran Kitab Hari 1",
        schedule: [
            { time: "08.00 - 10.00", activity: "Kajian Qanun Asasi NU — Sesi 1", person: "Fulan" },
            { time: "10.00 - 12.30", activity: "Istirahat, Sholat Dzuhur", person: "All Person" },
            { time: "12.30 - 14.30", activity: "Kajian Qanun Asasi NU — Sesi 2", person: "Fulan" },
            { time: "14.30 - 15.30", activity: "Istirahat, Sholat Ashar", person: "All Person" },
            { time: "15.30 - 17.00", activity: "Kajian Qanun Asasi NU — Sesi 3", person: "Fulan" },
            { time: "17.00 - 20.30", activity: "Buka Bersama, Sholat Magrib, Isya, Tarawih", person: "All Person" },
            { time: "20.30 - 22.00", activity: "Kajian Qanun Asasi NU — Sesi 4", person: "Fulan" },
        ]
    },
    {
        date: "Kamis, 22 Ramadhan 1447 H — Pasaran Kitab Hari 2",
        schedule: [
            { time: "08.00 - 10.00", activity: "Kajian Risalah Aswaja — Sesi 1", person: "Fulan" },
            { time: "10.00 - 12.30", activity: "Istirahat, Sholat Dzuhur", person: "All Person" },
            { time: "12.30 - 14.30", activity: "Kajian Risalah Aswaja — Sesi 2", person: "Fulan" },
            { time: "14.30 - 15.30", activity: "Istirahat, Sholat Ashar", person: "All Person" },
            { time: "15.30 - 17.00", activity: "Kajian Risalah Aswaja — Sesi 3", person: "Fulan" },
            { time: "17.00 - 20.30", activity: "Buka Bersama, Sholat Magrib, Isya, Tarawih", person: "All Person" },
            { time: "20.30 - 22.00", activity: "Kajian Risalah Aswaja — Sesi 4", person: "Fulan" },
        ]
    },
    {
        date: "Jum'at, 23 Ramadhan 1447 H — Persiapan MAP NU",
        schedule: [
            { time: "Seharian", activity: "Persiapan Teknis MAP NU di Asrama Haji", person: "Panitia" },
        ]
    },
    {
        date: "Sabtu, 24 Ramadhan 1447 H — MAP NU & Resepsi Harlah",
        schedule: [
            { time: "07.00 - 08.00", activity: "Check In Peserta", person: "Sie. Kesekretariatan" },
            {
                time: "08.00 - 10.00",
                activity: "PEMBUKAAN MAP NU",
                person: "Panitia",
                details: [
                    { label: "Pembukaan Resmi", person: "MC" },
                    { label: "Sambutan Ketua Panitia", person: "Irfan Hanapi" },
                    { label: "Sambutan Ketua PC IPNU Ciamis", person: "Irman Muhamad Farhan" },
                    { label: "Sambutan Ketua PC IPPNU Ciamis", person: "Nia Siti Kurniasari" },
                    { label: "Do'a", person: "-" },
                ]
            },
            {
                time: "10.00 - 12.00",
                activity: "MATERI I: IDEOLOGI ASWAJA AN-NAHDLIYAH",
                person: "Fulan",
                description: "Definisi kontekstual Aswaja, analogi pentingnya bermadzhab, dekonstruksi makna bid'ah, dalil praktis amaliah keseharian"
            },
            { time: "12.00 - 12.30", activity: "Istirahat, Sholat Dzuhur", person: "All Person" },
            {
                time: "12.30 - 14.30",
                activity: "MATERI II: ORIENTASI PERGERAKAN PELAJAR NU",
                person: "Fulan",
                description: "Tafsir ayat dalam Qanun Asasi, bahaya fanatisme, organisasi sebagai alat perjuangan, ukhuwah di lingkungan pendidikan"
            },
            { time: "14.30 - 15.30", activity: "Istirahat, Sholat Ashar", person: "All Person" },
            {
                time: "15.30 - 17.30",
                activity: "MATERI III: KARAKTERISTIK PELAJAR NU DI ERA DIGITAL",
                person: "Fulan",
                description: "Membumikan 4 pilar fikrah Nahdliyah, urgensi sanad keilmuan digital, adab pelajar NU di medsos, strategi dakwah digital"
            },
            { time: "17.30 - 20.30", activity: "Buka Bersama, Sholat Magrib, Isya, Tarawih", person: "All Person" },
            {
                time: "20.30 - 21.00",
                activity: "RESEPSI HARLAH IPNU KE-72 & IPPNU KE-71",
                person: "Panitia",
                details: [
                    { label: "Potong Tumpeng", person: "Panitia" },
                    { label: "Launching Website Resmi IPNU Ciamis", person: "Panitia" },
                ]
            },
            {
                time: "21.00 - 22.00",
                activity: "REFLEKSI HARLAH IPNU KE-72 & IPPNU KE-71",
                person: "Fulan",
                description: "Talk Show sejarah singkat dan kilas balik perjuangan"
            },
            { time: "22.00 - 23.00", activity: "Penutupan", person: "Panitia" },
        ]
    }
];

export default function AcaraPage() {
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-32 pb-20 px-4 md:px-8">
                <div className="max-w-6xl mx-auto">



                    {/* Schedule Header */}
                    <div className="text-center mb-16 animate-fade-in-up">
                        <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-primary text-sm font-bold mb-4 tracking-wide">
                            SCHEDULE
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
                            Rundown Kegiatan
                        </h1>
                        <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
                            Jadwal lengkap rangkaian Harlah & MAP NU. Pastikan Anda mengikuti setiap sesi dengan tertib.
                        </p>
                    </div>

                    <div className="space-y-16">
                        {rundownData.map((day, index) => (
                            <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                                <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-6 flex items-center gap-3 border-l-4 border-primary pl-4">
                                    {day.date}
                                </h3>

                                {/* Desktop Table View */}
                                <div className="hidden md:block overflow-hidden rounded-2xl border border-slate-200 shadow-sm bg-white">
                                    <table className="w-full text-left text-sm text-slate-600">
                                        <thead className="bg-slate-50 text-slate-900 border-b border-slate-200">
                                            <tr>
                                                <th className="px-6 py-4 font-bold w-48">WAKTU</th>
                                                <th className="px-6 py-4 font-bold">KEGIATAN</th>
                                                <th className="px-6 py-4 font-bold w-64">PETUGAS / PEMATERI</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-100">
                                            {day.schedule.map((session, sIndex) => (
                                                <tr key={sIndex} className="hover:bg-slate-50/50 transition-colors">
                                                    <td className="px-6 py-4 font-medium font-mono text-slate-500 whitespace-nowrap align-top">
                                                        {session.time}
                                                    </td>
                                                    <td className="px-6 py-4 align-top">
                                                        <span className="font-bold text-slate-800 block mb-1 text-base">{session.activity}</span>
                                                        {session.description && (
                                                            <p className="text-slate-500 text-sm italic mb-2">{session.description}</p>
                                                        )}
                                                        {session.details && (
                                                            <ul className="mt-3 space-y-2">
                                                                {session.details.map((detail, dIndex) => (
                                                                    <li key={dIndex} className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between text-sm gap-1 bg-slate-50 p-2 rounded-lg border border-slate-100">
                                                                        <div className="flex items-start gap-2">
                                                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0"></span>
                                                                            <span className="text-slate-700">{detail.label}</span>
                                                                        </div>
                                                                        <span className="text-slate-500 text-xs italic shrink-0 font-medium">{detail.person}</span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        )}
                                                    </td>
                                                    <td className="px-6 py-4 text-slate-600 font-medium align-top">
                                                        {session.person !== "-" ? (
                                                            <span className="inline-block bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs font-bold border border-blue-100">
                                                                {session.person}
                                                            </span>
                                                        ) : (
                                                            <span className="text-slate-400 text-xs">-</span>
                                                        )}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                                {/* Mobile Card View */}
                                <div className="md:hidden space-y-4">
                                    {day.schedule.map((session, sIndex) => (
                                        <div key={sIndex} className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm flex flex-col gap-3">
                                            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                                                <span className="font-mono text-sm font-bold text-primary bg-primary/10 px-2 py-1 rounded">
                                                    {session.time}
                                                </span>
                                                {session.person !== "-" && (
                                                    <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded">
                                                        {session.person}
                                                    </span>
                                                )}
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-900 text-lg leading-tight mb-2">{session.activity}</h4>
                                                {session.description && (
                                                    <p className="text-slate-500 text-sm italic mb-2">{session.description}</p>
                                                )}
                                                {session.details && (
                                                    <ul className="space-y-3 mt-3 border-t border-slate-100 pt-3">
                                                        {session.details.map((detail, dIndex) => (
                                                            <li key={dIndex} className="text-sm">
                                                                <div className="font-medium text-slate-700 mb-1 flex items-start gap-2">
                                                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0"></span>
                                                                    {detail.label}
                                                                </div>
                                                                <div className="text-slate-500 text-xs pl-3.5 italic">{detail.person}</div>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </>
    );
}
