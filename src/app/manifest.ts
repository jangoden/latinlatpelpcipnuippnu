import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'LATIN & LATPEL 2026 PC IPNU IPPNU Ciamis',
    short_name: 'LATIN 2026',
    description:
      'Akselerasi Instruktur dan Pelatih Profesional yang Berkelanjutan oleh PC IPNU IPPNU Kabupaten Ciamis.',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    orientation: 'portrait',
    background_color: '#ffffff',
    theme_color: '#10b981',
    lang: 'id',
    icons: [
      {
        src: '/icons/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icons/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/icons/icon-512x512-maskable.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };
}
