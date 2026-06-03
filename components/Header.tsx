'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { megaMenuCategories, navItems } from '@/lib/data';

function IconMenu() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <line x1="3" y1="5.5" x2="17" y2="5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="3" y1="10" x2="17" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="3" y1="14.5" x2="17" y2="14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconClose() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <line x1="4" y1="4" x2="16" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="16" y1="4" x2="4" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconChevron({ open }: { open: boolean }) {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 11 11"
      fill="none"
      aria-hidden="true"
      style={{ transform: open ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.18s' }}
    >
      <path d="M1.5 4L5.5 8L9.5 4" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BrandMark() {
  return (
    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-deep-teal text-sm font-black text-white-soft shadow-[0_8px_18px_rgba(15,92,92,0.2)]">
      Σ
    </span>
  );
}

function MegaMenu({ onClose }: { onClose: () => void }) {
  const total = megaMenuCategories.reduce((count, category) => count + category.calculators.length, 0);

  return (
    <div className="absolute left-0 right-0 top-full z-40 border-t border-line bg-white-soft shadow-[0_24px_60px_rgba(16,42,67,0.12)]">
      <div className="site-shell py-8">
        <div className="mb-7 flex items-end justify-between gap-8">
          <div>
            <p className="eyebrow">Directorio matemático</p>
            <p className="mt-2 max-w-xl text-sm text-slate-soft">
              Accede a calculadoras organizadas por área, con fórmulas y pasos pensados para estudiar en español.
            </p>
          </div>
          <Link
            href="/calculadoras"
            onClick={onClose}
            className="hidden rounded-lg bg-deep-teal px-4 py-2 text-sm font-bold text-white-soft transition-colors hover:bg-teal md:inline-flex"
          >
            Ver directorio
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-7 md:grid-cols-3 lg:grid-cols-6">
          {megaMenuCategories.map((cat) => (
            <div key={cat.slug}>
              <Link
                href={`/calculadoras/${cat.slug}/`}
                onClick={onClose}
                className="mb-2 block text-sm font-bold text-ink transition-colors hover:text-teal"
              >
                {cat.name}
              </Link>
              <p className="mb-3 text-[0.75rem] leading-snug text-muted">{cat.description}</p>
              <ul className="space-y-2">
                {cat.calculators.map((calc) => (
                  <li key={calc.url}>
                    <Link href={calc.url} onClick={onClose} className="block text-[0.8125rem] leading-snug text-slate-soft transition-colors hover:text-teal">
                      {calc.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between border-t border-line pt-5">
          <p className="text-xs font-semibold text-muted">{total} calculadoras en 6 áreas principales</p>
          <Link href="/calculadoras" onClick={onClose} className="text-xs font-bold text-teal transition-colors hover:text-deep-teal md:hidden">
            Ver directorio completo &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}

function MobileDrawer({ onClose }: { onClose: () => void }) {
  const [openCat, setOpenCat] = useState(false);

  return (
    <div className="fixed inset-0 z-50 flex">
      <button className="absolute inset-0 bg-[rgba(7,30,43,0.58)]" onClick={onClose} aria-label="Cerrar menú" />
      <nav className="relative ml-auto flex h-full w-[min(390px,92vw)] flex-col overflow-y-auto border-l border-line bg-white-soft" aria-label="Menú principal móvil">
        <div className="flex items-center justify-between border-b border-line px-6 py-4">
          <Link href="/" onClick={onClose} className="flex items-center gap-3">
            <BrandMark />
            <span className="font-heading text-base font-bold text-ink">Calculadoras Matemáticas</span>
          </Link>
          <button onClick={onClose} aria-label="Cerrar" className="p-1 text-muted transition-colors hover:text-ink">
            <IconClose />
          </button>
        </div>

        <div className="flex-1 px-6 py-2">
          {navItems.map((item) =>
            item.hasMegaMenu ? (
              <div key={item.href} className="border-b border-line">
                <button
                  onClick={() => setOpenCat((value) => !value)}
                  className="flex w-full items-center justify-between py-4 text-sm font-bold text-slate transition-colors hover:text-teal"
                >
                  {item.label}
                  <IconChevron open={openCat} />
                </button>
                {openCat && (
                  <div className="space-y-5 pb-5">
                    {megaMenuCategories.map((cat) => (
                      <div key={cat.slug}>
                        <Link href={`/calculadoras/${cat.slug}/`} onClick={onClose} className="mb-2 block text-sm font-bold text-teal">
                          {cat.name}
                        </Link>
                        <ul className="space-y-1.5">
                          {cat.calculators.map((calc) => (
                            <li key={calc.url}>
                              <Link href={calc.url} onClick={onClose} className="block py-0.5 text-sm text-muted transition-colors hover:text-ink">
                                {calc.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link key={item.href} href={item.href} onClick={onClose} className="flex border-b border-line py-4 text-sm font-bold text-slate transition-colors hover:text-teal">
                {item.label}
              </Link>
            ),
          )}
        </div>

        <div className="border-t border-line px-6 pb-8 pt-4">
          <Link href="/calculadoras" onClick={onClose} className="block w-full rounded-lg bg-deep-teal py-3 text-center text-sm font-bold text-white-soft transition-colors hover:bg-teal">
            Explorar calculadoras
          </Link>
        </div>
      </nav>
    </div>
  );
}

export function Header() {
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setMegaOpen(false);
      }
    };

    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  useEffect(
    () => () => {
      if (hoverTimer.current) {
        clearTimeout(hoverTimer.current);
      }
    },
    [],
  );

  const openMega = useCallback(() => {
    if (hoverTimer.current) {
      clearTimeout(hoverTimer.current);
    }
    setMegaOpen(true);
  }, []);

  const closeMegaDelayed = useCallback(() => {
    hoverTimer.current = setTimeout(() => setMegaOpen(false), 150);
  }, []);

  const cancelClose = useCallback(() => {
    if (hoverTimer.current) {
      clearTimeout(hoverTimer.current);
    }
  }, []);

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled ? 'shadow-[0_12px_32px_rgba(16,42,67,0.1)]' : ''
      }`}
    >
      <div className="bg-ocean text-white-soft">
        <div className="site-shell flex h-9 items-center justify-between text-xs">
          <p className="font-semibold">Plataforma educativa de calculadoras matemáticas en español</p>
          <p className="hidden text-panel-3 sm:block">30+ herramientas · 6 áreas · Fórmulas y pasos</p>
        </div>
      </div>

      <div className="bg-ocean">
        <div className="site-shell">
          <div className="flex h-[68px] items-center justify-between">
            <Link href="/" className="flex shrink-0 items-center gap-3">
              <BrandMark />
              <span className="font-heading text-[1.05rem] font-bold leading-tight text-white">
                Calculadoras
                <span className="block text-[0.78rem] font-semibold" style={{ color: '#DDF3F0' }}>Matemáticas</span>
              </span>
            </Link>

            <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegación principal">
              {navItems.map((item) =>
                item.hasMegaMenu ? (
                  <div key={item.href} onMouseEnter={openMega} onMouseLeave={closeMegaDelayed} className="relative">
                    <button
                      aria-expanded={megaOpen}
                      aria-haspopup="true"
                      className={`flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-bold transition-colors ${
                        megaOpen ? 'text-gold' : 'text-white/80 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      {item.label}
                      <IconChevron open={megaOpen} />
                    </button>
                  </div>
                ) : (
                  <Link key={item.href} href={item.href} className="rounded-lg px-3 py-2 text-sm font-bold text-white/80 transition-colors hover:bg-white/10 hover:text-white">
                    {item.label}
                  </Link>
                ),
              )}
            </nav>

            <div className="flex items-center gap-3">
              <Link
                href="/calculadoras"
                className="hidden rounded-full px-5 py-2.5 text-sm font-bold transition-all hover:opacity-90 lg:inline-flex"
                style={{ background: '#147c7c', color: '#ffffff' }}
              >
                Ver calculadoras
              </Link>
              <button onClick={() => setMobileOpen(true)} aria-label="Abrir menú" className="p-1 text-white/70 transition-colors hover:text-white lg:hidden">
                <IconMenu />
              </button>
            </div>
          </div>
        </div>
      </div>

      {megaOpen && (
        <div onMouseEnter={cancelClose} onMouseLeave={closeMegaDelayed}>
          <MegaMenu onClose={() => setMegaOpen(false)} />
        </div>
      )}
      {mobileOpen && <MobileDrawer onClose={() => setMobileOpen(false)} />}
    </header>
  );
}
