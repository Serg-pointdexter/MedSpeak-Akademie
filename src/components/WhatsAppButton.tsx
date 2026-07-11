import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/201152644924"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg shadow-[#25D366]/30 hover:bg-[#1EBE5D] transition-colors flex items-center justify-center group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <MessageCircle className="w-7 h-7" />
      <span className="absolute right-full mr-4 bg-white text-slate-800 text-xs font-bold px-3 py-2 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Chat with us on WhatsApp
      </span>
    </motion.a>
  );
}
