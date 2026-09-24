/** Conteúdo centralizado. Substitua exemplos antes de divulgar o site da clínica. */
export const clinic = {
    name: 'CMI', fullName: 'Centro Médico Integrado', city: 'Serrinha/BA',
    phone: '(75) 3261-2514', phoneHref: 'tel:+557532612514',
    instagram: 'https://www.instagram.com/cmiclinica/',
    address: 'Rua Abdom Costa, 23 — Centro, Serrinha/BA',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=CMI+Centro+Medico+Integrado+Serrinha+BA',
};
export const navigation = [['Início', '#inicio'], ['Sobre nós', '#sobre'], ['Especialidades', '#especialidades'], ['Profissionais', '#profissionais'], ['Contato', '#contato']];
export const specialties = [
    { title: 'Cardiologia', icon: 'heart', description: 'Acompanhamento da saúde do coração, prevenção e tratamento de doenças cardiovasculares.' },
    { title: 'Neurologia', icon: 'brain', description: 'Cuidado com o sistema nervoso, com atenção à sua saúde e qualidade de vida.' },
    { title: 'Otorrinolaringologia', icon: 'ear', description: 'Cuidado com a sua audição, respiração e saúde do nariz, ouvidos e garganta.' },
    { title: 'Consultas especializadas', icon: 'stethoscope', description: 'Atendimento em diferentes especialidades, com cuidado próximo em cada etapa.' },
    { title: 'Exames e diagnóstico', icon: 'clipboard', description: 'Informações que ajudam a compreender sua saúde e orientar o seu cuidado.' },
    { title: 'Check-up e prevenção', icon: 'shield', description: 'Acompanhamento da saúde para prevenir doenças e cuidar do seu bem-estar.' },
];
export const professionals = [
    { name: 'Dra. Ana Carolina', specialty: 'Clínica Geral', image: 'doctor-1' },
    { name: 'Dr. Marcelo Silva', specialty: 'Cardiologia', image: 'doctor-2' },
    { name: 'Dra. Juliana Costa', specialty: 'Neurologia', image: 'doctor-3' },
    { name: 'Dr. Ricardo Alves', specialty: 'Otorrinolaringologia', image: 'doctor-4' },
    { name: 'Dra. Patrícia Lima', specialty: 'Pediatria', image: 'doctor-5' },
];
export const testimonials = [
    'Fui muito bem atendida no CMI. Equipe atenciosa, ambiente organizado e profissionais de confiança. Recomendo!',
    'Um atendimento acolhedor, com atenção aos detalhes e espaço para tirar todas as dúvidas.',
    'Cuidado e atenção em cada etapa, desde a recepção até o atendimento. Uma experiência muito positiva.',
];

/** Configure a confirmed clinic number to open its conversation directly. */
const whatsappNumber = (process.env.NEXT_PUBLIC_CLINIC_WHATSAPP ?? '557591218043').replace(/\D/g, '');
export const appointmentMessage = 'Olá, tudo bem? Eu gostaria de agendar uma consulta.';
const messageQuery = `text=${encodeURIComponent(appointmentMessage)}`;
export const whatsappHref = /^55\d{10,11}$/.test(whatsappNumber)
  ? `https://wa.me/${whatsappNumber}?${messageQuery}`
  : `https://wa.me/?${messageQuery}`;
export const appointmentHref = whatsappHref;
