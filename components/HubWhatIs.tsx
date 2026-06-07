interface Props {
  headingId: string;
  topics: string[];
  paragraphs: string[];
}

export function HubWhatIs({ headingId, topics, paragraphs }: Props) {
  return (
    <section
      className="py-12 lg:py-16"
      style={{ background: '#EEF4F7' }}
      aria-labelledby={headingId}
    >
      <div className="site-shell">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">

          {/* Left: heading + topic pills */}
          <div className="lg:col-span-4">
            <p className="eyebrow">Sobre esta categoría</p>
            <h2
              id={headingId}
              className="mt-3 text-[1.85rem] font-bold leading-tight lg:text-[2.2rem]"
              style={{ color: '#0a3535' }}
            >
              Qué incluye esta categoría
            </h2>
            <div className="mt-6">
              <p className="mb-3 text-xs font-bold uppercase tracking-wider" style={{ color: '#829ab1' }}>
                Temas cubiertos
              </p>
              <div className="flex flex-col gap-2">
                {topics.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center gap-2 text-sm font-semibold"
                    style={{ color: '#0F5C5C' }}
                  >
                    <span
                      className="h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ background: '#D8A31A' }}
                      aria-hidden="true"
                    />
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: body text */}
          <div className="lg:col-span-8">
            <div
              className="rounded-2xl bg-white p-7"
              style={{ border: '1px solid #D7E2EA', boxShadow: '0 2px 12px rgba(16,42,67,0.05)' }}
            >
              {paragraphs.map((para, i) => (
                <p
                  key={i}
                  className={`text-base leading-relaxed${i > 0 ? ' mt-4' : ''}`}
                  style={{ color: '#334e68' }}
                >
                  {para}
                </p>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
