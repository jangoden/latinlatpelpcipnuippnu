import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import ChatBotWrapper from "@/components/ChatBotWrapper"

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://pcipnuippnucms.web.id/'),
  title: {
    default: 'PC IPNU IPPNU Ciamis: Latin & Latpel 2026',
    template: '%s | PC IPNU IPPNU Ciamis'
  },
  description: 'Pendaftaran Latihan Instruktur (LATIN) & Latihan Pelatih (LATPEL) Angkatan 1 PC IPNU IPPNU Kabupaten Ciamis. Tanggal 09-11 Januari 2026. Daftar sekarang untuk menjadi instruktur dan pelatih profesional!',
  keywords: ['IPNU', 'IPPNU', 'Ciamis', 'Latihan Instruktur', 'Latihan Pelatih', 'LATIN', 'LATPEL', 'Kaderisasi', 'Nahdlatul Ulama', 'Pendaftaran 2026'],
  authors: [{ name: 'PC IPNU IPPNU Ciamis' }],
  creator: 'PC IPNU IPPNU Ciamis',
  publisher: 'PC IPNU IPPNU Ciamis',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'PC IPNU IPPNU Ciamis: Latin & Latpel 2026',
    description: 'Pendaftaran Latihan Instruktur (LATIN) & Latihan Pelatih (LATPEL) Angkatan 1 PC IPNU IPPNU Kabupaten Ciamis. Tanggal 09-11 Januari 2026. Daftar sekarang!',
    url: '/',
    siteName: 'Latin & Latpel 2026 - PC IPNU IPPNU Ciamis',
    locale: 'id_ID',
    type: 'website',
    images: [
      {
        url: '/images/bg-herosection.png',
        width: 1200,
        height: 630,
        alt: 'Latin & Latpel 2026 PC IPNU IPPNU Ciamis - Pendaftaran Dibuka',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PC IPNU IPPNU Ciamis: Latin & Latpel 2026',
    description: 'Pendaftaran LATIN & LATPEL Angkatan 1. Tanggal 09-11 Januari 2026. Akselerasi Instruktur Pelatih yang Profesional dan Berkelanjutan.',
    images: ['/images/bg-herosection.png'],
    creator: '@ipnu_ippnu_ciamis',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="light">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Lobster+Two:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display overflow-x-hidden antialiased selection:bg-primary/20 selection:text-primary relative">
        {children}
        <Toaster />
        <ChatBotWrapper />
      </body>
    </html>
  );
}
