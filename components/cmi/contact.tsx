import { ArrowRight, Phone, MapPin, Clock } from 'lucide-react';
import { clinic, navigation } from '@/lib/clinic';
import { Brand, ImageCollage, ButtonLink, InstagramIcon } from './shared';

export function ContactCallout() {
  return <section id="agendar" className="container contact-banner">
    <ImageCollage variant="contact" />
    <div className="contact-callout-content">
      <span className="eyebrow">Vamos conversar?</span>
      <h2>Precisa agendar ou tirar uma dúvida?</h2>
      <p>Converse com a nossa equipe para consultar horários e encontrar o atendimento que você precisa.</p>
      <ButtonLink light>Agendar consulta</ButtonLink>
    </div>
  </section>;
}

export function Contact() { return <section className="container contact-section" id="contato"><div className="contact-details"><span className="eyebrow">Perto de você</span><h2>Venha nos conhecer</h2><a href={clinic.mapUrl} target="_blank" rel="noreferrer"><MapPin /><span>{clinic.address}<small>Confirme a localização ao agendar.</small></span></a><a href={clinic.phoneHref}><Phone /><span>{clinic.phone}<small>Ligue para informações e agendamentos</small></span></a><div><Clock /><span>Segunda a sexta: 8h–12h e 14h–18h<br />Sábado: 8h–12h<small>Confirme os horários com a equipe.</small></span></div><a href={clinic.instagram} target="_blank" rel="noreferrer"><InstagramIcon /><span>cmiclinica</span></a></div><div className="map-panel"><iframe title="Localização do CMI em Serrinha" src="https://maps.google.com/maps?q=CMI%20Centro%20Medico%20Integrado%20Serrinha%20BA&z=16&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/><a className="map-link" href={clinic.mapUrl} target="_blank" rel="noreferrer"><MapPin size={18}/>Como chegar <ArrowRight size={18}/></a></div></section>; }
export function Footer() { return <footer className="container footer"><div className="footer-main"><Brand /><nav aria-label="Navegação do rodapé">{navigation.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav><a className="footer-social" href={clinic.instagram} target="_blank" rel="noreferrer" aria-label="Instagram do CMI"><InstagramIcon size={22}/></a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} CMI — Centro Médico Integrado.</span><span>Cuidado que aproxima.</span></div></footer>; }
