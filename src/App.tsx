import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Compass, 
  MapPin, 
  Calendar, 
  Star, 
  Phone, 
  Mail, 
  ArrowRight, 
  ChevronDown, 
  ChevronUp, 
  Check, 
  Users, 
  Sliders, 
  Clock, 
  Heart, 
  Filter, 
  Award, 
  ShieldCheck, 
  Sparkles, 
  Menu, 
  X, 
  Send, 
  CheckCircle2, 
  CheckCircle,
  HelpCircle,
  Search,
  MessageSquare,
  Globe,
  Utensils
} from 'lucide-react';

import { Tour, FAQItem, Testimonial, PlannerState } from './types';
import { TOURS_DATA, TESTIMONIALS_DATA, FAQ_DATA } from './data';

export default function App() {
  // Mobile menu control
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Active filter category for tours
  const [activeTourCategory, setActiveTourCategory] = useState<string>('all');
  
  // Expanded tour card details
  const [expandedTourId, setExpandedTourId] = useState<string | null>(null);

  // Testimonials carousel active index
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // FAQ search query and expanded FAQs state
  const [faqSearch, setFaqSearch] = useState('');
  const [expandedFaqId, setExpandedFaqId] = useState<string | null>('faq-1');

  // Travel Planner wizard state
  const [planner, setPlanner] = useState<PlannerState>({
    step: 1,
    companion: '',
    style: '',
    duration: 10,
    interests: [],
    name: '',
    email: '',
    whatsapp: '',
    specialRequests: ''
  });

  const [plannerSubmitted, setPlannerSubmitted] = useState(false);
  const [loadingPlanner, setLoadingPlanner] = useState(false);

  // Automatically rotate testimonials every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  // Filtered tours computed value
  const filteredTours = useMemo(() => {
    if (activeTourCategory === 'all') return TOURS_DATA;
    return TOURS_DATA.filter(tour => tour.category === activeTourCategory);
  }, [activeTourCategory]);

  // Filtered FAQs computed value基于 search input
  const filteredFAQs = useMemo(() => {
    const query = faqSearch.toLowerCase().trim();
    if (!query) return FAQ_DATA;
    return FAQ_DATA.filter(
      faq => faq.question.toLowerCase().includes(query) || faq.answer.toLowerCase().includes(query)
    );
  }, [faqSearch]);

  // Handle travel style selection from planner, scrolling into it
  const handleSelectAndCustomize = (tour: Tour) => {
    setPlanner(prev => ({
      ...prev,
      style: tour.category === 'classicos' ? 'lujo' : tour.category,
      duration: tour.id === 'joyas-andinas' ? 9 : tour.id === 'andes-selva' ? 12 : tour.id === 'gran-ruta-incas' ? 14 : 10,
      specialRequests: `Me interesa personalizar el tour sugerido: "${tour.title}"`
    }));
    // Scroll smoothly to planner card
    document.getElementById('planner')?.scrollIntoView({ behavior: 'smooth' });
    setPlanner(prev => ({ ...prev, step: 2 }));
  };

  // Toggle companion choice in planner Wizard
  const chooseCompanion = (value: string) => {
    setPlanner(prev => ({ ...prev, companion: value, step: 2 }));
  };

  // Toggle interest tags in step 3
  const toggleInterest = (interest: string) => {
    setPlanner(prev => {
      const exists = prev.interests.includes(interest);
      if (exists) {
        return { ...prev, interests: prev.interests.filter(i => i !== interest) };
      } else {
        return { ...prev, interests: [...prev.interests, interest] };
      }
    });
  };

  // Submit travel planner Wizard with interactive loader
  const handlePlannerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!planner.name || !planner.email || !planner.whatsapp) return;
    
    setLoadingPlanner(true);
    setTimeout(() => {
      setLoadingPlanner(false);
      setPlannerSubmitted(true);
    }, 1800);
  };

  // Reset planner
  const resetPlanner = () => {
    setPlanner({
      step: 1,
      companion: '',
      style: '',
      duration: 10,
      interests: [],
      name: '',
      email: '',
      whatsapp: '',
      specialRequests: ''
    });
    setPlannerSubmitted(false);
  };

  // Mock auto itinerary generated in response to inputs for luxury touch
  const generatedItineraryName = useMemo(() => {
    const styleLabel = 
      planner.style === 'cultural' ? 'Expedición de Sabiduría de los Incas' :
      planner.style === 'aventura' ? 'Ruta de la Aventura y Selva Cruda' :
      'Encuentro Exclusivo de Lujo y Alta Cocina';
    
    const companionLabel = 
      planner.companion === 'pareja' ? 'Privado para Parejas' :
      planner.companion === 'familia' ? 'Boutique Familiar' :
      planner.companion === 'amigos' ? 'Andes VIP Grupal' :
      'Explorador Solitario Solo';

    return `${styleLabel} (${companionLabel})`;
  }, [planner.style, planner.companion]);

  return (
    <div className="min-h-screen bg-brand-cream text-brand-charcoal font-sans selection:bg-brand-terracotta selection:text-white relative">
      
      {/* 1. HEADER / NAVIGATION */}
      <header id="header" className="absolute top-0 left-0 w-full z-50 bg-gradient-to-b from-black/85 via-black/50 to-transparent transition-all duration-300">
        
        {/* Top Info Bar */}
        <div className="border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-12 flex items-center justify-between text-[11px] sm:text-xs text-white/90">
            
            {/* Left side: phone & email */}
            <div className="flex items-center space-x-4 sm:space-x-6">
              <a href="tel:+17864603922" className="flex items-center space-x-1.5 hover:text-brand-orange transition-colors">
                <Phone className="w-3.5 h-3.5 text-brand-orange" />
                <span className="font-medium">Número gratuito USA: <span className="font-bold">+1 (786) 460-3922</span></span>
              </a>
              <span className="text-white/20 hidden sm:inline">|</span>
              <a href="mailto:info@peruinsideout.com" className="hidden sm:flex items-center space-x-1.5 hover:text-brand-orange transition-colors">
                <Mail className="w-3.5 h-3.5 text-brand-orange" />
                <span className="font-medium">Correo: <span className="font-bold">info@peruinsideout.com</span></span>
              </a>
            </div>

            {/* Right side: language & CTA box */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1 cursor-pointer hover:text-brand-orange transition-colors group">
                <span className="font-bold uppercase tracking-wider">ES</span>
                <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
              </div>
              <a 
                href="#planner" 
                className="bg-white hover:bg-gray-100 text-brand-charcoal font-bold text-[10px] sm:text-xs tracking-wider uppercase px-4 py-2 shadow-md transition-all duration-300 inline-block shrink-0 rounded-xs"
              >
                Asesoría gratuita de expertos
              </a>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* LOGO: Peru InsideOut matching custom design from screenshot */}
          <a href="#" className="flex flex-col text-white select-none leading-none group" id="logo-header">
            <div className="text-2xl sm:text-3xl font-extrabold tracking-[0.22em] flex items-end">
              <span>PER</span>
              <span className="relative inline-block">
                U
                <span className="absolute left-0 right-0 bottom-[-4px] h-[3px] bg-white group-hover:bg-brand-orange transition-colors"></span>
              </span>
            </div>
            <div className="text-[11px] sm:text-[13px] font-bold tracking-[0.16em] flex items-center mt-1 text-white/90">
              <span>INSIDE</span>
              {/* Thin arrow > */}
              <span className="mx-1 text-[10px] sm:text-[12px] font-bold text-white/95 group-hover:translate-x-0.5 transition-transform shrink-0">&gt;</span>
              <span>O</span>
              <span className="relative inline-block">
                U
                <span className="absolute left-0 right-0 bottom-[-2px] h-[2px] bg-white/90 group-hover:bg-brand-orange transition-colors"></span>
              </span>
              <span>T</span>
            </div>
          </a>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 text-xs font-bold tracking-widest uppercase text-white/90" id="desktop-navigation">
            <a href="#tours" className="hover:text-brand-orange transition-colors duration-200">Trip Finder</a>
            <a href="#planner" className="hover:text-brand-orange transition-colors duration-200">Tours personalizados</a>
            <div className="relative group cursor-pointer flex items-center space-x-1 hover:text-brand-orange transition-colors duration-200">
              <span>Paquetes</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </div>
            <a href="#tours" className="hover:text-brand-orange transition-colors duration-200">Peru & Galapagos</a>
            <a href="#tours" className="hover:text-brand-orange transition-colors duration-200">Peru & Bolivia</a>
            <div className="relative group cursor-pointer flex items-center space-x-1 hover:text-brand-orange transition-colors duration-200">
              <span>Blog</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </div>
          </nav>

          {/* MOBILE MENU TRIGGER */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="md:hidden text-white hover:text-brand-orange focus:outline-none p-2"
            aria-label="Toggle navigation menu"
            id="mobile-menu-trigger"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* MOBILE MENU PANEL */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden bg-brand-charcoal border-t border-white/10 px-4 pt-4 pb-8 space-y-4"
              id="mobile-menu-panel"
            >
              <nav className="flex flex-col space-y-4 font-bold text-xs tracking-widest uppercase text-gray-300">
                <a 
                  href="#tours" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="hover:text-white block py-2 border-b border-white/5"
                >
                  Trip Finder
                </a>
                <a 
                  href="#planner" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="hover:text-white block py-2 border-b border-white/5 text-brand-orange"
                >
                  Tours personalizados
                </a>
                <a 
                  href="#tours" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="hover:text-white block py-2 border-b border-white/5"
                >
                  Paquetes
                </a>
                <a 
                  href="#tours" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="hover:text-white block py-2 border-b border-white/5"
                >
                  Peru & Galapagos
                </a>
                <a 
                  href="#tours" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="hover:text-white block py-2 border-b border-white/5"
                >
                  Peru & Bolivia
                </a>
                <a 
                  href="#historia" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="hover:text-white block py-2 border-b border-white/5"
                >
                  Blog
                </a>
              </nav>
              <div className="pt-2 flex flex-col space-y-3">
                <a 
                  href="#planner" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="bg-brand-orange text-white py-3.5 rounded-sm font-bold text-xs tracking-widest uppercase text-center"
                >
                  Diseñar Itinerario Gratis
                </a>
                <a 
                  href="https://wa.me/51962708155" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="border border-white/20 text-white py-3 rounded-sm text-xs font-bold uppercase tracking-widest text-center flex items-center justify-center space-x-2"
                >
                  <span>Mensaje de WhatsApp</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* 2. HERO SECTION */}
      <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden" id="hero-section">
        {/* Cinematic high-quality background picture of Machu Picchu (Andean Warm Vignette) */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-103 motion-safe:animate-[pulse_10s_ease-in-out_infinite]"
          style={{ 
            backgroundImage: "url('https://www.boletomachupicchu.com/gutblt/wp-content/uploads/2024/10/machu-picchu-turistas-vista-panoramica-full.jpg')" 
          }}
        ></div>
        
        {/* Soft elegant gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/50 to-brand-charcoal/20"></div>
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black/80 to-transparent"></div>

        {/* Content Wrapper */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center text-white pt-24 pb-20">
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-extrabold leading-[1.15] tracking-tight mb-6 max-w-4xl mx-auto"
          >
            ¿Listos para el viaje de su vida a Perú?
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-gray-150 font-medium leading-relaxed mb-10"
          >
            Descubran el auténtico Perú, sin multitudes.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto"
          >
            <a 
              href="#tours" 
              className="w-full sm:w-auto bg-brand-orange hover:bg-brand-orange-dark text-white text-sm font-bold tracking-wider px-8 py-4 shadow-xl transition-all duration-300 rounded-none border border-transparent"
              id="hero-primary-cta"
            >
              Ver Peru Tours
            </a>
            <a 
              href="#planner" 
              className="w-full sm:w-auto bg-brand-orange hover:bg-brand-orange-dark text-white text-sm font-bold tracking-wider px-8 py-4 shadow-xl transition-all duration-300 rounded-none border border-transparent"
              id="hero-secondary-cta"
            >
              Personaliza mi viaje
            </a>
          </motion.div>
        </div>
      </section>

      {/* 3. TRUST BANNER (Stats & Tripadvisor Awards) */}
      <section className="bg-[#eae8e2] border-b border-black/[0.04] py-4 sm:py-5 relative z-20" id="trust-milestones">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          
          {/* Stats on the left */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-8 w-full lg:w-auto">
            
            {/* Stat 1 */}
            <div className="flex items-center space-x-3 text-left">
              <span className="text-4xl lg:text-5xl font-extrabold text-brand-orange tracking-tight leading-none shrink-0">21K+</span>
              <div className="text-[12px] sm:text-[13px] text-gray-600 font-semibold leading-tight select-none">
                <div>Clientes</div>
                <div>felices</div>
              </div>
            </div>

            {/* Separator */}
            <div className="hidden sm:block text-2xl lg:text-3xl font-light text-brand-orange">|</div>

            {/* Stat 2 */}
            <div className="flex items-center space-x-3 text-left">
              <span className="text-4xl lg:text-5xl font-extrabold text-brand-orange tracking-tight leading-none shrink-0">1,5K+</span>
              <div className="text-[12px] sm:text-[13px] text-gray-600 font-semibold leading-tight select-none">
                <div>Reseñas de</div>
                <div>5 estrellas</div>
              </div>
            </div>

            {/* Separator */}
            <div className="hidden sm:block text-2xl lg:text-3xl font-light text-brand-orange">|</div>

            {/* Stat 3 */}
            <div className="flex items-center space-x-3 text-left">
              <span className="text-4xl lg:text-5xl font-extrabold text-brand-orange tracking-tight leading-none shrink-0">96%</span>
              <div className="text-[12px] sm:text-[13px] text-gray-600 font-semibold leading-tight select-none">
                <div>Calificación</div>
                <div>de</div>
                <div>excelencia</div>
              </div>
            </div>

          </div>

          {/* Tripadvisor Awards on the right */}
          <div className="flex items-center justify-center lg:justify-end gap-2 sm:gap-3 overflow-x-auto no-scrollbar w-full lg:w-auto py-1">
            {[2022, 2023, 2024, 2025, 2026].map((year) => (
              <div key={year} className="flex flex-col items-center text-center shrink-0 w-[72px] sm:w-[78px] select-none">
                <span className="text-[9px] sm:text-[10px] text-black font-extrabold leading-none tracking-tight">Tripadvisor</span>
                <span className="text-[8px] sm:text-[9px] text-gray-800 font-medium leading-none tracking-tighter mt-[1px]">Travelers'</span>
                <span className="text-[8px] sm:text-[9px] text-gray-800 font-medium leading-none tracking-tighter">Choice Awards</span>
                
                {/* Tripadvisor custom laurel wreath & owl SVG */}
                <svg className="w-14 h-14 text-black my-1" viewBox="0 0 100 100" fill="currentColor">
                  <defs>
                    <g id={`branch-${year}`}>
                      {/* Curved stem */}
                      <path d="M 50 82 C 34 81 24 67 24 50 C 24 41 27 33 33 27" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" />
                      {/* Leaves along the stem */}
                      <path d="M 44 80 Q 34 82 32 76 Q 38 73 44 80 Z" />
                      <path d="M 37 74 Q 26 77 24 70 Q 31 66 37 74 Z" />
                      <path d="M 31 66 Q 20 69 18 61 Q 25 58 31 66 Z" />
                      <path d="M 27 57 Q 16 58 15 50 Q 22 49 27 57 Z" />
                      <path d="M 25 47 Q 15 47 15 39 Q 22 40 25 47 Z" />
                      <path d="M 26 37 Q 18 34 20 26 Q 25 30 26 37 Z" />
                      <path d="M 29 28 Q 23 22 27 15 Q 30 21 29 28 Z" />
                    </g>
                  </defs>
                  {/* Left Branch */}
                  <use href={`#branch-${year}`} />
                  {/* Right Branch (flipped horizontally) */}
                  <use href={`#branch-${year}`} transform="translate(100, 0) scale(-1, 1)" />
                  
                  {/* Inner Circle */}
                  <circle cx="50" cy="48" r="17" fill="none" stroke="black" strokeWidth="3" />
                  
                  {/* Owl Head inside */}
                  {/* Left Eye */}
                  <circle cx="44.5" cy="48" r="5" fill="white" stroke="black" strokeWidth="1.8" />
                  <circle cx="44.5" cy="48" r="2.5" fill="black" />
                  
                  {/* Right Eye */}
                  <circle cx="55.5" cy="48" r="5" fill="white" stroke="black" strokeWidth="1.8" />
                  <circle cx="55.5" cy="48" r="2.5" fill="black" />
                  
                  {/* Brow */}
                  <path d="M 38 42.5 Q 44.5 39 50 42.5 Q 55.5 39 62 42.5" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" />
                  
                  {/* Beak */}
                  <path d="M 48.5 49 L 51.5 49 L 50 53 Z" fill="black" />
                </svg>
                
                <span className="text-[9px] sm:text-[10px] text-black font-extrabold leading-none tracking-tight mt-0.5">{year}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. THE METHOD / NUESTRO PROCESO */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-brand-charcoal/5" id="metodo">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-[0.3em] text-brand-terracotta uppercase">EL ALMA DEL VIAJE HONESTO</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-brand-charcoal mt-2.5">
            El Método <span className="italic font-normal">InsideOut</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 max-w-lg mx-auto mt-4">
            Diseñamos el viaje de tu vida fusionando el misticismo andino con la rigurosidad y estándares de excelencia internacional.
          </p>
          <div className="w-16 h-0.5 bg-brand-terracotta mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Card 1 */}
          <div className="bg-white p-8 md:p-10 border border-black/[0.04] shadow-sm relative group hover:shadow-xl transition-all duration-300 flex flex-col justify-between" id="method-card-1">
            <div>
              <div className="w-12 h-12 bg-brand-green/10 text-brand-green rounded-full flex items-center justify-center mb-6">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-brand-charcoal mb-4">Anfitriones Directos en el Terreno</h3>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                Operamos de manera directa con nuestro equipo local en Lima, Cusco y Arequipa. No somos revendedores internacionales ni agencias remotas; estamos a tu lado en cada tramo del camino.
              </p>
            </div>
            <div className="border-t border-black/[0.04] pt-4 mt-6 text-[11px] font-bold text-brand-terracotta tracking-wider uppercase">
              Control de Calidad 100% Directo
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 md:p-10 border border-black/[0.04] shadow-sm relative group hover:shadow-xl transition-all duration-300 flex flex-col justify-between" id="method-card-2">
            <div>
              <div className="w-12 h-12 bg-brand-terracotta/10 text-brand-terracotta rounded-full flex items-center justify-center mb-6">
                <Sliders className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-brand-charcoal mb-4">Sastrería de Itinerarios</h3>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                No creemos en planes enlatados de agenda apretada. Modulamos cada hotel, caminata y experiencia gastronómica de acuerdo a tu condición física, preferencias de descanso y ritmos de interés.
              </p>
            </div>
            <div className="border-t border-black/[0.04] pt-4 mt-6 text-[11px] font-bold text-brand-terracotta tracking-wider uppercase">
              Diseño de Viaje Personalizado
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 md:p-10 border border-black/[0.04] shadow-sm relative group hover:shadow-xl transition-all duration-300 flex flex-col justify-between" id="method-card-3">
            <div>
              <div className="w-12 h-12 bg-brand-green/10 text-brand-green rounded-full flex items-center justify-center mb-6">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-brand-charcoal mb-4">Perspectiva Antropológica</h3>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                Nuestros guías son historiadores, naturalistas y amantes apasionados de su cultura. Te presentarán tradiciones andinas vivas de manera respetuosa, sustentable y alejada de escenarios impostados.
              </p>
            </div>
            <div className="border-t border-black/[0.04] pt-4 mt-6 text-[11px] font-bold text-brand-green tracking-wider uppercase">
              Turismo Ético y Regenerativo
            </div>
          </div>

        </div>
      </section>

      {/* 5. INTERACTIVE SIGNATURE TOURS SECTION */}
      <section className="py-24 bg-white" id="tours">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
            <div>
              <span className="text-xs font-bold tracking-[0.3em] text-brand-terracotta uppercase">RUTAS SUGERIDAS Y ADAPTABLES</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-brand-charcoal mt-1.5">
                Experiencias de Autor
              </h2>
              <div className="w-12 h-0.5 bg-brand-terracotta mt-4"></div>
            </div>

            {/* Premium filter pills */}
            <div className="flex flex-wrap items-center gap-2" id="tours-filter-bar">
              <button 
                onClick={() => { setActiveTourCategory('all'); setExpandedTourId(null); }}
                className={`px-4 sm:px-5 py-2.5 rounded-none font-bold text-[10px] tracking-widest uppercase transition-all duration-300 border ${
                  activeTourCategory === 'all' 
                    ? 'bg-brand-charcoal border-brand-charcoal text-white' 
                    : 'bg-brand-cream border-black/5 text-brand-charcoal hover:bg-gray-100'
                }`}
              >
                Todos los Tours
              </button>
              <button 
                onClick={() => { setActiveTourCategory('classicos'); setExpandedTourId(null); }}
                className={`px-4 sm:px-5 py-2.5 rounded-none font-bold text-[10px] tracking-widest uppercase transition-all duration-300 border ${
                  activeTourCategory === 'classicos' 
                    ? 'bg-brand-charcoal border-brand-charcoal text-white' 
                    : 'bg-brand-cream border-black/5 text-brand-charcoal hover:bg-gray-100'
                }`}
              >
                Grandes Clásicos
              </button>
              <button 
                onClick={() => { setActiveTourCategory('aventura'); setExpandedTourId(null); }}
                className={`px-4 sm:px-5 py-2.5 rounded-none font-bold text-[10px] tracking-widest uppercase transition-all duration-300 border ${
                  activeTourCategory === 'aventura' 
                    ? 'bg-brand-charcoal border-brand-charcoal text-white' 
                    : 'bg-brand-cream border-black/5 text-brand-charcoal hover:bg-gray-100'
                }`}
              >
                Aventura & Naturaleza
              </button>
              <button 
                onClick={() => { setActiveTourCategory('cultural'); setExpandedTourId(null); }}
                className={`px-4 sm:px-5 py-2.5 rounded-none font-bold text-[10px] tracking-widest uppercase transition-all duration-300 border ${
                  activeTourCategory === 'cultural' 
                    ? 'bg-brand-charcoal border-brand-charcoal text-white' 
                    : 'bg-brand-cream border-black/5 text-brand-charcoal hover:bg-gray-100'
                }`}
              >
                Inmersión Cultural
              </button>
            </div>
          </div>

          {/* Grid of tours */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredTours.map((tour, index) => {
                const isExpanded = expandedTourId === tour.id;
                
                return (
                  <motion.article 
                    layout
                    key={tour.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    id={`tour-card-${tour.id}`}
                    className="group bg-brand-cream border border-black/[0.04] overflow-hidden flex flex-col justify-between hover:shadow-xl transition-all duration-300"
                  >
                    <div>
                      {/* Tour Image */}
                      <div className="relative h-64 overflow-hidden bg-brand-charcoal">
                        <img 
                          src={tour.image} 
                          alt={tour.title} 
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                        />
                        <div className="absolute top-4 left-4 bg-brand-green text-white text-[9px] font-bold tracking-widest uppercase px-3 py-1 bg-brand-green/95 border border-white/10">
                          {tour.category === 'classicos' ? 'Clásico Premium' : tour.category === 'aventura' ? 'Exploración Directa' : 'Herencia Viva'}
                        </div>
                        <div className="absolute top-4 right-4 bg-brand-charcoal/80 text-white text-[9px] font-mono tracking-wider px-2.5 py-1 backdrop-blur-xs flex items-center space-x-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-terracotta"></span>
                          <span>{tour.difficulty}</span>
                        </div>
                      </div>

                      {/* Content Panel */}
                      <div className="p-6">
                        <div className="flex items-center justify-between text-[11px] text-gray-500 mb-3">
                          <span className="flex items-center font-bold">
                            <Clock className="w-3.5 h-3.5 mr-1 text-brand-terracotta" />
                            {tour.duration}
                          </span>
                          <span className="flex items-center font-bold text-amber-600">
                            <Star className="w-3.5 h-3.5 mr-0.5 fill-current text-brand-terracotta" />
                            {tour.rating} ({tour.reviewCount} Reseñas)
                          </span>
                        </div>

                        <h3 className="text-xl font-serif font-bold text-brand-charcoal mb-2 leading-tight group-hover:text-brand-terracotta transition-colors duration-200">
                          {tour.title}
                        </h3>
                        <p className="text-xs text-gray-500 font-light leading-relaxed mb-4">
                          {tour.subtitle}
                        </p>

                        {/* Interactive Highlights Accordion */}
                        <div className="mt-2 bg-white/50 p-3.5 rounded-none border border-black/5">
                          <button 
                            onClick={() => setExpandedTourId(isExpanded ? null : tour.id)}
                            className="w-full flex items-center justify-between text-[10px] font-bold text-brand-charcoal tracking-widest uppercase focus:outline-none"
                            id={`highlights-trigger-${tour.id}`}
                          >
                            <span>Ver Hitos del Itinerario</span>
                            {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                          </button>

                          <AnimatePresence>
                            {isExpanded && (
                              <motion.div 
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="overflow-hidden mt-3 pt-3 border-t border-black/5"
                              >
                                <ul className="space-y-2">
                                  {tour.highlights.map((highlight, hIndex) => (
                                    <li key={hIndex} className="text-[12px] text-gray-600 flex items-start space-x-2">
                                      <Check className="w-3.5 h-3.5 text-brand-terracotta shrink-0 mt-0.5" />
                                      <span>{highlight}</span>
                                    </li>
                                  ))}
                                </ul>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Pricing & Action Section */}
                    <div className="p-6 pt-0 border-t border-black/[0.04] mt-4">
                      <div className="flex items-center justify-between pt-4">
                        <div>
                          <span className="text-[9px] text-gray-400 uppercase tracking-widest block font-bold">Inversión Sugerida</span>
                          <span className="text-xl font-bold text-brand-charcoal tracking-tight">
                            ${tour.priceUSD.toLocaleString()} <span className="text-[11px] font-normal text-gray-400">USD p.p.</span>
                          </span>
                        </div>
                        <button 
                          onClick={() => handleSelectAndCustomize(tour)}
                          className="bg-brand-terracotta hover:bg-brand-terracotta-dark text-white font-bold text-[10px] tracking-widest uppercase px-4 py-3 transition-colors duration-200"
                          id={`customize-tour-${tour.id}`}
                        >
                          Adaptar Ruta
                        </button>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 6. ETHICAL BRAND STORYTELLING BLOCK */}
      <section className="py-24 bg-brand-charcoal text-white relative overflow-hidden" id="historia">
        {/* Abstract design vector accent */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-terracotta/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Elegant Image Collage (Airbnb Editorial vibe) */}
            <div className="relative">
              <div className="aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-brand-cream/10 relative">
                <img 
                  src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=800" 
                  alt="Anfitrión tejiendo herencia en Cusco" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale-20 contrast-110"
                />
                <div className="absolute inset-0 bg-brand-terracotta/10 mix-blend-multiply"></div>
              </div>
              
              {/* Overlay card */}
              <div className="absolute -bottom-8 -right-4 sm:-right-8 bg-brand-terracotta text-white p-6 sm:p-8 max-w-xs shadow-2xl skew-x-1" id="quote-overlay-box">
                <span className="text-3xl font-serif text-white/50 block -mb-2">“</span>
                <p className="font-serif italic text-sm sm:text-base leading-relaxed mb-3">
                  "El verdadero viaje no consiste en acumular sellos de pasaporte, sino en dejarse transformar por la mística local de manera honesta."
                </p>
                <span className="text-[9px] uppercase tracking-widest font-bold text-white/80 block mt-2">— Roberto D'Amico, Co-Fundador</span>
              </div>
            </div>

            {/* Typography Content */}
            <div className="space-y-6">
              <span className="text-xs font-bold tracking-[0.3em] text-brand-terracotta uppercase">LA PERSPECTIVA DE UN EQUIPO LOCAL</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-white leading-tight">
                Pioneros del Viaje <br />
                <span className="italic font-normal text-brand-terracotta">Honesto y No Masificado</span>
              </h2>
              <div className="w-16 h-0.5 bg-brand-terracotta"></div>
              
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
                Fundada hace más de una década por un equipo apasionado de la exploración andina y amazónica, Perú InsideOut nació como una rebelión saludable contra el turismo masivo de autobuses compartidos y agendas prefabricadas.
              </p>

              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
                Trabajamos en sinergia directa con comunidades nativas de Cusco, comunidades lacustres en Puno, productores textiles y chefs independientes. De esta manera, aseguramos que el 70% de los ingresos de tu viaje beneficien directamente a la economía local regenerativa sin intermediación extraña.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/10">
                <div>
                  <h4 className="font-serif text-lg text-brand-terracotta font-bold">100% Sin Intermediarios</h4>
                  <p className="text-[11px] text-gray-400 mt-1">Soporte, transporte y logística de propiedad directa en Perú.</p>
                </div>
                <div>
                  <h4 className="font-serif text-lg text-brand-terracotta font-bold">Compromiso Biosfera</h4>
                  <p className="text-[11px] text-gray-400 mt-1">Huella de carbono neutralizada y apoyo local a escuelas rurales.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. REVIEWS & TESTIMONIALS CAROUSEL */}
      <section className="py-24 bg-brand-cream border-b border-brand-charcoal/5" id="testimonios">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-[0.3em] text-brand-terracotta uppercase">TESTIMONIOS REALES DESDE EL ALMA</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-light text-brand-charcoal mt-2">La Experiencia InsideOut</h2>
            <div className="w-12 h-0.5 bg-brand-terracotta mx-auto mt-4"></div>
          </div>

          <div className="relative bg-white border border-black/[0.04] p-8 sm:p-14 shadow-xl" id="testimonial-carousel-container">
            {/* Interactive carousel wrapper with smooth exit/entrance */}
            <div className="min-h-[220px] flex flex-col justify-between">
              <div>
                {/* Visual Stars */}
                <div className="flex h-6 items-center space-x-1 text-brand-terracotta mb-6">
                  {Array.from({ length: TESTIMONIALS_DATA[currentTestimonial].rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current text-brand-terracotta" />
                  ))}
                </div>

                <AnimatePresence mode="wait">
                  <motion.p 
                    key={currentTestimonial}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="text-base sm:text-lg text-brand-charcoal font-serif italic leading-relaxed font-light"
                  >
                    {TESTIMONIALS_DATA[currentTestimonial].comment}
                  </motion.p>
                </AnimatePresence>
              </div>

              {/* User Bio and trip type */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-t border-black/[0.04] pt-6 mt-8 gap-4">
                <div className="flex items-center space-x-4">
                  <img 
                    src={TESTIMONIALS_DATA[currentTestimonial].image} 
                    alt={TESTIMONIALS_DATA[currentTestimonial].author} 
                    referrerPolicy="no-referrer"
                    className="w-12 h-12 rounded-full object-cover border border-brand-terracotta/20"
                  />
                  <div>
                    <h4 className="font-bold text-sm text-brand-charcoal">{TESTIMONIALS_DATA[currentTestimonial].author}</h4>
                    <span className="text-xs text-gray-400 font-light">{TESTIMONIALS_DATA[currentTestimonial].location} · {TESTIMONIALS_DATA[currentTestimonial].role}</span>
                  </div>
                </div>
                
                <span className="inline-block bg-brand-cream border border-black/5 text-brand-terracotta px-3.5 py-1.5 text-[10px] font-bold tracking-widest uppercase rounded-none">
                  Viaje: {TESTIMONIALS_DATA[currentTestimonial].tripType}
                </span>
              </div>
            </div>

            {/* Quick dot navigation */}
            <div className="flex justify-center space-x-2.5 mt-8">
              {TESTIMONIALS_DATA.map((_, dotIndex) => (
                <button
                  key={dotIndex}
                  onClick={() => setCurrentTestimonial(dotIndex)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 focus:outline-none ${
                    currentTestimonial === dotIndex ? 'bg-brand-terracotta w-6' : 'bg-gray-200 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${dotIndex + 1}`}
                  id={`testimonial-dot-${dotIndex}`}
                ></button>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 8. INTERACTIVE MULTI-STEP CONCIERGE TRAVEL PLANNER */}
      <section className="py-24 bg-brand-cream relative scroll-mt-10" id="planner">
        
        {/* Background design elements */}
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-terracotta/[0.03] rounded-full blur-3xl -translate-y-1/2"></div>
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-brand-green/[0.03] rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center mb-14">
            <span className="text-xs font-bold tracking-[0.25em] text-brand-terracotta uppercase">PLANIFICADOR CONCIERGE DIGITAL</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-light text-brand-charcoal mt-2">
              Diseña tu Itinerario Sagrado
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 max-w-lg mx-auto mt-3">
              Toma menos de 2 minutos. Registramos tus variables favoritas y nuestros directores de ruta diseñarán una propuesta única.
            </p>
            <div className="w-16 h-0.5 bg-brand-terracotta mx-auto mt-5"></div>
          </div>

          <div className="bg-white border border-black/[0.04] p-6 sm:p-10 md:p-12 shadow-2xl relative" id="wizard-card-wrapper">
            
            {/* PROGRESS HEADER */}
            {!plannerSubmitted && (
              <div className="mb-10">
                <div className="flex items-center justify-between text-[11px] font-bold text-gray-400 tracking-widest uppercase mb-3">
                  <span>Paso {planner.step} de 3 {planner.step === 1 ? '— Acompañamiento' : planner.step === 2 ? '— Modulación Estilo' : '— Coordenadas Contacto'}</span>
                  <span className="text-brand-terracotta">{Math.round((planner.step / 3) * 100)}% Completado</span>
                </div>
                <div className="w-full bg-brand-cream border border-black/5 h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-brand-terracotta h-full transition-all duration-300" 
                    style={{ width: `${(planner.step / 3) * 100}%` }}
                  ></div>
                </div>
              </div>
            )}

            {/* LOADER */}
            {loadingPlanner && (
              <div className="py-20 flex flex-col items-center justify-center space-y-4" id="planner-loading-view">
                <div className="relative w-16 h-16">
                  <div className="absolute inset-0 rounded-full border-4 border-brand-terracotta/20 border-t-brand-terracotta animate-spin"></div>
                </div>
                <h4 className="font-serif text-lg font-bold text-brand-charcoal mt-4">Sincronizando el viaje perfecto...</h4>
                <p className="text-xs text-gray-400">Nuestros nodos de transporte se están organizando.</p>
              </div>
            )}

            {/* FORM WIZARD */}
            {!loadingPlanner && !plannerSubmitted && (
              <form onSubmit={handlePlannerSubmit} className="space-y-8" id="travel-planner-wizard">
                
                {/* STEP 1: COMPANION CHOICE */}
                {planner.step === 1 && (
                  <motion.div 
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="space-y-6"
                  >
                    <h3 className="text-lg sm:text-xl font-serif font-bold text-brand-charcoal text-center">
                      ¿Con quién tienes planificado explorar el Perú?
                    </h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      
                      <button 
                        type="button"
                        onClick={() => chooseCompanion('pareja')}
                        className={`p-6 text-left border rounded-none transition-all duration-300 flex items-start space-x-4 ${
                          planner.companion === 'pareja' 
                            ? 'border-brand-terracotta bg-brand-terracotta/[0.03] shadow-lg' 
                            : 'border-black/5 bg-brand-cream hover:bg-white hover:border-black/20'
                        }`}
                        id="companion-btn-pareja"
                      >
                        <div className="w-10 h-10 rounded-full bg-brand-terracotta/10 text-brand-terracotta flex items-center justify-center shrink-0">
                          <Heart className="w-5 h-5" />
                        </div>
                        <div className="space-y-1">
                          <span className="block font-serif font-bold text-base text-brand-charcoal">En Pareja / Luna de Miel</span>
                          <span className="block text-xs text-gray-400 font-light leading-relaxed">Itinerarios románticos pausados con alojamientos exclusivos boutique e intimidad garantizada.</span>
                        </div>
                      </button>

                      <button 
                        type="button"
                        onClick={() => chooseCompanion('familia')}
                        className={`p-6 text-left border rounded-none transition-all duration-300 flex items-start space-x-4 ${
                          planner.companion === 'familia' 
                            ? 'border-brand-terracotta bg-brand-terracotta/[0.03] shadow-lg' 
                            : 'border-black/5 bg-brand-cream hover:bg-white hover:border-black/20'
                        }`}
                        id="companion-btn-familia"
                      >
                        <div className="w-10 h-10 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center shrink-0">
                          <Users className="w-5 h-5" />
                        </div>
                        <div className="space-y-1">
                          <span className="block font-serif font-bold text-base text-brand-charcoal">En Familia</span>
                          <span className="block text-xs text-gray-400 font-light leading-relaxed">Actividades seguras, guiado ameno para niños y adolescentes con logística terrestre robustecida.</span>
                        </div>
                      </button>

                      <button 
                        type="button"
                        onClick={() => chooseCompanion('amigos')}
                        className={`p-6 text-left border rounded-none transition-all duration-300 flex items-start space-x-4 ${
                          planner.companion === 'amigos' 
                            ? 'border-brand-terracotta bg-brand-terracotta/[0.03] shadow-lg' 
                            : 'border-black/5 bg-brand-cream hover:bg-white hover:border-black/20'
                        }`}
                        id="companion-btn-amigos"
                      >
                        <div className="w-10 h-10 rounded-full bg-brand-terracotta/10 text-brand-terracotta flex items-center justify-center shrink-0">
                          <Compass className="w-5 h-5" />
                        </div>
                        <div className="space-y-1">
                          <span className="block font-serif font-bold text-base text-brand-charcoal">Grupo de Amigos</span>
                          <span className="block text-xs text-gray-400 font-light leading-relaxed">Combinación óptima de trekking, alta gastronomía de autor y vivencias culturales para grupos exclusivos.</span>
                        </div>
                      </button>

                      <button 
                        type="button"
                        onClick={() => chooseCompanion('solo')}
                        className={`p-6 text-left border rounded-none transition-all duration-300 flex items-start space-x-4 ${
                          planner.companion === 'solo' 
                            ? 'border-brand-terracotta bg-brand-terracotta/[0.03] shadow-lg' 
                            : 'border-black/5 bg-brand-cream hover:bg-white hover:border-black/20'
                        }`}
                        id="companion-btn-solo"
                      >
                        <div className="w-10 h-10 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center shrink-0">
                          <Globe className="w-5 h-5" />
                        </div>
                        <div className="space-y-1">
                          <span className="block font-serif font-bold text-base text-brand-charcoal">Viajero de Solo Exploración</span>
                          <span className="block text-xs text-gray-400 font-light leading-relaxed">Seguridad total, guía privado enfocado cien por ciento en tus intereses individuales.</span>
                        </div>
                      </button>

                    </div>
                  </motion.div>
                )}

                {/* STEP 2: TRAVEL STYLE & DURATION slider & checkboxes */}
                {planner.step === 2 && (
                  <motion.div 
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="space-y-8"
                  >
                    <div>
                      <h3 className="text-lg sm:text-xl font-serif font-bold text-brand-charcoal text-center mb-6">
                        Define el Enfoque Preferido de Tu Viaje
                      </h3>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        
                        <button 
                          type="button"
                          onClick={() => setPlanner(prev => ({ ...prev, style: 'cultural' }))}
                          className={`p-5 rounded-none border text-center transition ${
                            planner.style === 'cultural' 
                              ? 'border-brand-terracotta bg-brand-terracotta/[0.04] shadow-md font-bold' 
                              : 'border-black/5 bg-brand-cream hover:bg-white'
                          }`}
                          id="style-btn-cultural"
                        >
                          <Compass className="w-5 h-5 mx-auto mb-2 text-brand-terracotta" />
                          <span className="block text-sm font-semibold text-brand-charcoal">Historia y Cultura</span>
                        </button>

                        <button 
                          type="button"
                          onClick={() => setPlanner(prev => ({ ...prev, style: 'aventura' }))}
                          className={`p-5 rounded-none border text-center transition ${
                            planner.style === 'aventura' 
                              ? 'border-brand-terracotta bg-brand-terracotta/[0.04] shadow-md font-bold' 
                              : 'border-black/5 bg-brand-cream hover:bg-white'
                          }`}
                          id="style-btn-aventura"
                        >
                          <Sparkles className="w-5 h-5 mx-auto mb-2 text-brand-terracotta" />
                          <span className="block text-sm font-semibold text-brand-charcoal">Aventura & Trekking</span>
                        </button>

                        <button 
                          type="button"
                          onClick={() => setPlanner(prev => ({ ...prev, style: 'lujo' }))}
                          className={`p-5 rounded-none border text-center transition ${
                            planner.style === 'lujo' 
                              ? 'border-brand-terracotta bg-brand-terracotta/[0.04] shadow-md font-bold' 
                              : 'border-black/5 bg-brand-cream hover:bg-white'
                          }`}
                          id="style-btn-lujo"
                        >
                          <Utensils className="w-5 h-5 mx-auto mb-2 text-brand-terracotta" />
                          <span className="block text-sm font-semibold text-brand-charcoal">Lujo & Gastronomía</span>
                        </button>

                      </div>
                    </div>

                    {/* Range slider for duration */}
                    <div className="bg-brand-cream p-6 border border-black/5">
                      <label className="block text-sm font-bold text-brand-charcoal text-center mb-4">
                        ¿Qué cantidad de días sugieres para tu expedición? 
                        <span className="text-brand-terracotta text-2xl font-serif font-bold ml-1.5">{planner.duration}</span> días
                      </label>
                      <input 
                        type="range" 
                        min="5" 
                        max="21" 
                        value={planner.duration}
                        onChange={(e) => setPlanner(prev => ({ ...prev, duration: parseInt(e.target.value) }))}
                        className="w-full h-2 bg-gray-200 accent-brand-terracotta cursor-pointer rounded-full"
                        id="duration-slider"
                      />
                      <div className="flex justify-between text-[11px] text-gray-400 mt-2 font-bold font-mono">
                        <span>5 Días (Esencial)</span>
                        <span>12 Días (Óptimo)</span>
                        <span>21 Días (Inmersión)</span>
                      </div>
                    </div>

                    {/* Interests multi select */}
                    <div className="space-y-3">
                      <span className="block text-xs font-bold uppercase tracking-wider text-gray-400">Intereses Complementarios</span>
                      <div className="flex flex-wrap gap-2.5">
                        {['Guía privado VIP', 'Hoteles boutique históricos', 'Clases culinarias peruanas', 'Trekking suave adaptado', 'Vuelos domésticos incluidos', 'Resguardo médico de altura'].map((intItem) => {
                          const isSelected = planner.interests.includes(intItem);
                          return (
                            <button
                              type="button"
                              key={intItem}
                              onClick={() => toggleInterest(intItem)}
                              className={`px-3 py-2 border text-[11px] font-bold uppercase tracking-wider transition ${
                                isSelected 
                                  ? 'bg-brand-green border-brand-green text-white' 
                                  : 'bg-white border-black/5 text-gray-600 hover:border-black/20'
                              }`}
                              id={`interest-tag-${intItem.toLowerCase().replace(/\s+/g, '-')}`}
                            >
                              {intItem} {isSelected ? '✓' : '+'}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Navigation buttons */}
                    <div className="flex justify-between pt-6 border-t border-black/5">
                      <button 
                        type="button"
                        onClick={() => setPlanner(prev => ({ ...prev, step: 1 }))}
                        className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-brand-charcoal transition"
                        id="step2-prev-btn"
                      >
                        Atrás
                      </button>
                      <button 
                        type="button"
                        disabled={!planner.style}
                        onClick={() => setPlanner(prev => ({ ...prev, step: 3 }))}
                        className="bg-brand-terracotta disabled:opacity-50 text-white font-bold text-xs tracking-widest uppercase px-6 py-3 shadow transition-colors"
                        id="step2-next-btn"
                      >
                        Especificaciones Finales
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* STEP 3: CONTACT FORM & SPECIFICS */}
                {planner.step === 3 && (
                  <motion.div 
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="space-y-6"
                  >
                    <h3 className="text-lg sm:text-xl font-serif font-bold text-brand-charcoal text-center mb-6">
                      ¿Dónde te enviamos tu propuesta personalizada de viaje?
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-1">Nombre Completo</label>
                        <input 
                          type="text" 
                          required
                          value={planner.name}
                          onChange={(e) => setPlanner(prev => ({ ...prev, name: e.target.value }))}
                          placeholder="Ej. Carmen García de Silva" 
                          className="w-full border border-black/10 p-3.5 bg-brand-cream text-sm focus:outline-none focus:border-brand-terracotta"
                          id="planner-input-name"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-1">Correo Electrónico</label>
                        <input 
                          type="email" 
                          required
                          value={planner.email}
                          onChange={(e) => setPlanner(prev => ({ ...prev, email: e.target.value }))}
                          placeholder="ejemplo@viajelujo.com" 
                          className="w-full border border-black/10 p-3.5 bg-brand-cream text-sm focus:outline-none focus:border-brand-terracotta"
                          id="planner-input-email"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-1">WhatsApp / Teléfono Móvil (Soporte prioritario)</label>
                        <input 
                          type="tel" 
                          required
                          value={planner.whatsapp}
                          onChange={(e) => setPlanner(prev => ({ ...prev, whatsapp: e.target.value }))}
                          placeholder="Ej. +34 600 000 000" 
                          className="w-full border border-black/10 p-3.5 bg-brand-cream text-sm focus:outline-none focus:border-brand-terracotta"
                          id="planner-input-whatsapp"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-1">Temporada Estimada / Fecha Estimada</label>
                        <select 
                          className="w-full border border-black/10 p-3.5 bg-brand-cream text-sm focus:outline-none focus:border-brand-terracotta"
                          id="planner-select-season"
                        >
                          <option>Próximos 3 meses</option>
                          <option>Próximos 6 meses</option>
                          <option>Año 2026 (Recomendado Temporada Seca)</option>
                          <option>Sin fecha establecida</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-1">Notas especiales o consideraciones de alimentación / altitud</label>
                      <textarea 
                        rows={2}
                        value={planner.specialRequests}
                        onChange={(e) => setPlanner(prev => ({ ...prev, specialRequests: e.target.value }))}
                        placeholder="Ej. Busco añadir un día extra en el Valle Sagrado, opción vegetariana y resguardo místico para caminatas..." 
                        className="w-full border border-black/10 p-3.5 bg-brand-cream text-sm focus:outline-none focus:border-brand-terracotta"
                        id="planner-textarea-requests"
                      ></textarea>
                    </div>

                    {/* Submit and Prev actions */}
                    <div className="flex justify-between pt-6 border-t border-black/5">
                      <button 
                        type="button"
                        onClick={() => setPlanner(prev => ({ ...prev, step: 2 }))}
                        className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-brand-charcoal transition"
                        id="step3-prev-btn"
                      >
                        Atrás
                      </button>
                      <button 
                        type="submit"
                        disabled={!planner.name || !planner.email || !planner.whatsapp}
                        className="bg-brand-terracotta hover:bg-brand-terracotta-dark disabled:opacity-50 text-white font-bold text-xs tracking-widest uppercase px-8 py-4 shadow-xl transition-all"
                        id="step3-submit-btn"
                      >
                        Solicitar Diseños de Itinerario Gratis
                      </button>
                    </div>
                  </motion.div>
                )}

              </form>
            )}

            {/* INTERACTIVE COMPREHENSIVE SUCCESS SCREEN */}
            {plannerSubmitted && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-6 space-y-8"
                id="planner-success-view"
              >
                <div className="w-16 h-16 bg-brand-green/10 text-brand-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-brand-charcoal">
                    ¡Propuesta Registrada de Manera Exitosa!
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 max-w-lg mx-auto leading-relaxed">
                    Estimado/a <span className="font-bold text-brand-charcoal">{planner.name}</span>, hemos configurado sus variables de manera exitosa. Nuestro equipo de directores de ruta en Cusco ya se encuentra analizando su itinerario a medida.
                  </p>
                </div>

                {/* PREMIUM GENERATED SKETCH CUSTOM PROPOSAL BAR */}
                <div className="bg-brand-cream p-6 border border-black/5 text-left space-y-4 max-w-2xl mx-auto rounded-none">
                  <div className="flex items-center justify-between border-b border-black/[0.04] pb-3">
                    <span className="text-[10px] font-bold text-brand-terracotta uppercase tracking-[0.15em]">Esquema Preliminar Diseñado</span>
                    <span className="text-xs bg-brand-green text-white font-bold px-2.5 py-0.5 uppercase tracking-wider">{planner.duration} Días</span>
                  </div>
                  
                  <div className="space-y-1">
                    <h4 className="font-serif font-bold text-brand-charcoal text-base">
                      {generatedItineraryName}
                    </h4>
                    <p className="text-[11px] text-gray-400 font-light italic">Adaptado con confort superior, aclimatación progresiva a la altura y guía prioritario.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-4 text-[11px] border-t border-black/[0.04]">
                    <div className="bg-white p-3 border border-black/[0.03]">
                      <span className="text-gray-400 block font-bold text-[9px] uppercase tracking-wider">Etapa Inicial</span>
                      <span className="text-brand-charcoal font-semibold mt-1 block">Aclimatación en Valle Sagrado (2,800m)</span>
                    </div>
                    <div className="bg-white p-3 border border-black/[0.03]">
                      <span className="text-gray-400 block font-bold text-[9px] uppercase tracking-wider">Etapa Cumbre</span>
                      <span className="text-brand-charcoal font-semibold mt-1 block">Machu Picchu VIP por la tarde sin aglomeraciones</span>
                    </div>
                    <div className="bg-white p-3 border border-black/[0.03]">
                      <span className="text-gray-400 block font-bold text-[9px] uppercase tracking-wider">Intereses Extra</span>
                      <span className="text-brand-charcoal font-semibold mt-1 block">
                        {planner.interests.length > 0 ? planner.interests.join(', ') : 'Servicios VIP Clásicos'}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 pt-4">
                  <p className="text-xs text-gray-405 leading-relaxed">
                    Hemos enviado un correo a <span className="font-bold text-brand-charcoal">{planner.email}</span>. Si desea acelerar de forma prioritaria su diseño gratuito con Roberto, haga clic abajo:
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a 
                      href={`https://wa.me/51962708155?text=Hola%20Perú%20InsideOut,%20soy%20${encodeURIComponent(planner.name)}%20y%20acabo%20de%20diseñar%20mi%20itinerario%20de%20${planner.duration}%20días.`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto bg-[#25D366] hover:bg-[#1ebd59] text-white font-bold text-xs tracking-widest uppercase px-6 py-4.5 rounded-none flex items-center justify-center space-x-2 shadow-lg"
                      id="whatsapp-success-btn"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Mensaje WhatsApp Prioritario</span>
                    </a>
                    <button 
                      onClick={resetPlanner}
                      className="w-full sm:w-auto border border-black/10 hover:bg-black/5 text-brand-charcoal font-bold text-[10px] tracking-widest uppercase px-6 py-4 rounded-none transition"
                      id="reset-planner-btn"
                    >
                      Crear Nuevo Itinerario
                    </button>
                  </div>
                </div>

              </motion.div>
            )}

          </div>
        </div>
      </section>

      {/* 9. INTERACTIVE FAQ SECTION WITH SEARCH SEARCH FILTER AND SMOOTH ACCORDIONS */}
      <section className="py-24 bg-white scroll-mt-10" id="faq">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-[0.3em] text-brand-terracotta uppercase">RESOLVIENDO TUS PREGUNTAS</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-light text-brand-charcoal mt-2.5">Dudas de Planificación</h2>
            <p className="text-xs text-gray-400 mt-2">La transparencia logística es nuestro primer sello de seguridad.</p>
            <div className="w-16 h-0.5 bg-brand-terracotta mx-auto mt-5"></div>
          </div>

          {/* Real-time search filter for FAQ */}
          <div className="mb-10 relative max-w-md mx-auto" id="faq-search-wrapper">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
              <Search className="w-4 h-4" />
            </div>
            <input 
              type="text"
              value={faqSearch}
              onChange={(e) => setFaqSearch(e.target.value)}
              placeholder="Buscar dudas sobre mal de altura, vuelos, cancelaciones..."
              className="w-full border border-black/10 pl-10 pr-4 py-3 text-xs bg-brand-cream focus:outline-none focus:border-brand-terracotta"
              id="faq-search-input"
            />
            {faqSearch && (
              <button 
                onClick={() => setFaqSearch('')}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-brand-charcoal"
                aria-label="Clear search"
                id="clear-faq-search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Accordion list */}
          <div className="space-y-4" id="faq-accordion-list">
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((faq) => {
                const isOpen = expandedFaqId === faq.id;
                return (
                  <div 
                    key={faq.id} 
                    className="border-b border-black/[0.06] pb-4 transition-colors"
                    id={`faq-item-${faq.id}`}
                  >
                    <button 
                      onClick={() => setExpandedFaqId(isOpen ? null : faq.id)}
                      className="w-full flex justify-between items-center text-left py-3 focus:outline-none focus-visible:ring-1 focus-visible:ring-brand-terracotta"
                      id={`faq-trigger-${faq.id}`}
                    >
                      <span className="font-serif font-bold text-base sm:text-lg text-brand-charcoal hover:text-brand-terracotta transition-colors">
                        {faq.question}
                      </span>
                      <span className="ml-4 shrink-0 text-brand-terracotta rounded-full p-1 bg-brand-cream border border-black/5">
                        {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </span>
                    </button>
                    
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-light pt-2 pl-1 select-text">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })
            ) : (
              <div className="text-center py-10 text-gray-400" id="faq-empty-state">
                <HelpCircle className="w-8 h-8 mx-auto mb-2 text-brand-terracotta/40" />
                <p className="text-xs font-medium">No encontramos respuestas a tu consulta. Intente buscar palabras como "soroche" o "reembolso".</p>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* 10. PRE-FOOTER NEWSLETTER DE EXPLORACIÓN / SENSITIZATION */}
      <section className="py-20 bg-brand-green text-white relative overflow-hidden" id="explore-prefooter">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(194,109,69,0.15),transparent_60%)]"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 space-y-6">
          <span className="text-[10px] sm:text-xs font-bold tracking-[0.3em] text-brand-terracotta uppercase">COMPROMISO DE VIAJE REGENERATIVO</span>
          <h2 className="text-3xl sm:text-4xl font-serif text-white">¿Todo listo para el viaje de tu vida?</h2>
          <p className="text-xs sm:text-sm text-gray-300 max-w-xl mx-auto font-light leading-relaxed">
            Consigue en tu correo electrónico crónicas exclusivas de viaje escritas por antropólogos y arqueólogos en Cusco, descripciones de hospedajes ecológicos en Tambopata y guías prácticas de seguridad. Un e-mail mensual, sin spam.
          </p>
          
          <div className="max-w-md mx-auto pt-4" id="newsletter-subscription-box">
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email"
                placeholder="Ingresar correo de destino"
                className="w-full bg-white/10 text-white placeholder-gray-400 border border-white/10 p-3 text-xs focus:outline-none focus:border-brand-terracotta"
                id="newsletter-email-input"
              />
              <button 
                onClick={() => alert('¡Suscrito de manera exitosa! Recibirá sus crónicas de viaje antes de fin de mes.')}
                className="bg-brand-terracotta hover:bg-brand-terracotta-dark text-white font-bold text-[10px] tracking-widest uppercase px-6 py-3 transition shrink-0"
                id="newsletter-submit-btn"
              >
                Suscribirse
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FOOTER WITH TRUST SEALS & LOCAL CREDENTIALS */}
      <footer className="bg-brand-charcoal text-gray-400 py-16 border-t border-white/10" id="main-footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand Info & Mission Statement */}
          <div className="space-y-4" id="footer-brand-col">
            <a href="#" className="flex flex-col text-white select-none leading-none group" id="footer-logo">
              <div className="text-xl font-extrabold tracking-[0.22em] flex items-end">
                <span>PER</span>
                <span className="relative inline-block">
                  U
                  <span className="absolute left-0 right-0 bottom-[-3px] h-[2px] bg-white group-hover:bg-brand-orange transition-colors"></span>
                </span>
              </div>
              <div className="text-[10px] font-bold tracking-[0.16em] flex items-center mt-1 text-white/90">
                <span>INSIDE</span>
                <span className="mx-1 text-[9px] font-bold text-white/95 group-hover:translate-x-0.5 transition-transform shrink-0">&gt;</span>
                <span>O</span>
                <span className="relative inline-block">
                  U
                  <span className="absolute left-0 right-0 bottom-[-2px] h-[1.5px] bg-white/90 group-hover:bg-brand-orange transition-colors"></span>
                </span>
                <span>T</span>
              </div>
            </a>
            <p className="text-[11px] leading-relaxed text-gray-400 font-light">
              Operador turístico local con perspectiva internacional y altos estándares de excelencia. Especializados en viajes a medida que descubren el alma real de Sudamérica de manera respetuosa.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div id="footer-links-col">
            <h4 className="text-white font-bold text-[10px] uppercase tracking-[0.2em] mb-4">Secciones Clave</h4>
            <ul className="space-y-2.5 text-xs font-semibold tracking-wider uppercase">
              <li><a href="#tours" className="hover:text-white transition">Rutas de Viaje</a></li>
              <li><a href="#metodo" className="hover:text-white transition">El Método InsideOut</a></li>
              <li><a href="#historia" className="hover:text-white transition">La Filosofía</a></li>
              <li><a href="#planner" className="hover:text-brand-terracotta text-brand-terracotta transition">Diseñar Viaje Propio</a></li>
            </ul>
          </div>

          {/* Column 3: Contact & Direct Support */}
          <div id="footer-contact-col">
            <h4 className="text-white font-bold text-[10px] uppercase tracking-[0.2em] mb-4">Contacto Directo</h4>
            <p className="text-xs text-gray-300 mb-1.5 font-bold">Oficinas Principales:</p>
            <p className="text-[11px] text-gray-400 mb-4 font-light">Calle Garcilaso 265, Centro Histórico, Cusco - Perú</p>
            <p className="text-xs text-gray-300 mb-1.5 font-bold">Asistencia 24 Horas:</p>
            <ul className="space-y-1.5 text-[11px] font-light">
              <li>Email: info@peruinsideout.com</li>
              <li>Teléfono Oficina: +51 84 263155</li>
              <li className="text-brand-terracotta font-bold">WhatsApp: +51 962 708 155</li>
            </ul>
          </div>

          {/* Column 4: Local Certifications & Real Trust Seals */}
          <div id="footer-seals-col">
            <h4 className="text-white font-bold text-[10px] uppercase tracking-[0.2em] mb-4">Miembro & Licencias</h4>
            <div className="grid grid-cols-2 gap-2.5">
              <div className="bg-white/5 p-2 px-3 hover:bg-white/10 transition border border-white/5 text-[9px] uppercase tracking-wider text-gray-300 font-bold text-center flex items-center justify-center">
                PromPerú
              </div>
              <div className="bg-white/5 p-2 px-3 hover:bg-white/10 transition border border-white/5 text-[9px] uppercase tracking-wider text-gray-300 font-bold text-center flex items-center justify-center">
                Mincetur PE
              </div>
              <div className="bg-white/5 p-2 px-3 hover:bg-white/10 transition border border-white/5 text-[9px] uppercase tracking-wider text-gray-300 font-bold text-center flex items-center justify-center">
                Sustentable
              </div>
              <div className="bg-white/5 p-2 px-3 hover:bg-white/10 transition border border-white/5 text-[9px] uppercase tracking-wider text-gray-300 font-bold text-center flex items-center justify-center">
                ISO 9001
              </div>
            </div>
            <p className="text-[10px] text-gray-500 font-light leading-relaxed mt-4">
              Agencia de viajes y operador de ecoturismo acreditada oficialmente por el Ministerio de Comercio Exterior y Turismo de Perú.
            </p>
          </div>

        </div>

        {/* Legal Copyright Line */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between text-[11px] text-gray-500">
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} Perú InsideOut S.R.L. Todos los derechos reservados. Diseñado bajo estándares éticos de turismo sostenible.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0 font-medium font-mono uppercase tracking-wider">
            <a href="#" className="hover:text-white transition">Políticas de Privacidad</a>
            <span className="text-white/10">•</span>
            <a href="#" className="hover:text-white transition">Términos del Servicio</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
