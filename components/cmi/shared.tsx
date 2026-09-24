import { ArrowRight } from 'lucide-react';
import type { ReactNode } from 'react';
import { appointmentHref } from '@/lib/clinic';
export function Brand() {
  return <a href="#inicio" className="brand" aria-label="CMI — voltar ao início"><img className="brand-logo" src="/images/cmi-logo-transparent.png" alt="CMI — Centro Médico Integrado" width={1942} height={809} /></a>;
}
export function InstagramIcon({ size = 24 }: { size?: number }) {
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".9" fill="currentColor" stroke="none" /></svg>;
}
export function ButtonLink({ children, href = appointmentHref, light = false, outline = false, className = '' }: {
    children: ReactNode;
    href?: string;
    light?: boolean;
    outline?: boolean;
    className?: string;
}) {
    return <a className={`button ${light ? 'button-light' : ''} ${outline ? 'button-outline' : ''} ${className}`} href={href}>{children}<ArrowRight size={18} aria-hidden="true"/></a>;
}
export function SectionHeading({ eyebrow, title, center = false }: {
    eyebrow: string;
    title: string;
    center?: boolean;
}) {
    return <div className={`section-heading ${center ? 'center' : ''}`}><span className="eyebrow">{eyebrow}</span><h2>{title}</h2></div>;
}
/** Real photos stay rectangular assets; all decorative geometry is CSS. */
export function ImageCollage({ variant = 'hero' }: { variant?: 'hero' | 'about' | 'contact' }) {
  const photos = [
    { file: 'consultation-woman.webp', alt: 'Imagem ilustrativa de médica em consulta' },
    { file: 'consultation-man.webp', alt: 'Imagem ilustrativa de atendimento médico' },
    { file: 'consultation-patient.webp', alt: 'Imagem ilustrativa de cuidado com o paciente' },
  ];
  return <div className={`image-collage collage-${variant}`}>
    <span className="collage-circle" aria-hidden="true" />
    <span className="collage-petal" aria-hidden="true" />
    {photos.map((photo, index) => <div key={photo.file} className={`collage-photo photo-${index + 1}`}>
      <img src={`/images/${photo.file}`} alt={photo.alt} width={1000} height={800}
        loading={variant === 'hero' && index === 0 ? 'eager' : 'lazy'}
        fetchPriority={variant === 'hero' && index === 0 ? 'high' : 'auto'} />
    </div>)}
  </div>;
}
