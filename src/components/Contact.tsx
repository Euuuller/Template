import { useState, FormEvent } from 'react';
import SectionHeader from './SectionHeader';
import { SOCIAL_LINKS } from '../data';
import { CheckCircle2, AlertCircle, ArrowRight, Loader2, Mail, Linkedin, Github, Type } from 'lucide-react';

const getSocialIcon = (name: string) => {
  switch (name.toLowerCase()) {
    case 'email': return <Mail className="w-6 h-6" />;
    case 'linkedin': return <Linkedin className="w-6 h-6" />;
    case 'github': return <Github className="w-6 h-6" />;
    case 'medium': return <Type className="w-6 h-6" />;
    default: return <Mail className="w-6 h-6" />;
  }
};

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({ name: false, email: false, subject: false, message: false });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Validação
    const newErrors = {
      name: !formData.name.trim(),
      email: !formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email),
      subject: !formData.subject.trim(),
      message: !formData.message.trim()
    };
    setErrors(newErrors);
    
    // Se houver erros, interrompe o envio
    if (Object.values(newErrors).some(Boolean)) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Usando FormSubmit.co para envio gratuito de e-mails
      const response = await fetch("https://formsubmit.co/ajax/euller.santos.duarte@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          Nome: formData.name,
          Email: formData.email,
          Assunto: formData.subject,
          Mensagem: formData.message,
          _subject: `Novo Contato do Portfólio: ${formData.subject}`,
          _template: "box" // Template visualmente mais agradável no e-mail
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        // Limpa a mensagem de sucesso após 5 segundos
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="min-h-[100dvh] flex flex-col pt-[120px] pb-[80px]">
      <div className="max-w-7xl mx-auto px-6 w-full flex-1 flex flex-col">
        <SectionHeader 
          title="Entre em Contato" 
          subtitle="Vamos conversar sobre como posso ajudar a sua empresa a tomar decisões baseadas em dados." 
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-[60px] items-start">
          {/* Social Links */}
          <div className="flex flex-col gap-4">
            {SOCIAL_LINKS.map(link => (
              <a 
                key={link.name} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white dark:bg-[#0a0a0a] p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center gap-4 hover:bg-slate-50 dark:hover:bg-slate-800 hover:translate-x-1 transition-all duration-300 shadow-sm"
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${link.bg} ${link.color}`}>
                  {getSocialIcon(link.name)}
                </div>
                <div>
                  <h4 className="font-semibold text-navy dark:text-white text-sm">{link.name}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{link.value}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-white dark:bg-[#0a0a0a] p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-6 relative overflow-hidden">
            
            {/* Success Message Overlay */}
            <div className={`absolute inset-0 bg-white/95 dark:bg-[#0a0a0a]/95 backdrop-blur-sm z-10 flex flex-col items-center justify-center transition-all duration-500 ${submitStatus === 'success' ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
              <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-navy dark:text-white mb-2">Mensagem Enviada!</h3>
              <p className="text-slate-500 dark:text-slate-400 text-center max-w-[250px]">Obrigado pelo contato. Retornarei o mais breve possível.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-medium text-slate-700 dark:text-slate-300">Nome Completo</label>
                <input 
                  type="text" 
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  disabled={isSubmitting}
                  className={`px-4 py-3 rounded-lg border-[1.5px] text-sm text-navy dark:text-white bg-transparent placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all disabled:opacity-50 ${errors.name ? 'border-red-500 focus:border-red-500' : 'border-slate-200 dark:border-slate-700 focus:border-blue-500'}`}
                />
                {errors.name && <span className="text-[11px] text-red-500 font-medium mt-0.5">Nome é obrigatório</span>}
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-medium text-slate-700 dark:text-slate-300">Email</label>
                <input 
                  type="email" 
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  disabled={isSubmitting}
                  className={`px-4 py-3 rounded-lg border-[1.5px] text-sm text-navy dark:text-white bg-transparent placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all disabled:opacity-50 ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-slate-200 dark:border-slate-700 focus:border-blue-500'}`}
                />
                {errors.email && <span className="text-[11px] text-red-500 font-medium mt-0.5">Insira um e-mail válido</span>}
              </div>
            </div>
            
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] font-medium text-slate-700 dark:text-slate-300">Assunto</label>
              <input 
                type="text" 
                placeholder="Qual o motivo do contato?"
                value={formData.subject}
                onChange={e => setFormData({...formData, subject: e.target.value})}
                disabled={isSubmitting}
                className={`px-4 py-3 rounded-lg border-[1.5px] text-sm text-navy dark:text-white bg-transparent placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all disabled:opacity-50 ${errors.subject ? 'border-red-500 focus:border-red-500' : 'border-slate-200 dark:border-slate-700 focus:border-blue-500'}`}
              />
              {errors.subject && <span className="text-[11px] text-red-500 font-medium mt-0.5">Assunto é obrigatório</span>}
            </div>
            
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] font-medium text-slate-700 dark:text-slate-300">Mensagem</label>
              <textarea 
                placeholder="Escreva sua mensagem aqui..."
                value={formData.message}
                onChange={e => setFormData({...formData, message: e.target.value})}
                disabled={isSubmitting}
                className={`px-4 py-3 rounded-lg border-[1.5px] text-sm text-navy dark:text-white bg-transparent placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all min-h-[140px] resize-y disabled:opacity-50 ${errors.message ? 'border-red-500 focus:border-red-500' : 'border-slate-200 dark:border-slate-700 focus:border-blue-500'}`}
              ></textarea>
              {errors.message && <span className="text-[11px] text-red-500 font-medium mt-0.5">Mensagem é obrigatória</span>}
            </div>

            {submitStatus === 'error' && (
              <div className="bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400 p-3 rounded-lg text-sm flex items-center gap-2">
                <AlertCircle className="w-4 h-4" />
                Ocorreu um erro ao enviar. Tente novamente mais tarde.
              </div>
            )}
            
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-blue-400 disabled:cursor-not-allowed text-white font-semibold py-3.5 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" /> Enviando...
                </>
              ) : (
                <>
                  Enviar Mensagem <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
