/* ============================================================
   Andrade Medeiros — Section components
   ============================================================ */

/* ---------- Top Navigation ---------- */
function TopNav() {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {document.body.style.overflow = '';};
  }, [menuOpen]);

  const links = [
  { id: 'sobre', label: 'Sobre' },
  { id: 'areas', label: 'Áreas' },
  { id: 'socios', label: 'Sócios' },
  { id: 'diferenciais', label: 'Diferenciais' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contato', label: 'Contato' }];


  const ink = scrolled ? 'var(--ink)' : '#fff';

  return (
    <>
    <nav style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 50,
        padding: scrolled ? '12px 0' : '20px 0',
        background: scrolled ? 'color-mix(in srgb, var(--bg) 88%, transparent)' : 'transparent',
        backdropFilter: scrolled ? 'saturate(140%) blur(14px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'saturate(140%) blur(14px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--rule)' : '1px solid transparent',
        transition: 'all .3s ease',
        color: ink
      }}>
      <div className="container" style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16
        }}>
        <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: 14, textDecoration: 'none', color: ink, flexShrink: 0 }}>
          <div style={{ lineHeight: 1.05 }} className="nav-brand">
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', whiteSpace: 'nowrap' }} className="nav-brand-main">
              Andrade Medeiros
            </div>
            <div style={{ letterSpacing: '0.32em', textTransform: 'uppercase', opacity: 0.65, marginTop: 3, whiteSpace: 'nowrap' }} className="nav-brand-sub">
              Advocacia &amp; Assessoria
            </div>
          </div>
        </a>

        <ul style={{ display: 'flex', gap: 30, listStyle: 'none', margin: 0, padding: 0 }} className="nav-links">
          {links.map((l) =>
            <li key={l.id}>
              <a href={`#${l.id}`} style={{
                textDecoration: 'none', color: ink, fontSize: 14, fontWeight: 500, opacity: 0.82, transition: 'opacity .2s'
              }} onMouseOver={(e) => e.currentTarget.style.opacity = 1}
              onMouseOut={(e) => e.currentTarget.style.opacity = 0.82}>
                {l.label}
              </a>
            </li>
            )}
        </ul>

        {/* Desktop CTA */}
        <a href={waLink()} target="_blank" rel="noopener" className="btn nav-cta"
          style={{
            padding: '11px 20px',
            fontSize: 14,
            background: scrolled ? 'var(--accent)' : '#fff',
            color: scrolled ? 'var(--on-accent)' : 'var(--navy-800)',
            boxShadow: scrolled ? '0 10px 30px -12px rgba(20, 34, 58, 0.45)' : '0 6px 20px -8px rgba(0,0,0,0.4)'
          }}>
          <Icon.whatsapp size={16} /> Agende uma consulta
        </a>

        {/* Mobile hamburger button */}
        <button
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="nav-burger"
            style={{
              display: 'none',
              background: 'transparent',
              border: '1px solid currentColor',
              color: ink,
              width: 44, height: 44,
              borderRadius: 999,
              placeItems: 'center',
              cursor: 'pointer'
            }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            {menuOpen ?
              <><path d="M6 6l12 12M18 6L6 18" /></> :
              <><path d="M4 7h16M4 12h16M4 17h16" /></>
              }
          </svg>
        </button>
      </div>
    </nav>

    {/* Mobile menu sheet */}
    <div
        aria-hidden={!menuOpen}
        className="nav-sheet"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 49,
          background: 'var(--navy-900)',
          color: '#fff',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
          transition: 'opacity .25s ease',
          display: 'flex',
          flexDirection: 'column',
          padding: '92px 28px 32px',
          gap: 4
        }}>
      {links.map((l) =>
        <a key={l.id} href={`#${l.id}`}
        onClick={() => setMenuOpen(false)}
        style={{
          padding: '18px 0',
          borderBottom: '1px solid rgba(255,255,255,0.10)',
          color: '#fff',
          textDecoration: 'none',
          fontFamily: 'var(--font-display)',
          fontSize: 28,
          fontWeight: 500,
          letterSpacing: '-0.005em',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center'
        }}>
          {l.label}
          <Icon.arrow size={18} />
        </a>
        )}
      <a href={waLink()} target="_blank" rel="noopener"
        onClick={() => setMenuOpen(false)}
        className="btn btn-wa"
        style={{ marginTop: 28, justifyContent: 'center', padding: '16px 22px' }}>
        <Icon.whatsapp size={18} /> Agende sua consulta
      </a>
      <div style={{ marginTop: 'auto', textAlign: 'center', fontSize: 12, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
        Andrade Medeiros · Advocacia
      </div>
    </div>

    <style>{`
      .nav-brand-main { font-size: 19px; }
      .nav-brand-sub { font-size: 9.5px; }
      @media (max-width: 920px) {
        .nav-links, .nav-cta { display: none !important; }
        .nav-burger { display: grid !important; }
      }
      @media (max-width: 520px) {
        .nav-brand-main { font-size: 16px; }
        .nav-brand-sub { font-size: 8.5px; letter-spacing: 0.28em; }
      }
    `}</style>
    </>);

}

/* ---------- 1. HERO ---------- */
function Hero() {
  return (
    <section id="top" style={{
      position: 'relative',
      minHeight: '100vh',
      color: '#fff',
      overflow: 'hidden',
      background: 'radial-gradient(ellipse 80% 60% at 75% 50%, rgba(184, 153, 104, 0.18), transparent 65%), linear-gradient(180deg, #0e1a2b 0%, #14223a 100%)',
      display: 'flex',
      alignItems: 'center',
      paddingTop: 110,
      paddingBottom: 60
    }}>
      {/* subtle library texture */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0,
        opacity: 0.10,
        backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='2'/><feColorMatrix values='0 0 0 0 1 0 0 0 0 0.92 0 0 0 0 0.75 0 0 0 0.4 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>")`,
        mixBlendMode: 'screen'
      }} />

      {/* subtle bookshelf-ish vertical streaks behind everything */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0,
        opacity: 0.06,
        backgroundImage: 'repeating-linear-gradient(90deg, transparent 0 18px, rgba(184,153,104,0.6) 18px 19px, transparent 19px 38px)',
        maskImage: 'radial-gradient(ellipse 70% 50% at 70% 50%, black, transparent 70%)',
        WebkitMaskImage: 'radial-gradient(ellipse 70% 50% at 70% 50%, black, transparent 70%)'
      }} />

      <div className="container" style={{ position: 'relative', width: '100%' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '7fr 5fr',
          gap: 60,
          alignItems: 'center'
        }} data-grid="hero">
          {/* LEFT: copy */}
          <div>
            {/* Google rating badge */}
            <a href={CONTACT.googleReviewsUrl} target="_blank" rel="noopener" style={{
              display: 'inline-flex', alignItems: 'center', gap: 14,
              padding: '8px 14px 8px 8px',
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.14)',
              borderRadius: 999,
              color: '#fff',
              textDecoration: 'none',
              fontSize: 13,
              backdropFilter: 'blur(8px)',
              marginBottom: 36
            }}>
              <span style={{
                width: 34, height: 34, borderRadius: 999,
                background: '#fff',
                display: 'grid', placeItems: 'center'
              }}>
                <Icon.google size={20} />
              </span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 2, lineHeight: 1.1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <div style={{ display: 'flex', gap: 1, color: 'var(--gold-soft)' }}>
                    {[0, 1, 2, 3, 4].map((i) => <Icon.star key={i} size={12} />)}
                  </div>
                  <span style={{ fontWeight: 700, fontSize: 14 }}>5,0</span>
                </div>
                <span style={{ opacity: 0.75, fontSize: 11.5 }}>55 avaliações no Google</span>
              </div>
            </a>

            <h1 className="display" style={{
              fontSize: 'clamp(48px, 6vw, 88px)',
              lineHeight: 1.02,
              color: '#fff',
              margin: 0,
              fontWeight: 500,
              letterSpacing: '-0.015em'
            }}>
              Sua advocacia<br />
              de <em style={{
                fontStyle: 'italic',
                color: 'var(--gold-soft)',
                fontFamily: 'var(--font-display)'
              }}>confiança</em>.
            </h1>

            <p style={{
              margin: '28px 0 0',
              maxWidth: '46ch',
              fontSize: 'clamp(15px, 1.1vw, 17px)',
              lineHeight: 1.65,
              color: 'rgba(255,255,255,0.75)',
              fontWeight: 300
            }}>
              Atendimento jurídico ético, próximo e estratégico em São João del-Rei.
              Soluções claras para pessoas físicas e empresas, com a atenção que cada caso merece.
            </p>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 40 }}>
              <a href={waLink()} target="_blank" rel="noopener" className="btn"
              style={{
                background: 'var(--gold)',

                padding: '16px 28px',
                fontWeight: 600, backgroundColor: "rgb(31, 191, 91)", color: "rgb(255, 255, 255)", borderColor: "rgb(31, 191, 91)"
              }}>
                <span style={{
                  width: 28, height: 28, borderRadius: 999,

                  display: 'grid', placeItems: 'center',
                  marginLeft: -10, color: "rgb(255, 255, 255)", opacity: "1", background: "rgb(20, 34, 58)"
                }}>
                  <Icon.arrow size={14} />
                </span>
                Agende sua consulta
              </a>
              <a href="#areas" className="btn btn-ghost"
              style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.30)', padding: '16px 24px' }}>
                Áreas de atuação
              </a>
            </div>
          </div>

          {/* RIGHT: photo + decorative seal + stats card */}
          <div style={{ position: 'relative', minHeight: 540 }} data-side="hero-right">
            {/* main photo card */}
            <div style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '4/5',
              maxHeight: 620,
              overflow: 'hidden',
              borderRadius: 4,
              boxShadow: '0 40px 80px -30px rgba(0,0,0,0.7)'
            }}>
              <image-slot
                id="hero-photo-v2"
                shape="rect"
                placeholder="Arraste sua foto principal (vertical, formato 4:5)"
                style={{

                  height: '100%',
                  background: 'url(images/team-portrait.png) center top/cover',
                  '--placeholder-color': 'rgba(255,255,255,0.9)',
                  '--placeholder-bg': 'rgba(14, 26, 43, 0.55)', width: "457px"
                }}>
              </image-slot>
              {/* gold corner frames */}
              <div aria-hidden="true" style={{ position: 'absolute', top: 14, left: 14, width: 50, height: 50, borderTop: '1px solid var(--gold-soft)', borderLeft: '1px solid var(--gold-soft)', pointerEvents: 'none' }} />
              <div aria-hidden="true" style={{ position: 'absolute', top: 14, right: 14, width: 50, height: 50, borderTop: '1px solid var(--gold-soft)', borderRight: '1px solid var(--gold-soft)', pointerEvents: 'none' }} />
              <div aria-hidden="true" style={{ position: 'absolute', bottom: 14, left: 14, width: 50, height: 50, borderBottom: '1px solid var(--gold-soft)', borderLeft: '1px solid var(--gold-soft)', pointerEvents: 'none' }} />
              <div aria-hidden="true" style={{ position: 'absolute', bottom: 14, right: 14, width: 50, height: 50, borderBottom: '1px solid var(--gold-soft)', borderRight: '1px solid var(--gold-soft)', pointerEvents: 'none' }} />
            </div>

            {/* (selo dourado removido) */}

            {/* OAB membership / commission badge bottom-left */}
            <div className="hero-badge-bl" style={{
              position: 'absolute',
              bottom: 24, left: -24,


              padding: '14px 18px',
              display: 'flex', alignItems: 'center', gap: 12,
              boxShadow: '0 20px 40px -15px rgba(0,0,0,0.45)',
              maxWidth: 260, color: "rgb(126, 122, 122)", background: "rgb(20, 20, 20)"
            }}>
              <div style={{
                flexShrink: 0,
                width: 38, height: 38,
                background: 'var(--navy-800)',
                color: 'var(--gold-soft)',
                display: 'grid', placeItems: 'center'
              }}>
                <Icon.scale size={20} />
              </div>
              <div style={{ lineHeight: 1.25 }}>
                <div style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 600, color: "rgb(255, 255, 255)" }}>OAB / SJDR</div>
                <div style={{ fontSize: 13, fontFamily: 'var(--font-display)', fontWeight: 600, marginTop: 2, color: "rgb(255, 255, 255)" }}>Comissão de Direito Tributário</div>
              </div>
            </div>

            {/* Areas counter top-right */}
            <div className="hero-badge-tr" style={{
              position: 'absolute',
              top: 36, right: -16,
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.15)',
              backdropFilter: 'blur(10px)',
              padding: '16px 22px',
              color: '#fff',
              textAlign: 'center'
            }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 38, fontWeight: 500, lineHeight: 1, color: 'var(--gold-soft)' }}>05</div>
              <div style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', marginTop: 6, opacity: 0.8 }}>Áreas de<br />atuação</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 920px) {
          [data-grid="hero"] { grid-template-columns: 1fr !important; gap: 48px !important; }
          [data-side="hero-right"] { max-width: 420px; margin: 0 auto; width: 100%; }
        }
        @media (max-width: 520px) {
          .hero-badge-bl { left: 8px !important; right: 8px !important; }
          .hero-badge-tr { right: 8px !important; }
        }
      `}</style>
    </section>);

}

/* Circular gold seal — rotating text around a center mark */
function CircularSeal() {
  return (
    <svg viewBox="0 0 200 200" width="100%" height="100%" style={{
      animation: 'seal-spin 28s linear infinite'
    }}>
      <defs>
        <path id="seal-circle" d="M 100, 100 m -72, 0 a 72,72 0 1,1 144,0 a 72,72 0 1,1 -144,0" fill="none" />
      </defs>
      <circle cx="100" cy="100" r="92" fill="rgba(184, 153, 104, 0.10)" stroke="var(--gold-soft)" strokeWidth="0.8" />
      <circle cx="100" cy="100" r="82" fill="none" stroke="var(--gold-soft)" strokeWidth="0.5" opacity="0.6" />
      <text style={{
        fontFamily: 'var(--font-body)',
        fontSize: 9.2,
        letterSpacing: '0.32em',
        fill: 'var(--gold-soft)',
        textTransform: 'uppercase'
      }}>
        <textPath href="#seal-circle" startOffset="0">
          ANDRADE MEDEIROS · ADVOCACIA &amp; ASSESSORIA JURÍDICA · 
        </textPath>
      </text>
      <g transform="translate(100 100)" fill="var(--gold-soft)" style={{ animation: 'seal-counter 28s linear infinite' }}>
        <text textAnchor="middle" y="-4" style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 600, letterSpacing: '0.06em' }}>
          AM
        </text>
        <text textAnchor="middle" y="18" style={{ fontFamily: 'var(--font-body)', fontSize: 6.5, letterSpacing: '0.24em', opacity: 0.85 }}>
          EST. SJDR · MG
        </text>
      </g>
      <style>{`
        @keyframes seal-spin { to { transform: rotate(360deg); transform-origin: 100px 100px; } }
        @keyframes seal-counter { to { transform: translate(100px, 100px) rotate(-360deg); } }
      `}</style>
    </svg>);

}

/* ---------- 2. SOBRE NÓS ---------- */
function Sobre() {
  return (
    <section id="sobre" style={{ background: 'var(--bg)' }}>
      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: '5fr 6fr',
        gap: 80,
        alignItems: 'center', color: "rgb(170, 180, 200)"
      }} data-grid="sobre">
        <div>
          <div style={{ position: 'relative' }}>
            <img src="images/office-workstation.png" alt="Estação de trabalho do escritório Andrade Medeiros"
            style={{
              width: '100%',
              aspectRatio: '4/5',
              objectFit: 'cover',
              boxShadow: '0 30px 60px -30px rgba(20, 34, 58, 0.45)'
            }} />
            {/* gold corner accent */}
            <div aria-hidden="true" style={{
              position: 'absolute',
              top: 16, left: 16, width: 60, height: 60,
              borderTop: '1px solid var(--gold)',
              borderLeft: '1px solid var(--gold)'
            }} />
            <div aria-hidden="true" style={{
              position: 'absolute',
              bottom: 16, right: 16, width: 60, height: 60,
              borderBottom: '1px solid var(--gold)',
              borderRight: '1px solid var(--gold)'
            }} />
          </div>
        </div>

        <div>
          <p className="eyebrow">Sobre nós</p>
          <h2 className="display h2">Atuação ética, próxima e estratégica.</h2>

          <div style={{ marginTop: 28, display: 'grid', gap: 18, fontSize: 17, color: 'var(--ink-soft)', lineHeight: 1.75 }}>
            <p style={{ margin: 0 }}>
              O <strong style={{ color: 'var(--ink)', fontWeight: 600 }}>Andrade Medeiros Advocacia</strong> é um escritório de advocacia em São João del-Rei/MG, que atua com ética, responsabilidade e excelência técnica. Oferecemos assessoria jurídica clara, estratégica e personalizada, sempre voltada às necessidades de cada cliente.
            </p>
            <p style={{ margin: 0 }}>
              Somos membros da <strong style={{ color: 'var(--ink)', fontWeight: 600 }}>Comissão de Direito Tributário da OAB de São João del-Rei</strong> e atuamos nas áreas de Direito Civil, Tributário e do Trabalho, com atendimento preventivo e contencioso.
            </p>
            <p style={{ margin: 0 }}>
              Nossa equipe preza pela transparência, pelo acompanhamento próximo e pela busca de soluções jurídicas seguras e eficazes para pessoas físicas e jurídicas.
            </p>
          </div>

          <div style={{ marginTop: 36, display: 'flex', gap: 36, flexWrap: 'wrap' }}>
            <Stat n="5" label="Áreas de atuação" />
            <Stat n="OAB/MG" label="Inscrição regular" />
            <Stat n="100%" label="Atendimento personalizado" />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 880px) {
          [data-grid="sobre"] { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>);

}

function Stat({ n, label }) {
  return (
    <div>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: 32, fontWeight: 600, lineHeight: 1, color: "rgb(194, 202, 217)", opacity: "1" }}>
        {n}
      </div>
      <div style={{ fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ink-soft)', marginTop: 8 }}>
        {label}
      </div>
    </div>);

}

/* ---------- 3. ÁREAS DE ATUAÇÃO ---------- */
const AREAS = [
{
  id: 'civel',
  title: 'Direito Cível',
  icon: 'doc',
  desc: 'Direitos e deveres que abrangem obrigações, contratos, responsabilidade civil, patrimonial e bens.',
  points: ['Contratos e obrigações', 'Responsabilidade civil', 'Indenizações', 'Direito imobiliário']
},
{
  id: 'trabalho',
  title: 'Direito do Trabalho',
  icon: 'briefcase',
  desc: 'Direitos inerentes à relação de trabalho exercida pelos empregados para com as empresas.',
  points: ['Reclamatórias trabalhistas', 'Verbas rescisórias', 'Acordos e mediações', 'Consultoria preventiva']
},
{
  id: 'familia',
  title: 'Direito de Família',
  icon: 'family',
  desc: 'Direitos relativos à família, com cuidado e discrição em momentos delicados.',
  points: ['Divórcio consensual e litigioso', 'Inventário e partilha', 'Alimentos e exoneração', 'Reconhecimento de paternidade']
},
{
  id: 'tributario',
  title: 'Direito Tributário',
  icon: 'coin',
  desc: 'Execuções fiscais, transações tributárias, parcelamentos e tributos em todas as esferas.',
  points: ['Execução fiscal', 'Transação tributária', 'Parcelamentos', 'Defesas administrativas'],
  highlight: 'Membros da Comissão de Direito Tributário OAB/SJDR'
},
{
  id: 'consumidor',
  title: 'Direito do Consumidor',
  icon: 'cart',
  desc: 'Direitos relativos ao consumidor, no tocante aos produtos e prestação de serviços.',
  points: ['Cobranças indevidas', 'Negativações irregulares', 'Vícios de produto', 'Serviços não prestados']
}];


function Areas() {
  return (
    <section id="areas" style={{ background: 'var(--warm-100)', position: 'relative' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 64px' }}>
          <p className="eyebrow">Áreas de Atuação</p>
          <h2 className="display h2">Soluções jurídicas em <em style={{ fontStyle: 'italic', color: 'var(--accent-2)' }}>cinco áreas</em> de especialização.</h2>
          <p className="lede" style={{ margin: '20px auto 0' }}>
            Atendimento preventivo e contencioso, com a profundidade técnica de quem participa ativamente da OAB local.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 18
        }} data-grid="areas">
          {AREAS.map((a, i) => <AreaCard key={a.id} area={a} index={i} />)}
        </div>
      </div>
    </section>);

}

function AreaCard({ area, index }) {
  const IconC = Icon[area.icon];
  return (
    <article style={{
      background: 'var(--surface)',
      border: '1px solid var(--rule)',
      padding: '36px 30px',
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
      position: 'relative',
      transition: 'transform .25s ease, box-shadow .25s ease'
    }}
    onMouseOver={(e) => {e.currentTarget.style.transform = 'translateY(-4px)';e.currentTarget.style.boxShadow = '0 24px 48px -24px rgba(20,34,58,0.25)';}}
    onMouseOut={(e) => {e.currentTarget.style.transform = '';e.currentTarget.style.boxShadow = '';}}>
      
      {/* index numeral */}
      <div style={{
        position: 'absolute', top: 22, right: 28,
        fontFamily: 'var(--font-display)', fontSize: 14, color: 'var(--accent-2)', letterSpacing: '0.15em'
      }}>
        0{index + 1}
      </div>

      <div style={{
        width: 56, height: 56,
        background: 'var(--accent)',
        color: 'var(--on-accent)',
        display: 'grid', placeItems: 'center',
        borderRadius: 2
      }}>
        <IconC size={24} />
      </div>

      <h3 style={{
        margin: 0,
        fontFamily: 'var(--font-display)',
        fontSize: 24,
        fontWeight: 600,
        color: 'var(--ink)',
        letterSpacing: '-0.01em'
      }}>
        {area.title}
      </h3>

      <p style={{ margin: 0, color: 'var(--ink-soft)', fontSize: 15, lineHeight: 1.6 }}>
        {area.desc}
      </p>

      <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 8 }}>
        {area.points.map((p) =>
        <li key={p} style={{ display: 'flex', gap: 10, fontSize: 14, color: 'var(--ink-soft)' }}>
            <span style={{ color: 'var(--accent-2)', marginTop: 8, width: 14, height: 1, background: 'currentColor', flexShrink: 0 }} />
            {p}
          </li>
        )}
      </ul>

      {area.highlight &&
      <div style={{
        marginTop: 4,
        padding: '10px 14px',
        background: 'color-mix(in srgb, var(--accent-2) 14%, transparent)',
        borderLeft: '2px solid var(--accent-2)',
        fontSize: 12.5,
        color: 'var(--ink)',
        lineHeight: 1.5
      }}>
          {area.highlight}
        </div>
      }
    </article>);

}

/* ---------- 4. SÓCIOS ---------- */
const PARTNERS = [
{
  id: 'isabella',
  name: 'Isabella Andrade',
  role: 'Sócia Advogada',
  bio: 'Atuação em Direito Civil, Família e Consumidor. Atendimento próximo, técnico e humano para pessoas físicas, com cuidado especial em causas familiares.',
  focus: ['Direito de Família', 'Direito do Consumidor', 'Direito Cível'],
  phone: '(32) 99802-1044',
  wa: '5532998021044'
},
{
  id: 'andre',
  name: 'André Medeiros',
  role: 'Sócio Advogado',
  bio: 'Especialista em Direito Tributário e Trabalhista. Membro da Comissão de Direito Tributário da OAB/SJDR, com foco em execução fiscal e transações tributárias.',
  focus: ['Direito Tributário', 'Direito do Trabalho', 'Execução Fiscal'],
  phone: '(32) 98507-4629',
  wa: '5532985074629'
}];


function Socios() {
  return (
    <section id="socios" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 72px' }}>
          <p className="eyebrow">Nossos sócios</p>
          <h2 className="display h2">Quem cuida do seu caso.</h2>
          <p className="lede" style={{ margin: '20px auto 0' }}>
            Você fala diretamente com os advogados responsáveis. Sem intermediários, sem ruído.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 32
        }} data-grid="socios">
          {PARTNERS.map((p) => <PartnerCard key={p.id} p={p} />)}
        </div>
      </div>

      <style>{`
        @media (max-width: 820px) {
          [data-grid="socios"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>);

}

function PartnerCard({ p }) {
  // Default uses the team portrait, cropped to focus on each partner
  // (Isabella on the left of the source image, André on the right)
  const focus = p.id === 'isabella' ? '25% center' : '75% center';
  return (
    <article style={{
      background: 'var(--surface)',
      border: '1px solid var(--rule)',
      display: 'grid',
      gridTemplateColumns: '5fr 7fr',
      overflow: 'hidden'
    }} className="partner-card">
      <image-slot
        id={`partner-${p.id}-v2`}
        shape="rect"
        placeholder={`Foto de ${p.name.split(' ')[0]} — arraste aqui`}
        style={{
          width: '100%',
          minHeight: 380,
          background: `url(images/team-portrait.png) ${focus}/cover`,
          '--placeholder-color': 'rgba(255,255,255,0.95)',
          '--placeholder-bg': 'rgba(14, 26, 43, 0.55)'
        }} />
      
      <div style={{ padding: '36px 32px', display: 'flex', flexDirection: 'column' }}>
        <div style={{ fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--accent-2)' }}>
          {p.role}
        </div>
        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 32, fontWeight: 600,
          margin: '10px 0 18px',
          letterSpacing: '-0.01em',
          color: 'var(--ink)'
        }}>
          {p.name}
        </h3>
        <p style={{ margin: 0, color: 'var(--ink-soft)', lineHeight: 1.65, fontSize: 15 }}>
          {p.bio}
        </p>

        <div style={{ marginTop: 22, display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {p.focus.map((f) =>
          <span key={f} style={{
            fontSize: 11.5, letterSpacing: '0.04em',
            padding: '6px 10px',
            border: '1px solid var(--rule)',
            color: 'var(--ink-soft)'
          }}>{f}</span>
          )}
        </div>

        <div style={{
          marginTop: 'auto', paddingTop: 24,
          display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap'
        }}>
          <a href={`https://wa.me/${p.wa}?text=${WA_MSG}`} target="_blank" rel="noopener" className="btn btn-wa" style={{ padding: '12px 18px', fontSize: 13.5 }}>
            <Icon.whatsapp size={15} /> {p.phone}
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 520px) {
          .partner-card { grid-template-columns: 1fr !important; }
          .partner-card image-slot { min-height: 260px !important; aspect-ratio: 4/3; }
        }
      `}</style>
    </article>);

}

/* ---------- ESCRITÓRIO (gallery) ---------- */
function Escritorio() {
  return (
    <section id="escritorio" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '5fr 7fr', gap: 64, alignItems: 'end', marginBottom: 56 }} data-grid="esc-head">
          <div>
            <p className="eyebrow">Nosso escritório</p>
            <h2 className="display h2">Um espaço pensado para acolher seu caso.</h2>
          </div>
          <p style={{ margin: 0, color: 'var(--ink-soft)', fontSize: 17, lineHeight: 1.65, maxWidth: '46ch' }}>
            No centro de São João del-Rei, nosso escritório foi planejado para receber clientes com privacidade,
            conforto e a estrutura técnica que cada atendimento exige.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '7fr 5fr',
          gridTemplateRows: 'auto auto',
          gap: 12
        }} data-grid="esc-gallery">
          <div style={{ gridRow: 'span 2', position: 'relative', overflow: 'hidden' }}>
            <img src="images/office-meeting.png" alt="Sala de reuniões"
            style={{ width: '100%', height: '100%', objectFit: 'cover', minHeight: 420 }} />
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0,
              padding: '32px 28px',
              background: 'linear-gradient(transparent, rgba(14, 26, 43, 0.85))',
              color: '#fff'
            }}>
              <div style={{ fontSize: 11, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--gold-soft)', marginBottom: 6 }}>
                Sala de reuniões
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 500 }}>
                Atendimento presencial com privacidade
              </div>
            </div>
          </div>

          <div style={{ position: 'relative', overflow: 'hidden' }}>
            <img src="images/office-workstation.png" alt="Estações de trabalho do escritório"
            style={{ width: '100%', height: '100%', objectFit: 'cover', minHeight: 200 }} />
          </div>

          <div style={{
            background: 'var(--navy-800)',
            color: '#fff',
            padding: '32px 28px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: 14,
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div aria-hidden="true" style={{
              position: 'absolute', top: 14, right: 14, fontFamily: 'var(--font-display)',
              fontSize: 64, opacity: 0.08, color: 'var(--gold-soft)', lineHeight: 1
            }}>AM</div>
            <Icon.pin size={22} />
            <div style={{
              fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 500, lineHeight: 1.3
            }}>
              Praça Dr. Antônio das Chagas Viegas, 82 — Sala 01
            </div>
            <div style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.75)' }}>
              Centro, São João del-Rei — MG
            </div>
            <a href="#localizacao" style={{
              marginTop: 8,
              color: 'var(--gold-soft)', fontSize: 13, textDecoration: 'none',
              display: 'inline-flex', alignItems: 'center', gap: 6,
              alignSelf: 'flex-start',
              borderBottom: '1px solid currentColor',
              paddingBottom: 2
            }}>
              Ver mapa <Icon.arrow size={12} />
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 880px) {
          [data-grid="esc-head"] { grid-template-columns: 1fr !important; gap: 24px !important; align-items: start !important; }
          [data-grid="esc-gallery"] { grid-template-columns: 1fr !important; grid-template-rows: auto !important; }
          [data-grid="esc-gallery"] > div:first-child { grid-row: auto !important; }
        }
      `}</style>
    </section>);

}

/* ---------- 5. DIFERENCIAIS ---------- */
const DIFFS = [
{ icon: 'handshake', title: 'Atendimento próximo', desc: 'Você fala diretamente com o sócio responsável pelo seu caso, sem intermediários.' },
{ icon: 'scale', title: 'Excelência técnica', desc: 'Membros ativos da Comissão de Direito Tributário da OAB de São João del-Rei.' },
{ icon: 'shield', title: 'Transparência total', desc: 'Honorários claros, prazos honestos e relatórios periódicos do andamento.' },
{ icon: 'doc', title: 'Estratégia personalizada', desc: 'Cada caso é analisado em profundidade. Não trabalhamos com soluções genéricas.' }];


function Diferenciais() {
  return (
    <section id="diferenciais" style={{
      background: 'var(--navy-800)',
      color: '#fff',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0, opacity: 0.5,
        backgroundImage: `radial-gradient(circle at 90% 10%, rgba(184, 153, 104, 0.16), transparent 50%)`
      }} />

      <div className="container" style={{ position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'end', marginBottom: 60 }} data-grid="diff-head">
          <div>
            <p className="eyebrow" style={{ color: 'var(--gold-soft)' }}>Por que nos escolher</p>
            <h2 className="display h2" style={{ color: '#fff' }}>
              Quatro compromissos que diferenciam nosso trabalho.
            </h2>
          </div>
          <p style={{ margin: 0, color: 'rgba(255,255,255,0.7)', fontSize: 17, lineHeight: 1.65, maxWidth: '46ch' }}>
            Em direito, técnica é o mínimo. O que muda é como cada cliente é tratado, e a profundidade com que cada caso é estudado.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 1, background: 'rgba(255,255,255,0.10)' }}>
          {DIFFS.map((d, i) => {
            const IconC = Icon[d.icon];
            return (
              <div key={d.title} style={{
                background: 'var(--navy-800)',
                padding: '40px 32px',
                display: 'flex', flexDirection: 'column', gap: 16
              }}>
                <div style={{ color: 'var(--gold-soft)', display: 'flex', alignItems: 'center', gap: 14 }}>
                  <IconC size={26} />
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: 14, letterSpacing: '0.15em' }}>
                    0{i + 1}
                  </span>
                </div>
                <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 500, color: '#fff' }}>
                  {d.title}
                </h3>
                <p style={{ margin: 0, color: 'rgba(255,255,255,0.7)', fontSize: 14.5, lineHeight: 1.6 }}>
                  {d.desc}
                </p>
              </div>);

          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 820px) {
          [data-grid="diff-head"] { grid-template-columns: 1fr !important; gap: 24px !important; }
        }
      `}</style>
    </section>);

}

/* ---------- 6. AVALIAÇÕES GOOGLE ---------- */
function Reviews() {
  return (
    <section id="reviews" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <div style={{
          background: 'var(--surface)',
          border: '1px solid var(--rule)',
          padding: '64px 48px',
          textAlign: 'center',
          position: 'relative'
        }} data-card="reviews">
          {/* corner ornaments */}
          <CornerOrnaments />

          <Icon.google size={36} />

          <h2 className="display" style={{ fontSize: 'clamp(28px, 3vw, 40px)', margin: '24px 0 8px' }}>
            Reputação que se constrói pelo cuidado.
          </h2>

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 14, marginTop: 24, flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', gap: 4, color: '#fbbc04' }}>
              {[0, 1, 2, 3, 4].map((i) => <Icon.star key={i} size={28} />)}
            </div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 56, fontWeight: 600, color: 'var(--ink)', lineHeight: 1 }}>
              5,0
            </div>
          </div>

          <p style={{ margin: '14px 0 0', color: 'var(--ink-soft)', fontSize: 15 }}>
            Baseado em <strong style={{ color: 'var(--ink)' }}>55 avaliações</strong> verificadas no Google
          </p>

          <a href={CONTACT.googleReviewsUrl} target="_blank" rel="noopener" className="btn btn-primary" style={{ marginTop: 32, backgroundColor: "rgb(5, 49, 80)" }}>
            Ler avaliações no Google <Icon.arrow size={14} />
          </a>
        </div>
      </div>
    </section>);

}

function CornerOrnaments() {
  const corner = {
    position: 'absolute',
    width: 28, height: 28,
    borderColor: 'var(--accent-2)'
  };
  return (
    <>
      <span style={{ ...corner, top: 18, left: 18, borderTop: '1px solid', borderLeft: '1px solid' }} />
      <span style={{ ...corner, top: 18, right: 18, borderTop: '1px solid', borderRight: '1px solid' }} />
      <span style={{ ...corner, bottom: 18, left: 18, borderBottom: '1px solid', borderLeft: '1px solid' }} />
      <span style={{ ...corner, bottom: 18, right: 18, borderBottom: '1px solid', borderRight: '1px solid' }} />
    </>);

}

/* ---------- 7. FAQ ---------- */
const FAQS = [
{
  q: 'Como funciona a primeira consulta?',
  a: 'A consulta inicial pode ser realizada presencialmente, em nosso escritório no centro de São João del-Rei, ou de forma online. Nela analisamos sua demanda, esclarecemos dúvidas e apresentamos os possíveis caminhos jurídicos.'
},
{
  q: 'O escritório atende clientes de outras cidades?',
  a: 'Sim. Atuamos em todo o Brasil de forma online e presencial em causas locais. Para casos fora da região, utilizamos correspondentes parceiros sempre que necessário.'
},
{
  q: 'Como são cobrados os honorários?',
  a: 'Trabalhamos com transparência total. Os honorários são definidos caso a caso, conforme a complexidade da demanda, e formalizados em contrato antes do início dos trabalhos. Tabela da OAB/MG como referência.'
},
{
  q: 'Vocês atendem pessoas físicas e empresas?',
  a: 'Sim. Atendemos tanto pessoas físicas — em causas familiares, consumeristas, cíveis e trabalhistas — quanto pessoas jurídicas, com assessoria preventiva e contenciosa, especialmente em matéria tributária e trabalhista.'
},
{
  q: 'É possível resolver fora do processo judicial?',
  a: 'Sempre que possível, sim. Priorizamos soluções extrajudiciais — acordos, mediação, transações tributárias — porque costumam ser mais rápidas, menos onerosas e preservam relações.'
},
{
  q: 'Como acompanho o andamento do meu caso?',
  a: 'Você recebe atualizações periódicas diretamente do sócio responsável, por WhatsApp ou e-mail. Estamos sempre disponíveis para esclarecer dúvidas durante todo o processo.'
}];


function FAQ() {
  const [open, setOpen] = React.useState(0);
  return (
    <section id="faq" style={{ background: 'var(--warm-100)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '5fr 7fr', gap: 80, alignItems: 'start' }} data-grid="faq">
          <div style={{ position: 'sticky', top: 100 }}>
            <p className="eyebrow">Perguntas frequentes</p>
            <h2 className="display h2">Dúvidas que ouvimos com frequência.</h2>
            <p className="lede" style={{ marginTop: 20 }}>
              Não encontrou sua resposta? Fale com a gente no WhatsApp — respondemos pessoalmente.
            </p>
            <a href={waLink()} target="_blank" rel="noopener" className="btn btn-wa" style={{ marginTop: 24 }}>
              <Icon.whatsapp size={16} /> Tirar uma dúvida
            </a>
          </div>

          <div>
            {FAQS.map((f, i) =>
            <FaqItem key={i} q={f.q} a={f.a} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 880px) {
          [data-grid="faq"] { grid-template-columns: 1fr !important; gap: 32px !important; }
          [data-grid="faq"] > div:first-child { position: static !important; }
        }
      `}</style>
    </section>);

}

function FaqItem({ q, a, open, onToggle }) {
  return (
    <div style={{ borderBottom: '1px solid var(--rule)' }}>
      <button onClick={onToggle} style={{
        width: '100%',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24,
        padding: '24px 0',
        background: 'transparent', border: 'none',
        textAlign: 'left',
        color: 'var(--ink)',
        fontFamily: 'var(--font-display)',
        fontSize: 21,
        fontWeight: 500
      }}>
        <span>{q}</span>
        <span style={{
          width: 36, height: 36, borderRadius: 999,
          border: '1px solid var(--rule)',
          display: 'grid', placeItems: 'center',
          color: 'var(--accent)',
          flexShrink: 0,
          transition: 'transform .2s',
          transform: open ? 'rotate(45deg)' : 'none'
        }}>
          <Icon.plus size={16} />
        </span>
      </button>
      <div style={{
        maxHeight: open ? 400 : 0,
        overflow: 'hidden',
        transition: 'max-height .35s ease, padding .25s ease',
        paddingBottom: open ? 24 : 0
      }}>
        <p style={{ margin: 0, color: 'var(--ink-soft)', fontSize: 15.5, lineHeight: 1.7, maxWidth: '64ch' }}>
          {a}
        </p>
      </div>
    </div>);

}

/* ---------- 8. MAPA / LOCALIZAÇÃO ---------- */
function Mapa() {
  return (
    <section id="localizacao" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '4fr 6fr', gap: 0, alignItems: 'stretch', background: 'var(--surface)', border: '1px solid var(--rule)' }} data-grid="mapa">
          <div style={{ padding: '56px 44px', display: 'flex', flexDirection: 'column', gap: 24 }}>
            <p className="eyebrow">Onde estamos</p>
            <h2 className="display h2" style={{ fontSize: 'clamp(28px, 2.6vw, 38px)' }}>
              No coração de São João del-Rei.
            </h2>

            <div style={{ display: 'grid', gap: 18, marginTop: 8 }}>
              <Detail icon="pin" title="Endereço">
                {CONTACT.address.street}<br />
                {CONTACT.address.city}<br />
                CEP {CONTACT.address.zip}
              </Detail>
              <Detail icon="phone" title="Telefones">
                <strong>{CONTACT.phone1.label}</strong> — {CONTACT.phone1.number}<br />
                <strong>{CONTACT.phone2.label}</strong> — {CONTACT.phone2.number}
              </Detail>
              <Detail icon="mail" title="E-mail">
                <a href={`mailto:${CONTACT.email}`} style={{ color: 'var(--ink-soft)', textDecoration: 'none', borderBottom: '1px dotted var(--rule)' }}>
                  {CONTACT.email}
                </a>
              </Detail>
            </div>

            <div style={{ marginTop: 'auto', paddingTop: 16 }}>
              <a href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(CONTACT.address.street + ', ' + CONTACT.address.city)}`} target="_blank" rel="noopener" className="btn btn-ghost">
                Como chegar <Icon.arrow size={14} />
              </a>
            </div>
          </div>

          <div style={{ minHeight: 480, position: 'relative' }}>
            <iframe
              src={CONTACT.mapEmbed}
              style={{ width: '100%', height: '100%', border: 0, position: 'absolute', inset: 0, filter: 'var(--map-filter, none)' }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização — Andrade Medeiros Advocacia" />
            
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 880px) {
          [data-grid="mapa"] { grid-template-columns: 1fr !important; }
          [data-grid="mapa"] > div:last-child { min-height: 360px !important; }
        }
        body.dark { --map-filter: invert(0.92) hue-rotate(180deg) saturate(0.7) brightness(0.9); }
      `}</style>
    </section>);

}

function Detail({ icon, title, children }) {
  const IconC = Icon[icon];
  return (
    <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
      <div style={{
        flexShrink: 0, width: 38, height: 38,
        border: '1px solid var(--rule)',
        display: 'grid', placeItems: 'center',
        color: 'var(--accent)'
      }}>
        <IconC size={16} />
      </div>
      <div>
        <div style={{ fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--accent-2)', marginBottom: 6 }}>
          {title}
        </div>
        <div style={{ color: 'var(--ink-soft)', fontSize: 15, lineHeight: 1.6 }}>
          {children}
        </div>
      </div>
    </div>);

}

/* ---------- 9. FORMULÁRIO DE CONTATO ---------- */
function ContactForm() {
  const [form, setForm] = React.useState({ nome: '', email: '', telefone: '', area: '', mensagem: '' });
  const [sent, setSent] = React.useState(false);
  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    // Compose WhatsApp message and open
    const msg = `Olá! Meu nome é ${form.nome}.%0A` + (
    form.area ? `Área de interesse: ${form.area}%0A` : '') + (
    form.email ? `E-mail: ${form.email}%0A` : '') + (
    form.telefone ? `Telefone: ${form.telefone}%0A` : '') +
    `%0A${form.mensagem}`;
    window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, '_blank');
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contato" style={{ background: 'var(--warm-100)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '5fr 6fr', gap: 64, alignItems: 'start' }} data-grid="form">
          <div>
            <p className="eyebrow">Fale conosco</p>
            <h2 className="display h2">Conte seu caso. Respondemos pessoalmente.</h2>
            <p className="lede" style={{ marginTop: 20 }}>
              Atendimento online e presencial. A primeira conversa é o momento de entender se podemos ajudar — e como.
            </p>

            <div style={{ marginTop: 36, display: 'grid', gap: 18 }}>
              <Detail icon="whatsapp" title="WhatsApp direto">
                <a href={`https://wa.me/${CONTACT.phone1.wa}`} target="_blank" rel="noopener" style={{ color: 'inherit', textDecoration: 'none', borderBottom: '1px dotted var(--rule)' }}>
                  {CONTACT.phone1.number}</a> — {CONTACT.phone1.label}<br />
                <a href={`https://wa.me/${CONTACT.phone2.wa}`} target="_blank" rel="noopener" style={{ color: 'inherit', textDecoration: 'none', borderBottom: '1px dotted var(--rule)' }}>
                  {CONTACT.phone2.number}</a> — {CONTACT.phone2.label}
              </Detail>
              <Detail icon="instagram" title="Instagram">
                <a href={CONTACT.instaUrl} target="_blank" rel="noopener" style={{ color: 'inherit', textDecoration: 'none', borderBottom: '1px dotted var(--rule)' }}>
                  @{CONTACT.insta}
                </a>
              </Detail>
            </div>
          </div>

          <form onSubmit={submit} style={{
            background: 'var(--surface)',
            padding: 40,
            border: '1px solid var(--rule)',
            display: 'grid', gap: 18
          }}>
            <Field label="Nome completo" required>
              <input type="text" required value={form.nome} onChange={update('nome')} style={inputStyle()} />
            </Field>
            <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
              <Field label="E-mail">
                <input type="email" value={form.email} onChange={update('email')} style={inputStyle()} />
              </Field>
              <Field label="Telefone / WhatsApp">
                <input type="tel" value={form.telefone} onChange={update('telefone')} style={inputStyle()} />
              </Field>
            </div>
            <Field label="Área de interesse">
              <select value={form.area} onChange={update('area')} style={inputStyle()}>
                <option value="">Selecione…</option>
                {AREAS.map((a) => <option key={a.id} value={a.title}>{a.title}</option>)}
                <option value="Outro">Outro / não sei ainda</option>
              </select>
            </Field>
            <Field label="Conte um pouco sobre seu caso" required>
              <textarea required rows={5} value={form.mensagem} onChange={update('mensagem')} style={{ ...inputStyle(), resize: 'vertical', minHeight: 120 }} />
            </Field>

            <button type="submit" className="btn btn-primary" style={{ marginTop: 8, justifyContent: 'center', backgroundColor: "rgb(170, 180, 200)", color: "rgb(11, 19, 34)" }}>
              {sent ? '✓ Abrindo WhatsApp…' : <>Enviar mensagem <Icon.arrow size={14} /></>}
            </button>
            <p style={{ margin: 0, fontSize: 12, color: 'var(--ink-soft)', textAlign: 'center' }}>
              Ao enviar, seu cliente WhatsApp será aberto com a mensagem pronta.
            </p>
          </form>
        </div>
      </div>

      <style>{`
        @media (max-width: 880px) {
          [data-grid="form"] { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
        @media (max-width: 520px) {
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>);

}

function inputStyle() {
  return {
    width: '100%',
    padding: '14px 16px',
    background: 'var(--bg)',
    border: '1px solid var(--rule)',
    color: 'var(--ink)',
    fontFamily: 'var(--font-body)',
    fontSize: 15,
    outline: 'none',
    transition: 'border-color .15s'
  };
}

function Field({ label, required, children }) {
  return (
    <label style={{ display: 'block' }}>
      <div style={{ fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-soft)', marginBottom: 8, fontWeight: 500 }}>
        {label}{required && <span style={{ color: 'var(--accent-2)' }}> *</span>}
      </div>
      {children}
    </label>);

}

/* ---------- 10. RODAPÉ ---------- */
function Footer() {
  return (
    <footer style={{
      background: 'var(--navy-900)',
      color: 'rgba(255,255,255,0.75)',
      padding: '80px 0 40px'
    }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, marginBottom: 56 }} data-grid="footer">
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 500, color: '#fff', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              Andrade Medeiros
            </div>
            <div style={{ fontSize: 10.5, letterSpacing: '0.36em', textTransform: 'uppercase', opacity: 0.6, marginTop: 6 }}>
              Advocacia & Assessoria Jurídica
            </div>
            <p style={{ marginTop: 22, maxWidth: '38ch', fontSize: 14, lineHeight: 1.65 }}>
              Escritório de advocacia em São João del-Rei/MG. Atendimento online e presencial em todo o Brasil.
            </p>
          </div>

          <FooterCol title="Navegação">
            <a href="#sobre">Sobre nós</a>
            <a href="#areas">Áreas de atuação</a>
            <a href="#socios">Nossos sócios</a>
            <a href="#diferenciais">Diferenciais</a>
            <a href="#faq">Perguntas frequentes</a>
          </FooterCol>

          <FooterCol title="Áreas">
            {AREAS.map((a) => <a key={a.id} href="#areas">{a.title}</a>)}
          </FooterCol>

          <FooterCol title="Contato">
            <a href={`https://wa.me/${CONTACT.phone1.wa}`} target="_blank" rel="noopener">{CONTACT.phone1.number}</a>
            <a href={`https://wa.me/${CONTACT.phone2.wa}`} target="_blank" rel="noopener">{CONTACT.phone2.number}</a>
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            <a href={CONTACT.instaUrl} target="_blank" rel="noopener" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <Icon.instagram size={14} /> @{CONTACT.insta}
            </a>
          </FooterCol>
        </div>

        <div style={{
          paddingTop: 28,
          borderTop: '1px solid rgba(255,255,255,0.10)',
          display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16,
          fontSize: 12.5, color: 'rgba(255,255,255,0.55)'
        }}>
          <div>© {new Date().getFullYear()} Andrade Medeiros — Advocacia e Consultoria Jurídica. Todos os direitos reservados.</div>
          <div>{CONTACT.address.street}, {CONTACT.address.city}</div>
        </div>
      </div>

      <style>{`
        footer a { color: inherit; text-decoration: none; display: block; padding: 4px 0; transition: color .15s; }
        footer a:hover { color: var(--gold-soft); }
        @media (max-width: 720px) {
          [data-grid="footer"] { grid-template-columns: 1fr 1fr !important; gap: 32px !important; }
        }
        @media (max-width: 480px) {
          [data-grid="footer"] { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </footer>);

}

function FooterCol({ title, children }) {
  return (
    <div>
      <div style={{ fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold-soft)', marginBottom: 18, fontWeight: 500 }}>
        {title}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 0, fontSize: 14 }}>
        {children}
      </div>
    </div>);

}

/* ---------- WhatsApp floating button ---------- */
function FloatingWA() {
  return (
    <a href={waLink()} target="_blank" rel="noopener" aria-label="Falar no WhatsApp" className="floating-wa" style={{
      position: 'fixed',
      bottom: 28, right: 28,
      width: 60, height: 60,
      borderRadius: 999,
      background: '#25D366',
      color: '#0c2a16',
      display: 'grid', placeItems: 'center',
      boxShadow: '0 12px 28px -8px rgba(37, 211, 102, 0.55)',
      zIndex: 40,
      animation: 'wa-pulse 2.4s ease-in-out infinite'
    }}>
      <Icon.whatsapp size={28} />
      <style>{`
        @keyframes wa-pulse {
          0%, 100% { box-shadow: 0 12px 28px -8px rgba(37, 211, 102, 0.55), 0 0 0 0 rgba(37, 211, 102, 0.4); }
          50% { box-shadow: 0 12px 28px -8px rgba(37, 211, 102, 0.55), 0 0 0 18px rgba(37, 211, 102, 0); }
        }
        @media (max-width: 520px) {
          .floating-wa { bottom: 18px !important; right: 18px !important; width: 54px !important; height: 54px !important; }
        }
      `}</style>
    </a>);

}

Object.assign(window, {
  TopNav, Hero, CircularSeal, Sobre, Areas, Socios, Escritorio, Diferenciais,
  Reviews, FAQ, Mapa, ContactForm, Footer, FloatingWA
});