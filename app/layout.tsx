import type { Metadata } from 'next';
import { isIndexable, seo, siteUrl } from '@/lib/seo';
import { clinic } from '@/lib/clinic';
import './globals.css';
export const metadata: Metadata = {
    title: seo.title,
    description: seo.description,
    ...(siteUrl ? { metadataBase: new URL(siteUrl), alternates: { canonical: '/' } } : {}),
    applicationName: 'CMI — Centro Médico Integrado',
    robots: { index: isIndexable, follow: isIndexable },
    openGraph: { title: seo.title, description: seo.description, locale: 'pt_BR', type: 'website', siteName: clinic.fullName, ...(siteUrl ? { url: siteUrl } : {}) },
    twitter: { card: 'summary', title: seo.title, description: seo.description },
    icons: { icon: '/cmi-icon.png', shortcut: '/cmi-icon.png' },
};
export default function RootLayout({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return <html lang="pt-BR"><body className="antialiased">{children}</body></html>;
}
