import { clinic } from '@/lib/clinic';
import { siteUrl, seo } from '@/lib/seo';
/** Não inclui avaliações ou profissionais ilustrativos em dados estruturados. */
export function StructuredData() {
    const data = {
        '@context': 'https://schema.org', '@type': 'MedicalClinic',
        name: `${clinic.name} — ${clinic.fullName}`, description: seo.description,
        ...(siteUrl ? { url: siteUrl, '@id': `${siteUrl}/#clinic` } : {}),
        telephone: '+55 75 3261-2514', sameAs: [clinic.instagram],
        areaServed: { '@type': 'City', name: 'Serrinha', containedInPlace: { '@type': 'State', name: 'Bahia' } },
    };
    return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}/>;
}
