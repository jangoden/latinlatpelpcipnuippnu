"use client";

import { Navbar } from '@/components/Navbar';
import React from 'react';

const rundownData = [
    {
        date: "Jum’at, 09 Januari 2026",
        schedule: [
            { time: "08.00 - 13.30", activity: "Registrasi Peserta", person: "Sekretariat" },
            {
                time: "13.30 - 15.00",
                activity: "Opening Ceremony",
                person: "Rekanita Annisa Nurhanidah / Rekanita Syifa Asma Amalia",
                details: [
                    { label: "Menyanyikan Lagu Kebangsaan Indonesia Raya", person: "Rekanita Delis Yayi Siti Maryam" },
                    { label: "Pembacaan Ayat Suci Al-Qur’an", person: "Rekan --------" },
                    { label: "Tawasul", person: "Rekan Bagus Pribadi" },
                    { label: "Menyanyikan Lagu (Mars IPNU, IPPNU, Syubanul Wathon)", person: "Rekanita Delis Yayi Siti Maryam" },
                    { label: "Prakata Ketua Panitia", person: "Rekanita Alis" },
                    { label: "Sambutan Ketua PC IPNU Ciamis", person: "Rekan Irman Muhamad Farhan" },
                    { label: "Sambutan Ketua PC IPPNU Ciamis", person: "Rekanita Nia Siti Kurniasari" },
                    { label: "Sambutan Ketua PW IPNU Jawa Barat", person: "Rekan Akbar Abdul Aziz" },
                    { label: "Sambutan Ketua PW IPPNU Jawa Barat", person: "Rekanita Renita" },
                    { label: "Sambutan Pimpinan PP Baitul Hikam As-Shofa", person: "KH. ------------" },
                    { label: "Sambutan Ketua Tanfidziah PCNU Ciamis", person: "KH. Arief Ismail Chowas, S.Ag" },
                    { label: "Sambutan Bupati Ciamis", person: "Dr. H. Herdiat Sunarya" },
                    { label: "Do’a", person: "Rekan Jajang Miftah Maulana" },
                ]
            },
            { time: "15.00 - 15.30", activity: "Kontrak Forum & Pre Test", person: "Instruktur" },
            { time: "15.30 - 16.00", activity: "Sholat Ashar", person: "All Person" },
            { time: "16.00 - 17.30", activity: "MATERI 1: ASWAJA dan KE-NU-AN", person: "Kyai Tatang Nawawi, S.Pd" },
            { time: "17.30 - 18.30", activity: "ISHOMA", person: "All person" },
            { time: "18.30 – 19.30", activity: "Istighosah dan Shalat Isya", person: "Panitia" },
            { time: "19.30 - 21.00", activity: "MATERI 2: SISTEM KADERISASI 1", person: "Muhamad Khotami, S.H.,CPM" },
            { time: "21.00 - 22.30", activity: "MATERI 3: REVIEW MATERI MAKESTA DAN LAKMUD", person: "Instruktur PW IPNU IPPNU" },
            { time: "22.30 – 23.30", activity: "FGD", person: "Panitia" },
            { time: "23.30 - ......", activity: "Istirahat", person: "All person" },
        ]
    },
    {
        date: "Sabtu, 10 Januari 2026",
        schedule: [
            { time: "04.00 – 04.30", activity: "Persiapan dan Shalat shubuh", person: "Panitia" },
            { time: "04.30 - 05.30", activity: "Kultum pagi dan waqiah", person: "-" },
            { time: "05.30 - 06.30", activity: "Olahraga", person: "-" },
            { time: "06.30 – 08.00", activity: "Sarapan dan Persiapan", person: "-" },
            { time: "08.00 - 09.30", activity: "MATERI 4: METODE DAN MEDIA PELATIHAN", person: "-" },
            { time: "09.30 - 11.00", activity: "MATERI 5: FALSAFAH DAN PENDEKATAN PELATIHAN KADER", person: "-" },
            { time: "11.00 - 12.30", activity: "MATERI 6: PSIKOLOGI PELATIHAN KADER", person: "-" },
            { time: "12.30 - 13.30", activity: "ISHOMA", person: "Panitia" },
            { time: "13.30 - 15.00", activity: "MATERI 7: MANAJEMEN PELATIHAN 1", person: "H Nana Supriatna, S.Ag., M.A" },
            { time: "15.00 - 15.30", activity: "Sholat Ashar", person: "All Person" },
            { time: "15.30 – 17.00", activity: "MATERI 8: METODOLOGI DAN EVALUASI PELATIHAN KADER", person: "Dr. Lilis Kholisoh, M.Pd" },
            { time: "17.00 – 18.30", activity: "ISHOMA", person: "All Person" },
            { time: "18.30 – 19.30", activity: "Maulid barjanji / diba dan shalat isya", person: "Panitia" },
            { time: "19.30 - 21.00", activity: "MATERI 9: PRAKTEK PUBLIC SPEAKING", person: "Kang Jhon Husein" },
            { time: "21.00 - 22.30", activity: "MATERI 10: KEINSTRUKTURAN 1, KEPELATIHAN 1", person: "Instruktur PW IPNU IPPNU" },
            { time: "22.30 - 00.00", activity: "MATERI 11: BERMAIN DAN BELAJAR", person: "-" },
            { time: "00.00 - 01.00", activity: "FGD", person: "Instruktur" },
            { time: "01.00 - 04.00", activity: "Tidur", person: "All Person" },
        ]
    },
    {
        date: "Ahad, 11 Januari 2026",
        schedule: [
            { time: "04.00 - 04.30", activity: "Persiapan dan Shalat Shubuh", person: "All Person" },
            { time: "04.30 - 05.30", activity: "Kultum pagi dan Waqiah", person: "Panitia" },
            { time: "05.30 - 06.30", activity: "Olahraga", person: "Panitia cbp/kpp" },
            { time: "06.30 – 08.00", activity: "Sarapan dan persiapan", person: "-" },
            { time: "08.00 - 09.30", activity: "MATERI 12: PRAKTIK FASILITASI PELATIHAN", person: "-" },
            { time: "09.30 - 10.30", activity: "FGD", person: "Instruktur" },
            { time: "11.30 - 12.00", activity: "Evaluasi dan Post Test", person: "Instruktur" },
            { time: "12.00 – 13.00", activity: "Sholat Dzuhur", person: "All Person" },
            { time: "13.00 – 13.30", activity: "Pembai’atan", person: "Panitia" },
            { time: "13.30 - 14.00", activity: "Rencana Tindak Lanjut", person: "PC IPNU IPPNU Ciamis" },
            { time: "14.00 – 15.00", activity: "Penutupan makan siang dan pulang", person: "Panitia" },
        ]
    }
];

export default function AcaraPage() {
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-32 pb-20 px-4 md:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16 animate-fade-in-up">
                        <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-primary text-sm font-bold mb-4 tracking-wide">
                            SCHEDULE
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
                            Rundown Kegiatan
                        </h1>
                        <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
                            Jadwal lengkap Latin & Latpel Angkatan 1. Pastikan Anda disiplin mengikuti setiap sesi.
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
