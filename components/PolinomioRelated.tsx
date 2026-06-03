import Link from 'next/link';

const related = [
  { label: 'Calculadoras de Álgebra',       category: 'Categoría', desc: 'Explora todas las herramientas de álgebra organizadas por tema.',           href: '/calculadoras/algebra' },
  { label: 'Calculadora de Ecuaciones',      category: 'Álgebra',   desc: 'Resuelve ecuaciones lineales, cuadráticas y sistemas 2×2.',                  href: '/calculadoras/algebra/calculadora-de-ecuaciones' },
  { label: 'Calculadora Algebraica',         category: 'Álgebra',   desc: 'Simplifica, expande, factoriza y evalúa expresiones algebraicas generales.', href: '/calculadoras/algebra/calculadora-algebraica' },
  { label: 'Calculadora de Exponentes',      category: 'Cálculo',   desc: 'Calcula potencias, exponentes negativos y fraccionarios.',                   href: '/calculadoras/calculo/calculadora-de-exponentes' },
  { label: 'Calculadora de Raíces',          category: 'Álgebra',   desc: 'Calcula los ceros de expresiones algebraicas.',                              href: null },
  { label: 'Calculadora de Raíz Cuadrada',   category: 'Álgebra',   desc: 'Calcula raíces cuadradas exactas y aproximadas.',                            href: null },
];

export function PolinomioRelated() {
  return (
    <section className="bg-page py-10 lg:py-14" aria-labelledby="related-pol-heading">
      <div className="site-shell">
        <div className="mb-7">
          <p className="eyebrow">Herramientas relacionadas</p>
          <h2 id="related-pol-heading" className="mt-2 text-[1.6rem] font-bold text-ink lg:text-[1.9rem]">Calculadoras relacionadas</h2>
        </div>
        <div className="academic-card divide-y divide-line overflow-hidden">
          {related.map((r) => {
            const inner = (
              <>
                <div className="mt-0.5 shrink-0">
                  <span className="inline-block rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide" style={{ background: '#DDF3F0', color: '#0f5c5c' }}>{r.category}</span>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-ink">{r.label}</p>
                  <p className="mt-0.5 text-xs text-muted">{r.desc}</p>
                </div>
                <div className="shrink-0">
                  {r.href ? <span className="text-teal" aria-hidden="true">›</span>
                  : <span className="rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide" style={{ background: '#FFF4CC', color: '#b58000' }}>Próximamente</span>}
                </div>
              </>
            );
            return r.href
              ? <Link key={r.label} href={r.href} className="flex items-start gap-4 px-6 py-4 transition-colors hover:bg-aqua-soft">{inner}</Link>
              : <div key={r.label} className="flex items-start gap-4 px-6 py-4 opacity-70" aria-label={`${r.label} — próximamente`}>{inner}</div>;
          })}
        </div>
      </div>
    </section>
  );
}
