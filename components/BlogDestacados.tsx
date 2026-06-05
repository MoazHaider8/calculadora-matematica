import Link from 'next/link';

const featured = [
  {
    category:    'Aritmética',
    title:       'Cómo calcular porcentajes',
    desc:        'Aprende a calcular porcentajes, descuentos, aumentos y cambios porcentuales con ejemplos claros.',
    calcUrl:     '/calculadoras/aritmetica/calculadora-de-porcentajes/',
    calcLabel:   'Calculadora de porcentajes',
    articleUrl:  '/blog/como-calcular-porcentajes' as string | undefined,
  },
  {
    category:    'Geometría',
    title:       'Fórmulas de área',
    desc:        'Repasa las fórmulas de área más usadas para cuadrados, rectángulos, triángulos, círculos y otras figuras.',
    calcUrl:     '/calculadoras/geometria/calculadora-de-area/',
    calcLabel:   'Calculadora de área',
    articleUrl:  '/blog/formulas-de-area' as string | undefined,
  },
  {
    category:    'Estadística',
    title:       'Media, mediana y moda: diferencias',
    desc:        'Entiende la diferencia entre medidas de tendencia central y cuándo usar cada una.',
    calcUrl:     '/calculadoras/estadistica/calculadora-de-estadistica/',
    calcLabel:   'Calculadora de estadística',
    articleUrl:  '/blog/media-mediana-moda-diferencias' as string | undefined,
  },
];

export function BlogDestacados() {
  return (
    <section className="bg-white-soft py-12 lg:py-16" aria-labelledby="destacados-heading">
      <div className="site-shell">
        <p className="eyebrow">Lo más próximo</p>
        <h2 id="destacados-heading" className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Artículos destacados
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map(article => (
            <div
              key={article.title}
              className="flex flex-col overflow-hidden rounded-2xl bg-white"
              style={{ border: '1px solid #D7E2EA' }}
            >
              <div className="flex-1 px-5 pt-5 pb-4">
                <span
                  className="mb-3 inline-block rounded-md px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest"
                  style={{ background: '#DDF3F0', color: '#147c7c' }}
                >
                  {article.category}
                </span>
                <p className="text-sm font-bold text-ink leading-snug">{article.title}</p>
                <p className="mt-2 text-xs leading-relaxed text-slate">{article.desc}</p>
              </div>
              <div className="flex items-center justify-between border-t px-5 py-3" style={{ borderColor: '#EEF4F7' }}>
                <Link
                  href={article.calcUrl}
                  className="text-xs font-semibold transition-colors hover:underline underline-offset-2"
                  style={{ color: '#147c7c' }}
                >
                  {article.calcLabel} &rarr;
                </Link>
                {article.articleUrl ? (
                  <Link
                    href={article.articleUrl}
                    className="text-xs font-bold transition-colors hover:underline underline-offset-2"
                    style={{ color: '#D8A31A' }}
                  >
                    Leer artículo &rarr;
                  </Link>
                ) : (
                  <span
                    className="rounded-md px-2.5 py-1 text-[10px] font-bold opacity-60"
                    style={{ background: '#D7E2EA', color: '#627d98' }}
                  >
                    Próximamente
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
