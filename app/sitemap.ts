import type { MetadataRoute } from 'next';
import { isIndexable, siteUrl } from '@/lib/seo';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
    return siteUrl && isIndexable ? [{ url: siteUrl, changeFrequency: 'monthly', priority: 1 }] : [];
}
