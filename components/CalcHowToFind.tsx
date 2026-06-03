import Link from 'next/link';

const steps = [
  {
    title: 'Elegir categoría',
    description:
      'Identifica el área matemática del problema: cálculo, álgebra, matrices, aritmética, estadística o geometría.',
  },
  {
    title: 'Ver área',
    description:
      'Explora las calculadoras disponibles dentro de esa categoría y elige la que responde a tu operación concreta.',
  },
  {
    title: 'Abrir calculadora',
    description:
      'Accede a la herramienta. Cada calculadora está diseñada para un solo tipo de operación matemática.',
  },
  {
    title: 'Introducir datos',
    description:
      'Completa los campos de entrada con los valores del problema. Los campos indican qué dato colocar en cada posición.',
  },
  {
    title: 'Obtener resultados',
    description:
      'La calculadora devuelve el resultado con el procedimiento ordenado para revisar cada paso del cálculo.',
  },
];

export function CalcHowToFind() {
  return (
    <section
      className="py-10 lg:py-14"
      style={{ background: '#ffffff' }}
      aria-labelledby="how-find-heading"
    >
      <div className="site-shell">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">

          {/* Left: intro */}
          <div className="lg:col-span-4 lg:pt-2">
            <p className="eyebrow">Cómo navegar</p>
            <h2
              id="how-find-heading"
              className="mt-3 text-[1.85rem] font-bold leading-tight lg:text-[2.2rem]"
              style={{ color: '#102a43' }}
            >
              Cómo encontrar la calculadora adecuada
            </h2>
            <p className="mt-4 text-sm leading-relaxed" style={{ color: '#627d98' }}>
              El directorio está organizado para que puedas navegar desde el área general hasta la calculadora específica en pocos pasos.
            </p>
            <Link
              href="#categorias"
              className="mt-6 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold text-white transition-opacity hover:opacity-90"
              style={{ background: '#0F5C5C' }}
            >
              Explorar categorías
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
                <line x1="1.5" y1="5.5" x2="9.5" y2="5.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                <polyline points="6,2 9.5,5.5 6,9" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          {/* Right: vertical timeline */}
          <div className="lg:col-span-8">
            <div className="relative">
              {/* Vertical connecting line */}
              <div
                aria-hidden="true"
                className="absolute left-[17px] top-5 w-px"
                style={{
                  bottom: '20px',
                  background: 'linear-gradient(180deg, #D7E2EA 0%, #D7E2EA 85%, transparent 100%)',
                }}
              />

              {steps.map((step, i) => (
                <div key={step.title} className="relative flex gap-6 pb-8 last:pb-0">
                  {/* Step circle */}
                  <div
                    className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-mono text-sm font-bold text-white"
                    style={{ background: '#0F5C5C', boxShadow: '0 0 0 3px #ffffff, 0 0 0 4px #D7E2EA' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </div>

                  {/* Step content */}
                  <div className="min-w-0 flex-1 pb-1 pt-1">
                    <h3
                      className="text-base font-bold leading-snug"
                      style={{ color: '#102a43' }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="mt-1.5 text-sm leading-relaxed"
                      style={{ color: '#627d98' }}
                    >
                      {step.description}
                    </p>

                    {/* Connector arrow between steps (not on last) */}
                    {i < steps.length - 1 && (
                      <div
                        aria-hidden="true"
                        className="mt-3 ml-1 text-xs font-bold"
                        style={{ color: '#D8A31A' }}
                      >
                        &darr;
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
