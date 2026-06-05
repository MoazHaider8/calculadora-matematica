import Link from 'next/link';

const links = [
  { name: 'Todas las calculadoras',             href: '/calculadoras'                      },
  { name: 'Calculadoras de Aritmética',         href: '/calculadoras/aritmetica'           },
  { name: 'Calculadoras de Álgebra',            href: '/calculadoras/algebra'              },
  { name: 'Calculadoras de Cálculo',            href: '/calculadoras/calculo'              },
  { name: 'Calculadoras de Estadística',        href: '/calculadoras/estadistica'          },
  { name: 'Calculadoras de Geometría',          href: '/calculadoras/geometria'            },
  { name: 'Calculadoras de Matrices y Vectores', href: '/calculadoras/matrices-y-vectores' },
  { name: 'Sobre nosotros',                     href: '/sobre-nosotros'                    },
  { name: 'Contacto',                           href: '/contacto'                          },
];

export function BlogEnlaces() {
  return (
    <section className="bg-white py-12 lg:py-16" aria-labelledby="blog-enlaces-heading">
      <div className="site-shell">
        <p className="eyebrow">Navegación</p>
        <h2 id="blog-enlaces-heading" className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
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
