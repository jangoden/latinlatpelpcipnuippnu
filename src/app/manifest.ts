import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Latin & Latpel 2026 PC IPNU IPPNU Ciamis',
        short_name: 'LatinLatpel Ciamis',
        description: 'Akselerasi Instruktur Pelatih yang Profesional dan Berkelanjutan.',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#10b981',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
            // You can add more icons here (e.g. 192x192, 512x512)
        ],
    };
}
