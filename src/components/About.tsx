import { CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import aboutImage from '../assets/images/premium_about_medical_1783722519687.jpg';

export default function About() {
  const methodology = [
    "Structured A2 to B2/C1 Medical German pathways.",
    "Interactive, live group sessions with personalized feedback.",
    "Deep focus on practical clinical scenarios rather than just abstract grammar.",
    "Taught by experienced language instructors and medical professionals."
  ];

  return (
    <section id="about" className="xl:col-span-3 xl:row-span-3 bg-slate-100 rounded-3xl p-6 lg:p-8 border border-slate-200 flex flex-col h-full overflow-hidden">
      <div className="flex flex-col h-full">
        <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">The Academy</h4>
        
        <div className="mb-6">
          <h3 className="text-2xl font-display font-bold text-med-navy mb-3 leading-tight">
            Proven Framework
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed hidden sm:block">
            At MedSpeak Akademie, we recognize that passing the FSP requires more than general language fluency. It demands precision, empathy, and a deep understanding of the German healthcare system.
          </p>
        </div>

        <div className="space-y-4 mb-6 flex-grow">
          {methodology.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <span className="text-med-teal font-bold font-serif text-lg leading-none">0{index + 1}</span>
              <p className="text-xs font-medium text-slate-600 leading-tight pt-0.5">{item}</p>
            </div>
          ))}
        </div>

        {/* Visual/Grid Stats */}
        <div className="grid grid-cols-2 gap-3 mt-auto h-24">
          <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 flex flex-col justify-center h-full">
            <div className="text-lg lg:text-xl font-display font-bold text-med-navy mb-1">B2/C1</div>
            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Target Level</div>
          </div>
          <div className="relative p-3 rounded-xl shadow-sm flex flex-col justify-center overflow-hidden text-white h-full">
            <img 
              src={aboutImage} 
              alt="Medical Training" 
              className="absolute inset-0 w-full h-full object-cover" 
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-med-teal/80 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-med-navy/80 to-transparent"></div>
            <div className="relative z-10">
              <div className="text-lg lg:text-xl font-display font-bold mb-1">100%</div>
              <div className="text-[10px] font-bold text-teal-100 uppercase tracking-wider">FSP Aligned</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
