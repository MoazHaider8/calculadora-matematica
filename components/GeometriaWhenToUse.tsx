import { HubWhenToUse } from './HubWhenToUse';

const rows = [
  { situation: 'Calcular la superficie de figuras planas como rectángulos o triángulos', tool: 'Calculadora de Área', href: '/calculadoras/geometria/calculadora-de-area' },
  { situation: 'Calcular el espacio que ocupa un cuerpo geométrico', tool: 'Calculadora de Volumen', href: '/calculadoras/geometria/calculadora-de-volumen' },
  { situation: 'Resolver medidas de cualquier tipo de triángulo', tool: 'Calculadora de Triángulos', href: '/calculadoras/geometria/calculadora-de-triangulos' },
  { situation: 'Calcular radio, diámetro, área o circunferencia de un círculo', tool: 'Calculadora de Círculos', href: '/calculadoras/geometria/calculadora-de-circulos' },
  { situation: 'Encontrar la hipotenusa o un cateto de un triángulo rectángulo', tool: 'Calculadora de Pitágoras', href: '/calculadoras/geometria/calculadora-de-pitagoras' },
];

export function GeometriaWhenToUse() {
  return <HubWhenToUse headingId="geometria-when-heading" rows={rows} />;
}
