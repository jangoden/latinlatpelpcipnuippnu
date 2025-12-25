'use client';

import React, { useState, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { useWilayah } from '@/hooks/use-wilayah';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Upload, Camera, FileText, Send, Loader2, CheckCircle2 } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { supabase } from '@/lib/supabase';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';

export default function DaftarPage() {
    const { toast } = useToast();
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    // Form State
    const [formData, setFormData] = useState({
        nik: '',
        username: '',
        email: '',
        nama: '',
        tempat_lahir: '',
        tanggal_lahir: '',
        alamat: '',
        provinsi: '',
        kabupaten: '',
        kecamatan: '',
        kelurahan: '',
        hp: '',
        hobi: '',
        instansi: '',
        instansi_detail: '',
        status: '',
        nia: '',
        video_link: '',
    });

    const [files, setFiles] = useState<{ [key: string]: File | null }>({
        kta: null,
        sertifikat: null,
        rekomendasi: null,
        foto: null,
        essay: null,
    });

    // Handle Text Input Change
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
        // Clear global error when user types (optional, to suppress instant vanish, maybe keep it?)
        if (errorMessage) setErrorMessage(null);
    };

    // Handle Select Change
    const handleSelectChange = (value: string) => {
        setFormData((prev) => ({ ...prev, instansi: value }));
        if (errorMessage) setErrorMessage(null);
    };

    // Region API Hook
    const {
        provinces, regencies, districts, villages,
        fetchRegencies, fetchDistricts, fetchVillages,
        loading: regionLoading
    } = useWilayah();

    // Region Handlers
    const handleProvinceChange = (value: string) => {
        const selected = provinces.find(p => p.name === value);
        if (selected) {
            setFormData(prev => ({ ...prev, provinsi: selected.name, kabupaten: '', kecamatan: '', kelurahan: '' }));
            fetchRegencies(selected.id);
        }
    };

    const handleRegencyChange = (value: string) => {
        const selected = regencies.find(r => r.name === value);
        if (selected) {
            setFormData(prev => ({ ...prev, kabupaten: selected.name, kecamatan: '', kelurahan: '' }));
            fetchDistricts(selected.id);
        }
    };

    const handleDistrictChange = (value: string) => {
        const selected = districts.find(d => d.name === value);
        if (selected) {
            setFormData(prev => ({ ...prev, kecamatan: selected.name, kelurahan: '' }));
            fetchVillages(selected.id);
        }
    };

    const handleVillageChange = (value: string) => {
        setFormData(prev => ({ ...prev, kelurahan: value }));
    };

    // Handle File Input Change
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, fieldId: string) => {
        if (e.target.files && e.target.files[0]) {
            setFiles((prev) => ({ ...prev, [fieldId]: e.target.files![0] }));
            if (errorMessage) setErrorMessage(null);
        }
    };

    // Upload Helper
    const uploadFile = async (file: File, folder: string) => {
        const fileExt = file.name.split('.').pop();
        const fileName = `${folder}/${Date.now()}_${Math.random().toString(36).substring(7)}.${fileExt}`;
        const { data, error } = await supabase.storage
            .from('registration-files')
            .upload(fileName, file);

        if (error) throw error;

        // Return public URL (assuming bucket is public)
        const { data: publicData } = supabase.storage
            .from('registration-files')
            .getPublicUrl(fileName);

        return publicData.publicUrl;
    };

    // Submit Handler
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setErrorMessage(null);

        try {
            // 1. Validation Logic
            const missingFields = [];

            // Text Inputs
            if (!formData.nik) missingFields.push("NIK");
            if (!formData.username) missingFields.push("Username");
            if (!formData.email) missingFields.push("Email");
            if (!formData.nama) missingFields.push("Nama Lengkap");
            if (!formData.tempat_lahir) missingFields.push("Tempat Lahir");
            if (!formData.tanggal_lahir) missingFields.push("Tanggal Lahir");
            if (!formData.alamat) missingFields.push("Alamat");
            if (!formData.provinsi) missingFields.push("Provinsi");
            if (!formData.kabupaten) missingFields.push("Kabupaten");
            if (!formData.kecamatan) missingFields.push("Kecamatan");
            if (!formData.kelurahan) missingFields.push("Kelurahan");
            if (!formData.hp) missingFields.push("No HP");
            if (!formData.hobi) missingFields.push("Hobi");
            if (!formData.status) missingFields.push("Status");
            if (!formData.instansi) missingFields.push("Asal Pimpinan");
            if (!formData.instansi_detail) missingFields.push("Nama Pimpinan");
            if (!formData.video_link) missingFields.push("Link Video");

            // Strict NIK Validation: 16 digits only
            if (formData.nik && (!/^\d{16}$/.test(formData.nik))) {
                setErrorMessage("NIK harus berupa 16 digit angka.");
                window.scrollTo({ top: 0, behavior: 'smooth' });
                throw new Error("NIK Invalid");
            }

            // NIA Format Check (Optional field, but if filled, must be numbers and dots like 10.05.10.01048)
            if (formData.nia && !/^[\d.]+$/.test(formData.nia)) {
                setErrorMessage("Format NIA tidak valid. Gunakan format angka dan titik (contoh: 10.05.10.01048).");
                window.scrollTo({ top: 0, behavior: 'smooth' });
                throw new Error("NIA Invalid");
            }

            // Mandatory Files Check
            if (!files.essay) missingFields.push("File Esai Kontribusi");
            if (!files.sertifikat) missingFields.push("Sertifikat Makesta & Lakmud");
            if (!files.rekomendasi) missingFields.push("Surat Rekomendasi");
            if (!files.foto) missingFields.push("Pas Foto 3x4");

            if (missingFields.length > 0) {
                const errorMsg = `Mohon lengkapi data berikut: ${missingFields.join(', ')}`;
                setErrorMessage(errorMsg);
                window.scrollTo({ top: 0, behavior: 'smooth' });
                throw new Error(errorMsg);
            }

            // 2. Upload Files
            const fileUrls: { [key: string]: string } = {};
            const uploadPromises = Object.entries(files).map(async ([key, file]) => {
                if (file) {
                    // Use NIK as folder for organization
                    return uploadFile(file, `${new Date().getFullYear()}/${formData.nik}`)
                        .then((url) => { fileUrls[key] = url; });
                }
            });

            await Promise.all(uploadPromises);

            // 3. Insert Data
            const { error } = await supabase.from('registrants').insert({
                nik: formData.nik,
                username: formData.username,
                email: formData.email,
                full_name: formData.nama,
                birth_place: formData.tempat_lahir,
                birth_date: formData.tanggal_lahir,
                address: formData.alamat,
                province: formData.provinsi,
                regency: formData.kabupaten,
                district: formData.kecamatan,
                village: formData.kelurahan,
                phone_number: formData.hp,
                hobby: formData.hobi,
                status: formData.status,
                nia: formData.nia || null,
                org_level: formData.instansi,
                org_name: formData.instansi_detail,
                instagram_video_link: formData.video_link,
                file_urls: fileUrls, // JSONB
            });

            if (error) {
                if (error.code === '23505') { // Unique violation
                    throw new Error("NIK, Username, atau Email sudah terdaftar.");
                }
                throw error;
            }

            // 4. Success
            toast({
                title: "Pendaftaran Berhasil! 🎉",
                description: "Data Anda telah kami terima. Silakan tunggu informasi selanjutnya.",
                duration: 5000,
            });

            // Optional: Redirect or Reset
            // router.push('/success'); 
            // setFormData(...reset...)

        } catch (error: any) {
            console.error('Registration Error:', error);
            toast({
                variant: "destructive",
                title: "Gagal Mengirim",
                description: error.message || "Terjadi kesalahan saat menyimpan data.",
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans selection:bg-primary/20">
            {/* Background Image Fixed */}
            <div
                className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-20 dark:opacity-10"
                style={{ backgroundImage: "url('/images/bg-herosection.png')" }}
            />
            <div className="fixed inset-0 z-0 bg-gradient-to-b from-slate-50/90 via-slate-50/80 to-slate-200/90 dark:from-slate-950/90 dark:via-slate-950/80 dark:to-slate-900/90" />

            <Navbar />

            <section className="relative z-10 pt-32 pb-20 px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight mb-4 font-lobster">
                            Formulir Pendaftaran
                        </h1>
                        <p className="text-slate-600 dark:text-slate-400 text-lg max-w-xl mx-auto">
                            Lengkapi data diri dan persyaratan administrasi Anda untuk bergabung dalam Latin & Latpel 2026.
                        </p>
                    </div>

                    {/* Alert Error */}
                    {errorMessage && (
                        <div className="mb-8">
                            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 px-4 py-3 rounded-xl flex items-start gap-3 shadow-sm">
                                <span className="material-symbols-outlined text-xl mt-0.5">error</span>
                                <div>
                                    <h4 className="font-semibold text-sm">Terdapat Kesalahan</h4>
                                    <p className="text-sm mt-1">{errorMessage}</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Form Card */}
                    <div className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-white/50 dark:border-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl">
                        <form className="space-y-12" onSubmit={handleSubmit}>

                            {/* Section 1: Data Diri */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-3 mb-6 border-b border-slate-200 dark:border-slate-800 pb-4">
                                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                                        <span className="material-symbols-outlined text-[24px]">person</span>
                                    </div>
                                    <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200">Data Diri</h2>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="nik">NIK <span className="text-red-500">*</span> <span className="text-slate-400 text-xs font-normal">(16 digit)</span></Label>
                                        <Input
                                            id="nik"
                                            type="text"
                                            maxLength={16}
                                            placeholder="Contoh: 3207123456780001"
                                            className={errorMessage && (!formData.nik || formData.nik.length !== 16) ? "border-red-500 bg-red-50/50" : "bg-white/50 dark:bg-slate-950/50"}
                                            value={formData.nik}
                                            onChange={(e) => {
                                                const val = e.target.value.replace(/\D/g, ''); // Only digits
                                                setFormData(prev => ({ ...prev, nik: val }));
                                                if (errorMessage) setErrorMessage(null);
                                            }}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="username">Username <span className="text-red-500">*</span></Label>
                                        <Input id="username" placeholder="Buat username unik" className={errorMessage && !formData.username ? "border-red-500 bg-red-50/50" : "bg-white/50 dark:bg-slate-950/50"} value={formData.username} onChange={handleInputChange} />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email <span className="text-red-500">*</span></Label>
                                        <Input id="email" type="email" placeholder="nama@email.com" className={errorMessage && !formData.email ? "border-red-500 bg-red-50/50" : "bg-white/50 dark:bg-slate-950/50"} value={formData.email} onChange={handleInputChange} />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="nama">Nama Lengkap <span className="text-red-500">*</span></Label>
                                        <Input id="nama" placeholder="Sesuai KTP/KTA" className={errorMessage && !formData.nama ? "border-red-500 bg-red-50/50" : "bg-white/50 dark:bg-slate-950/50"} value={formData.nama} onChange={handleInputChange} />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="tempat_lahir">Tempat Lahir <span className="text-red-500">*</span></Label>
                                        <Input id="tempat_lahir" placeholder="Kota/Kabupaten kelahiran" className={errorMessage && !formData.tempat_lahir ? "border-red-500 bg-red-50/50" : "bg-white/50 dark:bg-slate-950/50"} value={formData.tempat_lahir} onChange={handleInputChange} />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="tanggal_lahir">Tanggal Lahir <span className="text-red-500">*</span></Label>
                                        <Input id="tanggal_lahir" type="date" className={errorMessage && !formData.tanggal_lahir ? "border-red-500 bg-red-50/50" : "bg-white/50 dark:bg-slate-950/50"} value={formData.tanggal_lahir} onChange={handleInputChange} />
                                    </div>

                                    <div className="space-y-2 md:col-span-2">
                                        <Label htmlFor="alamat">Alamat Lengkap <span className="text-red-500">*</span></Label>
                                        <Textarea id="alamat" placeholder="Nama Jalan, RT/RW, Dusun/Lingkungan" className={`min-h-[80px] ${errorMessage && !formData.alamat ? "border-red-500 bg-red-50/50" : "bg-white/50 dark:bg-slate-950/50"}`} value={formData.alamat} onChange={handleInputChange} />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="provinsi">Provinsi <span className="text-red-500">*</span></Label>
                                        <Select onValueChange={handleProvinceChange} disabled={regionLoading.provinces}>
                                            <SelectTrigger className={errorMessage && !formData.provinsi ? "border-red-500 bg-red-50/50" : "bg-white/50 dark:bg-slate-950/50"}>
                                                <SelectValue placeholder={regionLoading.provinces ? "Memuat..." : "Pilih Provinsi"} />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {provinces.map(p => (
                                                    <SelectItem key={p.id} value={p.name}>{p.name}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="kabupaten">Kabupaten/Kota <span className="text-red-500">*</span></Label>
                                        <Select onValueChange={handleRegencyChange} disabled={!formData.provinsi || regionLoading.regencies}>
                                            <SelectTrigger className={errorMessage && !formData.kabupaten ? "border-red-500 bg-red-50/50" : "bg-white/50 dark:bg-slate-950/50"}>
                                                <SelectValue placeholder={regionLoading.regencies ? "Memuat..." : "Pilih Kabupaten/Kota"} />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {regencies.map(r => (
                                                    <SelectItem key={r.id} value={r.name}>{r.name}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="kecamatan">Kecamatan <span className="text-red-500">*</span></Label>
                                        <Select onValueChange={handleDistrictChange} disabled={!formData.kabupaten || regionLoading.districts}>
                                            <SelectTrigger className={errorMessage && !formData.kecamatan ? "border-red-500 bg-red-50/50" : "bg-white/50 dark:bg-slate-950/50"}>
                                                <SelectValue placeholder={regionLoading.districts ? "Memuat..." : "Pilih Kecamatan"} />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {districts.map(d => (
                                                    <SelectItem key={d.id} value={d.name}>{d.name}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="kelurahan">Kelurahan/Desa <span className="text-red-500">*</span></Label>
                                        <Select onValueChange={handleVillageChange} disabled={!formData.kecamatan || regionLoading.villages}>
                                            <SelectTrigger className={errorMessage && !formData.kelurahan ? "border-red-500 bg-red-50/50" : "bg-white/50 dark:bg-slate-950/50"}>
                                                <SelectValue placeholder={regionLoading.villages ? "Memuat..." : "Pilih Kelurahan/Desa"} />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {villages.map(v => (
                                                    <SelectItem key={v.id} value={v.name}>{v.name}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="hp">No HP (WhatsApp) <span className="text-red-500">*</span></Label>
                                        <Input id="hp" type="tel" placeholder="08..." className={errorMessage && !formData.hp ? "border-red-500 bg-red-50/50" : "bg-white/50 dark:bg-slate-950/50"} value={formData.hp} onChange={handleInputChange} />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="hobi">Hobi <span className="text-red-500">*</span></Label>
                                        <Input id="hobi" placeholder="Hobi yang diminati" className={errorMessage && !formData.hobi ? "border-red-500 bg-red-50/50" : "bg-white/50 dark:bg-slate-950/50"} value={formData.hobi} onChange={handleInputChange} />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="status">Status <span className="text-red-500">*</span></Label>
                                        <Input id="status" placeholder="Pelajar/Mahasiswa/Santri/Lainnya" className={errorMessage && !formData.status ? "border-red-500 bg-red-50/50" : "bg-white/50 dark:bg-slate-950/50"} value={formData.status} onChange={handleInputChange} />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="nia">NIA <span className="text-slate-400 font-normal text-xs">(Format: 10.05.10.01048)</span></Label>
                                        <Input id="nia" placeholder="Contoh: 10.05.10.01048" className={errorMessage && formData.nia && !/^[\d.]+$/.test(formData.nia) ? "border-red-500 bg-red-50/50" : "bg-white/50 dark:bg-slate-950/50"} value={formData.nia} onChange={handleInputChange} />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="instansi">Asal Pimpinan <span className="text-red-500">*</span></Label>
                                        <Select onValueChange={handleSelectChange} value={formData.instansi}>
                                            <SelectTrigger className={errorMessage && !formData.instansi ? "border-red-500 bg-red-50/50" : "bg-white/50 dark:bg-slate-950/50"}>
                                                <SelectValue placeholder="Pilih Asal Pimpinan" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="pkpt">Pimpinan Komisariat Perguruan Tinggi (PKPT)</SelectItem>
                                                <SelectItem value="pr">Pimpinan Ranting (PR)</SelectItem>
                                                <SelectItem value="pac">Pimpinan Anak Cabang (PAC)</SelectItem>
                                                <SelectItem value="pc_internal">PC IPNU IPPNU Ciamis (Internal)</SelectItem>
                                                <SelectItem value="pc_eksternal">PC IPNU IPPNU (Eksternal)</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="instansi_detail">Nama Pimpinan <span className="text-red-500">*</span></Label>
                                        <Input id="instansi_detail" placeholder="Contoh: PAC Cipaku / PKPT INUCIS" className={errorMessage && !formData.instansi_detail ? "border-red-500 bg-red-50/50" : "bg-white/50 dark:bg-slate-950/50"} value={formData.instansi_detail} onChange={handleInputChange} />
                                    </div>
                                </div>
                            </div>

                            {/* Section 2: Administrasi */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-3 mb-6 border-b border-slate-200 dark:border-slate-800 pb-4">
                                    <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                                        <span className="material-symbols-outlined text-[24px]">folder_open</span>
                                    </div>
                                    <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200">Berkas Administrasi</h2>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* File Upload Helper */}
                                    {[
                                        { id: "kta", label: "Scan/Foto KTA", icon: <Camera size={18} />, required: false },
                                        { id: "sertifikat", label: "Sertifikat Makesta & Lakmud", icon: <FileText size={18} />, note: "Gabung jadi satu PDF jika ada dua", required: true },
                                        { id: "rekomendasi", label: "Surat Rekomendasi", icon: <FileText size={18} />, required: true },
                                        { id: "foto", label: "Pas Foto 3x4 (Bg Merah)", icon: <Camera size={18} />, required: true }
                                    ].map((field) => (
                                        <div key={field.id} className="space-y-2">
                                            <Label htmlFor={field.id}>{field.label} {field.required && <span className="text-red-500">*</span>}</Label>
                                            <div className="flex items-center justify-center w-full">
                                                <label htmlFor={field.id} className={`flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-xl cursor-pointer transition-colors ${files[field.id] ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/10' : (errorMessage && field.required && !files[field.id] ? 'border-red-500 bg-red-50/50' : 'border-slate-300 bg-slate-50 dark:bg-slate-900/50 hover:bg-slate-100')}`}>
                                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                        {files[field.id] ? (
                                                            <>
                                                                <FileText className="text-emerald-600 mb-2" size={24} />
                                                                <p className="text-sm text-emerald-700 font-medium truncate max-w-[200px]">{files[field.id]?.name}</p>
                                                            </>
                                                        ) : (
                                                            <>
                                                                <div className="mb-2 text-slate-400">{field.icon}</div>
                                                                <p className="mb-1 text-sm text-slate-500 dark:text-slate-400 text-center"><span className="font-semibold">Klik untuk upload</span></p>
                                                                <p className="text-xs text-slate-400 dark:text-slate-500">PNG, JPG or PDF (MAX. 5MB)</p>
                                                            </>
                                                        )}
                                                    </div>
                                                    <Input id={field.id} type="file" className="hidden" onChange={(e) => handleFileChange(e, field.id)} />
                                                </label>
                                            </div>
                                            {field.note && <p className="text-xs text-slate-400 ml-1">{field.note}</p>}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Section 3: Tugas & Karya */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-3 mb-6 border-b border-slate-200 dark:border-slate-800 pb-4">
                                    <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
                                        <span className="material-symbols-outlined text-[24px]">assignment</span>
                                    </div>
                                    <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200">Tugas & Karya</h2>
                                </div>

                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="video_link">Link Video Instagram <span className="text-red-500">*</span></Label>
                                        <div className="relative">
                                            <span className="absolute left-3 top-2.5 text-slate-400 material-symbols-outlined text-[20px]">link</span>
                                            <Input id="video_link" placeholder="https://instagram.com/p/..." className={errorMessage && !formData.video_link ? "pl-10 border-red-500 bg-red-50/50" : "pl-10 bg-white/50 dark:bg-slate-950/50"} value={formData.video_link} onChange={handleInputChange} />
                                        </div>
                                        <p className="text-xs text-slate-500">Video terkait kondisi kaderisasi (Durasi 3-5 Menit).</p>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center">
                                            <Label htmlFor="essay">Esai Kontribusi</Label>
                                            <span className="text-xs text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-md">Wajib Upload (PDF/DOC)</span>
                                        </div>

                                        <div className="flex items-center justify-center w-full">
                                            <label htmlFor="essay" className={`flex flex-col items-center justify-center w-full h-40 border-2 border-dashed rounded-xl cursor-pointer transition-colors group ${files.essay ? 'border-emerald-500 bg-emerald-50' : (errorMessage && !files.essay ? 'border-red-500 bg-red-50/50' : 'border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 hover:bg-slate-100')}`}>
                                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                    {files.essay ? (
                                                        <>
                                                            <div className="mb-3 p-3 rounded-full bg-emerald-100 text-emerald-600">
                                                                <FileText size={24} />
                                                            </div>
                                                            <p className="mb-2 text-sm text-emerald-700 text-center font-medium">{files.essay.name}</p>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <div className={`mb-3 p-3 rounded-full group-hover:scale-110 transition-transform ${errorMessage && !files.essay ? 'bg-red-100 text-red-500' : 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-500'}`}>
                                                                <FileText size={24} />
                                                            </div>
                                                            <p className={`mb-2 text-sm text-center font-medium ${errorMessage && !files.essay ? 'text-red-500' : 'text-slate-600 dark:text-slate-300'}`}>Klik untuk upload dokumen Esai</p>
                                                            <p className="text-xs text-slate-400 dark:text-slate-500">PDF atau Word (DOC/DOCX)</p>
                                                        </>
                                                    )}
                                                </div>
                                                <Input id="essay" type="file" className="hidden" accept=".pdf,.doc,.docx" onChange={(e) => handleFileChange(e, 'essay')} />
                                            </label>
                                        </div>

                                        <div className="bg-blue-50/50 dark:bg-blue-900/10 p-4 rounded-xl border border-blue-100 dark:border-blue-900/20">
                                            <h4 className="text-sm font-semibold text-blue-700 dark:text-blue-400 mb-2 flex items-center gap-2">
                                                <span className="material-symbols-outlined text-[16px]">info</span>
                                                Ketentuan Esai:
                                            </h4>
                                            <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1.5 list-disc pl-4">
                                                <li>Meliputi <strong>kondisi pimpinan</strong> masing-masing, <strong>harapan</strong> mengikuti pelatihan, dan <strong>kontribusi</strong> yang akan dilakukan setelah lulus.</li>
                                                <li>Esai harus terdiri <strong>minimal 500 kata</strong>.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="pt-8">
                                <Button size="lg" disabled={isLoading} className="w-full h-14 text-lg font-bold bg-gradient-to-r from-primary to-emerald-600 hover:from-primary/90 hover:to-emerald-600/90 shadow-xl shadow-primary/20 rounded-xl transition-all duration-300 transform hover:scale-[1.02]">
                                    {isLoading ? (
                                        <>
                                            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                                            Mengirim Data...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5 mr-2" />
                                            Kirim Pendaftaran
                                        </>
                                    )}
                                </Button>
                                <p className="text-center text-slate-400 text-sm mt-4">
                                    Pastikan seluruh data yang diisi sudah benar sebelum mengirim.
                                </p>
                            </div>

                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
}
