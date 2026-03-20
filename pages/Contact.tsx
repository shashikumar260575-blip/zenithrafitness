import React from 'react';
import { PageView } from '../types';
import { MessageCircle, Clock } from 'lucide-react';

interface ContactProps {
  onNavigate: (view: PageView) => void;
}

export const Contact: React.FC<ContactProps> = () => {
  const whatsappMessage = encodeURIComponent("Hi, I'm interested in Zenithra Fitness coaching. Can you guide me?");
  const whatsappUrl = `https://wa.me/919346560575?text=${whatsappMessage}`;

  return (
    <div className="bg-black min-h-screen py-24 flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-emerald-500 tracking-widest uppercase mb-3">Zenithra Fitness</h2>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
                Ready to Start Your Journey?
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                Take the first step towards a healthier, stronger you. Message us on WhatsApp to discuss your goals and find the perfect plan.
            </p>
        </div>

        <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 md:p-12 backdrop-blur-sm shadow-2xl max-w-2xl mx-auto text-center">
            
            {/* Primary CTA - WhatsApp */}
            <div>
                <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                    <MessageCircle className="h-10 w-10 text-emerald-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Chat with our Coaches</h3>
                <p className="text-slate-400 mb-8">Get instant answers to your questions and personalized advice.</p>
                
                <a 
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full sm:w-auto px-10 py-5 bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded-xl text-lg transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] hover:-translate-y-1"
                >
                    <MessageCircle className="mr-3 h-6 w-6" />
                    Start Your Transformation
                </a>
                
                <div className="flex items-center justify-center mt-6 text-sm text-slate-400 font-medium">
                    <Clock className="h-4 w-4 mr-2 text-emerald-500" />
                    Our team will respond within a few hours
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};