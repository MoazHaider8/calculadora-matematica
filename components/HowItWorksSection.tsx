import Link from 'next/link';

function IconCategory() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="10" height="10" rx="1.5" />
      <rect x="15" y="3" width="10" height="10" rx="1.5" />
      <rect x="3" y="15" width="10" height="10" rx="1.5" />
      <rect x="15" y="15" width="10" height="10" rx="1.5" />
    </svg>
  );
}

function IconCalculator() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="5" y="3" width="18" height="22" rx="2" />
      <rect x="8" y="6" width="12" height="5" rx="1" />
      <circle cx="9.5" cy="16" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="14" cy="16" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="18.5" cy="16" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="9.5" cy="21" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="14" cy="21" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="18.5" cy="21" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconInput() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
      <rect x="3" y="7" width="22" height="14" rx="2" />
      <line x1="7" y1="12" x2="17" y2="12" />
      <line x1="7" y1="16" x2="13" y2="16" />
      <line x1="20" y1="11" x2="20" y2="17" strokeWidth="2" />
    </svg>
  );
}

function IconResult() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="14" cy="14" r="10" />
      <polyline points="9 14 12.5 17.5 19 10.5" />
    </svg>
  );
}

function IconFormula() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 4h16a1.5 1.5 0 0 1 1.5 1.5v17a1.5 1.5 0 0 1-1.5 1.5H6a1.5 1.5 0 0 1-1.5-1.5V5.5A1.5 1.5 0 0 1 6 4z" />
      <line x1="8.5" y1="11" x2="19.5" y2="11" />
      <line x1="8.5" y1="15" x2="16" y2="15" />
      <line x1="8.5" y1="19" x2="13" y2="19" />
    </svg>
  );
}

const steps = [
  {
    icon: <IconCategory />,
    title: 'Elegir categoría',
    description:
      'Empieza por el área matemática adecuada: cálculo, álgebra, matrices, aritmética, estadística o geometría.',
  },
  {
    icon: <IconCalculator />,
    title: 'Abrir calculadora',
    description:
      'Cada herramienta responde a una operación concreta, desde integrales y derivadas hasta matrices o porcentajes.',
  },
  {
    icon: <IconInput />,
    title: 'Introducir datos',
    description:
      'Los campos de entrada están pensados para que sepas qué dato usar y cómo plantear correctamente la operación.',
  },
  {
    icon: <IconResult />,
    title: 'Obtener resultados',
    description:
      'La calculadora devuelve el resultado de forma clara y ordenada para revisar operaciones sin perder contexto.',
  },
  {
    icon: <IconFormula />,
    title: 'Consultar fórmulas',
    description:
      'Cuando el cálculo lo requiere, puedes revisar fórmulas y pasos para estudiar el procedimiento completo.',
  },
];

export function HowItWorksSection() {
  return (
    <section className="section-pad" style={{ background: '#f8fafc' }} aria-labelledby="how-heading">
      <div className="site-shell">

        {/* Row 1: 3 step cards + text block */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {/* Step 1 */}
          <div className="how-card flex flex-col gap-5">
            <div className="how-card-icon">
              {steps[0].icon}
            </div>
            <h3 className="how-card-title text-lg font-bold leading-snug">{steps[0].title}</h3>
            <p className="how-card-desc text-sm leading-relaxed">{steps[0].description}</p>
          </div>

          {/* Step 2 */}
          <div className="how-card flex flex-col gap-5">
            <div className="how-card-icon">
              {steps[1].icon}
            </div>
            <h3 className="how-card-title text-lg font-bold leading-snug">{steps[1].title}</h3>
            <p className="how-card-desc text-sm leading-relaxed">{steps[1].description}</p>
          </div>

          {/* Step 3 */}
          <div className="how-card flex flex-col gap-5">
            <div className="how-card-icon">
              {steps[2].icon}
            </div>
            <h3 className="how-card-title text-lg font-bold leading-snug">{steps[2].title}</h3>
            <p className="how-card-desc text-sm leading-relaxed">{steps[2].description}</p>
          </div>

          {/* Text block — no card background */}
          <div className="flex flex-col justify-center px-2 lg:px-4">
            <p className="eyebrow">Cómo usar la plataforma</p>
            <h2
              id="how-heading"
              className="mt-3 text-[1.9rem] font-bold leading-tight lg:text-[2.4rem]"
              style={{ color: '#102a43' }}
            >
              Cinco pasos para resolver cualquier operación
            </h2>
          </div>

        </div>

        {/* Row 2: large teal CTA card + 2 step cards */}
        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {/* Featured teal CTA card — always teal, spans 2 cols */}
          <div
            className="flex flex-col justify-between rounded-2xl p-7 sm:col-span-2"
            style={{
              background: 'linear-gradient(135deg, #0f5c5c 0%, #0a4040 100%)',
              minHeight: '220px',
            }}
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-wider" style={{ color: '#DDF3F0' }}>
                Plataforma matemática
              </p>
              <h3 className="mt-3 text-2xl font-bold leading-snug text-white lg:text-[1.6rem]">
                Empieza por las calculadoras más utilizadas
              </h3>
            </div>
            <Link
              href="/calculadoras"
              className="mt-6 inline-flex w-fit items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition-opacity hover:opacity-90"
              style={{ background: '#ffffff', color: '#0f5c5c' }}
            >
              Explorar calculadoras
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <line x1="2" y1="6" x2="10.5" y2="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <polyline points="7,2.5 10.5,6 7,9.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          {/* Step 4 */}
          <div className="how-card flex flex-col gap-5">
            <div className="how-card-icon">
              {steps[3].icon}
            </div>
            <h3 className="how-card-title text-lg font-bold leading-snug">{steps[3].title}</h3>
            <p className="how-card-desc text-sm leading-relaxed">{steps[3].description}</p>
          </div>

          {/* Step 5 */}
          <div className="how-card flex flex-col gap-5">
            <div className="how-card-icon">
              {steps[4].icon}
            </div>
            <h3 className="how-card-title text-lg font-bold leading-snug">{steps[4].title}</h3>
            <p className="how-card-desc text-sm leading-relaxed">{steps[4].description}</p>
          </div>

        </div>
      </div>
    </section>
  );
}
