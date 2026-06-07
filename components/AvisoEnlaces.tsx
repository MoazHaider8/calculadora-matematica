import Link from 'next/link';

const links = [
  { name: 'Sobre nosotros',              href: '/sobre-nosotros'            },
  { name: 'Contacto',                    href: '/contacto'                  },
  { name: 'Política de Privacidad',      href: '/politica-de-privacidad'    },
  { name: 'Términos y Condiciones',      href: '/terminos-y-condiciones'    },
  { name: 'Todas las calculadoras',      href: '/calculadoras'              },
  { name: 'Calculadoras de Aritmética',  href: '/calculadoras/aritmetica'   },
  { name: 'Calculadoras de Estadística', href: '/calculadoras/estadistica'  },
  { name: 'Calculadoras de Geometría',   href: '/calculadoras/geometria'    },
];

export function AvisoEnlaces() {
  return (
    <section className="bg-white py-8 lg:py-11" aria-labelledby="enlaces-aviso-heading">
      <div className="site-shell">
        <p className="eyebrow">Navegación</p>
        <h2 id="enlaces-aviso-heading" className="mt-2 mb-5 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Enlaces útiles
        </h2>
        <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {links.map(link => (
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
    </section>
  );
}
