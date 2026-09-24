'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Brand, ButtonLink } from './shared';
import { navigation, appointmentHref } from '@/lib/clinic';
export function Header() {
    const [open, setOpen] = useState(false);
    return <header className="header"><div className="container header-inner"><Brand /><nav className="desktop-nav" aria-label="Navegação principal">{navigation.map(([name, href]) => <a key={href} href={href}>{name}</a>)}</nav><ButtonLink outline className="header-book">Agendar consulta</ButtonLink><button className="menu-toggle" aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button></div>{open && <nav id="mobile-nav" className="mobile-nav" aria-label="Navegação móvel">{navigation.map(([name, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{name}</a>)}<a href={appointmentHref} onClick={() => setOpen(false)}>Agendar consulta</a></nav>}</header>;
}
