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
import llamaImage from '../assets/peru_tour_llama_teepee.png';

interface QuienesSomosPageProps {
  navigateTo: (path: string) => void;
}

function QuienesSomosPage({ navigateTo }: QuienesSomosPageProps) {
  return (
    <div className="bg-white min-h-screen">
      {/* 1. HERO BANNER (Photo background) */}
      <div className="relative pt-28 pb-12 sm:pt-32 sm:pb-16 text-white overflow-hidden bg-brand-charcoal flex items-center" style={{ minHeight: '50vh' }}>
        {/* Full background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ backgroundImage: "url('/sobrenosotros-insideout.jpeg')" }}
        ></div>
        {/* Soft dark gradient overlay to ensure text readability on the left while letting the original image colors show on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-0"></div>
        
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left z-10">
          <motion.span 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-white/80 mb-3"
          >
            Filosofía & Trayectoria
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-sans font-extrabold tracking-tight mb-2"
          >
            Quiénes Somos
          </motion.h1>
        </div>
      </div>

      {/* 2. NUESTRA HISTORIA & SIGNIFICADO DE PERÚ INSIDEOUT (White background #FFFFFF) */}
      <section className="pt-10 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-20 text-left">
            
            {/* Nuestra Historia */}
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#571224]">
                Nuestra Historia
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#571224] tracking-tight font-sans">
                Nuestra Historia: Todo comenzó en Arequipa
              </h2>
              <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed font-light font-sans">
                Perú InsideOut nació, curiosamente, en un café de Arequipa, al sur del Perú. Fue allí donde surgió la idea de crear una agencia de viajes diferente, capaz de mostrar el Perú desde dentro hacia fuera, conectando a los viajeros con su alma, su cultura y su gente, sin perder la precisión, el cuidado y la visión europea en la organización.
              </p>
            </div>

            {/* El significado */}
            <div className="space-y-6 pt-16 border-t border-gray-100">
              <span className="text-xs font-bold uppercase tracking-widest text-[#571224]">
                Nuestra Filosofía
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#571224] tracking-tight font-sans">
                El significado de Perú InsideOut
              </h2>
              <div className="space-y-6 text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed font-light font-sans">
                <p>
                  Encontrar el nombre adecuado no fue sencillo. Tras días de ideas, conversaciones y pruebas, junto a un amigo nació <strong>Perú InsideOut</strong>: una manera de expresar nuestra filosofía de viaje, basada en descubrir el Perú más allá de lo superficial, viviendo experiencias auténticas, personales y culturales, lejos del turismo masivo.
                </p>
                <p className="border-l-4 border-[#571224] pl-4 italic text-[#571224] font-medium font-sans">
                  Viajar con Perú InsideOut significa comprender el país desde adentro, conectando con sus tradiciones, su historia y su identidad.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. NUESTRO EQUIPO EN PERÚ */}
      <section className="py-20 bg-[#571224] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-white/70 block mb-2">
            Presencia Local
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-extrabold tracking-tight">
            Nuestro Equipo en Perú
          </h2>
          <p className="text-white/80 mt-4 text-sm sm:text-base max-w-2xl font-light leading-relaxed">
            Nuestros especialistas en viajes, coordinadores de operaciones y guías locales expertos están basados en las ciudades clave del país para asegurar un servicio concierge impecable.
          </p>
        </div>

        {/* Stacked City Banners like the user photo */}
        <div className="w-full flex flex-col space-y-2 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Lima Card */}
          <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] overflow-hidden group select-none">
            {/* Background Image */}
            <img 
              src="/lima.png" 
              alt="Nuestro equipo en Lima" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Elegant dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/40 to-transparent"></div>
            
            {/* Top Right Label & Icon */}
            <div className="absolute top-6 right-6 flex items-center space-x-3 z-10">
              <span className="bg-black/60 backdrop-blur-xs text-[10px] font-bold tracking-wider uppercase text-white px-3 py-1 rounded-full border border-white/10">
                Lima
              </span>
              <Heart className="w-5 h-5 text-white/90 cursor-pointer hover:text-red-500 transition-colors" />
            </div>

            {/* Right Aligned Content Block */}
            <div className="absolute inset-y-0 right-12 flex flex-col justify-center items-end text-right z-10 text-white max-w-md">
              <h3 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-2">
                Lima
              </h3>
              <p className="text-sm sm:text-base font-light text-gray-200 leading-relaxed">
                Asistencia concierge, logística internacional y operaciones de primer nivel.
              </p>
            </div>

            {/* Bottom Right Arrow */}
            <div className="absolute bottom-6 right-12 z-10 text-white/80 hover:text-white transition-colors cursor-pointer group-hover:translate-x-1 duration-300">
              <ArrowRight className="w-6 h-6 border border-white/20 rounded-full p-1 w-8 h-8 flex items-center justify-center bg-black/35 hover:bg-black/60" />
            </div>
          </div>

          {/* Arequipa Card */}
          <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] overflow-hidden group select-none">
            {/* Background Image */}
            <img 
              src="/arequipa.png" 
              alt="Nuestro equipo en Arequipa" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Elegant dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/40 to-transparent"></div>
            
            {/* Top Right Label & Icon */}
            <div className="absolute top-6 right-6 flex items-center space-x-3 z-10">
              <span className="bg-black/60 backdrop-blur-xs text-[10px] font-bold tracking-wider uppercase text-white px-3 py-1 rounded-full border border-white/10">
                Arequipa
              </span>
              <Heart className="w-5 h-5 text-white/90 cursor-pointer hover:text-red-500 transition-colors" />
            </div>

            {/* Right Aligned Content Block */}
            <div className="absolute inset-y-0 right-12 flex flex-col justify-center items-end text-right z-10 text-white max-w-md">
              <h3 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-2">
                Arequipa
              </h3>
              <p className="text-sm sm:text-base font-light text-gray-200 leading-relaxed">
                El corazón de nuestro inicio, coordinando rutas por el Cañón del Colca y el sur andino.
              </p>
            </div>

            {/* Bottom Right Arrow */}
            <div className="absolute bottom-6 right-12 z-10 text-white/80 hover:text-white transition-colors cursor-pointer group-hover:translate-x-1 duration-300">
              <ArrowRight className="w-6 h-6 border border-white/20 rounded-full p-1 w-8 h-8 flex items-center justify-center bg-black/35 hover:bg-black/60" />
            </div>
          </div>

          {/* Cusco Card */}
          <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] overflow-hidden group select-none">
            {/* Background Image */}
            <img 
              src="/cusco.png" 
              alt="Nuestro equipo en Cusco" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Elegant dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/45 to-transparent"></div>
            
            {/* Top Right Label & Icon */}
            <div className="absolute top-6 right-6 flex items-center space-x-3 z-10">
              <span className="bg-black/60 backdrop-blur-xs text-[10px] font-bold tracking-wider uppercase text-white px-3 py-1 rounded-full border border-white/10">
                Cusco
              </span>
              <Heart className="w-5 h-5 text-white/90 cursor-pointer hover:text-red-500 transition-colors" />
            </div>

            {/* Right Aligned Content Block */}
            <div className="absolute inset-y-0 right-12 flex flex-col justify-center items-end text-right z-10 text-white max-w-md">
              <h3 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-2">
                CUZCO
              </h3>
              <p className="text-sm sm:text-base font-light text-gray-200 leading-relaxed">
                Nuestros guías expertos de montaña, especialistas en arqueología y coordinadores locales.
              </p>
            </div>

            {/* Bottom Right Arrow */}
            <div className="absolute bottom-6 right-12 z-10 text-white/80 hover:text-white transition-colors cursor-pointer group-hover:translate-x-1 duration-300">
              <ArrowRight className="w-6 h-6 border border-white/20 rounded-full p-1 w-8 h-8 flex items-center justify-center bg-black/35 hover:bg-black/60" />
            </div>
          </div>

        </div>
      </section>

      {/* 4. NUESTRA MISIÓN (White background #FFFFFF) */}
      <section className="py-24 bg-white text-[#571224]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-4xl space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#571224]/60 font-sans block">
              Nuestra Misión
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-sans font-bold leading-relaxed text-[#571224]">
              En Perú InsideOut creemos que viajar es entender, sentir y conectar. Por eso compartimos con nuestros viajeros un Perú misterioso, auténtico y siempre cautivante, diseñado con respeto, pasión y profundo conocimiento del país.
            </h2>
            <div className="h-1 w-16 bg-[#571224] rounded-full mt-4"></div>
            
            {/* Back to Home CTA */}
            <div className="pt-12">
              <button 
                onClick={() => navigateTo('/')}
                className="inline-block bg-[#571224] hover:bg-[#400a18] text-white font-bold text-xs uppercase tracking-widest px-8 py-4 transition-all duration-300 rounded-none cursor-pointer hover:shadow-xl hover:scale-[1.02] active:scale-95 duration-150"
              >
                Volver al inicio
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    if (currentPath !== '/') {
      e.preventDefault();
      window.history.pushState({}, '', '/' + target);
      setCurrentPath('/');
      setTimeout(() => {
        const element = document.getElementById(target.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  // Scroll detection for sticky navigation bar
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mobile menu control
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobilePeruOpen, setMobilePeruOpen] = useState(false);
  const [mobileSudamericaOpen, setMobileSudamericaOpen] = useState(false);
  const [mobileQuienesSomosOpen, setMobileQuienesSomosOpen] = useState(false);

  // Active filter category for tours
  const [activeTourCategory, setActiveTourCategory] = useState<string>('all');
  
  // Expanded tour card details
  const [expandedTourId, setExpandedTourId] = useState<string | null>(null);

  // Contact form state
  const [contactForm, setContactForm] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    telefono: '',
    detalles: ''
  });
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [loadingContact, setLoadingContact] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.nombre || !contactForm.correo || !contactForm.telefono) {
      alert('Por favor complete los campos obligatorios: Nombre, Correo y Teléfono.');
      return;
    }
    setLoadingContact(true);
    setTimeout(() => {
      setLoadingContact(false);
      setContactSubmitted(true);
      setContactForm({
        nombre: '',
        apellido: '',
        correo: '',
        telefono: '',
        detalles: ''
      });
    }, 1200);
  };

  // Expanded FAQ state
  const [expandedFaqId, setExpandedFaqId] = useState<string | null>('faq-1');

  return (
    <div className="min-h-screen bg-brand-cream text-brand-charcoal font-sans selection:bg-brand-terracotta selection:text-white relative">
      
      {/* 1. HEADER / NAVIGATION */}
      <header id="header" className={`top-0 left-0 w-full z-50 transition-all duration-350 ${isScrolled ? 'fixed bg-white shadow-md border-b border-black/[0.06] py-1 text-brand-charcoal' : 'absolute bg-gradient-to-b from-black/85 via-black/45 to-transparent text-white'}`}>
        
        {/* Top Info Bar */}
        <div className={`border-b transition-colors duration-300 overflow-hidden max-h-12 opacity-100 ${isScrolled ? 'border-black/[0.06]' : 'border-white/10'}`}>
          <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-12 flex items-center justify-between text-[11px] sm:text-xs transition-colors duration-300 ${isScrolled ? 'text-gray-600' : 'text-white/90'}`}>
            
            {/* Left side: phone & email */}
            <div className="flex items-center space-x-4 sm:space-x-6">
              <a href="tel:+11111111111" className="flex items-center space-x-1.5 hover:text-brand-orange transition-colors">
                <Phone className="w-3.5 h-3.5 text-brand-orange" />
                <span className={`font-medium transition-colors duration-300 ${isScrolled ? 'text-gray-700' : 'text-white/80'}`}>
                  <span className="hidden sm:inline">Número gratuito USA: </span>
                  <span className="inline sm:hidden">Tel: </span>
                  <span className={`font-bold transition-colors duration-300 ${isScrolled ? 'text-brand-charcoal' : 'text-white'}`}>+1 (111) 111-1111</span>
                </span>
              </a>
              <span className={`hidden sm:inline transition-colors duration-300 ${isScrolled ? 'text-black/10' : 'text-white/20'}`}>|</span>
              <a href="mailto:info@peruinsideout.com" className="hidden sm:flex items-center space-x-1.5 hover:text-brand-orange transition-colors">
                <Mail className="w-3.5 h-3.5 text-brand-orange" />
                <span className={`font-medium transition-colors duration-300 ${isScrolled ? 'text-gray-700' : 'text-white/80'}`}>Correo: <span className={`font-bold transition-colors duration-300 ${isScrolled ? 'text-brand-charcoal' : 'text-white'}`}>info@peruinsideout.com</span></span>
              </a>
            </div>

            {/* Right side: language & CTA box */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1 cursor-pointer hover:text-brand-orange transition-colors group">
                <span className="font-bold uppercase tracking-wider">ES</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform group-hover:rotate-180 ${isScrolled ? 'text-brand-charcoal' : 'text-white'}`} />
              </div>
              <a 
                href="https://wa.me/51999999999" 
                target="_blank"
                rel="noopener noreferrer"
                className={`font-bold text-[10px] sm:text-xs tracking-wider uppercase px-3 sm:px-4 py-2 shadow-md transition-all duration-300 inline-block shrink-0 rounded-xs ${isScrolled ? 'bg-brand-orange hover:bg-brand-orange-dark text-white' : 'bg-white hover:bg-gray-100 text-brand-charcoal'}`}
              >
                <span className="hidden sm:inline">Asesoría gratuita de expertos</span>
                <span className="inline sm:hidden">Asesoría Gratis</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between transition-all duration-300 ${isScrolled ? 'h-16' : 'h-20'}`}>
          
          {/* LOGO: Peru InsideOut matching custom design from screenshot */}
          <a href="/" onClick={(e) => { e.preventDefault(); navigateTo('/'); }} className={`flex flex-col select-none leading-none group transition-colors duration-300 ${isScrolled ? 'text-brand-orange animate-pulse-slow' : 'text-white'}`} id="logo-header">
            <div className="text-2xl sm:text-3xl font-extrabold tracking-[0.22em] flex items-end">
              <span>PER</span>
              <span className="relative inline-block">
                U
                <span className={`absolute left-0 right-0 bottom-[-4px] h-[3px] transition-colors duration-300 ${isScrolled ? 'bg-brand-orange' : 'bg-white'} group-hover:bg-brand-orange`}></span>
              </span>
            </div>
            <div className={`text-[11px] sm:text-[13px] font-bold tracking-[0.16em] flex items-center mt-1 transition-colors duration-300 ${isScrolled ? 'text-brand-orange/90' : 'text-white/90'}`}>
              <span>INSIDE</span>
              {/* Thin arrow > */}
              <span className={`mx-1 text-[10px] sm:text-[12px] font-bold group-hover:translate-x-0.5 transition-all duration-300 shrink-0 ${isScrolled ? 'text-brand-orange/80' : 'text-white/95'}`}>&gt;</span>
              <span>O</span>
              <span className="relative inline-block">
                U
                <span className={`absolute left-0 right-0 bottom-[-2px] h-[2px] transition-colors duration-300 ${isScrolled ? 'bg-brand-orange' : 'bg-white/90'} group-hover:bg-brand-orange`}></span>
              </span>
              <span>T</span>
            </div>
          </a>

          {/* DESKTOP NAV */}
          <nav className={`hidden md:flex items-center space-x-6 lg:space-x-8 text-xs font-bold tracking-widest uppercase transition-colors duration-300 ${isScrolled ? 'text-brand-charcoal/80' : 'text-white/90'}`} id="desktop-navigation">
            <div className="relative group flex items-center h-full py-4">
              <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-brand-orange transition-colors duration-200 flex items-center space-x-1">
                <span>Viaje en Perú</span>
                <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
              </a>
              
              {/* Dropdown Menu */}
              <div className="absolute top-[80%] left-0 w-72 bg-white text-brand-charcoal shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 p-6 border-t-2 border-[#571224] border-x border-b border-black/[0.06] select-none">
                <div className="space-y-6">
                  {/* Category 1 */}
                  <div>
                    <h4 className="text-[10px] tracking-widest font-extrabold text-[#571224] uppercase mb-3 text-left">
                      Viaje en Perú
                    </h4>
                    <ul className="space-y-2.5 font-semibold normal-case text-[13px] text-brand-charcoal/90 text-left">
                      <li>
                        <a href="https://wa.me/51999999999?text=Hola,%20me%20interesa%20un%20viaje%20a%20la%20medida%20en%20Perú" target="_blank" rel="noopener noreferrer" className="hover:text-[#571224] transition-colors duration-150 block">
                          Viaje a la medida en Perù
                        </a>
                      </li>
                      <li>
                        <a href="https://wa.me/51999999999?text=Hola,%20me%20interesa%20un%20tour%20por%20la%20Amazonía%20del%20Perú" target="_blank" rel="noopener noreferrer" className="hover:text-[#571224] transition-colors duration-150 block">
                          Tour por la Amazonia del Perù
                        </a>
                      </li>
                      <li>
                        <a href="https://wa.me/51999999999?text=Hola,%20me%20interesa%20un%20trekking%20tour%20en%20Perú" target="_blank" rel="noopener noreferrer" className="hover:text-[#571224] transition-colors duration-150 block">
                          Trekking Tours al Perù
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Category 2 */}
                  <div>
                    <h4 className="text-[10px] tracking-widest font-extrabold text-[#571224] uppercase mb-3 text-left">
                      Informaciones Útiles
                    </h4>
                    <ul className="space-y-2.5 font-semibold normal-case text-[13px] text-brand-charcoal/90 text-left">
                      <li>
                        <a href="https://wa.me/51999999999?text=Hola,%20me%20gustaría%20información%20sobre%20el%20Antiguo%20Perú" target="_blank" rel="noopener noreferrer" className="hover:text-[#571224] transition-colors duration-150 block">
                          Antiguo Perù
                        </a>
                      </li>
                      <li>
                        <a href="https://wa.me/51999999999?text=Hola,%20me%20gustaría%20información%20sobre%20el%20Imperio%20Inca" target="_blank" rel="noopener noreferrer" className="hover:text-[#571224] transition-colors duration-150 block">
                          El Imperio Inca
                        </a>
                      </li>
                      <li>
                        <a href="https://wa.me/51999999999?text=Hola,%20me%20gustaría%20información%20sobre%20el%20Perú%20moderno" target="_blank" rel="noopener noreferrer" className="hover:text-[#571224] transition-colors duration-150 block">
                          Perù moderno
                        </a>
                      </li>
                      <li>
                        <a href="https://wa.me/51999999999?text=Hola,%20me%20gustaría%20recomendaciones%20de%20restaurantes%20en%20Perú" target="_blank" rel="noopener noreferrer" className="hover:text-[#571224] transition-colors duration-150 block">
                          Restaurants
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative group flex items-center h-full py-4">
              <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-brand-orange transition-colors duration-200 flex items-center space-x-1">
                <span>Viaje en Sudamérica</span>
                <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
              </a>
              
              {/* Dropdown Menu */}
              <div className="absolute top-[80%] left-0 w-72 bg-white text-brand-charcoal shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 p-6 border-t-2 border-[#571224] border-x border-b border-black/[0.06] select-none">
                <div className="space-y-6">
                  {/* Category 1 */}
                  <div>
                    <h4 className="text-[10px] tracking-widest font-extrabold text-[#571224] uppercase mb-3 text-left">
                      Viaje en Sudamérica
                    </h4>
                    <ul className="space-y-2.5 font-semibold normal-case text-[13px] text-brand-charcoal/90 text-left">
                      <li>
                        <a href="https://wa.me/51999999999?text=Hola,%20me%20interesan%20viajes%20en%20Chile" target="_blank" rel="noopener noreferrer" className="hover:text-[#571224] transition-colors duration-150 block">
                          Viajes en Chile
                        </a>
                      </li>
                      <li>
                        <a href="https://wa.me/51999999999?text=Hola,%20me%20interesan%20viajes%20en%20Bolivia" target="_blank" rel="noopener noreferrer" className="hover:text-[#571224] transition-colors duration-150 block">
                          Viajes en Bolivia
                        </a>
                      </li>
                      <li>
                        <a href="https://wa.me/51999999999?text=Hola,%20me%20interesan%20viajes%20en%20Ecuador" target="_blank" rel="noopener noreferrer" className="hover:text-[#571224] transition-colors duration-150 block">
                          Viajes en Ecuador
                        </a>
                      </li>
                      <li>
                        <a href="https://wa.me/51999999999?text=Hola,%20me%20interesan%20viajes%20en%20Colombia" target="_blank" rel="noopener noreferrer" className="hover:text-[#571224] transition-colors duration-150 block">
                          Viajes en Colombia
                        </a>
                      </li>
                      <li>
                        <a href="https://wa.me/51999999999?text=Hola,%20me%20interesan%20viajes%20en%20Argentina" target="_blank" rel="noopener noreferrer" className="hover:text-[#571224] transition-colors duration-150 block">
                          Viajes en Argentina
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-brand-orange transition-colors duration-200">Destinos</a>
            <a 
              href="/quienes-somos" 
              onClick={(e) => { e.preventDefault(); navigateTo('/quienes-somos'); }} 
              className="hover:text-brand-orange transition-colors duration-200"
            >
              Quienes Somos
            </a>
            <a href="#contacto" onClick={(e) => handleAnchorClick(e, '#contacto')} className="hover:text-brand-orange transition-colors duration-200">
              Personalizar mi viaje
            </a>
          </nav>

          {/* MOBILE MENU TRIGGER */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className={`md:hidden focus:outline-none p-2 transition-colors duration-300 ${isScrolled ? 'text-brand-charcoal hover:text-brand-orange' : 'text-white hover:text-brand-orange'}`}
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
                <div>
                  <button 
                    onClick={() => setMobilePeruOpen(!mobilePeruOpen)} 
                    className="hover:text-white w-full text-left flex items-center justify-between py-2 border-b border-white/5 focus:outline-none"
                  >
                    <span>Viaje en Perú</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobilePeruOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {mobilePeruOpen && (
                    <div className="pl-4 py-2 space-y-4 bg-black/10 mt-1 rounded-xs">
                      <div className="space-y-2">
                        <span className="text-[10px] tracking-widest font-extrabold text-[#f15a24] uppercase block text-left">
                          Viaje en Perú
                        </span>
                        <a href="https://wa.me/51999999999?text=Hola,%20me%20interesa%20un%20viaje%20a%20la%20medida%20en%20Perú" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#f15a24] block py-1.5 text-xs font-semibold normal-case text-gray-300 text-left">
                          Viaje a la medida en Perù
                        </a>
                        <a href="https://wa.me/51999999999?text=Hola,%20me%20interesa%20un%20tour%20por%20la%20Amazonía%20del%20Perú" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#f15a24] block py-1.5 text-xs font-semibold normal-case text-gray-300 text-left">
                          Tour por la Amazonia del Perù
                        </a>
                        <a href="https://wa.me/51999999999?text=Hola,%20me%20interesa%20un%20trekking%20tour%20en%20Perú" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#f15a24] block py-1.5 text-xs font-semibold normal-case text-gray-300 text-left">
                          Trekking Tours al Perù
                        </a>
                      </div>
                      <div className="space-y-2 pt-2 border-t border-white/5">
                        <span className="text-[10px] tracking-widest font-extrabold text-[#f15a24] uppercase block text-left">
                          Informaciones Útiles
                        </span>
                        <a href="https://wa.me/51999999999?text=Hola,%20me%20gustaría%20información%20sobre%20el%20Antiguo%20Perú" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#f15a24] block py-1.5 text-xs font-semibold normal-case text-gray-300 text-left">
                          Antiguo Perù
                        </a>
                        <a href="https://wa.me/51999999999?text=Hola,%20me%20gustaría%20información%20sobre%20el%20Imperio%20Inca" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#f15a24] block py-1.5 text-xs font-semibold normal-case text-gray-300 text-left">
                          El Imperio Inca
                        </a>
                        <a href="https://wa.me/51999999999?text=Hola,%20me%20gustaría%20información%20sobre%20el%20Perú%20moderno" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#f15a24] block py-1.5 text-xs font-semibold normal-case text-gray-300 text-left">
                          Perù moderno
                        </a>
                        <a href="https://wa.me/51999999999?text=Hola,%20me%20gustaría%20recomendaciones%20de%20restaurantes%20en%20Perú" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#f15a24] block py-1.5 text-xs font-semibold normal-case text-gray-300 text-left">
                          Restaurants
                        </a>
                      </div>
                    </div>
                  )}
                </div>
                <div>
                  <button 
                    onClick={() => setMobileSudamericaOpen(!mobileSudamericaOpen)} 
                    className="hover:text-white w-full text-left flex items-center justify-between py-2 border-b border-white/5 focus:outline-none"
                  >
                    <span>Viaje en Sudamérica</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileSudamericaOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileSudamericaOpen && (
                    <div className="pl-4 py-2 space-y-4 bg-black/10 mt-1 rounded-xs">
                      <div className="space-y-2">
                        <span className="text-[10px] tracking-widest font-extrabold text-[#f15a24] uppercase block text-left">
                          Viaje en Sudamérica
                        </span>
                        <a href="https://wa.me/51999999999?text=Hola,%20me%20interesan%20viajes%20en%20Chile" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#f15a24] block py-1.5 text-xs font-semibold normal-case text-gray-300 text-left">
                          Viajes en Chile
                        </a>
                        <a href="https://wa.me/51999999999?text=Hola,%20me%20interesan%20viajes%20en%20Bolivia" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#f15a24] block py-1.5 text-xs font-semibold normal-case text-gray-300 text-left">
                          Viajes en Bolivia
                        </a>
                        <a href="https://wa.me/51999999999?text=Hola,%20me%20interesan%20viajes%20en%20Ecuador" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#f15a24] block py-1.5 text-xs font-semibold normal-case text-gray-300 text-left">
                          Viajes en Ecuador
                        </a>
                        <a href="https://wa.me/51999999999?text=Hola,%20me%20interesan%20viajes%20en%20Colombia" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#f15a24] block py-1.5 text-xs font-semibold normal-case text-gray-300 text-left">
                          Viajes en Colombia
                        </a>
                        <a href="https://wa.me/51999999999?text=Hola,%20me%20interesan%20viajes%20en%20Argentina" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#f15a24] block py-1.5 text-xs font-semibold normal-case text-gray-300 text-left">
                          Viajes en Argentina
                        </a>
                      </div>
                    </div>
                  )}
                </div>
                <a 
                  href="#" 
                  onClick={(e) => { e.preventDefault(); setMobileMenuOpen(false); }} 
                  className="hover:text-white block py-2 border-b border-white/5"
                >
                  Destinos
                </a>
                <a 
                  href="#contacto" 
                  onClick={(e) => { setMobileMenuOpen(false); handleAnchorClick(e, '#contacto'); }} 
                  className="hover:text-white block py-2 border-b border-white/5"
                >
                  Personalizar mi viaje
                </a>
                <a 
                  href="/quienes-somos" 
                  onClick={(e) => { e.preventDefault(); setMobileMenuOpen(false); navigateTo('/quienes-somos'); }} 
                  className="hover:text-white block py-2 border-b border-white/5"
                >
                  Quienes Somos
                </a>
              </nav>
              <div className="pt-2 flex flex-col space-y-3">
                <a 
                  href="#contacto" 
                  onClick={(e) => { setMobileMenuOpen(false); handleAnchorClick(e, '#contacto'); }} 
                  className="bg-brand-orange text-white py-3.5 rounded-sm font-bold text-xs tracking-widest uppercase text-center"
                >
                  Diseñar Itinerario Gratis
                </a>
                <a 
                  href="https://wa.me/51999999999" 
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

      {currentPath === '/quienes-somos' ? (
        <QuienesSomosPage navigateTo={navigateTo} />
      ) : (
        <>
          {/* 2. HERO SECTION */}
          <section className="relative min-h-screen flex flex-col justify-between overflow-hidden" id="hero-section">
        {/* Cinematic high-quality background video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/herovideo.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Soft elegant gradient overlays: Left-to-right on desktop to keep the right side (tourists/landscape) 100% visible and natural */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent hidden md:block"></div>
        <div className="absolute inset-0 bg-black/35 md:hidden"></div>

        {/* Content Wrapper */}
        <div className="relative z-10 flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left text-white pt-32 pb-8 flex flex-col justify-center items-center md:items-start w-full">
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-extrabold leading-[1.15] tracking-tight mb-6 max-w-2xl text-center md:text-left"
          >
            ¿Listos para el viaje de su vida a Perú?
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-xl text-sm sm:text-base md:text-lg text-gray-200 font-medium leading-relaxed mb-10 text-center md:text-left"
          >
            Descubran el auténtico Perú, sin multitudes.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 w-full max-w-md"
          >
            <a 
              href="#tours" 
              className="w-full sm:w-auto bg-brand-orange hover:bg-brand-orange-dark text-white text-xs font-bold tracking-wider px-8 py-3.5 shadow-xl transition-all duration-300 rounded-none border border-transparent text-center flex items-center justify-center gap-2 hover:scale-[1.03] active:scale-95 duration-150"
              id="hero-primary-cta"
            >
              <span>Ver Peru Tours</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="#contacto" 
              className="w-full sm:w-auto border border-white bg-white/10 backdrop-blur-xs hover:bg-white hover:text-brand-charcoal text-white text-xs font-bold tracking-wider px-8 py-3.5 shadow-xl transition-all duration-300 rounded-none text-center flex items-center justify-center gap-2 hover:scale-[1.03] active:scale-95 duration-150"
              id="hero-secondary-cta"
            >
              <span>Personaliza mi viaje</span>
              <Sliders className="w-4 h-4" />
            </a>
          </motion.div>
        </div>

        {/* 3. TRUST BANNER (Stats & Tripadvisor Awards) inside Hero bottom wrapper */}
        <div className="bg-[#eae8e2] border-t border-black/[0.04] py-3 sm:py-4 relative z-20 w-full" id="trust-milestones">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-4">
            
            {/* Stats on the left */}
            <div className="flex flex-row flex-wrap items-center justify-center lg:justify-start gap-x-6 sm:gap-x-8 gap-y-3.5 w-full lg:w-auto">
              
              {/* Stat 1 */}
              <div className="flex items-center space-x-2.5 text-left">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-orange tracking-tight leading-none shrink-0">21K+</span>
                <div className="text-[10px] sm:text-[11px] lg:text-[12px] text-gray-600 font-semibold leading-tight select-none">
                  <div>Clientes</div>
                  <div>felices</div>
                </div>
              </div>

              {/* Separator */}
              <div className="hidden sm:block text-xl lg:text-2xl font-light text-brand-orange">|</div>

              {/* Stat 2 */}
              <div className="flex items-center space-x-2.5 text-left">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-orange tracking-tight leading-none shrink-0">1,5K+</span>
                <div className="text-[10px] sm:text-[11px] lg:text-[12px] text-gray-600 font-semibold leading-tight select-none">
                  <div>Reseñas de</div>
                  <div>5 estrellas</div>
                </div>
              </div>

              {/* Separator */}
              <div className="hidden sm:block text-xl lg:text-2xl font-light text-brand-orange">|</div>

              {/* Stat 3 */}
              <div className="flex items-center space-x-2.5 text-left">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-orange tracking-tight leading-none shrink-0">96%</span>
                <div className="text-[10px] sm:text-[11px] lg:text-[12px] text-gray-600 font-semibold leading-tight select-none">
                  <div>Calificación</div>
                  <div>de</div>
                  <div>excelencia</div>
                </div>
              </div>

            </div>

            {/* Tripadvisor Awards on the right */}
            <div className="flex items-center justify-center lg:justify-end gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar w-full lg:w-auto py-0.5">
              {[2022, 2023, 2024, 2025, 2026].map((year) => (
                <div key={year} className="flex flex-col items-center text-center shrink-0 w-[64px] sm:w-[70px] select-none">
                  <span className="text-[8px] sm:text-[9px] text-black font-extrabold leading-none tracking-tight">Tripadvisor</span>
                  <span className="text-[7px] sm:text-[8px] text-gray-800 font-medium leading-none tracking-tighter mt-[1px]">Travelers'</span>
                  <span className="text-[7px] sm:text-[8px] text-gray-800 font-medium leading-none tracking-tighter">Choice Awards</span>
                  
                  {/* Tripadvisor custom laurel wreath & owl SVG */}
                  <svg className="w-11 h-11 text-black my-0.5" viewBox="0 0 100 100" fill="currentColor">
                    <defs>
                      <g id={`branch-${year}`}>
                        <path d="M 50 82 C 34 81 24 67 24 50 C 24 41 27 33 33 27" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" />
                        <path d="M 44 80 Q 34 82 32 76 Q 38 73 44 80 Z" />
                        <path d="M 37 74 Q 26 77 24 70 Q 31 66 37 74 Z" />
                        <path d="M 31 66 Q 20 69 18 61 Q 25 58 31 66 Z" />
                        <path d="M 27 57 Q 16 58 15 50 Q 22 49 27 57 Z" />
                        <path d="M 25 47 Q 15 47 15 39 Q 22 40 25 47 Z" />
                        <path d="M 26 37 Q 18 34 20 26 Q 25 30 26 37 Z" />
                        <path d="M 29 28 Q 23 22 27 15 Q 30 21 29 28 Z" />
                      </g>
                    </defs>
                    <use href={`#branch-${year}`} />
                    <use href={`#branch-${year}`} transform="translate(100, 0) scale(-1, 1)" />
                    <circle cx="50" cy="48" r="17" fill="none" stroke="black" strokeWidth="3" />
                    <circle cx="44.5" cy="48" r="5" fill="white" stroke="black" strokeWidth="1.8" />
                    <circle cx="44.5" cy="48" r="2.5" fill="black" />
                    <circle cx="55.5" cy="48" r="5" fill="white" stroke="black" strokeWidth="1.8" />
                    <circle cx="55.5" cy="48" r="2.5" fill="black" />
                    <path d="M 38 42.5 Q 44.5 39 50 42.5 Q 55.5 39 62 42.5" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" />
                    <path d="M 48.5 49 L 51.5 49 L 50 53 Z" fill="black" />
                  </svg>
                  
                  <span className="text-[8px] sm:text-[9px] text-black font-extrabold leading-none tracking-tight mt-0.5">{year}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 4. EXPERTOS EN TOURS PERSONALIZADOS */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-brand-charcoal/5" id="metodo">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Columna Izquierda: Texto e Íconos */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-extrabold text-brand-charcoal tracking-tight leading-tight">
                Expertos en tours personalizados por Perú
              </h2>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed font-light max-w-2xl">
                Vivan Perú a su manera con tours diseñados por expertos, totalmente personalizables, para una experiencia verdaderamente única y sin complicaciones.
              </p>
            </div>

            {/* Lista de beneficios */}
            <div className="space-y-6 sm:space-y-8">
              
              {/* Item 1 */}
              <div className="flex items-start gap-4 sm:gap-5">
                <svg className="w-10 h-10 text-brand-orange shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="14" cy="4" r="1.5" />
                  <path d="M14 5.5l-2.5 3.5-1.5 4v5" />
                  <path d="M11.5 9l2 3.5 1.5 5.5" />
                  <path d="M9.5 6.5h1.5v4.5h-1.5z" />
                  <path d="M16 5l-2.5 14.5" />
                </svg>
                <div className="space-y-1">
                  <h3 className="text-base sm:text-lg font-bold text-brand-charcoal">
                    Eviten las multitudes
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    Itinerarios optimizados que les permiten explorar más allá de los típicos lugares turísticos.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-start gap-4 sm:gap-5">
                <svg className="w-10 h-10 text-brand-orange shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polygon points="12 7 13.9 10.9 18.2 11.5 15.1 14.5 15.8 18.8 12 16.8 8.2 18.8 8.9 14.5 5.8 11.5 10.1 10.9" />
                </svg>
                <div className="space-y-1">
                  <h3 className="text-base sm:text-lg font-bold text-brand-charcoal">
                    Experiencias auténticas
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    Conécten con la cultura local y los tesoros escondidos.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-start gap-4 sm:gap-5">
                <svg className="w-10 h-10 text-brand-orange shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                <div className="space-y-1">
                  <h3 className="text-base sm:text-lg font-bold text-brand-charcoal">
                    Flexibilidad total
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    Personalicen su viaje para que se ajuste a su estilo, presupuesto y preferencias.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Columna Derecha: Imagen */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden shadow-2xl border border-black/[0.03]">
              <img 
                src={llamaImage} 
                alt="Viajera alimentando una llama en Cusco, Perú" 
                className="w-full h-auto object-cover max-h-[500px] sm:max-h-[600px] lg:max-h-none lg:aspect-[4/5] object-center"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 5. TOURS AUTENTICOS POR PERU */}
      <section className="py-24 bg-white" id="tours">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-12 text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-extrabold text-brand-charcoal mb-4">
              Tours auténticos por Perú
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-4xl font-light">
              Viajar con nosotros no es solo un viaje, es una experiencia. Exploren a fondo con itinerarios cuidadosamente diseñados que revelan el lado oculto de Perú, lejos del ajetreo habitual.
            </p>
          </div>

          {/* Grid of tours */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {TOURS_DATA.map((tour) => (
              <div 
                key={tour.id}
                className="group relative overflow-hidden shadow-lg h-[460px] sm:h-[500px] w-full flex flex-col justify-end border border-black/[0.02]"
                id={`tour-card-${tour.id}`}
              >
                {/* Background Image with Hover Effect and Overlay */}
                <div className="absolute inset-0 bg-brand-charcoal">
                  <img 
                    src={tour.image} 
                    alt={tour.title} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-90"
                  />
                  {/* Premium dark gradient overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent"></div>
                </div>

                {/* Overlaid Content */}
                <div className="relative z-10 p-6 sm:p-8 text-white text-left flex flex-col justify-end h-full">
                  <h3 className="text-xl sm:text-2xl font-bold leading-tight mb-1">
                    {tour.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 font-medium mb-4">
                    {tour.subtitle}
                  </p>
                  
                  {/* Line Separator */}
                  <hr className="border-t border-white/20 mb-4" />
                  
                  {/* Route location info */}
                  <div className="flex items-start gap-1.5 mb-4 text-[11px] sm:text-xs text-gray-200">
                    <MapPin className="w-3.5 h-3.5 text-white mt-0.5 shrink-0" />
                    <span className="font-light leading-tight">{tour.location}</span>
                  </div>
                  
                  {/* Duration and Price block */}
                  <div className="text-xs sm:text-sm text-gray-200 font-light mb-4">
                    {tour.duration} / desde: <span className="text-brand-orange font-extrabold text-base sm:text-lg">USD {tour.priceUSD}</span>
                  </div>
                  
                  {/* Ver más CTA Button */}
                  <a 
                    href={`https://wa.me/51999999999?text=Hola%20Perú%20InsideOut,%20me%20interesa%20el%20tour:%20${encodeURIComponent(tour.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-brand-orange hover:bg-brand-orange-dark text-white font-bold text-xs uppercase tracking-wider px-6 py-2.5 transition-colors duration-200 w-fit text-center cursor-pointer"
                  >
                    Ver más
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Centered Button at the bottom of the section */}
          <div className="mt-12 text-center">
            <a 
              href="https://wa.me/51999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-brand-orange hover:bg-brand-orange-dark text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-8 py-3.5 transition-colors duration-200"
            >
              Ver más Perú tours
            </a>
          </div>

        </div>
      </section>

      {/* 6. SOBRE NOSOTROS / HISTORIA */}
      <section className="py-20 bg-brand-cream border-b border-brand-charcoal/5" id="historia">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            
            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-extrabold text-brand-charcoal mb-8 tracking-tight">
              Perú InsideOut: Pasión y excelencia local
            </h2>

            {/* Image */}
            <div className="relative overflow-hidden mb-8 shadow-md border border-black/[0.04] aspect-[16/9] max-h-[500px]">
              <img 
                src="/sobrenosotros-insideout.jpeg" 
                alt="El equipo de Perú InsideOut y viajeros en una ruina arqueológica" 
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Description Paragraphs */}
            <div className="space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed font-light max-w-4xl mb-8">
              <p>
                En Perú InsideOut, somos más que expertos en viajes: somos exploradores apasionados dedicados a crear viajes inolvidables.
              </p>
              <p>
                Fundada por apasionados de la exploración que se enamoraron de los paisajes y la cultura de Perú, nuestro equipo de guías locales, especialistas en viajes y expertos en logística asegura que cada detalle de su viaje sea perfecto. Conozcan al equipo detrás de su próxima aventura.
              </p>
            </div>

            {/* Button */}
            <div>
              <a 
                href="https://wa.me/51999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-brand-orange hover:bg-brand-orange-dark text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-8 py-3.5 transition-colors duration-200"
              >
                Sobre nosotros
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 7. LECTURAS ESENCIALES (GUIA) */}
      <section className="py-20 bg-white border-b border-brand-charcoal/5 scroll-mt-20" id="lecturas">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-extrabold text-brand-charcoal tracking-tight">
              Lecturas esenciales para tu aventura en Perú
            </h2>
          </div>

          {/* Banner Guía Gratis */}
          <div 
            className="relative w-full h-48 sm:h-56 bg-cover bg-center flex flex-col items-center justify-center text-white mb-12 px-6 shadow-md"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200')" 
            }}
          >
            <div className="absolute inset-0 bg-black/45"></div>
            <div className="relative z-10 text-center space-y-4">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold tracking-widest uppercase text-white/95">
                GUÍA PARA VIAJE A PERÚ GRATUITA
              </h3>
              <div>
                <button 
                  onClick={() => alert('¡Gracias por tu interés! Tu descarga de la guía comenzará en breve.')}
                  className="bg-brand-orange hover:bg-brand-orange-dark text-white font-bold text-xs uppercase tracking-widest px-8 py-3 transition-colors duration-200"
                >
                  ¡Descárguenlo aquí!
                </button>
              </div>
            </div>
          </div>

          {/* Heading post-guía */}
          <div className="mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-brand-charcoal mb-2 font-sans">
              ¿Descargaron su guía?
            </h3>
            <p className="text-gray-600 text-sm sm:text-base font-light">
              Ahora, consulten estos artículos esenciales para planificar el viaje de sus sueños.
            </p>
          </div>

          {/* Lista de Artículos */}
          <div className="space-y-8 mb-12">
            
            {/* Artículo 1 */}
            <div className="flex flex-col md:flex-row gap-6 pb-8 border-b border-black/[0.06]">
              <div className="w-full md:w-80 h-44 shrink-0 overflow-hidden shadow-sm border border-black/[0.04]">
                <img 
                  src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=800" 
                  alt="11 cosas que debes saber antes de viajar a Perú" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 flex flex-col justify-between py-1">
                <div className="space-y-2">
                  <h4 className="text-lg sm:text-xl font-bold text-brand-charcoal hover:text-brand-orange transition-colors duration-200 leading-tight">
                    11 cosas que debes saber antes de viajar a Perú
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm font-light leading-relaxed">
                    Antes de viajar a Perú — prepara documentos, salud/altitud, equipaje, cambio de dinero, transporte y seguridad para un viaje sin contratiempos.
                  </p>
                </div>
                <div className="pt-3">
                  <a 
                    href="https://wa.me/51999999999?text=Hola%20Perú%20InsideOut,%20me%20gustaría%20saber%20más%20sobre%20las%2011%20cosas%20que%20debo%20saber%20antes%20de%20viajar" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-sky-600 hover:text-sky-800 font-semibold text-xs hover:underline"
                  >
                    Leer más
                  </a>
                </div>
              </div>
            </div>

            {/* Artículo 2 */}
            <div className="flex flex-col md:flex-row gap-6 pb-8 border-b border-black/[0.06]">
              <div className="w-full md:w-80 h-44 shrink-0 overflow-hidden shadow-sm border border-black/[0.04]">
                <img 
                  src="https://images.unsplash.com/photo-1590001155093-a3c66ab0c3ff?q=80&w=800" 
                  alt="Mal de altura: Todo lo que debes saber y cómo evitarlo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 flex flex-col justify-between py-1">
                <div className="space-y-2">
                  <h4 className="text-lg sm:text-xl font-bold text-brand-charcoal hover:text-brand-orange transition-colors duration-200 leading-tight">
                    Mal de altura: Todo lo que debes saber y cómo evitarlo
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm font-light leading-relaxed">
                    Mal de altura en Perú — reconoce síntomas, aclimata despacio, hidrátate, come ligero, descansa y baja de altura si empeora para evitar complicaciones.
                  </p>
                </div>
                <div className="pt-3">
                  <a 
                    href="https://wa.me/51999999999?text=Hola%20Perú%20InsideOut,%20quiero%20información%20y%20consejos%20sobre%20cómo%20manejar%20el%20mal%20de%20altura" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-sky-600 hover:text-sky-800 font-semibold text-xs hover:underline"
                  >
                    Leer más
                  </a>
                </div>
              </div>
            </div>

            {/* Artículo 3 */}
            <div className="flex flex-col md:flex-row gap-6 pb-8">
              <div className="w-full md:w-80 h-44 shrink-0 overflow-hidden shadow-sm border border-black/[0.04]">
                <img 
                  src="https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=800" 
                  alt="¿Qué empacar para un viaje a Perú?" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 flex flex-col justify-between py-1">
                <div className="space-y-2">
                  <h4 className="text-lg sm:text-xl font-bold text-brand-charcoal hover:text-brand-orange transition-colors duration-200 leading-tight">
                    ¿Qué empacar para un viaje a Perú? Perú lista de empaque, planificación y consejos
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm font-light leading-relaxed">
                    Lista de empaque para Perú — ropa en capas, calzado cómodo, protector solar y repelente, documentos y dinero, mochila ligera y ropa versátil según clima.
                  </p>
                </div>
                <div className="pt-3">
                  <a 
                    href="https://wa.me/51999999999?text=Hola%20Perú%20InsideOut,%20me%20interesa%20obtener%20la%20lista%20de%20empaque%20completa%20para%20el%20viaje" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-sky-600 hover:text-sky-800 font-semibold text-xs hover:underline"
                  >
                    Leer más
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Botón Ver más blogs */}
          <div className="text-center">
            <a 
              href="https://wa.me/51999999999" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-brand-orange hover:bg-brand-orange-dark text-white font-bold text-xs uppercase tracking-wider px-8 py-3.5 transition-colors duration-200"
            >
              Ver más blogs
            </a>
          </div>

        </div>
      </section>

      {/* 8. SECCIÓN DE CONTACTO */}
      <section className="py-20 bg-brand-cream scroll-mt-20 border-b border-brand-charcoal/5" id="contacto">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-8 space-y-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-extrabold text-brand-charcoal tracking-tight">
              ¡Empieza a planear su viaje hoy!
            </h2>
            <p className="text-gray-600 text-sm sm:text-base font-light">
              Cuéntenos sus sueños de viaje, nosotros los haremos realidad.
            </p>

            {/* TripAdvisor Badge */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-2 text-[11px] sm:text-xs font-semibold text-gray-700">
              <span>Rated 96% "Excellent" by travelers:</span>
              <div className="inline-flex items-center space-x-1 bg-[#00af87] text-white px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider">
                <span>Tripadvisor</span>
              </div>
              <span className="text-gray-400">Perú InsideOut</span>
              <div className="flex items-center space-x-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <span key={i} className="w-2.5 h-2.5 rounded-full bg-[#00af87] inline-block"></span>
                ))}
              </div>
              <span className="text-gray-600 font-bold">1,653 reviews</span>
            </div>
          </div>

          {/* Form Card */}
          <div className="bg-white p-6 sm:p-10 shadow-lg border border-black/[0.03] rounded-sm max-w-3xl mx-auto">
            {contactSubmitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto border border-green-200">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-brand-charcoal">
                  ¡Mensaje Recibido!
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm font-light max-w-md mx-auto leading-relaxed">
                  Gracias por escribirnos. Nuestro especialista en viajes se pondrá en contacto con usted en un plazo máximo de 24 horas para enviarle su itinerario personalizado de cortesía.
                </p>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-6">
                
                {/* Nombre / Apellido */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-charcoal">
                      Nombre <span className="text-brand-orange">*</span>
                    </label>
                    <input 
                      type="text"
                      value={contactForm.nombre}
                      onChange={(e) => setContactForm({ ...contactForm, nombre: e.target.value })}
                      className="w-full border border-black/10 px-4 py-3 text-xs bg-brand-cream focus:outline-none focus:border-brand-orange focus:bg-white transition"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-charcoal">
                      Apellido
                    </label>
                    <input 
                      type="text"
                      value={contactForm.apellido}
                      onChange={(e) => setContactForm({ ...contactForm, apellido: e.target.value })}
                      className="w-full border border-black/10 px-4 py-3 text-xs bg-brand-cream focus:outline-none focus:border-brand-orange focus:bg-white transition"
                    />
                  </div>
                </div>

                {/* Correo / Teléfono */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-charcoal">
                      Correo <span className="text-brand-orange">*</span>
                    </label>
                    <input 
                      type="email"
                      placeholder="Te enviaremos tu itinerario aquí"
                      value={contactForm.correo}
                      onChange={(e) => setContactForm({ ...contactForm, correo: e.target.value })}
                      className="w-full border border-black/10 px-4 py-3 text-xs bg-brand-cream placeholder:text-gray-400 focus:outline-none focus:border-brand-orange focus:bg-white transition"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-charcoal">
                      Teléfono <span className="text-brand-orange">*</span>
                    </label>
                    <div className="relative flex">
                      <div className="flex items-center space-x-1 border border-black/10 border-r-0 px-3 bg-brand-cream text-xs select-none">
                        <span>🇺🇸</span>
                        <span className="text-[9px] text-gray-500">▼</span>
                      </div>
                      <input 
                        type="tel"
                        value={contactForm.telefono}
                        onChange={(e) => setContactForm({ ...contactForm, telefono: e.target.value })}
                        className="w-full border border-black/10 px-4 py-3 text-xs bg-brand-cream focus:outline-none focus:border-brand-orange focus:bg-white transition"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Textarea planes */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-charcoal">
                    Cuéntennos más sobre sus planes de viaje:
                  </label>
                  <textarea 
                    rows={4}
                    placeholder="Pareja de 45 años viajando en mayo de 2026. Interesados en Machu Picchu, Rainbow Mountain y más en un viaje de 8 días con hoteles de 3 estrellas."
                    value={contactForm.detalles}
                    onChange={(e) => setContactForm({ ...contactForm, detalles: e.target.value })}
                    className="w-full border border-black/10 px-4 py-3 text-xs bg-brand-cream placeholder:text-gray-400 focus:outline-none focus:border-brand-orange focus:bg-white transition resize-none"
                  ></textarea>
                </div>

                {/* Submit button */}
                <div className="text-center pt-2">
                  <button 
                    type="submit"
                    disabled={loadingContact}
                    className="w-full sm:w-auto bg-brand-orange hover:bg-brand-orange-dark text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-10 py-4 shadow-md transition-colors duration-200 disabled:opacity-50 cursor-pointer"
                  >
                    {loadingContact ? 'Procesando...' : 'Planifica mi viaje soñado'}
                  </button>
                </div>

                {/* Benefits */}
                <div className="text-center pt-2">
                  <p className="text-[11px] sm:text-xs text-gray-700 font-extrabold tracking-wide uppercase">
                    No se requiere pago • Respuesta en 24 horas • 100% a medida
                  </p>
                </div>

                {/* Privacy disclaimer */}
                <div className="text-center pt-1">
                  <p className="text-[10px] text-gray-500 font-light max-w-lg mx-auto leading-relaxed">
                    *Al enviar esta información, confirmo que he leído y acepto los <a href="#" className="text-brand-orange hover:underline">Términos y Condiciones</a> y la <a href="#" className="text-brand-orange hover:underline">Política de Privacidad</a>.
                  </p>
                </div>

              </form>
            )}
          </div>

          {/* Direct Support Block */}
          <div className="text-center mt-12 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-charcoal">
              ¿Necesitan ayuda? Contáctennos:
            </h4>
            <p className="text-xs text-gray-600 font-light">
              <span className="font-bold text-brand-charcoal">info@peruinsideout.com</span> | Número gratuito de USA <span className="font-bold text-brand-charcoal">+1 (111) 111-1111</span>
            </p>
          </div>

        </div>
      </section>

      {/* 9. PREGUNTAS FRECUENTES */}
      <section className="py-20 bg-white scroll-mt-20" id="faq">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-10 text-left">
            <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-brand-charcoal">
              Preguntas frecuentes
            </h2>
          </div>

          <div className="border-t border-black/[0.08] divide-y divide-black/[0.08]" id="faq-accordion-list">
            {FAQ_DATA.map((faq) => {
              const isOpen = expandedFaqId === faq.id;
              return (
                <div 
                  key={faq.id} 
                  className="transition-colors"
                  id={`faq-item-${faq.id}`}
                >
                  <button 
                    onClick={() => setExpandedFaqId(isOpen ? null : faq.id)}
                    className="w-full flex items-center text-left py-4 sm:py-5 focus:outline-none"
                    id={`faq-trigger-${faq.id}`}
                  >
                    <span className="mr-4 text-brand-orange font-light text-2xl sm:text-3xl shrink-0 select-none leading-none -mt-1">
                      {isOpen ? '−' : '+'}
                    </span>
                    <span className="font-sans font-bold text-sm sm:text-base text-brand-charcoal hover:text-brand-orange transition-colors duration-250">
                      {faq.question}
                    </span>
                  </button>
                  
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light pb-5 pl-8 sm:pl-10 select-text">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>
        </>
      )}

      {/* 11. FOOTER IN PERU INSIDEOUT LIGHT STYLE */}
      <footer className="bg-white text-brand-charcoal pt-16 pb-8 border-t border-black/[0.06] font-sans" id="main-footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Bar Contacts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-black/[0.06] mb-12">
            {/* Correo */}
            <div className="space-y-2">
              <h4 className="text-sm font-bold uppercase tracking-wider text-brand-charcoal">Correo</h4>
              <p className="text-xs text-gray-600 hover:text-brand-orange transition-colors">
                <a href="mailto:info@peruinsideout.com">info@peruinsideout.com</a>
              </p>
            </div>
            {/* Teléfono */}
            <div className="space-y-1">
              <h4 className="text-sm font-bold uppercase tracking-wider text-brand-charcoal">Teléfono</h4>
              <p className="text-xs text-gray-600">
                USA: <a href="tel:+11111111111" className="hover:text-brand-orange transition-colors">+1 (111) 111-1111</a>
              </p>
              <p className="text-xs text-gray-600">
                Peru: <a href="tel:+51999999999" className="hover:text-brand-orange transition-colors">+51 999 999 999</a>
              </p>
            </div>
            {/* Dirección */}
            <div className="space-y-2">
              <h4 className="text-sm font-bold uppercase tracking-wider text-brand-charcoal">Dirección</h4>
              <p className="text-xs text-gray-600">
                Miraflores, Lima
              </p>
            </div>
            {/* Redes sociales */}
            <div className="space-y-2">
              <h4 className="text-sm font-bold uppercase tracking-wider text-brand-charcoal">Redes sociales</h4>
              <div className="flex items-center space-x-4">
                {/* Facebook icon */}
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-brand-charcoal hover:text-brand-orange transition-colors">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                  </svg>
                </a>
                {/* Instagram icon */}
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-brand-charcoal hover:text-brand-orange transition-colors">
                  <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                {/* YouTube icon */}
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-brand-charcoal hover:text-brand-orange transition-colors">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.108C19.52 3.5 12 3.5 12 3.5s-7.52 0-9.388.555a3.002 3.002 0 0 0-2.11 2.108C0 8.03 0 12 0 12s0 3.97.502 5.837a3.003 3.003 0 0 0 2.11 2.108C4.48 20.5 12 20.5 12 20.5s7.52 0 9.388-.555a3.002 3.002 0 0 0 2.11-2.108C24 15.97 24 12 24 12s0-3.97-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                {/* TripAdvisor icon */}
                <a href="https://tripadvisor.com" target="_blank" rel="noopener noreferrer" className="text-brand-charcoal hover:text-brand-orange transition-colors">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                    <circle cx="9" cy="12" r="2" />
                    <circle cx="15" cy="12" r="2" />
                    <path d="M12 14.5c1.38 0 2.5-1.12 2.5-2.5h-5c0 1.38 1.12 2.5 2.5 2.5z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Middle Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 text-left">
            {/* Column 1: Info */}
            <div className="space-y-4">
              <h4 className="text-base font-bold text-brand-charcoal">Info</h4>
              <ul className="space-y-2 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                <li><a href="#lecturas" onClick={(e) => handleAnchorClick(e, '#lecturas')} className="hover:text-brand-orange transition-colors">Blog</a></li>
                <li><a href="/quienes-somos" onClick={(e) => { e.preventDefault(); navigateTo('/quienes-somos'); }} className="hover:text-brand-orange transition-colors">Quiénes Somos</a></li>
                <li><a href="#tours" onClick={(e) => handleAnchorClick(e, '#tours')} className="hover:text-brand-orange transition-colors">Destinos</a></li>
                <li><a href="#metodo" onClick={(e) => handleAnchorClick(e, '#metodo')} className="hover:text-brand-orange transition-colors normal-case">Sostenibilidad y Turismo Responsable en Perú</a></li>
                <li><a href="#historia" onClick={(e) => handleAnchorClick(e, '#historia')} className="hover:text-brand-orange transition-colors normal-case">Proyecto Social de Perú InsideOut</a></li>
              </ul>
            </div>
            {/* Column 2: General */}
            <div className="space-y-4">
              <h4 className="text-base font-bold text-brand-charcoal">General</h4>
              <ul className="space-y-2 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                <li><a href="#faq" onClick={(e) => handleAnchorClick(e, '#faq')} className="hover:text-brand-orange transition-colors">Preguntas frecuentes</a></li>
                <li><a href="#contacto" onClick={(e) => handleAnchorClick(e, '#contacto')} className="hover:text-brand-orange transition-colors">Contáctanos</a></li>
                <li><a href="#trust-milestones" onClick={(e) => handleAnchorClick(e, '#trust-milestones')} className="hover:text-brand-orange transition-colors">Reseñas</a></li>
                <li><a href="#contacto" onClick={(e) => handleAnchorClick(e, '#contacto')} className="hover:text-brand-orange transition-colors">Libro de Reclamaciones</a></li>
                <li><a href="#" className="hover:text-brand-orange transition-colors">Política de Privacidad</a></li>
                <li><a href="#" className="hover:text-brand-orange transition-colors">Términos y Condiciones</a></li>
              </ul>
            </div>
            {/* Column 3: Los más populares */}
            <div className="space-y-4">
              <h4 className="text-base font-bold text-brand-charcoal">Los más populares</h4>
              <ul className="space-y-2 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                <li><a href="#tours" onClick={(e) => handleAnchorClick(e, '#tours')} className="hover:text-brand-orange transition-colors">8D Maravillas Peruanas</a></li>
                <li><a href="#tours" onClick={(e) => handleAnchorClick(e, '#tours')} className="hover:text-brand-orange transition-colors">8D Tour Culinario</a></li>
                <li><a href="#tours" onClick={(e) => handleAnchorClick(e, '#tours')} className="hover:text-brand-orange transition-colors">8D Tour Auténtico</a></li>
                <li><a href="#tours" onClick={(e) => handleAnchorClick(e, '#tours')} className="hover:text-brand-orange transition-colors">12D Aventura Épica</a></li>
                <li><a href="#contacto" onClick={(e) => handleAnchorClick(e, '#contacto')} className="hover:text-brand-orange transition-colors">Tours Personalizados</a></li>
                <li><a href="#tours" onClick={(e) => handleAnchorClick(e, '#tours')} className="hover:text-brand-orange transition-colors">Tours a Peru</a></li>
                <li><a href="#tours" onClick={(e) => handleAnchorClick(e, '#tours')} className="hover:text-brand-orange transition-colors">Machu Picchu Tours</a></li>
                <li><a href="#tours" onClick={(e) => handleAnchorClick(e, '#tours')} className="hover:text-brand-orange transition-colors">Full Days</a></li>
              </ul>
            </div>
          </div>

          {/* TripAdvisor Choice Awards centered block */}
          <div className="flex flex-col items-center justify-center space-y-4 py-8 border-t border-black/[0.06]">
            
            {/* Awards Row */}
            <div className="flex items-center justify-center gap-3 overflow-x-auto no-scrollbar w-full py-1">
              {[2022, 2023, 2024, 2025, 2026].map((year) => (
                <div key={year} className="flex flex-col items-center text-center shrink-0 w-[72px] sm:w-[78px] select-none text-brand-charcoal">
                  <span className="text-[9px] sm:text-[10px] font-extrabold leading-none tracking-tight">Tripadvisor</span>
                  <span className="text-[8px] sm:text-[9px] text-gray-700 font-medium leading-none tracking-tighter mt-[1px]">Travelers'</span>
                  <span className="text-[8px] sm:text-[9px] text-gray-700 font-medium leading-none tracking-tighter">Choice Awards</span>
                  
                  {/* Tripadvisor laurel wreath in black/dark grey */}
                  <svg className="w-14 h-14 text-brand-charcoal my-1" viewBox="0 0 100 100" fill="currentColor">
                    <defs>
                      <g id={`branch-dark-${year}`}>
                        <path d="M 50 82 C 34 81 24 67 24 50 C 24 41 27 33 33 27" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                        <path d="M 44 80 Q 34 82 32 76 Q 38 73 44 80 Z" />
                        <path d="M 37 74 Q 26 77 24 70 Q 31 66 37 74 Z" />
                        <path d="M 31 66 Q 20 69 18 61 Q 25 58 31 66 Z" />
                        <path d="M 27 57 Q 16 58 15 50 Q 22 49 27 57 Z" />
                        <path d="M 25 47 Q 15 47 15 39 Q 22 40 25 47 Z" />
                        <path d="M 26 37 Q 18 34 20 26 Q 25 30 26 37 Z" />
                        <path d="M 29 28 Q 23 22 27 15 Q 30 21 29 28 Z" />
                      </g>
                    </defs>
                    <use href={`#branch-dark-${year}`} />
                    <use href={`#branch-dark-${year}`} transform="translate(100, 0) scale(-1, 1)" />
                    <circle cx="50" cy="48" r="17" fill="none" stroke="currentColor" strokeWidth="3" />
                    <circle cx="44.5" cy="48" r="5" fill="white" stroke="currentColor" strokeWidth="1.8" />
                    <circle cx="44.5" cy="48" r="2.5" fill="currentColor" />
                    <circle cx="55.5" cy="48" r="5" fill="white" stroke="currentColor" strokeWidth="1.8" />
                    <circle cx="55.5" cy="48" r="2.5" fill="currentColor" />
                    <path d="M 38 42.5 Q 44.5 39 50 42.5 Q 55.5 39 62 42.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M 48.5 49 L 51.5 49 L 50 53 Z" fill="currentColor" />
                  </svg>
                  
                  <span className="text-[9px] sm:text-[10px] font-extrabold leading-none tracking-tight mt-0.5">{year}</span>
                </div>
              ))}
            </div>

            {/* Certifications block */}
            <div className="flex flex-col items-center justify-center space-y-4 pt-6 w-full border-t border-black/[0.06]">
              <h4 className="text-sm sm:text-base font-bold text-brand-charcoal">
                Afiliaciones y Certificaciones de Viaje
              </h4>
              <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 pt-2">
                
                {/* 1. MEMBER ADVENTURE TRAVEL TRADE ASSOCIATION */}
                <div className="bg-[#003859] text-white px-3 py-2 text-[8px] sm:text-[9px] font-extrabold tracking-wider leading-tight text-center max-w-[140px] rounded-xs shadow-xs uppercase select-none">
                  <div>MEMBER</div>
                  <div className="text-[7px] font-light">ADVENTURE TRAVEL</div>
                  <div className="text-[6px] text-sky-300">TRADE ASSOCIATION</div>
                </div>

                {/* 2. PROMPERÚ */}
                <div className="text-center select-none">
                  <div className="text-red-600 font-serif font-extrabold text-sm sm:text-lg tracking-tighter flex items-center justify-center leading-none">
                    <span>prom</span>
                    <span className="text-red-500 font-sans font-light border-l border-red-300 pl-1.5 ml-1.5">perú</span>
                  </div>
                </div>

                {/* 3. AGENCIA DE VIAJES Y TURISMO REGISTRADA */}
                <div className="flex items-center space-x-1.5 select-none border border-[#0F4C81]/30 p-1.5 pr-2.5 rounded-sm">
                  {/* Seal circle lookalike */}
                  <div className="w-6 h-6 border-2 border-[#0F4C81] rounded-full flex items-center justify-center text-[7px] text-[#0F4C81] font-bold shrink-0">
                    ✓
                  </div>
                  <div className="text-[7px] text-[#0F4C81] font-extrabold leading-none tracking-tight uppercase">
                    <div>Agencia de</div>
                    <div>Viajes y Turismo</div>
                    <div className="text-[6px] text-gray-500 font-light mt-[1px]">Registrada</div>
                  </div>
                </div>

                {/* 4. FOUNDED & LED BY GERMANS */}
                <div className="bg-black text-white px-3 py-1.5 text-[8px] sm:text-[9px] font-bold text-center border-l-3 border-yellow-400 max-w-[120px] leading-tight select-none">
                  <span className="block text-[7px] font-light text-gray-300 tracking-wider">FOUNDED & LED</span>
                  <span className="block text-[#ff4b4b] uppercase font-extrabold">BY GERMANS</span>
                </div>

              </div>
            </div>

          </div>

          {/* Bottom Copyright bar */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-black/[0.06] pt-6 mt-6 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
            <p className="text-center md:text-left font-light select-none">
              &copy; Copyright {new Date().getFullYear()} Perú InsideOut
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0 font-medium font-sans uppercase tracking-wider text-[10px]">
              <a href="#" className="hover:text-brand-orange transition">Políticas de Privacidad</a>
              <span className="text-black/10">•</span>
              <a href="#" className="hover:text-brand-orange transition">Términos del Servicio</a>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
