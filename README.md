# Andrade Medeiros — Advocacia e Assessoria Jurídica

Landing page profissional para o escritório Andrade Medeiros, em São João del-Rei/MG.

---

## ⚠️ IMPORTANTE — Como subir corretamente no GitHub

**Você precisa enviar TODOS os arquivos E a pasta `images/` junto.** Se enviar só os arquivos `.html`/`.jsx` sem a pasta `images/`, as fotos não aparecem (foi o que aconteceu na primeira tentativa).

### Jeito mais fácil (recomendado)
1. Abra o seu repositório no GitHub.
2. Clique em **"Add file"** → **"Upload files"**.
3. **Arraste a PASTA INTEIRA** (descompactada) para dentro da página do GitHub — não os arquivos individuais.
4. O GitHub vai detectar e enviar TUDO de uma vez, incluindo a pasta `images/` e o arquivo oculto `.image-slots.state.json`.
5. Clique em **"Commit changes"**.

### Se preferir via Git pelo terminal
```bash
git clone https://github.com/SEU-USUARIO/SEU-REPO.git
cd SEU-REPO
# Copie todos os arquivos desse zip aqui (incluindo pasta images/ e .image-slots.state.json)
git add .
git commit -m "site Andrade Medeiros"
git push
```

### Publicar com GitHub Pages
Depois do upload: **Settings → Pages** → Source: `main` (root) → Save.
Em alguns minutos: `https://SEU-USUARIO.github.io/SEU-REPO/`

---

## 📁 Estrutura do projeto

```
├── index.html              ⬅️ Página principal
├── app.jsx                 (configurações dos tweaks)
├── sections.jsx            (todas as seções: hero, sobre, áreas, sócios…)
├── brand.jsx               (logo, ícones, dados de contato)
├── tweaks-panel.jsx        (painel de edição - escondido em produção)
├── image-slot.js           (drag-and-drop de imagens)
├── .image-slots.state.json (fotos que você arrastou — IMPORTANTE manter)
├── README.md
└── images/                 ⬅️ PASTA IMPORTANTE
    ├── team-portrait.png   (foto da dupla — hero)
    ├── office-meeting.png  (sala de reuniões)
    ├── office-workstation.png  (escritório com a logo)
    └── office-hero.png     (foto institucional com a marca)
```

---

## 🌐 Alternativas mais simples ao GitHub

Se subir no GitHub estiver complicado, considere:

- **Netlify Drop** (grátis, mais simples): https://app.netlify.com/drop — só arrastar a pasta toda.
- **Vercel** (grátis): conecta com GitHub e atualiza sozinho a cada push.
- **Hostinger / Locaweb / Hostgator**: upload via FTP ou painel.

Em todos esses, a regra é a mesma: **enviar a pasta inteira preservando a estrutura.**

---

## ✏️ Como editar depois

| O que mudar | Onde editar |
|---|---|
| Telefones, e-mail, endereço | `brand.jsx` — objeto `CONTACT` |
| Texto da seção "Sobre nós" | `sections.jsx` — função `Sobre` |
| Áreas de atuação | `sections.jsx` — array `AREAS` |
| Perguntas do FAQ | `sections.jsx` — array `FAQS` |
| Trocar fotos | Substituir arquivos em `images/` mantendo o mesmo nome |
| Cores e tipografia | `app.jsx` — objetos `PALETTES` e `TYPE_STYLES` |

---

## 📞 Contatos configurados

- **WhatsApp Isabella:** (32) 99802-1044
- **WhatsApp André:** (32) 98507-4629
- **E-mail:** advocaciaandrademedeiros@gmail.com
- **Endereço:** Praça Dr. Antônio das Chagas Viegas, 82 — Sala 01, Centro, São João del-Rei/MG — 36300-060
- **Instagram:** @andrademedeiros.advocacia

---

## ⚙️ Tecnologia

HTML estático + React (via CDN) + CSS responsivo.
Não precisa de build. Funciona em qualquer hospedagem que sirva arquivos estáticos.
Testado em desktop, tablet e mobile.

© Andrade Medeiros — Advocacia e Assessoria Jurídica.
