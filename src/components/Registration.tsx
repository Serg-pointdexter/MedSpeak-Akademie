import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle } from 'lucide-react';
import drAhmedAvatar from '../assets/images/dr_ahmed_avatar_1783734352932.jpg';
import drElenaAvatar from '../assets/images/dr_elena_avatar_1783734367914.jpg';

const REVIEWS = [
  {
    name: "Dr. Ahmed M.",
    role: "Internal Medicine, Charité Berlin",
    quote: "MedSpeak was exactly what I needed to pass my FSP and match into my residency in Germany!",
    avatar: drAhmedAvatar
  },
  {
    name: "Dr. Sarah K.",
    role: "Pediatrics Residency",
    quote: "The personalized feedback helped me overcome my fear of patient interactions in German.",
    avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=100&h=100"
  },
  {
    name: "Dr. Elena V.",
    role: "Neurology, Munich Hospital",
    quote: "Highly structured curriculum. The exam simulation felt exactly like the real Ärztekammer test.",
    avatar: drElenaAvatar
  },
  {
    name: "Dr. Tariq H.",
    role: "Surgery Residency",
    quote: "I improved from B2 to FSP readiness in just 8 weeks thanks to their dedicated instructors.",
    avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=100&h=100"
  }
];

export default function Registration() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [activeReview, setActiveReview] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveReview((prev) => (prev + 1) % REVIEWS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      fullName: formData.get('fullName') as string,
      specialty: formData.get('specialty') as string,
      level: formData.get('level') as string,
      phone: formData.get('phone') as string,
      email: formData.get('email') as string,
    };

    const newErrors: Record<string, string> = {};

    if (!data.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!data.specialty.trim()) newErrors.specialty = 'Medical Specialty is required';
    if (!data.level) newErrors.level = 'Please select a language level';
    if (!data.phone.trim()) newErrors.phone = 'Phone number is required';
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(data.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      
      if (!response.ok) {
        throw new Error('Failed to submit');
      }

      setIsSubmitting(false);
      setIsSuccess(true);
    } catch (error) {
      console.error(error);
      setIsSubmitting(false);
      alert('There was an issue submitting your registration. Please try again.');
    }
  };

  return (
    <section id="registration" className="xl:col-span-4 xl:row-span-6 bg-white rounded-3xl p-6 lg:p-8 border border-slate-200 shadow-xl shadow-slate-200/50 flex flex-col relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 -skew-x-12 origin-top-right transform -translate-x-1/4 z-0 pointer-events-none"></div>

      <div className="relative z-10 flex flex-col h-full">
        <div className="mb-8">
          <h2 className="text-2xl lg:text-3xl font-display font-bold text-med-navy mb-2">
            Join the Cohort
          </h2>
          <p className="text-slate-500 text-sm">
            Enroll for the upcoming intensive medical German intake. Evaluate your current German level and design a personalized learning roadmap.
          </p>
        </div>

        <div className="flex-grow flex flex-col relative">
          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                onSubmit={handleSubmit}
                className="space-y-4 flex-grow flex flex-col"
                noValidate
              >
                <div>
                  <label htmlFor="fullName" className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Full Name</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    className={`w-full px-4 py-2.5 rounded-lg border bg-slate-50 focus:bg-white transition-colors outline-none focus:ring-2 focus:ring-med-teal/50 text-sm ${errors.fullName ? 'border-red-300 focus:border-red-500' : 'border-slate-200 focus:border-med-teal'}`}
                    placeholder="Dr. Sarah Miller"
                  />
                  {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="specialty" className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Specialty</label>
                    <input
                      type="text"
                      id="specialty"
                      name="specialty"
                      className={`w-full px-4 py-2.5 rounded-lg border bg-slate-50 focus:bg-white transition-colors outline-none focus:ring-2 focus:ring-med-teal/50 text-sm ${errors.specialty ? 'border-red-300 focus:border-red-500' : 'border-slate-200 focus:border-med-teal'}`}
                      placeholder="Cardiology"
                    />
                    {errors.specialty && <p className="text-red-500 text-xs mt-1">{errors.specialty}</p>}
                  </div>

                  <div>
                    <label htmlFor="level" className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Level</label>
                    <select
                      id="level"
                      name="level"
                      defaultValue=""
                      className={`w-full px-4 py-2.5 rounded-lg border bg-slate-50 focus:bg-white transition-colors outline-none focus:ring-2 focus:ring-med-teal/50 appearance-none text-sm ${errors.level ? 'border-red-300 focus:border-red-500' : 'border-slate-200 focus:border-med-teal'}`}
                    >
                      <option value="" disabled>Select Level</option>
                      <option value="beginner">Beginner</option>
                      <option value="a1">A1</option>
                      <option value="a2">A2</option>
                      <option value="b1">B1</option>
                      <option value="b2">B2</option>
                      <option value="c1">C1+</option>
                    </select>
                    {errors.level && <p className="text-red-500 text-xs mt-1">{errors.level}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className={`w-full px-4 py-2.5 rounded-lg border bg-slate-50 focus:bg-white transition-colors outline-none focus:ring-2 focus:ring-med-teal/50 text-sm ${errors.phone ? 'border-red-300 focus:border-red-500' : 'border-slate-200 focus:border-med-teal'}`}
                    placeholder="+49 123 456789"
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={`w-full px-4 py-2.5 rounded-lg border bg-slate-50 focus:bg-white transition-colors outline-none focus:ring-2 focus:ring-med-teal/50 text-sm ${errors.email ? 'border-red-300 focus:border-red-500' : 'border-slate-200 focus:border-med-teal'}`}
                    placeholder="s.miller@hospital.org"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                <div className="mt-auto pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-med-navy text-white py-3.5 rounded-xl font-bold hover:bg-slate-800 transition-colors shadow-lg shadow-med-navy/10 disabled:opacity-70 flex justify-center items-center"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      "Register for Enrollment"
                    )}
                  </button>
                  <p className="text-[10px] text-center text-slate-400 italic mt-3">Secure transmission via MedSpeak Academic Cloud</p>
                </div>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center h-full py-12 px-2"
              >
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-xl font-display font-bold text-med-navy mb-2">
                  Vielen Dank!
                </h3>
                <p className="text-slate-500 text-sm mb-8">
                  Our academic advisors will contact you shortly.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="text-med-teal text-sm font-medium hover:text-med-teal-hover transition-colors"
                >
                  Submit another inquiry
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {!isSuccess && (
          <div className="mt-6 pt-6 border-t border-slate-100 overflow-hidden relative h-24">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeReview}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-3 absolute inset-0"
              >
                <img src={REVIEWS[activeReview].avatar} alt={REVIEWS[activeReview].name} className="w-10 h-10 rounded-full border border-slate-200 flex-shrink-0 object-cover shadow-sm" referrerPolicy="no-referrer" />
                <div>
                  <p className="text-xs font-bold text-slate-700 italic line-clamp-2">"{REVIEWS[activeReview].quote}"</p>
                  <p className="text-[10px] text-med-teal font-bold uppercase mt-0.5">— {REVIEWS[activeReview].name}, {REVIEWS[activeReview].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  );
}

