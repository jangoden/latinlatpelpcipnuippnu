import { MetadataRoute } from 'next';

const baseUrl =
  process.env.NEXT_PUBLIC_APP_URL?.replace(/\/$/, '') ||
  'https://pcipnuippnucms.web.id';

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date().toISOString().split('T')[0];

  return [
    {
      url: `${baseUrl}/`,
      lastModified: today,
    },
    {
      url: `${baseUrl}/daftar`,
      lastModified: today,
    },
  ];
}
