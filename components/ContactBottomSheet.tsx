import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MessageCircle } from 'lucide-react';

interface ContactBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactBottomSheet: React.FC<ContactBottomSheetProps> = ({ isOpen, onClose }) => {
  const whatsappMessage = encodeURIComponent("Hi, I'm interested in Zenithra Fitness coaching. Can you guide me?");
  const whatsappUrl = `https://wa.me/919346560575?text=${whatsappMessage}`;

  // Prevent scrolling when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Bottom Sheet */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            drag="y"
            dragConstraints={{ top: 0 }}
            dragElastic={0.2}
            onDragEnd={(e, { offset, velocity }) => {
              if (offset.y > 100 || velocity.y > 500) {
                onClose();
              }
            }}
            className="fixed bottom-0 left-0 right-0 z-50 bg-slate-900 border-t border-slate-800 rounded-t-3xl shadow-2xl flex flex-col max-h-[90vh]"
          >
            {/* Drag Handle */}
            <div className="w-full flex justify-center pt-4 pb-2 cursor-grab active:cursor-grabbing">
              <div className="w-12 h-1.5 bg-slate-700 rounded-full" />
            </div>

            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-colors"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="px-6 pb-8 pt-2 overflow-y-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">Let's Get Started</h2>
                <p className="text-slate-400">Choose how you'd like to connect with our coaches.</p>
              </div>

              {/* Primary CTA - WhatsApp */}
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full py-4 px-6 bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded-xl text-lg transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:-translate-y-1"
              >
                <MessageCircle className="mr-3 h-6 w-6" />
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
