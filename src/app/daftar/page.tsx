'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { supabase } from '@/lib/supabase';
import {
    User,
    MapPin,
    Mail,
    Phone,
    Building2,
    Briefcase,
    CheckCircle2,
    XCircle,
    Loader2,
    ChevronRight,
    Calendar,
    Home
} from 'lucide-react';
import Link from 'next/link';

type FormData = {
    full_name: string;
    gender: 'rekan' | 'rekanita' | '';
    birth_place: string;
    birth_date: string;
    address: string;
    email: string;
    phone_number: string;
    org_name: string;
    jabatan: string;
};

const initialForm: FormData = {
    full_name: '',
    gender: '',
    birth_place: '',
    birth_date: '',
    address: '',
    email: '',
    phone_number: '',
    org_name: '',
    jabatan: '',
};

export default function DaftarPage() {
    const [form, setForm] = useState<FormData>(initialForm);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);
    const [errors, setErrors] = useState<Partial<FormData>>({});

    const validate = (): boolean => {
        const newErrors: Partial<FormData> = {};
        if (!form.full_name.trim()) newErrors.full_name = 'Nama wajib diisi';
        if (!form.gender) newErrors.gender = 'Pilih gender' as any;
        if (!form.birth_place.trim()) newErrors.birth_place = 'Tempat lahir wajib diisi';
        if (!form.birth_date) newErrors.birth_date = 'Tanggal lahir wajib diisi';
        if (!form.address.trim()) newErrors.address = 'Alamat wajib diisi';
        if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Email tidak valid';
        if (!form.phone_number.trim()) newErrors.phone_number = 'No. HP wajib diisi';
        if (!form.org_name.trim()) newErrors.org_name = 'Asal pimpinan wajib diisi';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
        if (errors[name as keyof FormData]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        setSubmitError(null);
        setLoading(true);
        try {
            const { error } = await supabase.from('registrants').insert([{
                full_name: form.full_name,
                gender: form.gender,
                birth_place: form.birth_place,
                birth_date: form.birth_date,
                address: form.address,
                email: form.email,
                phone_number: form.phone_number,
                org_name: form.org_name,
                jabatan: form.jabatan,
            }]);
            if (error) throw error;
            setSuccess(true);
        } catch (err: any) {
            setSubmitError(err.message || 'Terjadi kesalahan. Silakan coba lagi.');
        } finally {
            setLoading(false);
        }
    };

    if (success) {
        return (
            <main className="min-h-screen bg-gradient-to-br from-white via-emerald-50/40 to-teal-50/30 flex items-center justify-center p-6">
                <div className="max-w-md w-full text-center space-y-6">
                    <div className="w-20 h-20 mx-auto rounded-full bg-emerald-100 flex items-center justify-center">
                        <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold text-slate-900 font-bebas-neue tracking-wide mb-2">Pendaftaran Berhasil!</h1>
                        <p className="text-slate-600">
                            Terima kasih, <strong>{form.full_name}</strong>. Data pendaftaran MAP NU kamu telah kami terima.
                        </p>
                    </div>
                    <div className="bg-white/80 rounded-2xl border border-emerald-100 p-5 text-left space-y-2 text-sm text-slate-600 backdrop-blur">
                        <p><span className="font-semibold text-slate-800">Gender:</span> {form.gender === 'rekan' ? 'Rekan (IPNU)' : 'Rekanita (IPPNU)'}</p>
                        <p><span className="font-semibold text-slate-800">Asal Pimpinan:</span> {form.org_name}</p>
                        {form.jabatan && <p><span className="font-semibold text-slate-800">Jabatan:</span> {form.jabatan}</p>}
                    </div>
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 text-white font-semibold hover:bg-emerald-500 transition-all shadow-lg"
                    >
                        <Home className="w-4 h-4" />
                        Kembali ke Beranda
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-gradient-to-br from-white via-emerald-50/40 to-teal-50/30 font-sans">
            <Navbar />

            <section className="relative z-10 pt-44 sm:pt-40 md:pt-36 pb-16 px-4">
                <div className="max-w-2xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-10">
                        <h1 className="font-bebas-neue text-5xl font-bold text-slate-900 tracking-wide leading-none mb-2">
                            Formulir Pendaftaran
                        </h1>
                        <p className="text-emerald-700 font-lobster italic text-xl">MAP NU – Madrasah Aswaja Pelajar NU 2026</p>
                        <p className="text-slate-500 text-sm mt-2">
                            Biaya pendaftaran: <strong className="text-slate-700">Rp 20.000</strong> per delegasi
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">

                        {/* ===== SECTION 1: Identitas ===== */}
                        <div className="bg-white/80 backdrop-blur-xl rounded-2xl border border-slate-100 shadow-sm p-6 space-y-4">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-9 h-9 rounded-xl bg-emerald-100 flex items-center justify-center">
                                    <User className="w-4 h-4 text-emerald-600" />
                                </div>
                                <h2 className="font-bold text-slate-800 text-lg">Identitas Diri</h2>
                            </div>

                            {/* full_name */}
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-1">
                                    Nama Lengkap <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="full_name"
                                    value={form.full_name}
                                    onChange={handleChange}
                                    placeholder="Sesuai KTP"
                                    className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 transition ${errors.full_name ? 'border-red-400 bg-red-50' : 'border-slate-200 bg-white'}`}
                                />
                                {errors.full_name && <p className="text-red-500 text-xs mt-1">{errors.full_name}</p>}
                            </div>


                            {/* Gender */}
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">
                                    Gender <span className="text-red-500">*</span>
                                </label>
                                <div className="grid grid-cols-2 gap-3">
                                    {[
                                        { value: 'rekan', label: 'Rekan (IPNU)', color: 'emerald' },
                                        { value: 'rekanita', label: 'Rekanita (IPPNU)', color: 'purple' },
                                    ].map((opt) => (
                                        <label
                                            key={opt.value}
                                            className={`flex items-center gap-3 p-3 rounded-xl border-2 cursor-pointer transition-all ${form.gender === opt.value
                                                ? opt.color === 'emerald'
                                                    ? 'border-emerald-500 bg-emerald-50 text-emerald-800'
                                                    : 'border-purple-500 bg-purple-50 text-purple-800'
                                                : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                                                }`}
                                        >
                                            <input
                                                type="radio"
                                                name="gender"
                                                value={opt.value}
                                                checked={form.gender === opt.value}
                                                onChange={handleChange}
                                                className="sr-only"
                                            />
                                            <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${form.gender === opt.value
                                                ? opt.color === 'emerald' ? 'border-emerald-500' : 'border-purple-500'
                                                : 'border-slate-300'
                                                }`}>
                                                {form.gender === opt.value && (
                                                    <div className={`w-2 h-2 rounded-full ${opt.color === 'emerald' ? 'bg-emerald-500' : 'bg-purple-500'}`} />
                                                )}
                                            </div>
                                            <span className="text-sm font-medium">{opt.label}</span>
                                        </label>
                                    ))}
                                </div>
                                {errors.gender && <p className="text-red-500 text-xs mt-1">Pilih salah satu</p>}
                            </div>

                            {/* Tempat & Tanggal Lahir */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-1">
                                        Tempat Lahir <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                        <input
                                            type="text"
                                            name="birth_place"
                                            value={form.birth_place}
                                            onChange={handleChange}
                                            placeholder="Kota / Kabupaten"
                                            className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 transition ${errors.birth_place ? 'border-red-400 bg-red-50' : 'border-slate-200 bg-white'}`}
                                        />
                                    </div>
                                    {errors.birth_place && <p className="text-red-500 text-xs mt-1">{errors.birth_place}</p>}
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-1">
                                        Tanggal Lahir <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                        <input
                                            type="date"
                                            name="birth_date"
                                            value={form.birth_date}
                                            onChange={handleChange}
                                            className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 transition ${errors.birth_date ? 'border-red-400 bg-red-50' : 'border-slate-200 bg-white'}`}
                                        />
                                    </div>
                                    {errors.birth_date && <p className="text-red-500 text-xs mt-1">{errors.birth_date}</p>}
                                </div>
                            </div>

                            {/* Alamat */}
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-1">
                                    Alamat <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <Home className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                                    <textarea
                                        name="address"
                                        value={form.address}
                                        onChange={handleChange}
                                        placeholder="Alamat lengkap sesuai KTP"
                                        rows={3}
                                        className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 transition resize-none ${errors.address ? 'border-red-400 bg-red-50' : 'border-slate-200 bg-white'}`}
                                    />
                                </div>
                                {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
                            </div>
                        </div>

                        {/* ===== SECTION 2: Kontak ===== */}
                        <div className="bg-white/80 backdrop-blur-xl rounded-2xl border border-slate-100 shadow-sm p-6 space-y-4">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-9 h-9 rounded-xl bg-blue-100 flex items-center justify-center">
                                    <Mail className="w-4 h-4 text-blue-600" />
                                </div>
                                <h2 className="font-bold text-slate-800 text-lg">Kontak</h2>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-1">
                                        Email <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                        <input
                                            type="email"
                                            name="email"
                                            value={form.email}
                                            onChange={handleChange}
                                            placeholder="email@contoh.com"
                                            className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 transition ${errors.email ? 'border-red-400 bg-red-50' : 'border-slate-200 bg-white'}`}
                                        />
                                    </div>
                                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-1">
                                        No. HP / WhatsApp <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                        <input
                                            type="tel"
                                            name="phone_number"
                                            value={form.phone_number}
                                            onChange={handleChange}
                                            placeholder="08xxxxxxxxxx"
                                            className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 transition ${errors.phone_number ? 'border-red-400 bg-red-50' : 'border-slate-200 bg-white'}`}
                                        />
                                    </div>
                                    {errors.phone_number && <p className="text-red-500 text-xs mt-1">{errors.phone_number}</p>}
                                </div>
                            </div>
                        </div>

                        {/* ===== SECTION 3: Delegasi ===== */}
                        <div className="bg-white/80 backdrop-blur-xl rounded-2xl border border-slate-100 shadow-sm p-6 space-y-4">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-9 h-9 rounded-xl bg-amber-100 flex items-center justify-center">
                                    <Building2 className="w-4 h-4 text-amber-600" />
                                </div>
                                <h2 className="font-bold text-slate-800 text-lg">Data Delegasi</h2>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-1">
                                        Asal Pimpinan <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                        <input
                                            type="text"
                                            name="org_name"
                                            value={form.org_name}
                                            onChange={handleChange}
                                            placeholder="cth: IPNU Cipaku"
                                            className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 transition ${errors.org_name ? 'border-red-400 bg-red-50' : 'border-slate-200 bg-white'}`}
                                        />
                                    </div>
                                    {errors.org_name && <p className="text-red-500 text-xs mt-1">{errors.org_name}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-1">
                                        Jabatan <span className="text-slate-400 font-normal">(opsional)</span>
                                    </label>
                                    <div className="relative">
                                        <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                        <input
                                            type="text"
                                            name="jabatan"
                                            value={form.jabatan}
                                            onChange={handleChange}
                                            placeholder="cth: Ketua, Sekretaris"
                                            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full h-14 rounded-2xl bg-emerald-600 text-white font-bold text-base flex items-center justify-center gap-3 shadow-[0_8px_30px_-4px_rgba(16,185,129,0.4)] hover:bg-emerald-500 hover:shadow-[0_12px_40px_-4px_rgba(16,185,129,0.5)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                            {loading ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    Mendaftarkan...
                                </>
                            ) : (
                                <>
                                    Daftar Sekarang
                                    <ChevronRight className="w-5 h-5" />
                                </>
                            )}
                        </button>

                        {/* Error Notice */}
                        {submitError && (
                            <div className="flex items-start gap-3 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700">
                                <XCircle className="w-5 h-5 shrink-0 mt-0.5" />
                                <div>
                                    <p className="font-semibold text-sm">Pendaftaran Gagal</p>
                                    <p className="text-xs mt-0.5 text-red-600">{submitError}</p>
                                </div>
                            </div>
                        )}

                        <p className="text-center text-xs text-slate-500">
                            Dengan mendaftar, kamu menyetujui ketentuan pendaftaran MAP NU 2026.
                        </p>

                    </form>
                </div>
            </section>
        </main>
    );
}
