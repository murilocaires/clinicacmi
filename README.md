# CMI — Centro Médico Integrado

Página institucional responsiva, implementada em React, TypeScript e CSS com tokens compartilhados.

## Organização
- `app/page.tsx`: composição e ordem das seções.
- `components/cmi/`: cabeçalho, apresentação, especialidades, equipe, depoimentos e contato.
- `lib/clinic.ts`: dados e conteúdo editável da clínica.
- `app/globals.css`: identidade visual, componentes e breakpoints.
- `public/images/`: recortes ilustrativos da referência fornecida.

## Conteúdo
Os profissionais e os depoimentos da referência são exemplos e estão identificados na interface. Trocar pelos dados reais, imagens autorizadas e depoimentos aprovados antes da divulgação. O símbolo é uma reprodução visual da referência, não um arquivo de marca oficial.

Telefone e horário: cadastro CNES 6009875 consultado em 23/09/2026. O endereço tem divergências em diretórios: confirmar com a clínica antes da divulgação. Fonte: https://cnes2.datasus.gov.br/Mod_Conjunto.asp?VCo_Unidade=2930506009875

Agendamento: links para a seção de contato. O formulário prepara uma mensagem editável para copiar e enviar ao Instagram oficial; não envia nem armazena dados. O telefone abre o discador. Integrar WhatsApp somente quando o número de destino for confirmado.

## Responsividade e acessibilidade
Grades em 3, 2 e 1 colunas; menu móvel; carrossel com rolagem horizontal e controles; estilos de foco; link para pular conteúdo; formulário com rótulos e validação nativa; preferência de movimento reduzido. Sem alturas fixas em blocos de texto.

## Desenvolvimento
Use o gerenciador registrado no lockfile. Scripts `dev` e `build` definidos em `package.json`.

## Stack e SEO
React 19, TypeScript 5, Tailwind CSS 4 e API App Router do Next.js 16. O runtime de publicação no Sites é Vinext, compatível com essa API, sobre Vite/Cloudflare; não é o servidor padrão do Next.js.

Metadados de título e descrição, Open Graph, Twitter, idioma pt-BR, robots.txt, sitemap.xml e JSON-LD MedicalClinic. Definir SITE_URL com o domínio público definitivo no ambiente e republicar para ativar canonical e sitemap absoluto. Não há notas Lighthouse medidas ou garantia de posicionamento. Uma publicação privada não é indexável por buscadores. Validar dados e substituir conteúdo ilustrativo antes de abrir acesso público. Depois, cadastrar o domínio no Google Search Console e enviar o sitemap.

## SEO e publicação pública
React 19, Next.js 16 (API App Router, runtime Vinext no Sites), TypeScript e Tailwind CSS 4. Metadados Open Graph/Twitter, HTML semântico, idioma pt-BR, JSON-LD MedicalClinic, robots e sitemap.

A versão de revisão permanece privada e não indexável enquanto contém exemplos. Depois de confirmar conteúdo e domínio, configurar `NEXT_PUBLIC_SITE_URL` com o domínio HTTPS definitivo e `NEXT_PUBLIC_ALLOW_INDEXING=true`, reconstruir e publicar com acesso público. Isso ativa canonical, sitemap e indexação; enviar sitemap ao Google Search Console. Nunca representar a nota Lighthouse como garantia de posição. Não foi executada auditoria Lighthouse nesta entrega.

## Atualização das colagens
Fotos independentes em WebP (até 1600px); círculos, pétalas e recortes definidos exclusivamente por CSS. Contêiner transparente, sem fundo raster ou mix-blend-mode.
Fontes: https://www.pexels.com/photo/a-doctor-talking-the-patient-7579831/ ; https://unsplash.com/photos/doctor-consults-with-patient-in-modern-office-7-l5EL7YHI4 ; https://unsplash.com/photos/doctor-talking-to-patient-in-clinic-tl447mekwuQ
São fotos ilustrativas, não retratos da equipe da clínica.

Formulário removido. Todos os CTAs de agendamento usam `appointmentHref`. Configurar `NEXT_PUBLIC_CLINIC_WHATSAPP` com número confirmado (55 + DDD + número) e reconstruir para ativar WhatsApp. Enquanto não confirmado, os CTAs levam à seção de contato existente. Nenhum número foi presumido como WhatsApp.

## Últimos ajustes de identidade e atendimento
- Logo horizontal e ícone fornecidos pelo usuário aplicados ao cabeçalho, rodapé e favicon.
- Ícone vetorial do Instagram nos canais sociais.
- Sem número confirmado, os botões abrem `wa.me/?text=...` com a mensagem de agendamento e seleção de destinatário. Com `NEXT_PUBLIC_CLINIC_WHATSAPP` confirmado, abrem a conversa direta. Não enviam automaticamente.
- Controles do carrossel móvel com 22px de distância dos cards e alvos de 44px.
- Retratos ilustrativos em WebP de alta resolução, fontes Pexels: 5214958 (Antoni Shkraba), 6762869 (Usman Yousaf), 19596247 (Martins John), 5722163 (cottonbro studio), 19963168 (Tessy Agbonome). Referências: https://www.pexels.com/photo/a-doctor-holding-a-clipboard-5214958/ ; https://www.pexels.com/photo/portrait-of-a-doctor-wearing-a-white-coat-6762869/ ; https://www.pexels.com/photo/portrait-of-smiling-black-woman-doctor-in-medical-robe-19596247/ ; https://www.pexels.com/photo/a-portrait-of-a-doctor-5722163/ ; https://www.pexels.com/photo/portrait-of-smiling-doctor-19963168/ . Fotos ilustrativas, sem alegação de vínculo com a clínica.

## WhatsApp confirmado pelo usuário
Em 24/09/2026, o usuário informou +55 75 9121-8043. Esse número foi preservado exatamente, sem acrescentar dígitos: `557591218043`. Todos os CTAs de agendamento usam o link direto com a mensagem: “Olá, tudo bem? Eu gostaria de agendar uma consulta.” O envio permanece uma ação do visitante no WhatsApp.

Logo de referência refinada em PNG RGBA de 1942 × 809, com transparência real, aplicada ao cabeçalho e rodapé. A imagem original permanece preservada.
