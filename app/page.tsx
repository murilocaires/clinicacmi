import { StructuredData } from '@/components/cmi/structured-data';
import { Header } from '@/components/cmi/header';
import { Hero, About, AppointmentBanner } from '@/components/cmi/intro';
import { Specialties } from '@/components/cmi/specialties';
import { Professionals, Testimonials } from '@/components/cmi/people';
import { ContactCallout, Contact, Footer } from '@/components/cmi/contact';
export default function Home() { return <><StructuredData /><a className="skip-link" href="#main">Pular para o conteúdo</a><Header /><main id="main"><Hero /><About /><Specialties /><AppointmentBanner /><Professionals /><Testimonials /><ContactCallout /><Contact /></main><Footer /></>; }
