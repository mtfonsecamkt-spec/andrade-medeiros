/* Brand marks + shared icons */

const WA_NUMBER = '5532985074629'; // André Medeiros for primary CTA
const WA_MSG = encodeURIComponent('Olá! Gostaria de agendar uma consulta com o escritório.');
const waLink = (num = WA_NUMBER) =>
`https://wa.me/${num}?text=${WA_MSG}`;

/* Monogram AM — flat, refined version inspired by the office signage */
function Monogram({ size = 72, color = 'currentColor', strokeColor }) {
  const stroke = strokeColor || color;
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-hidden="true">
      {/* outer rule frame */}
      <rect x="3" y="3" width="94" height="94" fill="none" stroke={stroke} strokeWidth="1.2" opacity="0.5" />
      <rect x="7" y="7" width="86" height="86" fill="none" stroke={stroke} strokeWidth="0.5" opacity="0.5" />
      {/* A */}
      <path d="M 22 78 L 38 22 L 50 22 L 50 78 L 44 78 L 44 60 L 32 60 L 28 78 Z M 33.5 54 L 44 54 L 44 30 Z"
      fill={color} />
      {/* M (overlapping right side) */}
      <path d="M 50 78 L 50 22 L 58 22 L 66 50 L 74 22 L 82 22 L 82 78 L 76 78 L 76 36 L 69 62 L 63 62 L 56 36 L 56 78 Z"
      fill={color} />
    </svg>);

}

/* Full wordmark with subtitle */
function Wordmark({ light = false, size = 1 }) {
  const color = light ? '#ffffff' : 'var(--ink)';
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 14 * size,
      color
    }}>
      <Monogram size={68 * size} color={color} />
      <div style={{ textAlign: 'center', lineHeight: 1 }}>
        <div style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 500,
          fontSize: 38 * size,
          letterSpacing: '0.06em',
          textTransform: 'uppercase'
        }}>
          Andrade Medeiros
        </div>
        <div style={{
          fontFamily: 'var(--font-body)',
          fontSize: 11 * size,
          letterSpacing: '0.42em',
          textTransform: 'uppercase',
          marginTop: 10 * size,
          opacity: 0.75
        }}>
          Advocacia &nbsp;&amp;&nbsp; Assessoria Jurídica
        </div>
      </div>
    </div>);

}

/* Icons */
const Icon = {
  whatsapp: (p) =>
  <svg viewBox="0 0 24 24" width={p.size || 18} height={p.size || 18} fill="currentColor" aria-hidden="true" style={{ fill: "rgb(255, 255, 255)" }}>
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.821 11.821 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>,

  instagram: (p) =>
  <svg viewBox="0 0 24 24" width={p.size || 18} height={p.size || 18} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" style={{ stroke: "rgb(170, 180, 200)" }}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>,

  phone: (p) =>
  <svg viewBox="0 0 24 24" width={p.size || 18} height={p.size || 18} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ stroke: "rgb(170, 180, 200)" }}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>,

  mail: (p) =>
  <svg viewBox="0 0 24 24" width={p.size || 18} height={p.size || 18} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ stroke: "rgb(170, 180, 200)" }}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>,

  pin: (p) =>
  <svg viewBox="0 0 24 24" width={p.size || 18} height={p.size || 18} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ stroke: "rgb(170, 180, 200)" }}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>,

  star: (p) =>
  <svg viewBox="0 0 24 24" width={p.size || 18} height={p.size || 18} fill="currentColor" aria-hidden="true">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>,

  arrow: (p) =>
  <svg viewBox="0 0 24 24" width={p.size || 16} height={p.size || 16} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ stroke: "rgb(255, 255, 255)" }}>
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>,

  scale: (p) =>
  <svg viewBox="0 0 24 24" width={p.size || 22} height={p.size || 22} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3v18M5 6h14M5 6l-3 6a4 4 0 0 0 6 0L5 6zM19 6l-3 6a4 4 0 0 0 6 0L19 6zM8 21h8" />
    </svg>,

  shield: (p) =>
  <svg viewBox="0 0 24 24" width={p.size || 22} height={p.size || 22} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>,

  handshake: (p) =>
  <svg viewBox="0 0 24 24" width={p.size || 22} height={p.size || 22} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M11 17l-2 2-3-3 6-6 3 3" />
      <path d="M14 13l5 5-2 2-3-3" />
      <path d="M3 11l5-5 4 4" />
      <path d="M16 8l5 5" />
    </svg>,

  doc: (p) =>
  <svg viewBox="0 0 24 24" width={p.size || 22} height={p.size || 22} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6M8 13h8M8 17h6" />
    </svg>,

  briefcase: (p) =>
  <svg viewBox="0 0 24 24" width={p.size || 22} height={p.size || 22} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>,

  family: (p) =>
  <svg viewBox="0 0 24 24" width={p.size || 22} height={p.size || 22} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="9" cy="7" r="3" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
      <path d="M15 21v-2a3 3 0 0 1 3-3h1a3 3 0 0 1 3 3v2" />
    </svg>,

  coin: (p) =>
  <svg viewBox="0 0 24 24" width={p.size || 22} height={p.size || 22} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M14.5 9.5a2.5 2.5 0 0 0-5 0c0 1.4 1 2 2.5 2.5s2.5 1.1 2.5 2.5a2.5 2.5 0 0 1-5 0M12 7v10" />
    </svg>,

  cart: (p) =>
  <svg viewBox="0 0 24 24" width={p.size || 22} height={p.size || 22} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="9" cy="20" r="1.5" />
      <circle cx="18" cy="20" r="1.5" />
      <path d="M2 3h2.5l2.7 12.4a2 2 0 0 0 2 1.6h8.2a2 2 0 0 0 1.95-1.57L21 7H6" />
    </svg>,

  plus: (p) =>
  <svg viewBox="0 0 24 24" width={p.size || 18} height={p.size || 18} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <path d="M12 5v14M5 12h14" />
    </svg>,

  minus: (p) =>
  <svg viewBox="0 0 24 24" width={p.size || 18} height={p.size || 18} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <path d="M5 12h14" />
    </svg>,

  google: (p) =>
  <svg viewBox="0 0 24 24" width={p.size || 18} height={p.size || 18} aria-hidden="true">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.99.66-2.26 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.1A6.6 6.6 0 0 1 5.47 12c0-.73.13-1.44.37-2.1V7.07H2.18A11 11 0 0 0 1 12c0 1.78.43 3.46 1.18 4.93l3.66-2.83z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38z" />
    </svg>

};

const CONTACT = {
  phone1: { label: 'Isabella Andrade', number: '(32) 99802-1044', wa: '5532998021044' },
  phone2: { label: 'André Medeiros', number: '(32) 98507-4629', wa: '5532985074629' },
  email: 'advocaciaandrademedeiros@gmail.com',
  insta: 'andrademedeiros.advocacia',
  instaUrl: 'https://www.instagram.com/andrademedeiros.advocacia/',
  address: {
    street: 'Praça Dr. Antônio das Chagas Viegas, 82 — Sala 01',
    city: 'Centro, São João del-Rei — MG',
    zip: '36300-060'
  },
  googleReviewsUrl: 'https://www.google.com/search?q=andrade+medeiros+advocacia+s%C3%A3o+jo%C3%A3o+del+rei',
  mapEmbed: 'https://www.google.com/maps?q=Pra%C3%A7a+Dr.+Ant%C3%B4nio+das+Chagas+Viegas%2C+82+S%C3%A3o+Jo%C3%A3o+del+Rei+MG&z=16&output=embed'
};

Object.assign(window, { Monogram, Wordmark, Icon, CONTACT, WA_NUMBER, waLink });