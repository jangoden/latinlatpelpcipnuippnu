"use client";


import { Navbar } from '@/components/Navbar';
import { SpotifyPlaylist } from '@/components/SpotifyPlaylist';
import Image from 'next/image';
import React from 'react';

const rundownData = [
    {
        date: "Jum'at, 09 Januari 2026",
        schedule: [
            { time: "08.00 - 13.30", activity: "Registrasi Peserta", person: "Sie. Kesekretariatan" },
            {
                time: "13.30 - 15.00",
                activity: "UPACARA PEMBUKAAN",
                person: "MC: Rekanita Annisa Nurhanidah",
                details: [
                    { label: "Menyanyikan Lagu Kebangsaan Indonesia Raya & Pembacaan Ayat Suci Al-Qur'an", person: "Rekanita Delis Yayi Siti Maryam & Rekanita Nizma" },
                    { label: "Tawasul", person: "Rekan Bagus Pribadi" },
                    { label: "Menyanyikan Lagu: Mars IPNU, Mars IPPNU, Syubanul Wathon", person: "Dirigen: Rekanita Delis Yayi / Alis" },
                    { label: "Prakata Ketua Panitia", person: "-" },
                    { label: "Sambutan Ketua PC IPNU Ciamis", person: "Rekan Irman Muhamad Farhan" },
                    { label: "Sambutan Ketua PC IPPNU Ciamis", person: "Rekanita Nia Siti Kurniasari" },
                    { label: "Sambutan Ketua PW IPNU Jawa Barat", person: "Rekan Akbar Abdul Aziz" },
                    { label: "Sambutan Ketua PW IPPNU Jawa Barat", person: "Rekanita Renita" },
                    { label: "Sambutan Ketua Tanfidziah PCNU Ciamis", person: "KH. Arief Ismail Chowas, S.Ag" },
                    { label: "Sambutan Bupati Ciamis", person: "Dr. H. Herdiat Sunarya" },
                    { label: "Do'a", person: "Ky. Anas Nasrudin (Pimp. PP Baitul Hikam As Shofa)" },
                ]
            },
            { time: "15.00 - 15.30", activity: "Kontrak Forum & Pre Test", person: "Instruktur / All Person" },
            { time: "15.30 - 16.00", activity: "Sholat Ashar", person: "All Person" },
            {
                time: "16.00 - 17.30",
                activity: "MATERI 1: ASWAJA DAN KE-NU-AN",
                person: "Kyai Tatang Nawawi, S.Pd.I",
                description: "Metode penanaman Aswaja, Implementasi pembelajaran, Aswaja sebagai benteng aqidah"
            },
            { time: "17.30 - 18.30", activity: "ISHOMA", person: "Sie. Konsumsi" },
            { time: "18.30 - 20.00", activity: "Istighosah dan Shalat Isya", person: "Panitia" },
            {
                time: "20.00 - 21.30",
                activity: "MATERI 2: SISTEM KADERISASI 1",
                person: "Muhamad Khotami, S.H., CPM",
                description: "Pengertian, Bentuk, Jenjang, dan Kaderisasi Lokal"
            },
            {
                time: "21.30 - 23.00",
                activity: "MATERI 3: REVIEW MATERI MAKESTA DAN LAKMUD",
                person: "Instruktur",
                description: "Inventarisir & Pemetaan Materi Makesta dan Lakmud"
            },
            { time: "23.00 - 00.00", activity: "Focus Group Discussion (FGD)", person: "Instruktur" },
            { time: "00.00 - 04.00", activity: "Istirahat", person: "All Person" },
        ]
    },
    {
        date: "Sabtu, 10 Januari 2026",
        schedule: [
            { time: "04.00 - 04.30", activity: "Persiapan dan Shalat Shubuh", person: "All Person" },
            { time: "04.30 - 05.30", activity: "Kultum Pagi dan Waqiah", person: "Panitia" },
            { time: "05.30 - 06.30", activity: "Olahraga", person: "Panitia" },
            { time: "06.30 - 08.00", activity: "Sarapan dan Persiapan", person: "Sie. Konsumsi" },
            {
                time: "08.00 - 09.30",
                activity: "MATERI 4: PSIKOLOGI PELATIHAN KADER",
                person: "Ai Ratna Intan Solihah, S.Sos, M.Sos.",
                description: "Pengertian, Fungsi, dan Strategi Pengelolaan Forum"
            },
            {
                time: "09.30 - 11.00",
                activity: "MATERI 5: METODE DAN MEDIA PELATIHAN",
                person: "Dr. KH. Kusoy Fadiliah, M.Si.",
                description: "Pengertian, Fungsi, dan Macam-macam Metode/Media"
            },
            {
                time: "11.00 - 12.30",
                activity: "MATERI 6: METODOLOGI DAN EVALUASI PELATIHAN KADER",
                person: "Moch Wahab Hasbulloh, S.Pd.I, SE, Sy.",
                description: "Prinsip dasar, Manfaat, Tujuan, Jenis evaluasi"
            },
            { time: "12.30 - 13.30", activity: "ISHOMA", person: "Sie. Konsumsi" },
            {
                time: "13.30 - 15.00",
                activity: "MATERI 7: FALSAFAH DAN PENDEKATAN PELATIHAN KADER",
                person: "Asep Irfan Mujahid, S.Pd.I",
                description: "Pengertian falsafah, Jenis pendekatan, Paradigma, Pendekatan kader IPNU"
            },
            { time: "15.00 - 15.30", activity: "Sholat Ashar", person: "All Person" },
            {
                time: "15.30 - 17.00",
                activity: "MATERI 8: MANAJEMEN PELATIHAN 1",
                person: "H. Nana Supriatna, S.Ag., M.A",
                description: "Unsur & fungsi, Analisis kebutuhan, Merancang pelatihan, Metode penerapan"
            },
            { time: "17.00 - 18.30", activity: "ISHOMA", person: "Sie. Konsumsi" },
            { time: "18.30 - 19.30", activity: "Maulid Barjanji / Diba dan Shalat Isya", person: "Panitia" },
            {
                time: "19.30 - 21.00",
                activity: "MATERI 9: PRAKTEK PUBLIC SPEAKING",
                person: "Cucu Umi Nur Faridah, M.H",
                description: "Pengertian, Persiapan, Mengatasi kegugupan"
            },
            {
                time: "21.00 - 22.30",
                activity: "MATERI 10: KEINSTRUKTURAN 1, KEPELATIHAN 1",
                person: "Instruktur",
                description: "Pengertian, Peran, Fungsi, Keterampilan dasar Instruktur"
            },
            {
                time: "22.30 - 00.00",
                activity: "MATERI 11: BERMAIN DAN BELAJAR",
                person: "Instruktur",
                description: "Fungsi permainan, Jenis: energizer/ice breaking/outbound, Pemetaan"
            },
            { time: "00.00 - 01.00", activity: "Focus Group Discussion (FGD)", person: "Instruktur" },
            { time: "01.00 - 04.00", activity: "Tidur", person: "All Person" },
        ]
    },
    {
        date: "Ahad, 11 Januari 2026",
        schedule: [
            { time: "04.00 - 04.30", activity: "Persiapan dan Shalat Shubuh", person: "All Person" },
            { time: "04.30 - 05.30", activity: "Kultum Pagi dan Waqiah", person: "Panitia" },
            { time: "05.30 - 06.30", activity: "Olahraga", person: "Panitia CBP/KPP" },
            { time: "06.30 - 08.00", activity: "Sarapan dan Persiapan", person: "Sie. Konsumsi" },
            {
                time: "08.00 - 09.30",
                activity: "MATERI 12: PRAKTIK FASILITASI PELATIHAN",
                person: "Yudi Riyadi, SE, Sy., S.I.Pust, M.Pd.",
                description: "Pengertian fasilitasi, Menjadi fasilitator baik, Keterampilan Fasilitator"
            },
            { time: "09.30 - 12.30", activity: "FGD dan Praktik Fasilitasi Pelatihan", person: "Instruktur PC/PW" },
            { time: "12.30 - 13.00", activity: "Evaluasi dan Post Test", person: "Instruktur PC" },
            { time: "13.00 - 14.00", activity: "ISHOMA", person: "Sie. Konsumsi" },
            { time: "14.00 - 15.00", activity: "Pembai'atan dan Penutupan", person: "Panitia" },
            { time: "15.00 - 16.00", activity: "Rencana Tindak Lanjut", person: "Instruktur PC" },
        ]
    }
];

export default function AcaraPage() {
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-32 pb-20 px-4 md:px-8">
                <div className="max-w-6xl mx-auto">

                    {/* Hero Banner - MacBook Style Frame */}
                    <div className="mb-16 animate-fade-in-up">
                        <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 p-1">
                            {/* Glossy reflection overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none rounded-2xl" />

                            {/* Window Title Bar */}
                            <div className="relative bg-gradient-to-r from-indigo-500/90 via-purple-500/90 to-blue-500/90 backdrop-blur-sm px-4 py-3 flex items-center gap-2 rounded-t-xl">
                                {/* Traffic Light Buttons */}
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-400 shadow-inner border border-red-500/50 hover:bg-red-300 transition-colors" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-400 shadow-inner border border-yellow-500/50 hover:bg-yellow-300 transition-colors" />
                                    <div className="w-3 h-3 rounded-full bg-green-400 shadow-inner border border-green-500/50 hover:bg-green-300 transition-colors" />
                                </div>

                                {/* Window Title */}
                                <div className="flex-1 text-center">
                                    <span className="text-xs font-medium text-white/90">Latin & Latpel 2026 — PC IPNU IPPNU Ciamis</span>
                                </div>

                                {/* Spacer for balance */}
                                <div className="w-14" />
                            </div>

                            {/* Content Area */}
                            <div className="relative bg-white dark:bg-slate-900 rounded-b-xl overflow-hidden">
                                <Image
                                    src="/images/Bannerr.webp"
                                    alt="Banner Latin & Latpel PC IPNU IPPNU Ciamis"
                                    width={1920}
                                    height={1080}
                                    className="w-full h-auto object-cover"
                                    priority
                                />
                            </div>

                            {/* Bottom glossy edge */}
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-t from-purple-900/30 to-transparent rounded-b-2xl" />
                        </div>

                        {/* MacBook Stand/Shadow */}
                        <div className="flex justify-center mt-2">
                            <div className="w-1/4 h-2 bg-gradient-to-b from-purple-300 to-indigo-200 rounded-b-lg shadow-md" />
                        </div>
                        <div className="flex justify-center">
                            <div className="w-1/3 h-1 bg-gradient-to-b from-indigo-200 to-purple-100 rounded-b-xl" />
                        </div>
                    </div>

                    {/* Schedule Header */}
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

                    <div className="mt-16 animate-fade-in-up">
                        <SpotifyPlaylist />
                    </div>
                </div>
            </div>
        </>
    );
}
