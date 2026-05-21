# Andrade Medeiros — Advocacia e Assessoria Jurídica

Landing page profissional para o escritório Andrade Medeiros, em São João del-Rei/MG.

## 🚀 Como publicar

### Opção 1 — GitHub Pages
1. Crie um repositório no GitHub (ex: `andrade-medeiros-site`).
2. Faça upload de **todos os arquivos** desta pasta para o repositório.
3. Em **Settings → Pages**, selecione a branch `main` (ou `master`) e a pasta `/ (root)`.
4. Em alguns minutos seu site estará disponível em `https://<seu-usuario>.github.io/<nome-do-repo>/`.

### Opção 2 — Hospedagem própria (Hostinger, Hostgator, etc.)
Suba todos os arquivos para a raiz do seu domínio via FTP ou painel.

### Opção 3 — Netlify / Vercel (recomendado, gratuito)
Arraste a pasta inteira em `app.netlify.com/drop` ou conecte o repositório GitHub no Vercel.

## 📁 Estrutura

```
├── index.html              # Página principal — abra este arquivo
├── app.jsx                 # Configuração de tweaks (paletas, tipografia)
├── sections.jsx            # Todas as seções (hero, sobre, áreas, sócios…)
├── brand.jsx               # Logo, ícones e dados de contato
├── tweaks-panel.jsx        # Painel de personalização (oculto em produção)
├── image-slot.js           # Componente para upload de imagens
└── images/                 # Fotos do escritório e da equipe
    ├── team-portrait.png   # Foto principal (hero) — Isabella e André
    ├── office-meeting.png  # Sala de reuniões
    ├── office-workstation.png  # Estações de trabalho
    └── office-hero.png     # Foto institucional com a logo aplicada
```

## ✏️ Como editar

**Trocar textos / contatos:** abra `brand.jsx` e edite o objeto `CONTACT`.
**Trocar fotos:** substitua os arquivos em `images/` mantendo o mesmo nome.
**Mudar áreas de atuação ou FAQ:** edite os arrays `AREAS` e `FAQS` em `sections.jsx`.
**Mudar cores ou tipografia:** edite as variáveis CSS no `<style>` de `index.html` ou em `app.jsx`.

## 📞 Contato configurado

- **WhatsApp Isabella:** (32) 99802-1044
- **WhatsApp André:** (32) 98507-4629
- **E-mail:** advocaciaandrademedeiros@gmail.com
- **Endereço:** Praça Dr. Antônio das Chagas Viegas, 82 — Sala 01, Centro, São João del-Rei/MG — 36300-060

## ⚙️ Tecnologia

HTML + React (via CDN, sem build necessário) + CSS moderno.
100% responsivo: testado em desktop, tablet e mobile.

---
© Andrade Medeiros — Advocacia e Assessoria Jurídica.
