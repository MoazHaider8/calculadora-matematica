'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { categories } from '@/lib/data';

const allCalculators = categories.flatMap((cat) =>
  cat.calculators.map((calc) => ({
    name: calc.name,
    url: calc.url,
    category: cat.name,
  })),
);

function IconSearch() {
  return (
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" aria-hidden="true">
      <circle cx="7.5" cy="7.5" r="4.5" stroke="currentColor" strokeWidth="1.6" />
      <line x1="10.8" y1="10.8" x2="14.5" y2="14.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function CalcSearchBox() {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const results =
    query.trim().length >= 2
      ? allCalculators
          .filter(
            (c) =>
              c.name.toLowerCase().includes(query.toLowerCase()) ||
              c.category.toLowerCase().includes(query.toLowerCase()),
          )
          .slice(0, 7)
      : [];

  useEffect(() => {
    const onMouseDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  return (
    <div ref={ref} className="relative w-full max-w-[560px]">
      {/* Input row */}
      <div
        className="flex overflow-hidden rounded-xl bg-white"
        style={{ boxShadow: '0 8px 32px rgba(7,30,43,0.24)' }}
      >
        <div className="flex min-w-0 flex-1 items-center gap-3 px-4 py-4 text-muted">
          <IconSearch />
          <input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setOpen(true);
            }}
            onFocus={() => setOpen(true)}
            type="search"
            placeholder="Buscar: integrales, matrices, fracciones..."
            className="min-w-0 flex-1 bg-transparent text-sm text-ink placeholder:text-muted outline-none"
            aria-label="Buscar calculadoras"
            aria-expanded={open && results.length > 0}
            aria-autocomplete="list"
            role="combobox"
          />
          {query && (
            <button
              onClick={() => { setQuery(''); setOpen(false); }}
              aria-label="Limpiar búsqueda"
              className="shrink-0 text-lg leading-none text-muted transition-colors hover:text-ink"
            >
              &times;
            </button>
          )}
        </div>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="flex items-center gap-1.5 bg-gold px-5 py-4 text-sm font-bold text-ink transition-opacity hover:opacity-90"
        >
          Buscar
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
            <line x1="1.5" y1="5.5" x2="9.5" y2="5.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            <polyline points="6,2 9.5,5.5 6,9" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Results dropdown */}
      {open && query.trim().length >= 2 && (
        <div
          className="absolute top-full z-30 mt-1.5 w-full overflow-hidden rounded-xl bg-white"
          style={{ border: '1px solid #D7E2EA', boxShadow: '0 16px 48px rgba(7,30,43,0.16)' }}
        >
          {results.length > 0 ? (
            <>
              <ul>
                {results.map((calc, i) => (
                  <li key={calc.url}>
                    <Link
                      href={calc.url}
                      onClick={() => { setQuery(''); setOpen(false); }}
                      className="flex items-center justify-between gap-3 px-4 py-3 transition-colors hover:bg-aqua-soft"
                      style={{ borderBottom: i < results.length - 1 ? '1px solid #EEF4F7' : 'none' }}
                    >
                      <div>
                        <p className="text-sm font-bold text-ink">{calc.name}</p>
                        <p className="text-xs text-muted">{calc.category}</p>
                      </div>
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true" style={{ color: '#147c7c' }}>
                        <line x1="1.5" y1="5" x2="8.5" y2="5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                        <polyline points="5.5,2 8.5,5 5.5,8" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="px-4 py-2.5" style={{ borderTop: '1px solid #EEF4F7', background: '#F8FAFC' }}>
                <p className="text-xs font-semibold text-muted">
                  {results.length} resultado{results.length !== 1 ? 's' : ''} encontrado{results.length !== 1 ? 's' : ''}
                </p>
              </div>
            </>
          ) : (
            <div className="px-4 py-4">
              <p className="text-sm text-slate-soft">
                Sin resultados para &ldquo;<span className="font-semibold">{query}</span>&rdquo;
              </p>
              <p className="mt-1 text-xs text-muted">Prueba con: integrales, matrices, porcentajes, derivadas</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
