import { Tour, FAQItem, Testimonial } from './types';

export const TOURS_DATA: Tour[] = [
  {
    id: 'joyas-andinas',
    title: 'Joyas Andinas & Machu Picchu',
    subtitle: 'El circuito clásico redefinido con accesos especiales y ritmo pausado',
    duration: '9 Días / 8 Noches',
    rating: 4.95,
    reviewCount: 420,
    priceUSD: 1980,
    image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=800',
    category: 'classicos',
    isFeatured: true,
    highlights: ['Boleto prioritario Machu Picchu', 'Valle Sagrado VIP', 'Hospedajes boutique históricos', 'Guías locales especializados'],
    difficulty: 'Fácil'
  },
  {
    id: 'andes-selva',
    title: 'Andes Místicos & Selva del Tambopata',
    subtitle: 'De las alturas imperiales a la biodiversidad del Amazonas virgen',
    duration: '12 Días / 11 Noches',
    rating: 4.93,
    reviewCount: 185,
    priceUSD: 2640,
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=800',
    category: 'aventura',
    isFeatured: true,
    highlights: ['Eco-lodges con certificación verde', 'Caminata nocturna por el Amazonas', 'Machu Picchu al amanecer', 'Avistamiento de guacamayos'],
    difficulty: 'Moderado'
  },
  {
    id: 'gran-ruta-incas',
    title: 'La Gran Ruta del Imperio Inca',
    subtitle: 'La inmersión total: de los templos de Cusco al sagrado Lago Titicaca',
    duration: '14 Días / 13 Noches',
    rating: 4.96,
    reviewCount: 312,
    priceUSD: 2890,
    image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?q=80&w=800',
    category: 'cultural',
    isFeatured: true,
    highlights: ['Isla Taquile con familias locales', 'Tren de lujo Titicaca Explorer', 'Salineras de Maras privadas', 'Ceremonia de pago a la Pachamama'],
    difficulty: 'Moderado'
  },
  {
    id: 'cusco-express',
    title: 'Cusco Imperial & Valle Sagrado Premium',
    subtitle: 'Los tesoros fundamentales de los Incas con máximo confort',
    duration: '6 Días / 5 Noches',
    rating: 4.89,
    reviewCount: 154,
    priceUSD: 1450,
    image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=800',
    category: 'classicos',
    isFeatured: false,
    highlights: ['Visita vespertina a Sacsayhuamán', 'Mirador de Chinchero', 'Cena degustación alta cocina', 'Tren Vistadome 360°'],
    difficulty: 'Fácil'
  },
  {
    id: 'ausangate-trek',
    title: 'Ausangate & Montaña del Arcoíris',
    subtitle: 'Un desafío alpino en el corazón espiritual de la Cordillera Vilcanota',
    duration: '5 Días / 4 Noches',
    rating: 4.91,
    reviewCount: 98,
    priceUSD: 920,
    image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=800',
    category: 'aventura',
    isFeatured: false,
    highlights: ['Camping de lujo con calefacción', 'Arrieros y caballos locales', 'Paso de montaña a 5,000m', 'Montaña Palccoyo (sin multitudes)'],
    difficulty: 'Desafiante'
  },
  {
    id: 'sabores-desierto',
    title: 'Sabores, Dunas & Enigmas del Sur',
    subtitle: 'Vanguardia gastronómica en Lima y misticismo en el desierto de Ica',
    duration: '7 Días / 6 Noches',
    rating: 4.94,
    reviewCount: 204,
    priceUSD: 1780,
    image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800',
    category: 'cultural',
    isFeatured: false,
    highlights: ['Clase privada con chef de renombre', 'Sobrevuelo Líneas de Nazca', 'Sandboard o picnic en oasis de Ica', 'Reserva Nacional de Paracas'],
    difficulty: 'Fácil'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't1',
    author: 'Clara & Jean-Pierre',
    location: 'Lyon, Francia',
    role: 'Amantes del buen vivir',
    rating: 5,
    comment: '"La organización fue impecable desde el primer minuto. El diseño de logística de Perú InsideOut nos permitió disfrutar de Machu Picchu prácticamente solos por la tarde, justo cuando cesaba la marea de turistas. Roberto y los guías en Cusco son sabios locales que cuidan cada detalle residencial."',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200',
    tripType: 'Luna de miel a medida'
  },
  {
    id: 't2',
    author: 'Familia Henderson',
    location: 'Austin, Texas',
    role: 'Padres de dos adolescentes',
    rating: 5,
    comment: '"Planificar un viaje con adolescentes no es fácil, pero el método InsideOut adaptó perfectamente caminatas dinámicas en la selva de Tambopata con ratos de comodidad absoluta en Cusco y paseos en bicicleta por el Valle Sagrado. Auténtico, educado y totalmente transparente."',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200',
    tripType: 'Aventura Familiar de Lujo'
  },
  {
    id: 't3',
    author: 'Elena Rostova',
    location: 'Berlín, Alemania',
    role: 'Fotógrafa de viajes',
    rating: 5,
    comment: '"Buscaba una aproximación no convencional y Perú InsideOut me llevó a comunidades de tejedores andinos en Chinchero y me ayudó con un permiso especial para fotografiar las salineras al atardecer. Logística rigurosa con alma local."',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200',
    tripType: 'Expedición Cultural y Fotográfica'
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    question: '¿Qué diferencia a Perú InsideOut de los grandes operadores internacionales?',
    answer: 'Somos un operador de especialidad con presencia e infraestructura propia en Lima, Cusco y Arequipa. En lugar de subcontratar y revender, operamos directamente todos nuestros traslados, contratos con guías y convenios de alojamiento, lo que nos permite un control milimétrico del confort de tu viaje y asistencia local real las 24 horas del día.'
  },
  {
    id: 'faq-2',
    question: '¿Cómo gestionan el mal de altura (soroche) en el altiplano?',
    answer: 'Nuestros itinerarios están optimizados médicamente para un ascenso gradual. Preferimos comenzar hospedándote en el Valle Sagrado (2,800m), que tiene menor altitud que la ciudad de Cusco (3,400m), para permitir que tu cuerpo se aclimate sin síntomas molestos mientras disfrutas de hermosos valles templados.'
  },
  {
    id: 'faq-3',
    question: '¿Puedo iniciar el viaje en cualquier fecha y personalizarlo?',
    answer: 'Completamente. Al no operar con salidas fijas grupales masivas, todos nuestros itinerarios se diseñan a tu medida desde cero. Tú decides la fecha exacta de inicio, los días de duración, el tipo de comida y la categoría de hotel. Tu itinerario de principio a fin es de uso exclusivo privado.'
  },
  {
    id: 'faq-4',
    question: '¿Cómo garantizan evitar las aglomeraciones del turismo de masa?',
    answer: 'La clave está en la sintonía horaria y senderos alternativos. Conocemos los flujos de los grandes buses turísticos y programamos las visitas de nuestros viajeros en los horarios valle. Además, organizamos inmersiones en comunidades que no reciben turismo de masa y caminatas exclusivas autorizadas por guías nativos.'
  },
  {
    id: 'faq-5',
    question: '¿Qué políticas de reembolso y cancelación flexible manejan?',
    answer: 'Ofrecemos la opción de reservar con un anticipo reembolsable y reprogramaciones sin penalización hasta 35 días antes del inicio de tu viaje. Entendemos que las circunstancias globales pueden variar, por lo que actuamos como aliados flexibles y directos del viajero.'
  }
];
