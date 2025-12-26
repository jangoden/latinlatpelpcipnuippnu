import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import ChatBotWrapper from "@/components/ChatBotWrapper"

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://pcipnuippnucms.web.id/'), // Ganti dengan domain production yang sebenarnya jika ada
  title: {
    default: 'Latin & Latpel 2026 - PC IPNU IPPNU Ciamis',
    template: '%s | PC IPNU IPPNU Ciamis'
  },
  description: 'Latihan Instruktur & Latihan Pelatih | PC IPNU IPPNU Ciamis 2026. Akselerasi Instruktur Pelatih yang Profesional dan Berkelanjutan.',
  keywords: ['IPNU', 'IPPNU', 'Ciamis', 'Latihan Instruktur', 'Latihan Pelatih', 'LATIN', 'LATPEL', 'Kaderisasi', 'Nahdlatul Ulama'],
  authors: [{ name: 'PC IPNU IPPNU Ciamis' }],
  creator: 'PC IPNU IPPNU Ciamis',
  publisher: 'PC IPNU IPPNU Ciamis',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Latin & Latpel 2026 - PC IPNU IPPNU Ciamis',
    description: 'Latihan Instruktur & Latihan Pelatih | PC IPNU IPPNU Ciamis 2026. Akselerasi Instruktur Pelatih yang Profesional dan Berkelanjutan.',
    url: '/',
    siteName: 'Latin & Latpel 2026',
    locale: 'id_ID',
    type: 'website',
    images: [
      {
        url: '/images/bg-herosection.png',
        width: 1200,
        height: 630,
        alt: 'Latin & Latpel 2026 PC IPNU IPPNU Ciamis',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Latin & Latpel 2026 - PC IPNU IPPNU Ciamis',
    description: 'Akselerasi Instruktur Pelatih yang Profesional dan Berkelanjutan.',
    images: ['/images/bg-herosection.png'],
    creator: '@ipnu_ippnu_ciamis', // Sesuaikan jika ada username twitter
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
