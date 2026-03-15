import { useState, useEffect } from 'react';
import {
  Home,
  User,
  Code2,
  Briefcase,
  Mail,
  SunMedium,
  MoonStar,
  Menu,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GithubIcon } from './icons';

const NAV_LINKS = [
  { name: 'Início', href: '#inicio', icon: Home },
  { name: 'Sobre', href: '#sobre', icon: User },
  { name: 'Habilidades', href: '#habilidades', icon: Code2 },
  { name: 'Projetos', href: '#projetos', icon: Briefcase },
  { name: 'Contato', href: '#contato', icon: Mail },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('inicio');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Inicialização do tema baseado na preferência do sistema ou classe dark existente
    const isDark = document.documentElement.classList.contains('dark') || 
                   (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    setIsDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    }

    const updateActiveSection = () => {
      setScrolled(window.scrollY > 20);

      const sections = document.querySelectorAll('section[id]');
      let current = 'inicio';
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.35) {
          current = section.id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', updateActiveSection, { passive: true });
    updateActiveSection();

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
    };
  }, []);

  // Prevenir scroll do body quando o menu mobile está aberto
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
    document.documentElement.classList.toggle('dark');
  };

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <nav className="fixed top-0 w-full z-50 py-4 px-4 sm:px-6 pointer-events-none">
      <div className={`max-w-6xl mx-auto bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-xl border border-slate-200/60 dark:border-slate-800/60 rounded-2xl px-4 md:px-5 py-3 flex items-center justify-between pointer-events-auto transition-all duration-500 ${scrolled ? 'shadow-xl shadow-slate-200/40 dark:shadow-black/60 py-2.5' : 'shadow-lg shadow-slate-200/20 dark:shadow-black/20 py-3.5'}`}>
        
        {/* Logo */}
        <a href="#inicio" onClick={closeMobileMenu} className="text-xl font-extrabold tracking-tighter flex items-center gap-2.5 group">
          <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-linear-to-br from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 group-hover:scale-105 transition-all duration-300">
            <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Code2 className="w-5 h-5 relative z-10" />
          </div>
          <span className="bg-clip-text text-transparent bg-linear-to-r from-slate-800 to-slate-600 dark:from-white dark:to-slate-300 group-hover:from-blue-600 group-hover:to-indigo-600 dark:group-hover:from-blue-400 dark:group-hover:to-indigo-400 transition-all duration-300">
            Euller.dev
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-2">
          <div className="flex items-center gap-1 bg-slate-100/60 dark:bg-slate-800/40 p-1.5 rounded-2xl border border-slate-200/50 dark:border-slate-700/50">
            {NAV_LINKS.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative group flex items-center gap-2 px-4 py-2 rounded-xl transition-colors duration-300 ${
                    isActive
                      ? 'text-blue-700 dark:text-blue-300'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-nav-pill"
                      className="absolute inset-0 bg-white dark:bg-slate-700/80 rounded-xl shadow-sm border border-slate-200/50 dark:border-slate-600/50"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    <Icon className={`w-4 h-4 transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`} />
                    <span className="text-sm font-semibold">{link.name}</span>
                  </span>
                </a>
              );
            })}
          </div>
          
          <div className="flex items-center gap-3 pl-5 ml-3 border-l border-slate-200/80 dark:border-slate-700/80">
            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme}
              className="relative p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700 shadow-sm border border-transparent hover:border-slate-200 dark:hover:border-slate-600 transition-all duration-300 group overflow-hidden"
              title={isDarkMode ? "Modo Claro" : "Modo Escuro"}
            >
              <div className="absolute inset-0 bg-linear-to-tr from-amber-200/20 to-orange-400/20 dark:from-indigo-500/20 dark:to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {isDarkMode ? (
                <SunMedium className="w-5 h-5 relative z-10 text-amber-500 group-hover:rotate-90 transition-transform duration-500" />
              ) : (
                <MoonStar className="w-5 h-5 relative z-10 text-indigo-500 group-hover:-rotate-12 transition-transform duration-500" />
              )}
            </button>

            {/* GitHub */}
            <a 
              href="https://github.com/euller-ds" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="relative p-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 shadow-md hover:shadow-lg transition-all duration-300 group overflow-hidden"
              title="GitHub"
            >
              <div className="absolute inset-0 bg-linear-to-tr from-white/10 to-transparent dark:from-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <GithubIcon className="w-5 h-5 relative z-10 group-hover:scale-110 transition-transform duration-300" />
            </a>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-3 lg:hidden">
          <button 
            onClick={toggleTheme}
            className="relative p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700 shadow-sm border border-transparent hover:border-slate-200 dark:hover:border-slate-600 transition-all duration-300 group overflow-hidden"
            title={isDarkMode ? "Modo Claro" : "Modo Escuro"}
          >
            <div className="absolute inset-0 bg-linear-to-tr from-amber-200/20 to-orange-400/20 dark:from-indigo-500/20 dark:to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            {isDarkMode ? (
              <SunMedium className="w-5 h-5 relative z-10 text-amber-500 group-hover:rotate-90 transition-transform duration-500" />
            ) : (
              <MoonStar className="w-5 h-5 relative z-10 text-indigo-500 group-hover:-rotate-12 transition-transform duration-500" />
            )}
          </button>
          <button 
            className="relative p-2 rounded-xl text-slate-600 bg-slate-100 hover:bg-slate-200 dark:text-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 shadow-sm transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Fechar Menu" : "Abrir Menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-full left-4 right-4 mt-3 bg-white/95 dark:bg-[#0a0a0a]/95 backdrop-blur-xl border border-slate-200 dark:border-slate-800 shadow-2xl rounded-2xl overflow-hidden pointer-events-auto"
          >
            <div className="flex flex-col gap-1 p-4">
              {NAV_LINKS.map((link) => {
                const Icon = link.icon;
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={closeMobileMenu}
                    className={`flex items-center gap-3 py-3.5 px-4 rounded-xl transition-all duration-300 ${
                      isActive
                        ? 'bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 font-bold shadow-sm border border-blue-100 dark:border-blue-500/20'
                        : 'text-slate-600 dark:text-slate-300 font-medium hover:bg-slate-50 dark:hover:bg-slate-800/50 border border-transparent'
                    }`}
                  >
                    <Icon className={`w-5 h-5 ${isActive ? 'text-blue-600 dark:text-blue-400' : 'text-slate-400'}`} />
                    {link.name}
                  </a>
                );
              })}
              
              <div className="pt-4 mt-2 border-t border-slate-100 dark:border-slate-800">
                <a 
                  href="https://github.com/euller-ds" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 font-semibold transition-colors shadow-sm w-full"
                >
                  <GithubIcon className="w-5 h-5" /> GitHub
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
