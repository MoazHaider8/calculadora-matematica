import Link from 'next/link';
import { categories } from '@/lib/data';

const popularFooterLinks = [
  { name: 'Calculadora científica', url: '/calculadoras/aritmetica/calculadora-cientifica/' },
  { name: 'Calculadora de porcentajes', url: '/calculadoras/aritmetica/calculadora-de-porcentajes/' },
  { name: 'Calculadora de integrales', url: '/calculadoras/calculo/calculadora-de-integrales/' },
  { name: 'Calculadora de derivadas', url: '/calculadoras/calculo/calculadora-de-derivadas/' },
  { name: 'Calculadora de matrices', url: '/calculadoras/matrices-y-vectores/calculadora-de-matrices/' },
  { name: 'Calculadora de fracciones', url: '/calculadoras/aritmetica/calculadora-de-fracciones/' },
  { name: 'Calculadora de ecuaciones', url: '/calculadoras/algebra/calculadora-de-ecuaciones/' },
  { name: 'Calculadora de promedio', url: '/calculadoras/aritmetica/calculadora-de-promedio/' },
];

const legalLinks = [
  { name: 'Sobre nosotros', url: '/sobre-nosotros' },
  { name: 'Términos y Condiciones', url: '/terminos-y-condiciones' },
  { name: 'Política de Privacidad', url: '/politica-de-privacidad' },
  { name: 'Aviso Legal', url: '/aviso-legal' },
  { name: 'Contacto', url: '/contacto' },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-footer text-white-soft" aria-label="Pie de página">
      <div className="h-[4px] bg-gold" />

      <div className="site-shell py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-4">
            <Link href="/" className="mb-5 inline-flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold font-heading text-sm font-black text-ink">
                Σ
              </span>
              <span className="font-heading text-[1.125rem] leading-snug text-white-soft">Calculadoras Matemáticas</span>
            </Link>
            <p className="max-w-[330px] text-sm leading-relaxed text-panel-3">
              Una plataforma educativa para resolver, entender y verificar operaciones matemáticas en español.
            </p>
            <div className="mt-7 rounded-lg border border-dark-teal bg-ocean p-5">
              <p className="text-sm font-bold text-white-soft">Explora el directorio completo</p>
              <p className="mt-2 text-xs leading-relaxed text-panel-3">Calculadoras organizadas por cálculo, álgebra, matrices, aritmética, estadística y geometría.</p>
              <Link href="/calculadoras" className="mt-4 inline-flex rounded-lg bg-gold px-4 py-2 text-sm font-black text-ink transition-colors hover:bg-[#e6b636]">
                Ver calculadoras
              </Link>
            </div>
          </div>

          <div className="lg:col-span-2">
            <p className="mb-4 text-xs font-bold uppercase text-gold">Categorías</p>
            <ul className="space-y-2.5">
              {categories.map((cat) => (
                <li key={cat.slug}>
                  <Link href={`/calculadoras/${cat.slug}/`} className="text-[0.8125rem] text-panel-3 transition-colors hover:text-white-soft">
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="mb-4 text-xs font-bold uppercase text-gold">Calculadoras populares</p>
            <ul className="space-y-2.5">
              {popularFooterLinks.map((link) => (
                <li key={link.url}>
                  <Link href={link.url} className="text-[0.8125rem] text-panel-3 transition-colors hover:text-white-soft">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="mb-4 text-xs font-bold uppercase text-gold">Legal</p>
            <ul className="space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.url}>
                  <Link href={link.url} className="text-[0.8125rem] text-panel-3 transition-colors hover:text-white-soft">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-7 border-t border-dark-teal pt-5">
              <p className="mb-2 text-xs font-bold uppercase text-gold">Contacto</p>
              <p className="text-[0.8125rem] text-panel-3">consultas@calculadoramatematica.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-dark-teal">
        <div className="site-shell flex flex-col items-center justify-between gap-3 py-4 sm:flex-row">
          <p className="text-xs text-muted-2">&copy; {year} Calculadoras Matemáticas. Todos los derechos reservados.</p>
          <p className="text-xs text-muted-2">Herramientas matemáticas en español para estudiar con claridad.</p>
        </div>
      </div>
    </footer>
  );
}
