import { MetadataRoute } from 'next';

const baseUrl =
  process.env.NEXT_PUBLIC_APP_URL?.replace(/\/$/, '') ||
  'https://pcipnuippnucms.web.id';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/login'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
