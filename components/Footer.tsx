import React from 'react';
import { PageView } from '../types';
import { Facebook, Instagram, Twitter, MessageCircle, AlertTriangle } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: PageView) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
             <span className="font-bold text-xl text-white tracking-tight block mb-4">Zenithra<span className="text-emerald-500">Fitness</span></span>
             <p className="text-sm text-slate-400 mb-6">
               Ethical, sustainable, and personalized health coaching for the modern Indian lifestyle.
             </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><button onClick={() => onNavigate(PageView.HOME)} className="hover:text-emerald-400 text-sm">Home</button></li>
              <li><button onClick={() => onNavigate(PageView.ABOUT)} className="hover:text-emerald-400 text-sm">About Us</button></li>
              <li><button onClick={() => onNavigate(PageView.HOW_IT_WORKS)} className="hover:text-emerald-400 text-sm">How It Works</button></li>
              <li><button onClick={() => onNavigate(PageView.PRICING)} className="hover:text-emerald-400 text-sm">Programs</button></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Contact</h3>
             <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a 
                  href="https://wa.me/919346560575?text=Hi,%20I'm%20interested%20in%20Zenithra%20Fitness%20coaching.%20Can%20you%20guide%20me%3F" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
                >
                  <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
                </a>
              </li>
              <li className="mt-2 text-xs">Mon - Sat: 10:00 AM - 7:00 PM</li>
            </ul>
          </div>

          {/* Medical Disclaimer - Mandatory */}
          <div className="col-span-1 md:col-span-1 bg-slate-800 p-4 rounded-lg border border-slate-700">
            <div className="flex items-start gap-2 mb-2">
              <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0" />
              <h3 className="text-sm font-bold text-white">Medical Disclaimer</h3>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Zenithra Fitness provides lifestyle and nutritional guidance, not medical treatment. Our team consists of Certified Fitness & Nutrition Coaches, not medical doctors. If you have a medical condition (diabetes, thyroid, PCOS, etc.), please consult your doctor before starting any plan. We do not prescribe medication.
            </p>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs text-slate-500">
          &copy; {new Date().getFullYear()} Zenithra Fitness. All rights reserved.
        </div>
      </div>
    </footer>
  );
};