'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import {
    LayoutDashboard,
    Users,
    LogOut,
    Menu,
    X,
    ChevronRight,
    Shield
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const navItems = [
    { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/admin/pendaftar', label: 'Data Pendaftar', icon: Users },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const router = useRouter();
    const { toast } = useToast();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        const getUser = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            setUser(user);
        };
        getUser();
    }, []);

    const handleLogout = async () => {
        await supabase.auth.signOut();
        toast({
            title: "Logout Berhasil",
            description: "Anda telah keluar dari dashboard.",
        });
        router.push('/login');
    };

    return (
        <div className="min-h-screen bg-slate-100 dark:bg-slate-950">
            {/* Mobile Sidebar Overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside className={`fixed top-0 left-0 z-50 h-full w-64 bg-slate-900 transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                {/* Logo */}
                <div className="h-16 flex items-center justify-between px-4 border-b border-slate-800">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center">
                            <Shield className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <h1 className="text-white font-bold text-sm">Admin Panel</h1>
                            <p className="text-slate-500 text-xs">Latin & Latpel 2026</p>
                        </div>
                    </div>
                    <button
                        className="lg:hidden text-slate-400 hover:text-white"
                        onClick={() => setSidebarOpen(false)}
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Navigation */}
                <nav className="p-4 space-y-2">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href || (item.href !== '/admin' && pathname.startsWith(item.href));
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setSidebarOpen(false)}
                                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${isActive
                                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                                        : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                                    }`}
                            >
                                <item.icon className={`w-5 h-5 ${isActive ? 'text-emerald-400' : ''}`} />
                                <span className="font-medium">{item.label}</span>
                                {isActive && <ChevronRight className="w-4 h-4 ml-auto" />}
                            </Link>
                        );
                    })}
                </nav>

                {/* User & Logout */}
                <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-800">
                    <div className="flex items-center gap-3 mb-3 px-2">
                        <div className="w-9 h-9 rounded-full bg-slate-700 flex items-center justify-center text-slate-300 text-sm font-bold">
                            {user?.email?.[0]?.toUpperCase() || 'A'}
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-white text-sm font-medium truncate">{user?.email || 'Admin'}</p>
                            <p className="text-slate-500 text-xs">Administrator</p>
                        </div>
                    </div>
                    <Button
                        variant="ghost"
                        onClick={handleLogout}
                        className="w-full justify-start text-slate-400 hover:text-red-400 hover:bg-red-500/10"
                    >
                        <LogOut className="w-4 h-4 mr-2" />
                        Logout
                    </Button>
                </div>
            </aside>

            {/* Main Content */}
            <div className="lg:ml-64">
                {/* Top Header */}
                <header className="h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-4 sticky top-0 z-30">
                    <button
                        className="lg:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
                        onClick={() => setSidebarOpen(true)}
                    >
                        <Menu className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                    </button>

                    <div className="flex items-center gap-2">
                        <span className="text-sm text-slate-500">
                            {new Date().toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                        </span>
                    </div>
                </header>

                {/* Page Content */}
                <main className="p-6">
                    {children}
                </main>
            </div>
        </div>
    );
}
