# Site CMI — como executar

Este ZIP contém o código-fonte e as imagens da versão publicada, incluindo WhatsApp e logo transparente.

1. Extraia o ZIP.
2. Abra a pasta cmi-site no VS Code.
3. Instale Node.js 22.13 ou superior e pnpm na versão declarada em package.json.
4. No terminal dessa pasta, execute:

```sh
pnpm install
pnpm dev
```

Abra o endereço local exibido no terminal (normalmente http://localhost:5173).

## Onde editar
- app/page.tsx: ordem das seções.
- components/cmi/: componentes do site.
- lib/clinic.ts: conteúdo e link do WhatsApp.
- app/globals.css: estilos e responsividade.
- public/images/: imagens e logo.

O projeto usa React, TypeScript, Tailwind e APIs Next.js com runtime Vinext. A configuração atual de produção é para Sites/Cloudflare; não é uma exportação HTML para abrir com duplo clique. Para outro provedor, adapte a configuração de build.

Não estão incluídos node_modules, caches, arquivos de ambiente nem histórico Git. A instalação local do ZIP não foi testada nesta entrega; o código foi validado no ambiente em que o site foi publicado.
