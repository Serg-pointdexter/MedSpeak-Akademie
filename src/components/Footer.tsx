import { Instagram, Facebook, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white text-slate-600 py-12 border-t border-slate-200 mt-auto shrink-0">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-med-navy rounded flex items-center justify-center text-med-teal font-bold italic font-serif">
                M
              </div>
              <span className="font-display font-bold text-lg text-med-navy tracking-tight">
                MedSpeak <span className="text-med-teal italic font-medium">akademie</span>
              </span>
            </div>
            <p className="text-xs font-medium text-slate-500 max-w-sm leading-relaxed">
              The premier institution for international medical professionals preparing for the German Fachsprachprüfung (FSP) and clinical integration.
            </p>
          </div>
          
          <div>
            <h4 className="text-slate-800 font-bold text-xs uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><a href="#curriculum" className="hover:text-med-teal transition-colors">Curriculum</a></li>
              <li><a href="#about" className="hover:text-med-teal transition-colors">Methodology</a></li>
              <li><a href="#registration" className="hover:text-med-teal transition-colors">Enrollment</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-slate-800 font-bold text-xs uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-3 text-xs font-medium text-slate-500">
              <li>
                <a 
                  href="https://wa.me/201152644924"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-lg hover:bg-[#1EBE5D] transition-colors font-bold shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat on WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-4 mt-2">
                <a 
                  href="https://www.instagram.com/medspeakakademie?igsh=MzJvaG0wcTM4eHcx" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-1.5 hover:text-med-teal transition-colors"
                >
                  <Instagram className="w-4 h-4 text-med-teal" />
                  <span>Instagram</span>
                </a>
                <a 
                  href="https://www.facebook.com/share/1bE3jBkQy8/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-1.5 hover:text-med-teal transition-colors"
                >
                  <Facebook className="w-4 h-4 text-med-teal" />
                  <span>Facebook</span>
                </a>
              </li>
              <li>Egypt</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-medium text-slate-400">&copy; {new Date().getFullYear()} MedSpeak Akademie. All rights reserved.</p>
          <div className="flex gap-4">
            <span className="text-[10px] font-bold text-slate-600 uppercase tracking-tighter">Giza</span>
            <span className="text-[10px] font-bold text-slate-600 uppercase tracking-tighter">Egypt</span>
            <span className="text-[10px] font-bold text-med-teal uppercase tracking-tighter">Online</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
