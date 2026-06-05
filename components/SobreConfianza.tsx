const trustPages = [
  { name: 'Contacto',                   desc: 'Envía consultas o sugerencias.',              url: '/contacto' },
  { name: 'Política de privacidad',     desc: 'Cómo gestionamos los datos del sitio.',       url: null },
  { name: 'Términos y condiciones',     desc: 'Condiciones de uso de las herramientas.',     url: null },
  { name: 'Aviso legal',                desc: 'Información legal del sitio.',                url: null },
];

import Link from 'next/link';

export function SobreConfianza() {
  return (
    <section className="bg-white-soft py-12 lg:py-16" aria-labelledby="confianza-heading">
      <div className="site-shell">
        <p className="eyebrow">Transparencia</p>
        <h2 id="confianza-heading" className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Páginas de confianza
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustPages.map(page => (
            <div
              key={page.name}
              className="flex flex-col rounded-2xl bg-white"
              style={{ border: '1px solid #D7E2EA' }}
            >
              <div className="flex-1 px-5 py-5">
                <p className="text-sm font-bold text-ink">{page.name}</p>
                <p className="mt-1.5 text-xs leading-relaxed text-slate">{page.desc}</p>
              </div>
              <div className="border-t px-5 pb-4 pt-3" style={{ borderColor: '#EEF4F7' }}>
                {page.url ? (
                  <Link
                    href={page.url}
                    className="inline-flex items-center rounded-lg px-3 py-2 text-xs font-bold transition-opacity hover:opacity-90"
                    style={{ background: '#D8A31A', color: '#0a2424' }}
                  >
                    Ver página &rarr;
                  </Link>
                ) : (
                  <span
                    className="inline-flex items-center rounded-lg px-3 py-2 text-xs font-bold opacity-55"
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
