"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X, ArrowRight } from "lucide-react";
import Image from "next/image";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetClose,
} from "@/components/ui/sheet";

export function Navbar() {
    const [isScrolled, setIsScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Beranda", href: "/" },
        { name: "Tentang", href: "/#about" },
        { name: "Timeline", href: "/#schedule" },
        { name: "Syarat", href: "/#requirements" },
        { name: "Acara", href: "/acara" },
    ];

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4 px-4 md:px-8",
                isScrolled ? "top-2" : "top-6"
            )}
        >
            <div
                className={cn(
                    "max-w-5xl mx-auto rounded-full transition-all duration-300 border border-transparent",
                    isScrolled
                        ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-lg border-white/20 px-6 py-3"
                        : "bg-white/50 dark:bg-slate-900/40 backdrop-blur-sm px-6 py-4 shadow-sm hover:shadow-md hover:bg-white/70 dark:hover:bg-slate-900/60"
                )}
            >
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex items-center gap-3 group focus:outline-none"
                    >
                        <div className="relative w-12 h-12 group-hover:scale-105 transition-transform duration-300">
                            <Image
                                src="/images/LOGO.webp"
                                alt="IPNU Ciamis Logo"
                                width={48}
                                height={48}
                                className="object-contain w-full h-full"
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm font-bold text-slate-900 dark:text-white leading-none tracking-tight group-hover:text-primary transition-colors">
                                PC IPNU IPPNU CIAMIS
                            </span>
                            <span className="text-[10px] font-medium text-slate-500 uppercase tracking-widest group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors">
                                Lakut & Latpel
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1 bg-slate-100/50 dark:bg-slate-800/50 rounded-full p-1.5 border border-slate-200/50 dark:border-slate-700/50">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="px-5 py-2 rounded-full text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-white hover:bg-white dark:hover:bg-slate-700 transition-all duration-200"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Right Area: CTA & Mobile Menu */}
                    <div className="flex items-center gap-3">
                        <Link
                            href="/daftar"
                            className={cn(
                                "hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 group",
                                "bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
                            )}
                        >
                            <span>Daftar</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>

                        {/* Mobile Menu Trigger */}
                        <Sheet>
                            <SheetTrigger asChild>
                                <button
                                    className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm hover:shadow-md transition-all active:scale-90"
                                    aria-label="Toggle Menu"
                                >
                                    <Menu className="w-5 h-5" />
                                </button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                                <SheetHeader className="mb-8 text-left">
                                    <SheetTitle className="flex items-center gap-3">
                                        <div className="relative w-12 h-12">
                                            <Image
                                                src="/images/LOGO.webp"
                                                alt="IPNU Ciamis Logo"
                                                width={48}
                                                height={48}
                                                className="object-contain w-full h-full"
                                            />
                                        </div>
                                        IPNU Ciamis
                                    </SheetTitle>
                                </SheetHeader>

                                <div className="flex flex-col gap-2">
                                    {navLinks.map((link) => (
                                        <SheetClose asChild key={link.name}>
                                            <Link
                                                href={link.href}
                                                className="flex items-center justify-between px-4 py-3 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-primary transition-colors group"
                                            >
                                                <span className="font-medium text-lg">{link.name}</span>
                                                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                            </Link>
                                        </SheetClose>
                                    ))}
                                    <div className="my-4 h-px bg-slate-100 dark:bg-slate-800" />
                                    <SheetClose asChild>
                                        <Link
                                            href="/daftar"
                                            className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold bg-primary text-white hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/30 active:scale-95"
                                        >
                                            Daftar Sekarang
                                            <ArrowRight className="w-5 h-5" />
                                        </Link>
                                    </SheetClose>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </nav>
    );
}
