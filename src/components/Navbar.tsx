import { useState } from 'react';
import { Menu, X, Stethoscope } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Curriculum', href: '#curriculum' },
    { name: 'Methodology', href: '#about' },
    { name: 'Enrollment', href: '#registration' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white border-b border-slate-200 shadow-sm z-50 transition-all h-16">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between h-full items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-8 h-8 bg-med-navy rounded flex items-center justify-center text-med-teal font-bold italic font-serif">
              M
            </div>
            <span className="font-display font-bold text-xl text-med-navy tracking-tight">
              MedSpeak <span className="text-med-teal font-medium italic">akademie</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-slate-600 hover:text-med-teal transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#registration"
              className="px-4 py-2 bg-med-teal text-white text-sm font-bold rounded shadow-sm hover:bg-med-teal-hover transition-colors"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-med-navy focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 shadow-lg absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-med-teal hover:bg-slate-50 rounded-md"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#registration"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center mt-4 bg-med-navy text-white px-5 py-3 rounded-md text-base font-medium hover:bg-slate-800 transition-colors"
            >
              Schedule Consultation
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
