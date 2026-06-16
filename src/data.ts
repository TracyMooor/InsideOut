import { Tour, FAQItem, Testimonial } from './types';

export const TOURS_DATA: Tour[] = [
  {
    id: 'tour-autentico-8d',
    title: 'Tour Auténtico por Perú en 8 Días',
    subtitle: 'Inmersión Cultural',
    duration: '8 días',
    rating: 4.98,
    reviewCount: 245,
    priceUSD: 1919,
    image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=800',
    category: 'cultural',
    isFeatured: true,
    highlights: ['Cusco Colonial', 'Valle Sagrado', 'Machu Picchu Express', 'Lima Histórica'],
    difficulty: 'Fácil',
    location: 'Lima, Cusco, Valle Sagrado & Machu Picchu'
  },
  {
    id: 'aventura-peru-9d',
    title: 'Aventura en Perú',
    subtitle: 'Naturaleza, aventura y paisajes inolvidables en los Andes',
    duration: '9 días',
    rating: 4.95,
    reviewCount: 188,
    priceUSD: 2299,
    image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=800',
    category: 'aventura',
    isFeatured: true,
    highlights: ['Cusco', 'Valle Sagrado', 'Camino Inca', 'Montaña de Colores'],
    difficulty: 'Moderado',
    location: 'Cusco, Valle Sagrado, Camino Inca & Montaña de Colores'
  },
  {
    id: 'gastronomico-peru-8d',
    title: 'Tour Gastronómico por Perú en 8...',
    subtitle: 'Viaje Gourmet por Lima y Cusco',
    duration: '8 días',
    rating: 4.97,
    reviewCount: 156,
    priceUSD: 1989,
    image: 'https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?q=80&w=800',
    category: 'cultural',
    isFeatured: true,
    highlights: ['Clases culinarias en Lima', 'Cevichería tradicional', 'Cena de degustación Cusco', 'San Pedro'],
    difficulty: 'Fácil',
    location: 'Lima, Cusco, Valle Sagrado & Machu Picchu'
  },
  {
    id: 'peru-descubierto-10d',
    title: 'Perú al Descubierto',
    subtitle: 'De la Costa al Amazonas & Machu Picchu',
    duration: '10 días',
    rating: 4.93,
    reviewCount: 212,
    priceUSD: 2219,
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=800',
    category: 'aventura',
    isFeatured: true,
    highlights: ['Reserva Tambopata', 'Eco-Lodge en Amazonas', 'Cusco', 'Machu Picchu'],
    difficulty: 'Moderado',
    location: 'Lima, Puerto Maldonado, Cusco & Machu Picchu'
  },
  {
    id: 'peru-highlights-16d',
    title: 'Tour Perú Highlights 16 Días',
    subtitle: 'El Gran Viaje por el Sur del Perú',
    duration: '16 días',
    rating: 4.96,
    reviewCount: 389,
    priceUSD: 3249,
    image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?q=80&w=800',
    category: 'classicos',
    isFeatured: true,
    highlights: ['Arequipa Colonial', 'Lago Titicaca', 'Canyon de Colca', 'Cusco', 'Machu Picchu'],
    difficulty: 'Moderado',
    location: 'Lima, Cusco, Arequipa, Lago Titicaca, Amazonas...'
  },
  {
    id: 'maravillas-peru-9d',
    title: 'Maravillas del Perú',
    subtitle: 'Un Recorrido por Historia, Cultura y Naturaleza',
    duration: '9 días',
    rating: 4.94,
    reviewCount: 177,
    priceUSD: 1979,
    image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800',
    category: 'classicos',
    isFeatured: true,
    highlights: ['Oasis de Huacachina', 'Sobrevuelo Nazca', 'Uros Lake Titicaca', 'Machu Picchu Tour'],
    difficulty: 'Fácil',
    location: 'Machu Picchu, Lago Titicaca y Huacachina'
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
    question: '¿Qué hace que los tours de Exploor Peru sean únicos?',
    answer: 'Combinamos precisión y calidad de servicio con la hospitalidad peruana para diseñar tours 100% personalizados y privados. Nuestra filosofía principal es "Beat the Crowds" (evitar las multitudes), planificando itinerarios estratégicos para que visites Machu Picchu y otros atractivos principales en horarios de menor afluencia con guías locales apasionados.'
  },
  {
    id: 'faq-2',
    question: '¿Qué destinos puedo visitar con Exploor Peru?',
    answer: 'Operamos en todo el territorio peruano. Puedes explorar la costa (Lima, Paracas, Nazca), los Andes (Cusco, Valle Sagrado, Machu Picchu, Arequipa, Cañón del Colca, Lago Titicaca) y la selva amazónica (Tambopata, Iquitos), así como extensiones combinadas a Bolivia (Salar de Uyuni) y las Islas Galápagos.'
  },
  {
    id: 'faq-3',
    question: '¿Puedo personalizar mi itinerario de viaje en Perú?',
    answer: '¡Totalmente! Cada viaje que diseñamos es único y a medida. Tú decides la fecha de inicio, la duración, las actividades preferidas y la categoría de hotel. Nuestro equipo adaptará todo el itinerario para que se ajuste exactamente a tus sueños y ritmo de viaje.'
  },
  {
    id: 'faq-4',
    question: '¿Cuál es la mejor época para viajar por Perú?',
    answer: 'Depende de las regiones que visites. Para los Andes (Cusco, Machu Picchu) y el Amazonas, la temporada seca (de mayo a octubre) es excelente para el turismo y senderismo. Para la costa limeña y las playas del norte, la mejor época es el verano austral (de diciembre a abril).'
  },
  {
    id: 'faq-5',
    question: '¿Es seguro Perú para viajeros solos o primerizos?',
    answer: 'Sí, Perú es un destino muy acogedor y seguro para el turismo si se toman precauciones estándar. Al viajar con nosotros, cuentas con asistencia de emergencia las 24 horas del día, los 7 días de la semana, traslados privados con conductores verificados y guías certificados en cada destino.'
  },
  {
    id: 'faq-6',
    question: '¿Los guías de Exploor Peru son locales y certificados?',
    answer: 'Absolutamente. Todos nuestros guías son profesionales locales certificados, apasionados por su historia y cultura. Te brindarán no solo datos arqueológicos precisos, sino también una inmersión humana genuina en las costumbres y relatos de cada comunidad.'
  },
  {
    id: 'faq-7',
    question: '¿Cómo reservo un tour con Exploor Peru?',
    answer: 'Es muy simple. Solo debes completar nuestro formulario de contacto o escribirnos directamente a WhatsApp. Un especialista se comunicará contigo en 24 horas para co-diseñar un itinerario borrador de cortesía. Una vez que estés de acuerdo con los detalles y hoteles, procedemos a realizar la reserva oficial.'
  }
];
