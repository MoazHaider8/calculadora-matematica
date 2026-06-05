import Link from 'next/link';

const secondaryCats = [
  { label: 'Cálculo',              href: '/calculadoras/calculo'              },
  { label: 'Álgebra',              href: '/calculadoras/algebra'              },
  { label: 'Aritmética',           href: '/calculadoras/aritmetica'           },
  { label: 'Estadística',          href: '/calculadoras/estadistica'          },
  { label: 'Geometría',            href: '/calculadoras/geometria'            },
  { label: 'Matrices y Vectores',  href: '/calculadoras/matrices-y-vectores'  },
];

export function SobreExplora() {
  return (
    <section className="bg-white py-12 lg:py-16" aria-labelledby="explora-heading">
      <div className="site-shell">
        <p className="eyebrow">Directorio</p>
        <h2 id="explora-heading" className="mt-2 mb-6 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Explora nuestras calculadoras
        </h2>

        <div
          className="mb-8 rounded-2xl p-6 lg:p-8"
          style={{ background: '#0a3535', border: '1px solid rgba(221,243,240,0.1)' }}
        >
          <p className="mb-2 text-lg font-bold text-white">Directorio completo de calculadoras</p>
          <p className="mb-5 text-sm leading-relaxed" style={{ color: 'rgba(221,243,240,0.7)' }}>
            Encuentra herramientas de cálculo, álgebra, aritmética, estadística, geometría y matrices y vectores en un solo lugar.
          </p>
          <Link
            href="/calculadoras"
            className="inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-bold text-ink transition-opacity hover:opacity-90"
            style={{ background: '#D8A31A' }}
          >
            Ver todas las calculadoras &rarr;
          </Link>
        </div>

        <p className="mb-4 text-[10px] font-bold uppercase tracking-widest text-muted">Ir directamente a una categoría</p>
        <div className="flex flex-wrap gap-2">
          {secondaryCats.map(cat => (
            <Link
              key={cat.href}
              href={cat.href}
              className="rounded-lg border px-4 py-2 text-sm font-semibold transition-colors hover:border-teal hover:text-deep-teal"
              style={{ borderColor: '#D7E2EA', color: '#334e68' }}
            >
              {cat.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
