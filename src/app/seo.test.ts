// @vitest-environment node
import { describe, it, expect, vi } from 'vitest';
import sitemap from './sitemap';
import robots from './robots';
import manifest from './manifest';

// Note: Since baseUrl is defined at the top level in the files, 
// mocking process.env here might not affect it if modules are already evaluated.
// We will test against the default fallback domain provided by the user code
// or assume the env var is not set in the test environment.
const EXPECTED_DOMAIN = 'https://pcipnuippnucms.web.id';

describe('SEO Configuration', () => {
    describe('sitemap', () => {
        it('should generate correct sitemap urls', () => {
            const result = sitemap();
            expect(result).toBeInstanceOf(Array);
            // Check the first item
            expect((result as any)[0].url).toBe(`${EXPECTED_DOMAIN}/`);
            // Check for /daftar
            const daftarEntry = (result as any).find((item: any) => item.url.includes('/daftar'));
            expect(daftarEntry).toBeDefined();
            expect(daftarEntry.url).toBe(`${EXPECTED_DOMAIN}/daftar`);
        });
    });

    describe('robots', () => {
        it('should generate correct robots.txt rules', () => {
            const result = robots();
            expect(result.rules).toEqual([
                {
                    userAgent: '*',
                    allow: '/',
                    disallow: ['/admin', '/login'],
                },
            ]);
            expect(result.sitemap).toBe(`${EXPECTED_DOMAIN}/sitemap.xml`);
        });
    });

    describe('manifest', () => {
        it('should generate correct web manifest', () => {
            const result = manifest();
            expect(result.name).toBe('LATIN & LATPEL 2026 PC IPNU IPPNU Ciamis');
            expect(result.short_name).toBe('LATIN 2026');
            expect(result.theme_color).toBe('#10b981');
            expect(result.display).toBe('standalone');
            expect(result.lang).toBe('id');
        });
    });
});
