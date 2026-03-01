import Link from "next/link";
import GradientText from '../components/GradientText';
import { Navbar } from '@/components/Navbar';
import { StatusBadge } from "@/components/StatusBadge";
import { Timeline } from '@/components/Timeline';

export default function Home() {
  return (
    <>

      <Navbar />
      {/* Hero Section */}
      <section
        className="relative z-10 pt-40 pb-20 px-6 min-h-screen flex flex-col justify-center items-center text-center bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/images/bg-herosection.png')" }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/80 via-slate-50/40 to-slate-50/80 dark:from-slate-950/80 dark:via-slate-950/40 dark:to-slate-950/80 z-0" />

        <div className="relative z-10 max-w-4xl mx-auto space-y-8 animate-fade-in-up">
          <StatusBadge />
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-slate-900 leading-[0.95] dark:text-white">
            <GradientText
              colors={["#195de6", "#10b981", "#195de6", "#10b981", "#195de6"]}
              animationSpeed={3}
              showBorder={false}
              className="font-bebas-neue"
            >
              Harlah & MAP NU
            </GradientText>
          </h1>
          <p className="text-lg md:text-3xl text-slate-700 dark:text-slate-200 font-lobster font-normal italic max-w-5xl mx-auto leading-relaxed tracking-wide">
            &quot;Meneguhkan Khidmat Pelajar Menuju Peradaban Mulia&quot;
          </p>
          <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 font-medium">
            Harlah IPNU ke-72 & IPPNU ke-71 • Ramadhan 1447 H
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link
              className="bg-primary hover:bg-blue-700 text-white text-base font-semibold h-12 px-8 rounded-full flex items-center justify-center shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1"
              href="/daftar"
            >
              Info Pendaftaran
            </Link>
            <a
              className="glass-panel text-slate-700 hover:text-slate-900 text-base font-semibold h-12 px-8 rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300"
              href="#about"
            >
              Pelajari Lebih Lanjut
            </a>
          </div>
        </div>

      </section>
      {/* TERM OF REFERENCE (TOR) Section */}
      <section className="relative z-10 py-24 px-6" id="about">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-16 text-center animate-fade-in-up">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-primary text-sm font-bold mb-4 tracking-wide">
              KERANGKA ACUAN KEGIATAN
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-2">
              TERM OF REFERENCE
            </h2>
            <h3 className="text-xl md:text-2xl font-bold text-slate-600 mb-2">
              HARLAH IPNU KE-72 & IPPNU KE-71 + MAP NU
            </h3>
            <p className="text-slate-500 font-medium">
              PC IPNU IPPNU Kabupaten Ciamis
            </p>
          </div>

          <div className="space-y-12">
            {/* 1. Pendahuluan */}
            <div className="glass-panel p-8 md:p-10 rounded-3xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-[120px] text-slate-900">
                  history_edu
                </span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-sm">1</span>
                Pendahuluan
              </h3>
              <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-4">
                <p>
                  Ikatan Pelajar Nahdlatul Ulama (IPNU) dan Ikatan Pelajar Putri Nahdlatul Ulama (IPPNU) merupakan organisasi pelajar yang bergerak di bidang kemasyarakatan, keagamaan, dan keterpelajaran. Organisasi ini lahir sebagai wadah perjuangan pelajar Nahdlatul Ulama (NU) dalam mengembangkan keilmuan, pengalaman organisasi, serta memperkuat komitmen ideologis terhadap nilai-nilai Ahlussunnah wal Jama&apos;ah An-Nahdliyah.
                </p>
                <div className="pl-4 border-l-4 border-primary/30 my-6 italic text-slate-700 font-medium bg-slate-50/50 p-4 rounded-r-xl">
                  &quot;Meneguhkan Khidmat Pelajar Menuju Peradaban Mulia&quot;
                </div>
                <p>
                  Dalam rangka meningkatkan kualitas, kapasitas, dan militansi pelajar NU di Kabupaten Ciamis, Pimpinan Cabang (PC) IPNU–IPPNU Ciamis berinisiatif menyelenggarakan kegiatan Madrasah Aswaja Pelajar NU (MAP NU) sebagai ruang kaderisasi ideologis dan penguatan karakter.
                </p>
                <p>
                  MAP NU dirancang sebagai forum pembelajaran yang sistematis, dialogis, dan transformatif guna membentuk pelajar yang tidak hanya cerdas secara intelektual, tetapi juga kokoh secara ideologis dan matang secara spiritual. Melalui MAP NU, diharapkan lahir generasi pelajar NU yang berintegritas, berakhlak, berilmu, serta memiliki visi peradaban.
                </p>
              </div>
            </div>

            {/* 2. Informasi Kegiatan */}
            <div className="glass-panel p-8 md:p-10 rounded-3xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-[120px] text-slate-900">
                  info
                </span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-sm">2</span>
                Informasi Kegiatan
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-xl">label</span>
                      Nama Kegiatan
                    </h4>
                    <p className="text-slate-600 bg-white/50 p-3 rounded-xl border border-white/60">
                      Madrasah Aswaja Pelajar Nahdlatul Ulama (MAP NU)<br />
                      <span className="text-sm text-slate-500">+ Peringatan Harlah IPNU ke-72 & IPPNU ke-71</span>
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-xl">lightbulb</span>
                      Tema Kegiatan
                    </h4>
                    <p className="text-slate-600 bg-white/50 p-3 rounded-xl border border-white/60 font-semibold italic">
                      &quot;Meneguhkan Khidmat Pelajar Menuju Peradaban Mulia&quot;
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-xl">gavel</span>
                    Dasar Kegiatan
                  </h4>
                  <ul className="space-y-2 text-slate-600">
                    {[
                      "Pancasila dan UUD 1945.",
                      "Peraturan Dasar (PD) dan Peraturan Rumah Tangga (PRT) IPNU-IPPNU.",
                      "Program Kerja PC IPNU-IPPNU Kabupaten Ciamis Masa Khidmat 2024-2026.",
                      "Hasil Rapat Koordinasi Pimpinan Cabang IPNU-IPPNU Kabupaten Ciamis."
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 bg-white/40 p-2.5 rounded-lg text-sm hover:bg-white/60 transition-colors">
                        <span className="material-symbols-outlined text-primary text-lg mt-0.5 shrink-0">check_circle</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* 3. Tujuan Kegiatan */}
            <div className="glass-panel p-8 md:p-10 rounded-3xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-[120px] text-slate-900">
                  flag
                </span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-sm">3</span>
                Tujuan Kegiatan
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Tujuan Umum */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                      <span className="material-symbols-outlined">track_changes</span>
                    </div>
                    <h4 className="font-bold text-xl text-slate-800">Tujuan Umum</h4>
                  </div>
                  <p className="text-slate-600 leading-relaxed bg-white/40 p-4 rounded-2xl border border-white/50">
                    Meneguhkan komitmen khidmat Pelajar NU terhadap nilai-nilai Ahlussunnah wal Jama&apos;ah An-Nahdliyah melalui penguatan ideologi, peningkatan kapasitas intelektual, serta pembentukan karakter kepemimpinan yang berorientasi pada terwujudnya peradaban yang mulia.
                  </p>
                </div>

                {/* Tujuan Khusus */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-emerald-100 text-emerald-600 rounded-lg">
                      <span className="material-symbols-outlined">target</span>
                    </div>
                    <h4 className="font-bold text-xl text-slate-800">Tujuan Khusus</h4>
                  </div>
                  <ul className="space-y-3">
                    {[
                      "Meningkatkan pemahaman kader terhadap manhaj Ahlussunnah wal Jama'ah An-Nahdliyah.",
                      "Memperdalam wawasan ke-NU-an serta prinsip dasar perjuangan IPNU–IPPNU.",
                      "Membentuk karakter pelajar yang berakhlak, berintegritas, dan bertanggung jawab.",
                      "Menumbuhkan kesadaran khidmat sebagai orientasi utama berorganisasi.",
                      "Menguatkan kapasitas kepemimpinan pelajar yang visioner dan adaptif.",
                      "Mempererat soliditas dan konsolidasi kader IPNU–IPPNU di tingkat cabang."
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 shrink-0" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* 4. Waktu dan Tempat */}
            <div className="glass-panel p-8 md:p-10 rounded-3xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-[120px] text-slate-900">
                  calendar_month
                </span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-sm">4</span>
                Waktu dan Tempat Kegiatan
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Pasaran Kitab */}
                <div className="bg-white/50 p-5 rounded-2xl border border-white/60">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600">
                      <span className="material-symbols-outlined">menu_book</span>
                    </div>
                    <h4 className="font-bold text-slate-800">Pasaran Kitab</h4>
                  </div>
                  <div className="space-y-2 text-sm text-slate-600">
                    <p className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-base">event</span>
                      Rabu–Kamis, 21–22 Ramadhan 1447 H
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-base">location_on</span>
                      Mesjid An-Namiroh
                    </p>
                  </div>
                </div>
                {/* MAP NU + Harlah */}
                <div className="bg-white/50 p-5 rounded-2xl border border-white/60">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                      <span className="material-symbols-outlined">school</span>
                    </div>
                    <h4 className="font-bold text-slate-800">MAP NU & Resepsi Harlah</h4>
                  </div>
                  <div className="space-y-2 text-sm text-slate-600">
                    <p className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-base">event</span>
                      Jum&apos;at–Sabtu, 23–24 Ramadhan 1447 H
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-base">location_on</span>
                      Asrama Haji
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 5. Bentuk & Rangkaian Kegiatan */}
            <div className="glass-panel p-8 md:p-10 rounded-3xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-[120px] text-slate-900">
                  view_timeline
                </span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-sm">5</span>
                Bentuk & Rangkaian Kegiatan
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Pasaran Kitab */}
                <div className="bg-emerald-50/50 p-6 rounded-xl border border-emerald-100/50 hover:shadow-md transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600">
                      <span className="material-symbols-outlined text-lg">auto_stories</span>
                    </div>
                    <h4 className="font-bold text-slate-800">Pasaran Kitab</h4>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-3">
                    Kajian intensif terhadap literatur dasar ke-NU-an dan keaswajaan.
                  </p>
                  <ul className="space-y-1 text-xs text-slate-500">
                    <li className="flex items-center gap-1.5">
                      <span className="w-1 h-1 bg-emerald-400 rounded-full" />
                      Risalah Ahlussunnah wal Jama&apos;ah
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1 h-1 bg-emerald-400 rounded-full" />
                      Qanun Asasi Nahdlatul Ulama
                    </li>
                  </ul>
                </div>
                {/* MAP NU */}
                <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100/50 hover:shadow-md transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                      <span className="material-symbols-outlined text-lg">school</span>
                    </div>
                    <h4 className="font-bold text-slate-800">MAP NU</h4>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-3">
                    Madrasah Aswaja Pelajar NU — forum penguatan ideologi secara sistematis.
                  </p>
                  <ul className="space-y-1 text-xs text-slate-500">
                    <li className="flex items-center gap-1.5">
                      <span className="w-1 h-1 bg-blue-400 rounded-full" />
                      Ideologi Aswaja An-Nahdliyah
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1 h-1 bg-blue-400 rounded-full" />
                      Orientasi Pergerakan Pelajar NU
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1 h-1 bg-blue-400 rounded-full" />
                      Karakteristik Pelajar NU di Era Digital
                    </li>
                  </ul>
                </div>
                {/* Resepsi Harlah */}
                <div className="bg-purple-50/50 p-6 rounded-xl border border-purple-100/50 hover:shadow-md transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600">
                      <span className="material-symbols-outlined text-lg">celebration</span>
                    </div>
                    <h4 className="font-bold text-slate-800">Resepsi Harlah</h4>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-3">
                    Peringatan Hari Lahir IPNU ke-72 dan IPPNU ke-71.
                  </p>
                  <ul className="space-y-1 text-xs text-slate-500">
                    <li className="flex items-center gap-1.5">
                      <span className="w-1 h-1 bg-purple-400 rounded-full" />
                      Resepsi & Potong Tumpeng
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1 h-1 bg-purple-400 rounded-full" />
                      Talk Show Sejarah Perjuangan
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1 h-1 bg-purple-400 rounded-full" />
                      Launching Website Resmi
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 6. Sasaran / Kepesertaan */}
            <div className="glass-panel p-8 md:p-10 rounded-3xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-[120px] text-slate-900">
                  groups
                </span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-sm">6</span>
                Sasaran / Kepesertaan
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Pasaran Kitab */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-emerald-100 text-emerald-600 rounded-lg">
                      <span className="material-symbols-outlined">auto_stories</span>
                    </div>
                    <h4 className="font-bold text-lg text-slate-800">Pasaran Kitab</h4>
                  </div>
                  <div className="bg-emerald-50/30 p-4 rounded-xl border border-emerald-100/50 mb-3">
                    <p className="text-sm font-bold text-emerald-700 mb-2">Terbuka untuk Umum</p>
                    <ul className="space-y-2 text-slate-600 text-sm">
                      {[
                        "Pelajar (SMP/MTs, SMA/MA/SMK)",
                        "Santri & Mahasiswa",
                        "Kader IPNU–IPPNU",
                        "Masyarakat umum yang berminat"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="material-symbols-outlined text-emerald-500 text-base shrink-0">check_box</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-white/50 p-3 rounded-lg text-sm text-slate-500 flex items-center gap-2">
                    <span className="material-symbols-outlined text-emerald-500 text-base">payments</span>
                    <span className="font-bold text-emerald-700">GRATIS</span> — tidak dipungut biaya
                  </div>
                </div>

                {/* MAP NU */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                      <span className="material-symbols-outlined">school</span>
                    </div>
                    <h4 className="font-bold text-lg text-slate-800">Madrasah Aswaja Pelajar NU</h4>
                  </div>
                  <div className="bg-blue-50/30 p-4 rounded-xl border border-blue-100/50 mb-3">
                    <p className="text-sm font-bold text-blue-700 mb-2">Delegasi Resmi</p>
                    <ul className="space-y-2 text-slate-600 text-sm">
                      {[
                        "Pimpinan Anak Cabang (PAC)",
                        "Pimpinan Komisariat (PK)",
                        "Pimpinan Ranting (PR)",
                        "Pimpinan Anak Ranting (PAR)"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="material-symbols-outlined text-blue-500 text-base shrink-0">check_box</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-white/50 p-3 rounded-lg text-sm text-slate-500 flex items-center gap-2">
                    <span className="material-symbols-outlined text-blue-500 text-base">payments</span>
                    Kontribusi: <span className="font-bold text-blue-700">Rp 20.000</span> per peserta
                  </div>
                </div>
              </div>
            </div>

            {/* 7. Metode Pelaksanaan */}
            <div className="glass-panel p-8 md:p-10 rounded-3xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-[120px] text-slate-900">
                  psychology
                </span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-sm">7</span>
                Metode Pelaksanaan
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-emerald-100 text-emerald-600 rounded-lg">
                      <span className="material-symbols-outlined">auto_stories</span>
                    </div>
                    <h4 className="font-bold text-xl text-slate-800">Pasaran Kitab</h4>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      "Bandongan",
                      "Diskusi Kelompok",
                      "Tanya Jawab Interaktif",
                      "Refleksi Pemahaman"
                    ].map((method, i) => (
                      <div key={i} className="flex items-center gap-2 bg-white/60 p-2.5 rounded-lg text-sm hover:bg-white/80 transition-colors">
                        <span className="material-symbols-outlined text-emerald-500 text-base">check_circle</span>
                        <span className="text-slate-700">{method}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                      <span className="material-symbols-outlined">school</span>
                    </div>
                    <h4 className="font-bold text-xl text-slate-800">MAP NU</h4>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      "Seminar",
                      "Focus Group Discussion",
                      "Simulasi Kepemimpinan",
                      "Presentasi Hasil Diskusi"
                    ].map((method, i) => (
                      <div key={i} className="flex items-center gap-2 bg-white/60 p-2.5 rounded-lg text-sm hover:bg-white/80 transition-colors">
                        <span className="material-symbols-outlined text-blue-500 text-base">check_circle</span>
                        <span className="text-slate-700">{method}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 8. Materi */}
            <div className="glass-panel p-8 md:p-10 rounded-3xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-[120px] text-slate-900">
                  menu_book
                </span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-sm">8</span>
                Materi Kegiatan
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 bg-white/50 p-4 rounded-xl border border-white/60 hover:shadow-md transition-all">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                    <span className="material-symbols-outlined text-xl">mosque</span>
                  </div>
                  <span className="text-slate-700 font-medium text-sm leading-tight">Ideologi Aswaja An-Nahdliyah</span>
                </div>
                <div className="flex items-center gap-3 bg-white/50 p-4 rounded-xl border border-white/60 hover:shadow-md transition-all">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                    <span className="material-symbols-outlined text-xl">account_tree</span>
                  </div>
                  <span className="text-slate-700 font-medium text-sm leading-tight">Orientasi Pergerakan Pelajar NU</span>
                </div>
                <div className="flex items-center gap-3 bg-white/50 p-4 rounded-xl border border-white/60 hover:shadow-md transition-all">
                  <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 shrink-0">
                    <span className="material-symbols-outlined text-xl">phone_android</span>
                  </div>
                  <span className="text-slate-700 font-medium text-sm leading-tight">Karakteristik Pelajar NU di Era Digital</span>
                </div>
                <div className="flex items-center gap-3 bg-white/50 p-4 rounded-xl border border-white/60 hover:shadow-md transition-all">
                  <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center text-red-600 shrink-0">
                    <span className="material-symbols-outlined text-xl">auto_stories</span>
                  </div>
                  <span className="text-slate-700 font-medium text-sm leading-tight">Risalah Ahlussunnah wal Jama&apos;ah</span>
                </div>
                <div className="flex items-center gap-3 bg-white/50 p-4 rounded-xl border border-white/60 hover:shadow-md transition-all">
                  <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600 shrink-0">
                    <span className="material-symbols-outlined text-xl">description</span>
                  </div>
                  <span className="text-slate-700 font-medium text-sm leading-tight">Qanun Asasi Nahdlatul Ulama</span>
                </div>
                <div className="flex items-center gap-3 bg-white/50 p-4 rounded-xl border border-white/60 hover:shadow-md transition-all">
                  <div className="w-10 h-10 rounded-lg bg-cyan-100 flex items-center justify-center text-cyan-600 shrink-0">
                    <span className="material-symbols-outlined text-xl">history</span>
                  </div>
                  <span className="text-slate-700 font-medium text-sm leading-tight">Sejarah & Refleksi Harlah</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Facilities & Pricing Section */}
      <section className="relative z-10 py-24 px-6 bg-slate-50/50 dark:bg-slate-900/50 border-y border-white/50 backdrop-blur-sm" id="facilities">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
              Fasilitas & Investasi
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              Kami memastikan kenyamanan peserta selama kegiatan berlangsung.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1: Fasilitas MAP NU */}
            <div className="glass-panel rounded-3xl p-8 hover:shadow-apple transition-all duration-300 flex flex-col h-full bg-white/60">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-600">
                  <span className="material-symbols-outlined text-[28px]">
                    inventory_2
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800">
                    Fasilitas Peserta
                  </h3>
                  <p className="text-slate-400 text-sm">
                    MAP NU package
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                {[
                  "Takjil & Buka Bersama",
                  "Konsumsi Sahur Bersama",
                  "Sertifikat Kegiatan",
                  "Materi Pembelajaran",
                  "Jejaring Antar Kader",
                  "Pengalaman Kaderisasi Intensif"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 list-none">
                    <span className="material-symbols-outlined text-emerald-500 text-[20px] shrink-0">
                      check_circle
                    </span>
                    <span className="text-slate-600 font-medium">
                      {item}
                    </span>
                  </li>
                ))}
              </div>
            </div>

            {/* Card 2: Biaya */}
            <div className="glass-panel rounded-3xl p-1 hover:shadow-apple transition-all duration-300 flex flex-col h-full relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-blue-500 to-purple-600 rounded-3xl opacity-10 group-hover:opacity-20 transition-opacity" />
              <div className="bg-white/80 backdrop-blur-xl rounded-[22px] p-8 h-full flex flex-col">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center text-white shadow-lg">
                    <span className="material-symbols-outlined text-[28px]">
                      payments
                    </span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800">
                      Kontribusi
                    </h3>
                    <p className="text-slate-400 text-sm">
                      Biaya kegiatan
                    </p>
                  </div>
                </div>

                <div className="space-y-6 mt-auto">
                  <div className="flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-100 shadow-sm">
                    <div>
                      <p className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-1">
                        Pasaran Kitab
                      </p>
                      <p className="text-xs text-slate-400">
                        Terbuka untuk umum
                      </p>
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-extrabold text-emerald-600">GRATIS</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 text-white shadow-lg transform group-hover:scale-105 transition-transform duration-300">
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                        MAP NU
                      </p>
                      <p className="text-xs text-slate-400">
                        Delegasi resmi pimpinan
                      </p>
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-sm font-semibold text-slate-400">Rp</span>
                      <span className="text-3xl font-extrabold text-white">20.000</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Timeline />
      {/* Requirements Section */}
      <section className="relative z-10 py-24 px-6" id="requirements">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4 text-center">
            Ketentuan Peserta
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto text-center mb-16">
            Pastikan memenuhi ketentuan berikut sebelum mengikuti kegiatan.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Column 1: Pasaran Kitab */}
            <div className="glass-panel p-8 rounded-3xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600">
                  <span className="material-symbols-outlined text-[28px]">
                    auto_stories
                  </span>
                </div>
                <h3 className="font-bold text-slate-800 text-xl">
                  Pasaran Kitab
                </h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Terbuka untuk umum tanpa batasan usia",
                  "Tidak dipungut biaya pendaftaran",
                  "Wajib membawa kitab Risalah Aswaja dan/atau Qanun Asasi NU",
                  "Mengikuti kegiatan secara tertib dan penuh"
                ].map((item, index) => (
                  <li key={index} className="flex gap-3 items-start">
                    <span className="material-symbols-outlined text-emerald-500 text-[20px] shrink-0 mt-0.5">
                      check_circle
                    </span>
                    <span className="text-slate-600 font-medium text-sm leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: MAP NU */}
            <div className="glass-panel p-8 rounded-3xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600">
                  <span className="material-symbols-outlined text-[28px]">
                    school
                  </span>
                </div>
                <h3 className="font-bold text-slate-800 text-xl">
                  MAP NU
                </h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Merupakan delegasi resmi dari PAC/PK/PR/PAR",
                  "Minimal setiap pimpinan mengirimkan 1 (satu) delegasi",
                  "Membayar kontribusi kegiatan sebesar Rp 20.000 per peserta",
                  "Bersedia mengikuti seluruh rangkaian kegiatan hingga selesai",
                  "Mengisi formulir pendaftaran yang disediakan panitia"
                ].map((item, index) => (
                  <li key={index} className="flex gap-3 items-start">
                    <span className="material-symbols-outlined text-blue-500 text-[20px] shrink-0 mt-0.5">
                      check_circle
                    </span>
                    <span className="text-slate-600 font-medium text-sm leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Location Section */}
      <section className="relative z-10 py-24 px-6" id="location">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
              Lokasi Kegiatan
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              Dua lokasi strategis untuk rangkaian kegiatan.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Lokasi 1: Mesjid An-Namiroh */}
            <div className="glass-panel rounded-3xl p-0 hover:shadow-apple transition-all duration-300 relative overflow-hidden flex flex-col min-h-[400px]">
              <div className="relative bg-white/50 backdrop-blur-sm z-10 p-6 flex items-start justify-between border-b border-white/50">
                <div>
                  <span className="inline-block text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-1 rounded-md mb-2">PASARAN KITAB</span>
                  <h3 className="text-xl font-bold text-slate-800 mb-1">
                    Mesjid An-Namiroh
                  </h3>
                  <p className="text-slate-500 text-sm font-medium">
                    Ciamis, Jawa Barat
                  </p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                  <span className="material-symbols-outlined text-[20px]">
                    location_on
                  </span>
                </div>
              </div>
              <div className="relative w-full h-full flex-grow">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.0!2d108.35!3d-7.33!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMesjid+An-Namiroh!5e0!3m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0, position: 'absolute', top: 0, left: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Lokasi 2: Asrama Haji */}
            <div className="glass-panel rounded-3xl p-0 hover:shadow-apple transition-all duration-300 relative overflow-hidden flex flex-col min-h-[400px]">
              <div className="relative bg-white/50 backdrop-blur-sm z-10 p-6 flex items-start justify-between border-b border-white/50">
                <div>
                  <span className="inline-block text-xs font-bold text-blue-700 bg-blue-100 px-2 py-1 rounded-md mb-2">MAP NU & HARLAH</span>
                  <h3 className="text-xl font-bold text-slate-800 mb-1">
                    Asrama Haji
                  </h3>
                  <p className="text-slate-500 text-sm font-medium">
                    Ciamis, Jawa Barat
                  </p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                  <span className="material-symbols-outlined text-[20px]">
                    location_on
                  </span>
                </div>
              </div>
              <div className="relative w-full h-full flex-grow">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.0!2d108.35!3d-7.33!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sAsrama+Haji+Ciamis!5e0!3m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0, position: 'absolute', top: 0, left: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Committee Section */}
      <section className="relative z-10 py-16 px-6" id="committee">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-2">
              Panitia Pelaksana
            </h2>
            <p className="text-slate-600 font-medium">
              Peringatan Harlah & MAP NU IPNU IPPNU Kabupaten Ciamis
            </p>
          </div>

          <div className="glass-panel p-10 rounded-3xl bg-white/60">
            {/* OC Signatures */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              <div className="text-center">
                <p className="text-slate-500 mb-16 font-medium">(Ttd)</p>
                <h4 className="font-bold text-slate-900 text-lg border-b border-slate-300 inline-block pb-1 mb-1">
                  Irfan Hanapi
                </h4>
                <p className="text-slate-500 text-sm">Ketua OC</p>
              </div>
              <div className="text-center">
                <p className="text-slate-500 mb-16 font-medium">(Ttd)</p>
                <h4 className="font-bold text-slate-900 text-lg border-b border-slate-300 inline-block pb-1 mb-1">
                  Robi Maulana
                </h4>
                <p className="text-slate-500 text-sm">Sekretaris OC</p>
              </div>
            </div>

            {/* Divider */}
            <div className="flex flex-col items-center justify-center gap-2 mb-12 opacity-80">
              <span className="w-16 h-px bg-slate-300"></span>
              <span className="text-slate-500 font-semibold italic text-sm">Mengetahui,</span>
              <p className="text-slate-800 font-bold text-center md:text-left">Pimpinan Cabang IPNU & IPPNU Kabupaten Ciamis</p>
            </div>

            {/* PC Signatures */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="text-center">
                <p className="text-slate-500 mb-16 font-medium">(Ttd)</p>
                <h4 className="font-bold text-slate-900 text-lg border-b border-slate-300 inline-block pb-1 mb-1">
                  Irman Muhamad Farhan
                </h4>
                <p className="text-slate-500 text-sm">Ketua IPNU</p>
              </div>
              <div className="text-center">
                <p className="text-slate-500 mb-16 font-medium">(Ttd)</p>
                <h4 className="font-bold text-slate-900 text-lg border-b border-slate-300 inline-block pb-1 mb-1">
                  Nia Siti Kurniasari
                </h4>
                <p className="text-slate-500 text-sm">Ketua IPPNU</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer CTA */}
      <section className="relative z-10 py-20 px-6" id="register">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-[2.5rem] overflow-hidden bg-slate-900 text-white p-10 md:p-16 text-center shadow-2xl">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full filter blur-[80px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full filter blur-[80px]" />
            <div className="relative z-10 flex flex-col items-center">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                Bergabunglah bersama kami!
              </h2>
              <p className="text-slate-300 text-lg md:text-xl max-w-xl mb-10 font-medium">
                Jadilah bagian dari peringatan Harlah IPNU ke-72 & IPPNU ke-71 dan Madrasah Aswaja Pelajar NU.
              </p>
              <Link
                href="/daftar"
                className="bg-primary hover:bg-blue-600 text-white font-bold text-lg h-14 px-10 rounded-full flex items-center gap-2 shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-1"
              >
                <span>Info Pendaftaran</span>
              </Link>
              <p className="mt-8 text-sm text-slate-400">
                Ramadhan 1447 H • Ciamis, Jawa Barat
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto pt-16 flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm">
          <p>© 2026 PC IPNU IPPNU Ciamis. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a className="hover:text-slate-600 transition-colors flex items-center gap-1" href="https://www.instagram.com/ipnukabciamis/" target="_blank" rel="noopener noreferrer">
              <span className="material-symbols-outlined text-base">link</span>
              PC IPNU Ciamis
            </a>
            <a className="hover:text-slate-600 transition-colors flex items-center gap-1" href="https://www.instagram.com/pcippnukabciamis/" target="_blank" rel="noopener noreferrer">
              <span className="material-symbols-outlined text-base">link</span>
              PC IPPNU Ciamis
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
