'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { supabase } from '@/lib/supabase';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import { Loader2, Lock, Mail, Shield } from 'lucide-react';
import Image from 'next/image';

export default function LoginPage() {
    const { toast } = useToast();
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (error) {
                throw error;
            }

            toast({
                title: "Login Berhasil! 🎉",
                description: "Selamat datang di Admin Dashboard.",
            });

            // Hard redirect to ensure middleware picks up the session
            router.refresh();
            window.location.href = '/admin';
        } catch (error: any) {
            console.error('Login Error:', error);
            toast({
                variant: "destructive",
                title: "Login Gagal",
                description: error.message || "Email atau password salah.",
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <main className="min-h-screen bg-slate-900 flex items-center justify-center p-6 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-500/20 rounded-full filter blur-[100px]" />
                <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/20 rounded-full filter blur-[100px]" />
            </div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

            {/* Login Card */}
            <div className="relative z-10 w-full max-w-md">
                <div className="bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 shadow-2xl">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <div className="flex justify-center mb-4">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                                <Shield className="w-8 h-8 text-white" />
                            </div>
                        </div>
                        <h1 className="text-2xl font-bold text-white mb-2">Admin Dashboard</h1>
                        <p className="text-slate-400 text-sm">Latin & Latpel 2026 - PC IPNU IPPNU Ciamis</p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleLogin} className="space-y-5">
                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-slate-300">Email</Label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="admin@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="pl-11 bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-emerald-500 focus:ring-emerald-500/20"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="password" className="text-slate-300">Password</Label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="pl-11 bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-emerald-500 focus:ring-emerald-500/20"
                                    required
                                />
                            </div>
                        </div>

                        <Button
                            type="submit"
                            disabled={isLoading}
                            className="w-full h-12 text-base font-semibold bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 shadow-lg shadow-emerald-500/30 rounded-xl transition-all duration-300"
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                                    Memproses...
                                </>
                            ) : (
                                'Masuk ke Dashboard'
                            )}
                        </Button>
                    </form>

                    {/* Footer */}
                    <div className="mt-8 pt-6 border-t border-slate-700/50 text-center">
                        <p className="text-slate-500 text-xs">
                            © 2026 PC IPNU IPPNU Ciamis. Hanya untuk panitia.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
