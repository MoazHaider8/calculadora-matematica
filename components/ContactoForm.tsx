'use client';

import { useState, FormEvent } from 'react';

type FieldErrors = Record<string, string>;

const MOTIVOS = [
  { value: '',                       label: 'Selecciona un motivo'       },
  { value: 'error',                  label: 'Reportar un error'          },
  { value: 'sugerencia',             label: 'Sugerir una calculadora'    },
  { value: 'consulta',               label: 'Consulta general'           },
  { value: 'correccion',             label: 'Corrección de contenido'    },
  { value: 'otro',                   label: 'Otro'                       },
];

function isValidUrl(value: string): boolean {
  try {
    const url = new URL(value);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch {
    return false;
  }
}

function validate(fields: Record<string, string>): FieldErrors {
  const errors: FieldErrors = {};
  if (!fields.nombre.trim())         errors.nombre  = 'El nombre es obligatorio.';
  if (!fields.correo.trim())         errors.correo  = 'El correo es obligatorio.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.correo))
                                     errors.correo  = 'Introduce un correo electrónico válido.';
  if (!fields.motivo)                errors.motivo  = 'Selecciona un motivo.';
  if (!fields.mensaje.trim())        errors.mensaje = 'El mensaje es obligatorio.';
  if (fields.url.trim() && !isValidUrl(fields.url.trim()))
                                     errors.url     = 'La URL no es válida. Debe comenzar con http:// o https://';
  return errors;
}

export function ContactoForm() {
  const [fields, setFields] = useState({
    nombre:  '',
    correo:  '',
    motivo:  '',
    url:     '',
    mensaje: '',
  });
  const [errors,    setErrors]    = useState<FieldErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const set = (key: keyof typeof fields) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setFields(prev => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const errs = validate(fields);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const labelCls = 'block text-sm font-bold text-ink mb-1.5';
  const inputCls = (field: string) =>
    `w-full rounded-xl border px-4 py-3 text-sm text-ink placeholder-muted bg-white focus:outline-none focus:ring-2 focus:ring-teal ${
      errors[field] ? 'border-red-400' : 'border-[#D7E2EA]'
    }`;

  if (submitted) {
    return (
      <section className="bg-white-soft py-12 lg:py-16" aria-labelledby="form-heading">
        <div className="site-shell">
          <p className="eyebrow">Formulario</p>
          <h2 id="form-heading" className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
            Envíanos un mensaje
          </h2>
          <div
            className="max-w-lg rounded-2xl p-6"
            style={{ background: '#DDF3F0', border: '1px solid #b2ddd9' }}
            role="alert"
          >
            <p className="text-sm font-bold text-ink">Formulario recibido</p>
            <p className="mt-2 text-sm leading-relaxed text-slate">
              El formulario está listo, pero falta configurar el envío para recibir mensajes reales.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white-soft py-12 lg:py-16" aria-labelledby="form-heading">
      <div className="site-shell">
        <p className="eyebrow">Formulario</p>
        <h2 id="form-heading" className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Envíanos un mensaje
        </h2>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="max-w-lg space-y-6"
          aria-label="Formulario de contacto"
        >
          <div>
            <label htmlFor="nombre" className={labelCls}>
              Nombre <span className="text-red-500" aria-hidden="true">*</span>
            </label>
            <input
              id="nombre"
              type="text"
              value={fields.nombre}
              onChange={set('nombre')}
              className={inputCls('nombre')}
              placeholder="Tu nombre"
              aria-required="true"
              aria-describedby={errors.nombre ? 'nombre-error' : undefined}
              autoComplete="name"
            />
            {errors.nombre && (
              <p id="nombre-error" className="mt-1.5 text-xs text-red-600" role="alert">{errors.nombre}</p>
            )}
          </div>

          <div>
            <label htmlFor="correo" className={labelCls}>
              Correo electrónico <span className="text-red-500" aria-hidden="true">*</span>
            </label>
            <input
              id="correo"
              type="email"
              value={fields.correo}
              onChange={set('correo')}
              className={inputCls('correo')}
              placeholder="tu@correo.com"
              aria-required="true"
              aria-describedby={errors.correo ? 'correo-error' : undefined}
              autoComplete="email"
            />
            {errors.correo && (
              <p id="correo-error" className="mt-1.5 text-xs text-red-600" role="alert">{errors.correo}</p>
            )}
          </div>

          <div>
            <label htmlFor="motivo" className={labelCls}>
              Motivo del mensaje <span className="text-red-500" aria-hidden="true">*</span>
            </label>
            <select
              id="motivo"
              value={fields.motivo}
              onChange={set('motivo')}
              className={inputCls('motivo')}
              aria-required="true"
              aria-describedby={errors.motivo ? 'motivo-error' : undefined}
            >
              {MOTIVOS.map(m => (
                <option key={m.value} value={m.value} disabled={m.value === ''}>
                  {m.label}
                </option>
              ))}
            </select>
            {errors.motivo && (
              <p id="motivo-error" className="mt-1.5 text-xs text-red-600" role="alert">{errors.motivo}</p>
            )}
          </div>

          <div>
            <label htmlFor="url" className={labelCls}>
              URL de la página relacionada
              <span className="ml-1 text-xs font-normal text-muted">(opcional)</span>
            </label>
            <input
              id="url"
              type="url"
              value={fields.url}
              onChange={set('url')}
              className={inputCls('url')}
              placeholder="https://calculadoramatematica.com/calculadoras/..."
              aria-describedby="url-hint url-error"
              autoComplete="url"
            />
            <p id="url-hint" className="mt-1.5 text-xs text-muted">
              Si tu mensaje se relaciona con una calculadora específica, pega aquí la URL de esa página.
            </p>
            {errors.url && (
              <p id="url-error" className="mt-1 text-xs text-red-600" role="alert">{errors.url}</p>
            )}
          </div>

          <div>
            <label htmlFor="mensaje" className={labelCls}>
              Mensaje <span className="text-red-500" aria-hidden="true">*</span>
            </label>
            <textarea
              id="mensaje"
              value={fields.mensaje}
              onChange={set('mensaje')}
              rows={6}
              className={inputCls('mensaje')}
              placeholder="Escribe tu mensaje aquí..."
              aria-required="true"
              aria-describedby={errors.mensaje ? 'mensaje-error' : undefined}
            />
            {errors.mensaje && (
              <p id="mensaje-error" className="mt-1.5 text-xs text-red-600" role="alert">{errors.mensaje}</p>
            )}
          </div>

          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold transition-opacity hover:opacity-90"
            style={{ background: '#D8A31A', color: '#0a2424' }}
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
}
