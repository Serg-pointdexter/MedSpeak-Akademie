import { ClipboardList, Users, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export default function Curriculum() {
  const features = [
    {
      title: 'Medical History Training',
      subtitle: 'Anamnese-Training',
      description: 'Master patient communication. Learn to gather comprehensive medical histories empathetically and accurately in clinical German, navigating colloquialisms and patient fears.',
      icon: ClipboardList,
    },
    {
      title: 'Doctor-to-Doctor Comm.',
      subtitle: 'Patientenvorstellung',
      description: 'Develop the vocabulary and structure required to present clinical cases concisely to chief physicians and colleagues using precise medical jargon.',
      icon: Users,
    },
    {
      title: 'Exam Simulation',
      subtitle: 'Realitätsnahe FSP-Simulation',
      description: 'Experience realistic mock exams mirroring the official German Ärztekammer testing standards. Receive detailed, actionable feedback to ensure readiness.',
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="curriculum" className="xl:col-span-5 xl:row-span-3 flex flex-col gap-4 h-full">
      <div className="bg-white rounded-3xl p-6 lg:p-8 border border-slate-200 flex flex-col justify-center h-1/3 shadow-sm">
        <h2 className="text-med-teal font-medium tracking-wide text-[10px] uppercase mb-1">Our Curriculum</h2>
        <h3 className="text-xl lg:text-2xl font-display font-bold text-med-navy mb-2">
          Targeted Clinical Proficiency
        </h3>
        <p className="text-slate-500 text-xs sm:text-sm">
          We teach the specific medical language required to practice medicine safely and confidently in Germany.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 h-2/3">
        {features.map((feature, index) => {
          const isHighlight = index === 2;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`rounded-3xl p-5 border flex flex-col justify-between transition-all duration-300 ${
                isHighlight 
                  ? 'bg-med-teal border-med-teal hover:shadow-lg shadow-med-teal/20 text-white' 
                  : 'bg-white border-slate-200 hover:border-med-teal hover:shadow-md'
              }`}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${
                isHighlight ? 'bg-white/20 text-white' : 'bg-med-teal/10 text-med-teal'
              }`}>
                <feature.icon className="w-5 h-5" />
              </div>
              <div>
                <h4 className={`text-sm font-bold mb-1 ${isHighlight ? 'text-white' : 'text-slate-800'}`}>
                  {feature.title}
                </h4>
                <p className={`text-[10px] sm:text-xs leading-snug ${isHighlight ? 'text-teal-100' : 'text-slate-500'}`}>
                  {feature.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
