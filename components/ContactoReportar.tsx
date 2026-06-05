export function ContactoReportar() {
  return (
    <section className="bg-white-soft py-12 lg:py-16" aria-labelledby="reportar-heading">
      <div className="site-shell">
        <p className="eyebrow">Errores</p>
        <h2 id="reportar-heading" className="mt-2 mb-6 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Reportar un error
        </h2>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4 text-sm leading-relaxed text-slate">
            <p>
              Si encuentras un error en una calculadora puedes reportarlo a través del formulario. Los errores pueden ser de cálculo, fórmula, traducción, validación de campos o de la interfaz visual. Todos los reportes ayudan a mejorar las herramientas.
            </p>
            <p>
              Para que el error sea fácil de reproducir, incluye la URL de la calculadora, los valores que ingresaste, el resultado que muestra el sitio y el resultado que esperabas obtener. Si el problema ocurre en un dispositivo o navegador específico, esa información también puede ayudar.
            </p>
            <p>
              Puedes copiar la plantilla de abajo y pegarla en el campo de mensaje del formulario.
            </p>
          </div>

          <div
            className="rounded-2xl p-5"
            style={{ background: '#F4F8FB', border: '1px solid #D7E2EA' }}
          >
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-muted">Plantilla sugerida</p>
            <pre
              className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-slate"
              aria-label="Plantilla para reportar un error"
            >{`URL de la calculadora:
Valores ingresados:
Resultado mostrado:
Resultado esperado:
Descripción del problema:`}</pre>
          </div>
        </div>
      </div>
    </section>
  );
}
