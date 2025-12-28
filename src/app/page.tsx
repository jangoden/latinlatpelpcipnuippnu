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
              Latin & Latpel 2026
            </GradientText>
          </h1>
          <p className="text-lg md:text-3xl text-slate-700 dark:text-slate-200 font-lobster font-normal italic max-w-5xl mx-auto leading-relaxed tracking-wide">
            "Akselerasi Instruktur Pelatih yang Profesional dan Berkelanjutan".
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link
              className="bg-primary hover:bg-blue-700 text-white text-base font-semibold h-12 px-8 rounded-full flex items-center justify-center shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1"
              href="/daftar"
            >
              Daftar Sekarang
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
              LATIHAN INSTRUKTUR & LATIHAN PELATIH
            </h3>
            <p className="text-slate-500 font-medium">
              PC IPNU IPPNU Kabupaten Ciamis
            </p>
          </div>

          <div className="space-y-12">
            {/* 1. Latar Belakang */}
            <div className="glass-panel p-8 md:p-10 rounded-3xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-[120px] text-slate-900">
                  history_edu
                </span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-sm">1</span>
                Latar Belakang
              </h3>
              <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-4">
                <p>
                  Ikatan Pelajar Nahdlatul Ulama (IPNU) dan Ikatan Pelajar Putri Nahdlatul Ulama (IPPNU) merupakan organisasi kaderisasi di lingkungan Nahdlatul Ulama yang berfungsi sebagai wadah perjuangan pelajar dan santri. Titik tumpu utama keberlangsungan organisasi terletak pada proses kaderisasi yang sehat, terstruktur, dan berkelanjutan.
                </p>
                <div className="pl-4 border-l-4 border-primary/30 my-6 italic text-slate-700 font-medium bg-slate-50/50 p-4 rounded-r-xl">
                  "Jantung dari proses Organisasi adalah ketersediaan para penggerak kaderisasi."
                </div>
                <p>
                  Merekalah yang bertanggung jawab mengawal, merancang, dan melaksanakan pelatihan-pelatihan formal maupun non-formal di setiap tingkatan pimpinan. Tanpa adanya instruktur dan pelatih yang mumpuni, proses kaderisasi akan berjalan stagnan dan kehilangan arah.
                </p>
                <p>
                  Menjawab tantangan zaman yang semakin kompleks, dibutuhkan instruktur dan pelatih yang tidak hanya loyal secara organisasi, tetapi juga profesional dalam metodologi, memiliki wawasan luas, dan mampu beradaptasi dengan kebutuhan kader. Proses regenerasi instruktur dan pelatih menjadi sebuah keniscayaan yang tidak bisa ditunda.
                </p>
                <p>
                  Oleh karena itu, Pimpinan Cabang IPNU-IPPNU Kabupaten Ciamis memandang perlu untuk menyelenggarakan Latihan Instruktur (LATIN 1) dan Latihan Pelatih (LATPEL 1) sebagai momentum untuk mencetak pengawal kaderisasi yang siap mendedikasikan diri untuk kemajuan organisasi.
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
                      Latihan Instruktur (LATIN) dan Latihan Pelatih (LATPEL) Angkatan 1<br />
                      <span className="text-sm text-slate-500">Pimpinan Cabang IPNU-IPPNU Kabupaten Ciamis.</span>
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-xl">lightbulb</span>
                      Tema Kegiatan
                    </h4>
                    <p className="text-slate-600 bg-white/50 p-3 rounded-xl border border-white/60 font-semibold italic">
                      "Akselerasi Instruktur Pelatih yang Profesional dan Berkelanjutan"
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
                      "Peraturan Organisasi (PO) IPNU-IPPNU tentang Kaderisasi.",
                      "Program Kerja PC IPNU-IPPNU Kabupaten Ciamis Masa Khidmat 2024-2026.",
                      "Hasil Rapat Pimpinan Cabang IPNU-IPPNU Kabupaten Ciamis."
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
                    Membentuk Instruktur IPNU dan Pelatih IPPNU di tingkat Cabang Ciamis yang memiliki kualifikasi profesional, berintegritas, dan berkomitmen untuk mengawal kaderisasi secara berkelanjutan.
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
                      "Memberikan bekal pengetahuan, wawasan, dan metodologi pelatihan kepada calon instruktur dan pelatih.",
                      "Mencetak instruktur dan pelatih yang mampu mengelola dan memfasilitasi forum pelatihan kaderisasi.",
                      "Menyamakan persepsi dan standarisasi pengelolaan kaderisasi di lingkungan PC IPNU-IPPNU Ciamis.",
                      "Memperkuat komitmen ideologi Ahlussunnah wal Jama'ah An-Nahdliyah dan keorganisasian."
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

            {/* 4. Waktu dan Tempat Pelatihan */}
            <div className="glass-panel p-8 md:p-10 rounded-3xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-[120px] text-slate-900">
                  calendar_month
                </span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-sm">4</span>
                Waktu dan Tempat Pelatihan
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/50 p-5 rounded-2xl border border-white/60 text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                    <span className="material-symbols-outlined">event</span>
                  </div>
                  <h4 className="font-bold text-slate-800 mb-1">Hari</h4>
                  <p className="text-slate-600">Jum'at s.d. Ahad</p>
                </div>
                <div className="bg-white/50 p-5 rounded-2xl border border-white/60 text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600">
                    <span className="material-symbols-outlined">date_range</span>
                  </div>
                  <h4 className="font-bold text-slate-800 mb-1">Tanggal</h4>
                  <p className="text-slate-600 font-semibold">09 – 11 Januari 2026</p>
                </div>
                <div className="bg-white/50 p-5 rounded-2xl border border-white/60 text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600">
                    <span className="material-symbols-outlined">location_on</span>
                  </div>
                  <h4 className="font-bold text-slate-800 mb-1">Tempat</h4>
                  <p className="text-slate-600 text-sm">Pondok Pesantren Baitul Hikam As-Shofa – Cijeungjing</p>
                </div>
              </div>
            </div>

            {/* 5. Unsur Pelaksana */}
            <div className="glass-panel p-8 md:p-10 rounded-3xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-[120px] text-slate-900">
                  groups
                </span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-sm">5</span>
                Unsur Pelaksana
              </h3>
              <p className="text-slate-600 mb-6">
                Tim atau individu yang terlibat secara langsung dalam pelaksanaan kegiatan:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100/50 hover:shadow-md transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                      <span className="material-symbols-outlined text-lg">badge</span>
                    </div>
                    <h4 className="font-bold text-slate-800 text-sm">Panitia</h4>
                  </div>
                  <p className="text-slate-600 text-xs leading-relaxed">Tim OC yang merancang konsep, mempersiapkan administrasi, logistik, dan menjaga kondusifitas kegiatan.</p>
                </div>
                <div className="bg-emerald-50/50 p-4 rounded-xl border border-emerald-100/50 hover:shadow-md transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600">
                      <span className="material-symbols-outlined text-lg">record_voice_over</span>
                    </div>
                    <h4 className="font-bold text-slate-800 text-sm">Moderator</h4>
                  </div>
                  <p className="text-slate-600 text-xs leading-relaxed">Memberi orientasi materi, mengatur lalu lintas dialog, dan membuat kesimpulan materi.</p>
                </div>
                <div className="bg-purple-50/50 p-4 rounded-xl border border-purple-100/50 hover:shadow-md transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600">
                      <span className="material-symbols-outlined text-lg">edit_note</span>
                    </div>
                    <h4 className="font-bold text-slate-800 text-sm">Notulis</h4>
                  </div>
                  <p className="text-slate-600 text-xs leading-relaxed">Mencatat seluruh pembicaraan dalam sesi materi dan menyusun notulensi yang rapi.</p>
                </div>
                <div className="bg-orange-50/50 p-4 rounded-xl border border-orange-100/50 hover:shadow-md transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600">
                      <span className="material-symbols-outlined text-lg">support_agent</span>
                    </div>
                    <h4 className="font-bold text-slate-800 text-sm">Petugas Forum</h4>
                  </div>
                  <p className="text-slate-600 text-xs leading-relaxed">Melayani kebutuhan teknis forum dan menyiapkan perlengkapan proses forum.</p>
                </div>
                <div className="bg-red-50/50 p-4 rounded-xl border border-red-100/50 hover:shadow-md transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 rounded-lg bg-red-100 flex items-center justify-center text-red-600">
                      <span className="material-symbols-outlined text-lg">school</span>
                    </div>
                    <h4 className="font-bold text-slate-800 text-sm">Instruktur LATIN & LATPEL</h4>
                  </div>
                  <p className="text-slate-600 text-xs leading-relaxed">Tim 2-3 orang yang memimpin, membimbing, dan memantau dinamika forum secara keseluruhan.</p>
                </div>
                <div className="bg-cyan-50/50 p-4 rounded-xl border border-cyan-100/50 hover:shadow-md transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 rounded-lg bg-cyan-100 flex items-center justify-center text-cyan-600">
                      <span className="material-symbols-outlined text-lg">person_search</span>
                    </div>
                    <h4 className="font-bold text-slate-800 text-sm">Narasumber</h4>
                  </div>
                  <p className="text-slate-600 text-xs leading-relaxed">Kader alumni LATIN/LATPEL, tokoh masyarakat, akademisi, atau profesional NU yang kompeten.</p>
                </div>
                <div className="bg-indigo-50/50 p-4 rounded-xl border border-indigo-100/50 hover:shadow-md transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600">
                      <span className="material-symbols-outlined text-lg">fact_check</span>
                    </div>
                    <h4 className="font-bold text-slate-800 text-sm">Tim Screening</h4>
                  </div>
                  <p className="text-slate-600 text-xs leading-relaxed">Tim yang ditunjuk PW & PC untuk menyeleksi kelayakan peserta.</p>
                </div>
              </div>
            </div>

            {/* 6. Pendekatan dan Metode Pelatihan */}
            <div className="glass-panel p-8 md:p-10 rounded-3xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-[120px] text-slate-900">
                  psychology
                </span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-sm">6</span>
                Pendekatan dan Metode Pelatihan
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                      <span className="material-symbols-outlined">emoji_objects</span>
                    </div>
                    <h4 className="font-bold text-xl text-slate-800">Pendekatan</h4>
                  </div>
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-5 rounded-2xl border border-blue-100/50">
                    <p className="text-slate-700 font-semibold text-lg mb-2">Andragogi Murni</p>
                    <p className="text-slate-600 text-sm italic">"Full Participatory Training"</p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-emerald-100 text-emerald-600 rounded-lg">
                      <span className="material-symbols-outlined">build</span>
                    </div>
                    <h4 className="font-bold text-xl text-slate-800">Metode</h4>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      "Brainstorming",
                      "Ceramah",
                      "Diskusi",
                      "Focus Group Discussion",
                      "Sharing Pengalaman"
                    ].map((method, i) => (
                      <div key={i} className="flex items-center gap-2 bg-white/60 p-2.5 rounded-lg text-sm hover:bg-white/80 transition-colors">
                        <span className="material-symbols-outlined text-emerald-500 text-base">check_circle</span>
                        <span className="text-slate-700">{method}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 7. Kriteria dan Persyaratan Peserta */}
            <div className="glass-panel p-8 md:p-10 rounded-3xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-[120px] text-slate-900">
                  checklist
                </span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-sm">7</span>
                Kriteria dan Persyaratan Peserta
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Kriteria */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                      <span className="material-symbols-outlined">verified_user</span>
                    </div>
                    <h4 className="font-bold text-lg text-slate-800">Kriteria Peserta</h4>
                  </div>
                  <ul className="space-y-3">
                    {[
                      "Kader IPNU & IPPNU yang telah lulus LAKMUD (dibuktikan dengan sertifikat).",
                      "Lulus screening (seleksi).",
                      "Usia minimal 16 tahun, maksimal 24 tahun.",
                      "Kuota maksimal: 50 orang (25 IPNU, 25 IPPNU)."
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 shrink-0" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Perlengkapan */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-purple-100 text-purple-600 rounded-lg">
                      <span className="material-symbols-outlined">luggage</span>
                    </div>
                    <h4 className="font-bold text-lg text-slate-800">Perlengkapan Pribadi</h4>
                  </div>
                  <ul className="space-y-2">
                    {[
                      "Pakaian (Baju Putih, Celana/Rok Hitam untuk forum).",
                      "Baju Olahraga.",
                      "Peci hitam (IPNU) / Kerudung hitam (IPPNU).",
                      "Alat Sholat & Alat Mandi.",
                      "ATK & Atribut Organisasi."
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
                        <span className="material-symbols-outlined text-purple-500 text-base shrink-0">check_box</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* Logistik */}
              <div className="mt-8 pt-6 border-t border-slate-200/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-orange-100 text-orange-600 rounded-lg">
                    <span className="material-symbols-outlined">fastfood</span>
                  </div>
                  <h4 className="font-bold text-lg text-slate-800">Logistik (Barang Bawaan Wajib)</h4>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                  {[
                    { item: "Beras 0,5 Liter", icon: "rice_bowl" },
                    { item: "Mie Instan (3x)", icon: "ramen_dining" },
                    { item: "Telur (3 butir)", icon: "egg" },
                    { item: "Energen & Susu (2x)", icon: "local_cafe" },
                    { item: "Kopi Hitam (2x)", icon: "coffee" }
                  ].map((l, i) => (
                    <div key={i} className="bg-orange-50/50 p-3 rounded-xl text-center hover:bg-orange-100/50 transition-colors">
                      <span className="material-symbols-outlined text-orange-500 text-2xl mb-1">{l.icon}</span>
                      <p className="text-slate-600 text-xs font-medium">{l.item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 8. Materi Pelatihan */}
            <div className="glass-panel p-8 md:p-10 rounded-3xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-[120px] text-slate-900">
                  menu_book
                </span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-sm">8</span>
                Materi Pelatihan
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 bg-white/50 p-4 rounded-xl border border-white/60 hover:shadow-md transition-all">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                    <span className="material-symbols-outlined text-xl">mosque</span>
                  </div>
                  <span className="text-slate-700 font-medium text-sm leading-tight">Ke-Aswaja-an dan Ke-NU-an</span>
                </div>
                <div className="flex items-center gap-3 bg-white/50 p-4 rounded-xl border border-white/60 hover:shadow-md transition-all">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                    <span className="material-symbols-outlined text-xl">account_tree</span>
                  </div>
                  <span className="text-slate-700 font-medium text-sm leading-tight">Sistem Kaderisasi IPNU & IPPNU</span>
                </div>
                <div className="flex items-center gap-3 bg-white/50 p-4 rounded-xl border border-white/60 hover:shadow-md transition-all">
                  <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 shrink-0">
                    <span className="material-symbols-outlined text-xl">psychology_alt</span>
                  </div>
                  <span className="text-slate-700 font-medium text-sm leading-tight">Falsafah dan Pendekatan Pelatihan Kader</span>
                </div>
                <div className="flex items-center gap-3 bg-white/50 p-4 rounded-xl border border-white/60 hover:shadow-md transition-all">
                  <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center text-red-600 shrink-0">
                    <span className="material-symbols-outlined text-xl">school</span>
                  </div>
                  <span className="text-slate-700 font-medium text-sm leading-tight">Keinstrukturan dan Kepelatihan I</span>
                </div>
                <div className="flex items-center gap-3 bg-white/50 p-4 rounded-xl border border-white/60 hover:shadow-md transition-all">
                  <div className="w-10 h-10 rounded-lg bg-pink-100 flex items-center justify-center text-pink-600 shrink-0">
                    <span className="material-symbols-outlined text-xl">neurology</span>
                  </div>
                  <span className="text-slate-700 font-medium text-sm leading-tight">Psikologi Pelatihan Kader I</span>
                </div>
                <div className="flex items-center gap-3 bg-white/50 p-4 rounded-xl border border-white/60 hover:shadow-md transition-all">
                  <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600 shrink-0">
                    <span className="material-symbols-outlined text-xl">event_available</span>
                  </div>
                  <span className="text-slate-700 font-medium text-sm leading-tight">Manajemen Pelatihan I</span>
                </div>
                <div className="flex items-center gap-3 bg-white/50 p-4 rounded-xl border border-white/60 hover:shadow-md transition-all">
                  <div className="w-10 h-10 rounded-lg bg-cyan-100 flex items-center justify-center text-cyan-600 shrink-0">
                    <span className="material-symbols-outlined text-xl">sports_esports</span>
                  </div>
                  <span className="text-slate-700 font-medium text-sm leading-tight">Bermain dan Belajar (Ice Breaking/Game)</span>
                </div>
                <div className="flex items-center gap-3 bg-white/50 p-4 rounded-xl border border-white/60 hover:shadow-md transition-all">
                  <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
                    <span className="material-symbols-outlined text-xl">analytics</span>
                  </div>
                  <span className="text-slate-700 font-medium text-sm leading-tight">Metodologi Evaluasi Pelatihan Kader</span>
                </div>
                <div className="flex items-center gap-3 bg-white/50 p-4 rounded-xl border border-white/60 hover:shadow-md transition-all">
                  <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600 shrink-0">
                    <span className="material-symbols-outlined text-xl">rate_review</span>
                  </div>
                  <span className="text-slate-700 font-medium text-sm leading-tight">Review Materi MAKESTA dan LAKMUD</span>
                </div>
                <div className="flex items-center gap-3 bg-white/50 p-4 rounded-xl border border-white/60 hover:shadow-md transition-all">
                  <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center text-amber-600 shrink-0">
                    <span className="material-symbols-outlined text-xl">campaign</span>
                  </div>
                  <span className="text-slate-700 font-medium text-sm leading-tight">Praktik Public Speaking</span>
                </div>
                <div className="flex items-center gap-3 bg-white/50 p-4 rounded-xl border border-white/60 hover:shadow-md transition-all">
                  <div className="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center text-teal-600 shrink-0">
                    <span className="material-symbols-outlined text-xl">person_play</span>
                  </div>
                  <span className="text-slate-700 font-medium text-sm leading-tight">Praktik Fasilitasi Pelatihan</span>
                </div>
                <div className="flex items-center gap-3 bg-white/50 p-4 rounded-xl border border-white/60 hover:shadow-md transition-all">
                  <div className="w-10 h-10 rounded-lg bg-violet-100 flex items-center justify-center text-violet-600 shrink-0">
                    <span className="material-symbols-outlined text-xl">cast_for_education</span>
                  </div>
                  <span className="text-slate-700 font-medium text-sm leading-tight">Metode dan Media Pelatihan</span>
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
              Kami memastikan kenyamanan Anda selama pelatihan dengan fasilitas terbaik.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1: Fasilitas */}
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
                    All-in-one package
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                {[
                  "Penginapan Nyaman",
                  "Konsumsi Full Board",
                  "ID Card Eksklusif",
                  "ATK & Training Kit",
                  "Sertifikat Kelulusan",
                  "T-Shirt Latihan",
                  "Coffee Break",
                  "Modul Materi"
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

            {/* Card 2: HTM (Pricing) */}
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
                      Investasi
                    </h3>
                    <p className="text-slate-400 text-sm">
                      Contribution fee
                    </p>
                  </div>
                </div>

                <div className="space-y-6 mt-auto">
                  <div className="flex items-center justify-between p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                        Internal IPNU
                      </p>
                      <p className="text-xs text-slate-400">
                        Kader aktif Ciamis
                      </p>
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-sm font-semibold text-slate-500">Rp</span>
                      <span className="text-3xl font-extrabold text-slate-800">100.000</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 text-white shadow-lg transform group-hover:scale-105 transition-transform duration-300">
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                        Eksternal / Umum
                      </p>
                      <p className="text-xs text-slate-400">
                        Delegasi luar daerah
                      </p>
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-sm font-semibold text-slate-400">Rp</span>
                      <span className="text-3xl font-extrabold text-white">130.000</span>
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
            Persyaratan Peserta
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto text-center mb-16">
            Pastikan Anda memenuhi kriteria berikut sebelum mendaftar.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Column 1: Administrasi */}
            <div className="glass-panel p-8 rounded-3xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600">
                  <span className="material-symbols-outlined text-[28px]">
                    folder_shared
                  </span>
                </div>
                <h3 className="font-bold text-slate-800 text-xl">
                  Administrasi
                </h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Fotocopy KTA (Kartu Tanda Anggota)",
                  "Batas usia peserta 19 – 22 Tahun",
                  "Sertifikat MAKESTA dan LAKMUD (jika belum terbit dibuktikan dengan SKL)",
                  "Surat Rekomendasi dari PAC/PKPT (Internal) atau PC (Eksternal)",
                  "Mengisi formulir pendaftaran online",
                  "Foto ukuran 3x4 (2 Lembar), Pakaian SOP latar merah"
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

            {/* Column 2: Tugas & Karya */}
            <div className="glass-panel p-8 rounded-3xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600">
                  <span className="material-symbols-outlined text-[28px]">
                    assignment
                  </span>
                </div>
                <h3 className="font-bold text-slate-800 text-xl">
                  Tugas & Karya
                </h3>
              </div>
              <ul className="space-y-5">
                <li className="flex gap-3 items-start">
                  <span className="material-symbols-outlined text-purple-500 text-[20px] shrink-0 mt-0.5">
                    check_circle
                  </span>
                  <div className="text-slate-600 text-sm leading-relaxed">
                    <span className="font-bold block text-slate-700 mb-1">Social Media</span>
                    Peserta wajib follow akun Instagram IPNU dan IPPNU Ciamis.
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="material-symbols-outlined text-purple-500 text-[20px] shrink-0 mt-0.5">
                    check_circle
                  </span>
                  <div className="text-slate-600 text-sm leading-relaxed">
                    <span className="font-bold block text-slate-700 mb-1">Video Klip (3-5 Menit)</span>
                    Tema: Kondisi kaderisasi di pimpinan masing-masing.<br />
                    <span className="text-slate-500 italic text-xs mt-1 block">
                      Upload di IG, tag IPNU IPPNU Ciamis, hashtag: #latinlatpelpcipnuippnuciamis
                    </span>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="material-symbols-outlined text-purple-500 text-[20px] shrink-0 mt-0.5">
                    check_circle
                  </span>
                  <div className="text-slate-600 text-sm leading-relaxed">
                    <span className="font-bold block text-slate-700 mb-1">Esai (Min. 500 Kata)</span>
                    Meliputi kondisi pimpinan, harapan mengikuti pelatihan, dan rencana kontribusi pasca-pelatihan.
                  </div>
                </li>
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
              Tempat pelaksanaan acara yang strategis dan kondusif.
            </p>
          </div>
          <div className="glass-panel rounded-3xl p-0 hover:shadow-apple transition-all duration-300 relative overflow-hidden flex flex-col min-h-[500px]">
            <div className="relative bg-white/50 backdrop-blur-sm z-10 p-6 flex items-start justify-between border-b border-white/50">
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-1">
                  Pondok Pesantren Baitul Hikmah
                </h3>
                <p className="text-slate-500 text-sm font-medium">
                  Haryono, Kec. Ciamis, Kabupaten Ciamis, Jawa Barat 46211
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1978.6199578184537!2d108.3699638!3d-7.326928199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f5e8dc76c530f%3A0xd83930ba2bc11771!2sPondok%20Pesantren%20Baitul%20Hikmah!5e0!3m2!1sid!2sid!4v1766567499189!5m2!1sid!2sid"
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
      </section>

      {/* Committee Section */}
      <section className="relative z-10 py-16 px-6" id="committee">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-2">
              Panitia Pelaksana
            </h2>
            <p className="text-slate-600 font-medium">
              Latihan Instruktur & Latihan Pelatih Angkatan 1
            </p>
          </div>

          <div className="glass-panel p-10 rounded-3xl bg-white/60">
            {/* OC Signatures */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              <div className="text-center">
                <p className="text-slate-500 mb-16 font-medium">(Ttd)</p>
                <h4 className="font-bold text-slate-900 text-lg border-b border-slate-300 inline-block pb-1 mb-1">
                  Alis
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
              <p className="text-slate-800 font-bold">Pimpinan Cabang IPNU & IPPNU Kabupaten Ciamis</p>
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
                Are you ready to level up?
              </h2>
              <p className="text-slate-300 text-lg md:text-xl max-w-xl mb-10 font-medium">
                Jangan lewatkan kesempatan emas ini. Kuota terbatas untuk kader
                pilihan.
              </p>
              <Link href="/daftar">
                <button className="bg-white text-slate-900 hover:bg-slate-50 font-bold text-lg h-14 px-10 rounded-full shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2">
                  <span>Daftar Sekarang</span>
                  <span className="material-symbols-outlined text-[22px]">
                    arrow_forward
                  </span>
                </button>
              </Link>
              <p className="mt-8 text-sm text-slate-400">
                Pendaftaran ditutup 03 Januari 2026
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto pt-16 flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm">
          <p>© 2024 PC IPNU IPPNU Ciamis. All rights reserved.</p>
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
