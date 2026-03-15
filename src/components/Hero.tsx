import { useEffect, useState, memo } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Download, ChevronDown, Sparkles } from 'lucide-react';

const TypewriterText = memo(function TypewriterText() {
  const roles = ['Data Analyst', 'Analista de Dados', 'Eng. Elétrica'];
  const [currentRole, setCurrentRole] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = isDeleting ? 40 : 80;
    const currentFullRole = roles[roleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting && currentRole === currentFullRole) {
        setTimeout(() => setIsDeleting(true), 2500);
      } else if (isDeleting && currentRole === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setCurrentRole(currentFullRole.substring(0, currentRole.length + (isDeleting ? -1 : 1)));
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [currentRole, isDeleting, roleIndex]);

  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-400">
      {currentRole}
    </span>
  );
});

export default function Hero() {
  // Animation variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring' as const, stiffness: 120, damping: 20 },
    },
  };

  return (
    <section id="inicio" className="relative h-[100dvh] min-h-[600px] flex flex-col justify-center items-center overflow-hidden pt-16">
      <motion.div 
        className="max-w-4xl mx-auto px-6 text-center z-10 flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        
        {/* Premium Badge */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200/80 dark:border-slate-800/80 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[11px] sm:text-xs font-medium text-slate-700 dark:text-slate-300 uppercase tracking-widest">
              Disponível para projetos
            </span>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1 
          variants={itemVariants}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-slate-900 dark:text-white leading-[1.1] tracking-tighter mb-6"
        >
          Euller{' '}
          <span className="relative inline-block">
            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-slate-900 dark:from-slate-200 dark:to-white">
              Duarte
            </span>
            <motion.span 
              className="absolute -bottom-2 left-0 w-full h-3 bg-blue-500/20 dark:bg-blue-500/30 -z-10 rounded-full blur-sm"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
            />
          </span>
        </motion.h1>

        {/* Typewriter Subtitle */}
        <motion.div variants={itemVariants} className="h-12 sm:h-14 mb-6 flex items-center justify-center gap-3">
          <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-amber-500" />
          <p className="text-xl sm:text-2xl md:text-3xl font-medium text-slate-600 dark:text-slate-300">
            <TypewriterText />
            <span className="animate-pulse text-blue-500 font-light ml-1">|</span>
          </p>
        </motion.div>
        
        {/* Description */}
        <motion.p 
          variants={itemVariants}
          className="text-slate-500 dark:text-slate-400 max-w-2xl mb-10 text-base sm:text-lg leading-relaxed"
        >
          Transformo dados complexos em decisões estratégicas. 
          Explore meu <span className="text-slate-800 dark:text-slate-200 font-semibold">portfólio</span> e sinta-se à vontade para entrar em <span className="text-slate-800 dark:text-slate-200 font-semibold">contato</span>.
        </motion.p>

        {/* Actions */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-row gap-3 sm:gap-4 w-full sm:w-auto justify-center"
        >
          <a 
            href="#projetos" 
            className="group relative inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-5 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-slate-900/20 dark:hover:shadow-white/20 overflow-hidden flex-1 sm:flex-none"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent dark:via-black/10 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
            <span className="whitespace-nowrap">Ver Projetos</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
          </a>
          <a 
            href="#" 
            className="group inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 px-5 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 hover:scale-105 shadow-sm flex-1 sm:flex-none"
          >
            <span className="whitespace-nowrap">Baixar CV</span>
            <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform shrink-0" />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 dark:text-slate-500"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <a 
          href="#sobre" 
          aria-label="Rolar para a seção Sobre"
          className="flex flex-col items-center gap-2 hover:text-blue-500 transition-colors group"
        >
          <span className="text-[10px] uppercase tracking-widest font-semibold opacity-0 group-hover:opacity-100 transition-opacity">Explorar</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}
