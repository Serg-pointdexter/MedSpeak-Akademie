import { ArrowRight, FileText, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import heroImage from '../assets/images/premium_hero_hospital_1783722501667.jpg';

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="xl:col-span-8 xl:row-span-3 bg-med-navy rounded-3xl p-8 lg:p-12 relative overflow-hidden flex flex-col justify-center border border-slate-800 shadow-xl shadow-slate-900/10 text-white"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10" 
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}
      ></div>
      
      {/* Hero Image */}
      <div className="absolute top-0 right-0 w-3/4 h-full hidden sm:block">
        <div className="absolute inset-0 bg-gradient-to-r from-med-navy via-med-navy/90 to-transparent z-10"></div>
        <img 
          src={heroImage} 
          alt="Diverse doctors in a modern hospital" 
          className="w-full h-full object-cover opacity-50 mix-blend-luminosity mask-image"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Soft gradient glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-med-teal/20 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none z-10"></div>

      <div className="relative z-20 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 bg-med-teal/20 text-med-teal text-[10px] uppercase tracking-widest font-bold rounded-full border border-med-teal/30 mb-6">
              Fachsprachprüfung Preparation
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
              Your Medical Career <br/>
              <span className="text-med-teal italic font-serif">starts in Germany.</span>
            </h1>
            <p className="text-base md:text-lg text-slate-300 mb-10 max-w-xl leading-relaxed">
              Master clinical German communication through our immersive academy. Tailored pathways for international doctors to ace the FSP and secure residency.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a 
                href="#curriculum"
                className="inline-flex justify-center items-center gap-2 bg-med-teal hover:bg-med-teal-hover text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg shadow-med-teal/20"
              >
                Explore Courses
              </a>
              <a 
                href="https://wa.me/201152644924"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white border border-[#25D366] px-6 py-3 rounded-xl font-bold transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Follow Us:</span>
              <a 
                href="https://www.instagram.com/medspeakakademie?igsh=MzJvaG0wcTM4eHcx"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-slate-700 flex items-center justify-center hover:bg-med-teal hover:border-med-teal transition-all group"
              >
                <svg className="w-4 h-4 text-slate-300 group-hover:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a 
                href="https://www.facebook.com/share/1bE3jBkQy8/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-slate-700 flex items-center justify-center hover:bg-[#1877F2] hover:border-[#1877F2] transition-all group"
              >
                <svg className="w-4 h-4 text-slate-300 group-hover:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
