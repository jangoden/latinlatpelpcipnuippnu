import Link from "next/link";
import Image from "next/image";
import { CalendarDays, MapPin } from "lucide-react";

export function HeroSection() {
    return (
        <section className="hero-bg relative z-10 min-h-screen flex items-center justify-center overflow-hidden pt-28 sm:pt-24 pb-10 sm:pb-12">
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">

                {/* Left Column - Text Content */}
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-4 sm:space-y-6 pt-4 sm:pt-10 lg:pt-0 pb-4 sm:pb-10 lg:pb-0 w-full">

                    {/* Main Title */}
                    <h1 className="hero-animate-2 font-bebas-neue text-[3.5rem] leading-[0.85] sm:leading-[0.9] sm:text-6xl md:text-7xl lg:text-[5rem] xl:text-[6rem] font-bold text-slate-900 drop-shadow-sm px-2 sm:px-0">
                        MADRASAH ASWAJA
                        <br />
                        <span className="text-emerald-600 bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-500">PELAJAR NU</span>
                    </h1>

                    {/* Image - Placed here for Mobile ONLY (below title) */}
                    <div className="hero-animate-image relative flex lg:hidden justify-center items-center w-full mt-6 mb-4">
                        <div className="relative w-full max-w-[280px] sm:max-w-[400px] aspect-[4/3] sm:aspect-square z-10 mx-auto">
                            <div className="absolute inset-x-4 inset-y-4 sm:inset-x-10 sm:inset-y-10 bg-gradient-to-tr from-emerald-200/50 via-yellow-100/40 to-purple-200/40 rounded-full blur-[40px] sm:blur-[60px] -z-10 animate-pulse-slow"></div>
                            <Image
                                src="/images/hero-image.webp"
                                alt="Kader IPNU IPPNU Ciamis"
                                fill
                                priority
                                className="object-contain drop-shadow-[0_20px_40px_rgba(16,185,129,0.15)] object-bottom"
                            />
                        </div>
                    </div>

                    {/* Subtitle / Theme */}
                    <div className="hero-animate-3 space-y-3 px-2 sm:px-0 w-full">
                        <p className="text-lg sm:text-xl lg:text-3xl text-emerald-700 font-lobster italic max-w-lg leading-snug drop-shadow-sm mx-auto lg:mx-0">
                            &quot;Meneguhkan Khidmat Pelajar <br className="hidden sm:block" /> Menuju Peradaban Mulia&quot;
                        </p>
                    </div>

                    {/* Date & Location list */}
                    <div className="hero-animate-4 flex flex-row gap-2 sm:gap-4 mt-2 sm:mt-6 w-full max-w-lg justify-center lg:justify-start px-0">
                        <div className="flex-1 flex items-start sm:items-center gap-2 sm:gap-3 bg-white/80 border border-emerald-50 rounded-2xl p-2.5 sm:p-3 backdrop-blur-xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="bg-emerald-100 p-1.5 sm:p-2.5 rounded-xl text-emerald-600 shadow-sm shrink-0 mt-0.5 sm:mt-0">
                                <CalendarDays className="w-4 h-4 sm:w-5 sm:h-5" />
                            </div>
                            <div className="text-left">
                                <p className="text-[9px] sm:text-[11px] uppercase font-bold text-slate-400 tracking-wider mb-0.5">Tanggal</p>
                                <p className="text-[10px] sm:text-sm font-bold text-slate-800 leading-tight">21 – 24 Ramadhan</p>
                            </div>
                        </div>
                        <div className="flex-1 flex items-start sm:items-center gap-2 sm:gap-3 bg-white/80 border border-emerald-50 rounded-2xl p-2.5 sm:p-3 backdrop-blur-xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="bg-emerald-100 p-1.5 sm:p-2.5 rounded-xl text-emerald-600 shadow-sm shrink-0 mt-0.5 sm:mt-0">
                                <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                            </div>
                            <div className="text-left">
                                <p className="text-[9px] sm:text-[11px] uppercase font-bold text-slate-400 tracking-wider mb-0.5">Lokasi</p>
                                <p className="text-[10px] sm:text-sm font-bold text-slate-800 leading-tight line-clamp-3 sm:line-clamp-none">Mesjid An-namiroh || Asrama Haji Kab. Ciamis</p>
                            </div>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="hero-animate-5 flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 w-full sm:w-auto justify-center lg:justify-start px-6 sm:px-0">
                        <Link
                            className="w-full sm:w-auto bg-emerald-600 text-white text-sm font-bold h-12 px-8 rounded-full flex items-center justify-center shadow-[0_8px_30px_-4px_rgba(16,185,129,0.4)] hover:shadow-[0_12px_40px_-4px_rgba(16,185,129,0.5)] hover:bg-emerald-500 hover:-translate-y-1 transition-all duration-300"
                            href="/daftar"
                        >
                            Info Pendaftaran
                        </Link>
                        <a
                            className="w-full sm:w-auto bg-white border-2 border-emerald-100 text-emerald-700 text-sm font-bold h-12 px-8 rounded-full flex items-center justify-center hover:bg-emerald-50 hover:border-emerald-200 hover:-translate-y-1 transition-all duration-300 shadow-sm"
                            href="#about"
                        >
                            Pelajari Lebih Lanjut
                        </a>
                    </div>
                </div>

                {/* Right Column - Image (Desktop ONLY) */}
                <div className="hero-animate-image relative hidden lg:flex justify-end items-center lg:mt-0 xl:-mt-10 w-full">
                    <div className="relative w-full max-w-[500px] xl:max-w-[600px] aspect-[4/4.5] z-10 mx-auto">
                        <div className="absolute inset-x-10 inset-y-10 bg-gradient-to-tr from-emerald-200/50 via-yellow-100/40 to-purple-200/40 rounded-full blur-[60px] -z-10 animate-pulse-slow"></div>
                        <Image
                            src="/images/hero-image.webp"
                            alt="Kader IPNU IPPNU Ciamis"
                            fill
                            priority
                            className="object-contain drop-shadow-[0_20px_40px_rgba(16,185,129,0.15)] object-right-bottom"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}
