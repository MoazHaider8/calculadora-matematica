import { HubRelatedGuides } from './HubRelatedGuides';

const guides = [
  { href: '/blog/media-mediana-moda-diferencias', category: 'Estadística', title: 'Media, mediana y moda: diferencias y ejemplos', description: 'Explica las diferencias entre media, mediana y moda con ejemplos concretos de uso.' },
  { href: '/blog/varianza-y-desviacion-estandar', category: 'Estadística', title: 'Varianza y desviación estándar: diferencia y ejemplos', description: 'Explica qué miden la varianza y la desviación estándar y en qué se diferencian.' },
  { href: '/blog/que-es-la-probabilidad', category: 'Estadística', title: 'Qué es la probabilidad y cómo se calcula', description: 'Explica qué es la probabilidad, cómo se calcula y cómo interpretar los resultados.' },
  { href: '/blog/poblacion-y-muestra-en-estadistica', category: 'Estadística', title: 'Población y muestra en estadística', description: 'Explica la diferencia entre población y muestra y cuándo usar cada concepto.' },
  { href: '/blog/como-interpretar-la-desviacion-estandar', category: 'Estadística', title: 'Cómo interpretar la desviación estándar', description: 'Explica cómo interpretar la desviación estándar en el contexto de un conjunto de datos.' },
];

export function EstadisticaRelated() {
  return <HubRelatedGuides headingId="estadistica-guides-heading" guides={guides} />;
}
