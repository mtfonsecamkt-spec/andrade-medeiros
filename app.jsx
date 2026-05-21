/* ============================================================
   Andrade Medeiros — App entry
   ============================================================ */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "navy",
  "typeStyle": "classic",
  "density": "balanced",
  "darkMode": true,
  "sectionOrder": ["sobre", "areas", "socios", "escritorio", "diferenciais", "reviews", "faq", "localizacao", "contato"]
}/*EDITMODE-END*/;

const PALETTES = {
  navy: {
    label: 'Navy & Champagne',
    swatch: ['#14223a', '#b89968', '#faf7f2'],
    vars: {
      '--bg': '#faf7f2',
      '--surface': '#ffffff',
      '--accent': '#14223a',
      '--accent-2': '#b89968',
      '--gold': '#b89968',
      '--gold-soft': '#cbb085',
      '--ink': '#1a2030',
      '--ink-soft': '#4a536b',
      '--warm-100': '#f3ede2',
      '--navy-900': '#0e1a2b',
      '--navy-800': '#14223a',
      '--navy-700': '#1a2942',
      '--rule': 'rgba(20, 34, 58, 0.12)',
    },
  },
  emerald: {
    label: 'Esmeralda & Ouro',
    swatch: ['#0f3b2e', '#c6a35a', '#f6f2e9'],
    vars: {
      '--bg': '#f6f2e9',
      '--surface': '#ffffff',
      '--accent': '#0f3b2e',
      '--accent-2': '#c6a35a',
      '--gold': '#c6a35a',
      '--gold-soft': '#d9bf86',
      '--ink': '#16241e',
      '--ink-soft': '#4c5a52',
      '--warm-100': '#ece4d3',
      '--navy-900': '#0a2820',
      '--navy-800': '#0f3b2e',
      '--navy-700': '#16523f',
      '--rule': 'rgba(15, 59, 46, 0.14)',
    },
  },
  burgundy: {
    label: 'Bordô & Marfim',
    swatch: ['#4a1a23', '#b78a5c', '#f7f1ea'],
    vars: {
      '--bg': '#f7f1ea',
      '--surface': '#ffffff',
      '--accent': '#4a1a23',
      '--accent-2': '#b78a5c',
      '--gold': '#b78a5c',
      '--gold-soft': '#cca884',
      '--ink': '#231419',
      '--ink-soft': '#594c50',
      '--warm-100': '#ede2d5',
      '--navy-900': '#2e0f15',
      '--navy-800': '#4a1a23',
      '--navy-700': '#5e2530',
      '--rule': 'rgba(74, 26, 35, 0.14)',
    },
  },
  graphite: {
    label: 'Grafite & Bronze',
    swatch: ['#1f242b', '#a17c4a', '#f4f2ee'],
    vars: {
      '--bg': '#f4f2ee',
      '--surface': '#ffffff',
      '--accent': '#1f242b',
      '--accent-2': '#a17c4a',
      '--gold': '#a17c4a',
      '--gold-soft': '#bd9866',
      '--ink': '#161a1f',
      '--ink-soft': '#4c5158',
      '--warm-100': '#e8e4dc',
      '--navy-900': '#14181d',
      '--navy-800': '#1f242b',
      '--navy-700': '#2b313a',
      '--rule': 'rgba(31, 36, 43, 0.14)',
    },
  },
};

const TYPE_STYLES = {
  classic: {
    label: 'Clássico',
    display: "'Cormorant Garamond', serif",
    body: "'Inter', sans-serif",
  },
  modern: {
    label: 'Moderno',
    display: "'Fraunces', serif",
    body: "'Manrope', sans-serif",
  },
  editorial: {
    label: 'Editorial',
    display: "'DM Serif Display', serif",
    body: "'Inter', sans-serif",
  },
};

const SECTION_LABELS = {
  sobre: 'Sobre nós',
  areas: 'Áreas de Atuação',
  socios: 'Sócios',
  escritorio: 'Nosso Escritório',
  diferenciais: 'Diferenciais',
  reviews: 'Avaliações',
  faq: 'FAQ',
  localizacao: 'Localização',
  contato: 'Contato',
};

const SECTION_COMPONENTS = {
  sobre: Sobre,
  areas: Areas,
  socios: Socios,
  escritorio: Escritorio,
  diferenciais: Diferenciais,
  reviews: Reviews,
  faq: FAQ,
  localizacao: Mapa,
  contato: ContactForm,
};

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // apply palette + type + density + dark mode
  React.useEffect(() => {
    const pal = PALETTES[t.palette] || PALETTES.navy;
    const root = document.documentElement;
    Object.entries(pal.vars).forEach(([k, v]) => root.style.setProperty(k, v));

    const ts = TYPE_STYLES[t.typeStyle] || TYPE_STYLES.classic;
    root.style.setProperty('--font-display', ts.display);
    root.style.setProperty('--font-body', ts.body);

    document.body.classList.toggle('dense', t.density === 'dense');
    document.body.classList.toggle('airy', t.density === 'airy');
    document.body.classList.toggle('dark', !!t.darkMode);
  }, [t.palette, t.typeStyle, t.density, t.darkMode]);

  // section reorder
  const order = Array.isArray(t.sectionOrder) && t.sectionOrder.length
    ? t.sectionOrder
    : TWEAK_DEFAULTS.sectionOrder;

  const moveSection = (id, dir) => {
    const idx = order.indexOf(id);
    if (idx < 0) return;
    const next = [...order];
    const newIdx = idx + dir;
    if (newIdx < 0 || newIdx >= next.length) return;
    [next[idx], next[newIdx]] = [next[newIdx], next[idx]];
    setTweak('sectionOrder', next);
  };

  return (
    <>
      <TopNav />
      <Hero />
      {order.map(id => {
        const Cmp = SECTION_COMPONENTS[id];
        return Cmp ? <Cmp key={id} /> : null;
      })}
      <Footer />
      <FloatingWA />

      <TweaksUI t={t} setTweak={setTweak} order={order} moveSection={moveSection} />
    </>
  );
}

/* ---------- Tweaks UI ---------- */
function TweaksUI({ t, setTweak, order, moveSection }) {
  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Paleta de cores">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          {Object.entries(PALETTES).map(([key, p]) => (
            <button key={key}
              onClick={() => setTweak('palette', key)}
              style={{
                padding: 10,
                background: t.palette === key ? 'rgba(255,255,255,0.08)' : 'transparent',
                border: `1px solid ${t.palette === key ? '#fff' : 'rgba(255,255,255,0.18)'}`,
                borderRadius: 6,
                color: '#fff',
                cursor: 'pointer',
                display: 'flex', flexDirection: 'column', gap: 8,
                fontSize: 11,
                textAlign: 'left',
              }}>
              <div style={{ display: 'flex', gap: 4 }}>
                {p.swatch.map((c, i) => (
                  <div key={i} style={{
                    flex: 1, height: 24, background: c,
                    border: '1px solid rgba(255,255,255,0.1)',
                  }} />
                ))}
              </div>
              <span>{p.label}</span>
            </button>
          ))}
        </div>
      </TweakSection>

      <TweakSection label="Tipografia">
        <TweakRadio
          value={t.typeStyle}
          onChange={v => setTweak('typeStyle', v)}
          options={Object.entries(TYPE_STYLES).map(([k, v]) => ({ value: k, label: v.label }))}
        />
      </TweakSection>

      <TweakSection label="Densidade">
        <TweakRadio
          value={t.density}
          onChange={v => setTweak('density', v)}
          options={[
            { value: 'dense', label: 'Denso' },
            { value: 'balanced', label: 'Equilíbrio' },
            { value: 'airy', label: 'Espaçoso' },
          ]}
        />
      </TweakSection>

      <TweakSection label="Modo escuro">
        <TweakToggle
          value={t.darkMode}
          onChange={v => setTweak('darkMode', v)}
          label="Tema escuro"
        />
      </TweakSection>

      <TweakSection label="Ordem das seções">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {order.map((id, i) => (
            <div key={id} style={{
              display: 'flex', alignItems: 'center', gap: 8,
              padding: '8px 10px',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.10)',
              borderRadius: 5,
              fontSize: 12,
              color: '#fff',
            }}>
              <span style={{ opacity: 0.5, width: 16 }}>{i + 1}</span>
              <span style={{ flex: 1 }}>{SECTION_LABELS[id]}</span>
              <button onClick={() => moveSection(id, -1)} disabled={i === 0} style={arrowBtn(i === 0)}>↑</button>
              <button onClick={() => moveSection(id, +1)} disabled={i === order.length - 1} style={arrowBtn(i === order.length - 1)}>↓</button>
            </div>
          ))}
        </div>
      </TweakSection>
    </TweaksPanel>
  );
}

function arrowBtn(disabled) {
  return {
    width: 22, height: 22,
    background: 'transparent',
    border: '1px solid rgba(255,255,255,0.2)',
    color: '#fff',
    borderRadius: 3,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.3 : 1,
    fontSize: 11,
    padding: 0,
  };
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
