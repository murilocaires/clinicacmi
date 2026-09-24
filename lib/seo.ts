/** Set the confirmed public domain before enabling indexing. */
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '');
export const isIndexable = process.env.NEXT_PUBLIC_ALLOW_INDEXING === 'true' && Boolean(siteUrl);
export const seo = {
    title: 'CMI — Centro Médico Integrado em Serrinha, BA',
    description: 'Conheça o CMI — Centro Médico Integrado em Serrinha, Bahia. Informações sobre consultas, especialidades, exames e canais de atendimento da clínica.',
};
