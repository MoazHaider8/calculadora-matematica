export function PorcentajesRespuestaRapida() {
  return (
    <section className="bg-white-soft py-8 lg:py-10" aria-labelledby="respuesta-rapida-h">
      <div className="site-shell">
        <div
          className="mx-auto max-w-2xl rounded-2xl px-6 py-6 lg:px-8 lg:py-7"
          style={{ border: '2px solid #D8A31A', background: '#FFFEF7' }}
        >
          <h2 id="respuesta-rapida-h" className="mb-3 text-base font-bold" style={{ color: '#D8A31A' }}>
            Respuesta rápida
          </h2>
          <p className="text-sm leading-relaxed text-slate">
            Para calcular el porcentaje de una cantidad, multiplica la cantidad por el porcentaje y divide el resultado entre 100.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl px-5 py-4 font-mono text-sm text-white" style={{ background: '#0a3535' }}>
            resultado = cantidad × porcentaje / 100
          </div>
          <div className="mt-3 overflow-x-auto rounded-xl px-5 py-3" style={{ background: '#DDF3F0' }}>
            <p className="font-mono text-sm" style={{ color: '#0a3535' }}>
              20% de 150 = 150 × 20 / 100 = <strong style={{ color: '#147c7c' }}>30</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
