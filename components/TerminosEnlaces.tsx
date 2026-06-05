import Link from 'next/link';

const activeLinks = [
  { name: 'Sobre nosotros',              href: '/sobre-nosotros'            },
  { name: 'Contacto',                    href: '/contacto'                  },
  { name: 'Política de Privacidad',      href: '/politica-de-privacidad'    },
  { name: 'Todas las calculadoras',      href: '/calculadoras'              },
  { name: 'Calculadoras de Aritmética',  href: '/calculadoras/aritmetica'   },
  { name: 'Calculadoras de Estadística', href: '/calculadoras/estadistica'  },
  { name: 'Calculadoras de Geometría',   href: '/calculadoras/geometria'    },
];

export function TerminosEnlaces() {
  return (
    <section className="bg-white py-12 lg:py-16" aria-labelledby="enlaces-term-heading">
      <div className="site-shell">
        <p className="eyebrow">Navegación</p>
        <h2 id="enlaces-term-heading" className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Enlaces útiles
        </h2>

        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-muted">Páginas del sitio</p>
            <ul className="space-y-2">
              {activeLinks.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors hover:underline underline-offset-2"
                    style={{ color: '#147c7c' }}
                  >
                    {link.name} &rarr;
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-muted">Páginas legales</p>
            <div className="flex items-center gap-2">
              <span className="text-sm text-slate">Aviso Legal</span>
              <span
                className="rounded px-2 py-0.5 text-[10px] font-bold"
                style={{ background: '#EEF4F7', color: '#627d98' }}
              >
                Próximamente
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
