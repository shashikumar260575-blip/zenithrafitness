import React from 'react';
import { PageView } from '../types';
import { Check } from 'lucide-react';
import { motion } from 'motion/react';

interface PricingProps {
  onNavigate: (view: PageView) => void;
  onOpenBottomSheet: () => void;
}

interface PremiumPlanProps {
  name: string;
  price: string;
  duration: string;
  features: string[];
  recommended?: boolean;
  tag?: string;
  onSelect: () => void;
}

const PlanCard: React.FC<PremiumPlanProps> = ({ name, price, duration, features, recommended, tag, onSelect }) => (
  <div className={`relative flex flex-col p-8 rounded-2xl border backdrop-blur-sm transition-all duration-300 ${
    recommended 
      ? 'bg-slate-900/80 border-emerald-500 shadow-[0_0_30px_rgba(16,185,129,0.15)] md:scale-105 z-10' 
      : 'bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:bg-slate-900/60'
  }`}>
    {tag && (
        <div className="absolute top-0 right-0 left-0 -mt-4 flex justify-center">
            <span className={`text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider ${
              recommended ? 'bg-emerald-500 text-black shadow-[0_0_15px_rgba(16,185,129,0.4)]' : 'bg-slate-800 text-slate-300 border border-slate-700'
            }`}>
                {tag}
            </span>
        </div>
    )}
    <h3 className={`text-lg font-semibold uppercase tracking-widest ${recommended ? 'text-emerald-400' : 'text-slate-400'}`}>{name}</h3>
    <div className="mt-4 flex items-baseline">
      <span className="text-4xl font-extrabold tracking-tight text-white">₹{price}</span>
      <span className="ml-1 text-xl font-medium text-slate-500">/{duration}</span>
    </div>
    <ul className="mt-8 space-y-4 flex-1">
      {features.map((feature) => (
        <li key={feature} className="flex items-start">
          <Check className={`flex-shrink-0 h-5 w-5 mt-0.5 ${recommended ? 'text-emerald-400' : 'text-emerald-500/70'}`} />
          <span className="ml-3 text-slate-300">{feature}</span>
        </li>
      ))}
    </ul>
    <div className="mt-8">
        <button 
            onClick={onSelect}
            className={`w-full py-4 px-6 rounded-lg font-bold text-sm uppercase tracking-wider transition-all duration-300 ${
              recommended 
                ? 'bg-emerald-500 text-black hover:bg-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.25)] hover:shadow-[0_0_25px_rgba(16,185,129,0.4)]' 
                : 'bg-slate-800 text-white hover:bg-slate-700 border border-slate-700'
            }`}
        >
            Start Your Transformation
        </button>
    </div>
  </div>
);

export const Pricing: React.FC<PricingProps> = ({ onNavigate, onOpenBottomSheet }) => {
  return (
    <div id="pricing-section" className="bg-black py-24 scroll-mt-20">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-sm font-bold text-emerald-500 tracking-widest uppercase mb-3">Zenithra Fitness</h2>
          <p className="text-4xl font-extrabold text-white sm:text-5xl tracking-tight mb-6">
            Choose Your Transformation Plan
          </p>
          <p className="text-xl text-slate-400">
            Personalized coaching, flexible diet, and expert guidance to help you achieve real results.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-y-12 md:grid-cols-3 md:gap-x-8 max-w-6xl mx-auto items-center">
            <PlanCard 
                name="1 Month Plan"
                price="5,000"
                duration="mo"
                features={[
                    "Personalized flexible diet plan",
                    "Workout plan (home/gym)",
                    "Weekly progress tracking",
                    "WhatsApp support (within working hours)"
                ]}
                onSelect={onOpenBottomSheet}
            />
            <PlanCard 
                name="3 Months Plan"
                price="13,500"
                duration="3 mos"
                recommended={true}
                tag="⭐ Most Popular"
                features={[
                    "Everything in 1 Month plan",
                    "Better results with consistency",
                    "Priority plan adjustments",
                    "Habit & lifestyle guidance"
                ]}
                onSelect={onOpenBottomSheet}
            />
            <PlanCard 
                name="6 Months Plan"
                price="24,000"
                duration="6 mos"
                tag="Best Value"
                features={[
                    "Complete body transformation",
                    "Blood work guidance included",
                    "Advanced customization",
                    "Strong accountability system"
                ]}
                onSelect={onOpenBottomSheet}
            />
        </div>
        
        <div className="mt-16 text-center">
            <p className="text-slate-400 font-medium mb-8 text-lg">
              * We recommend minimum 3 months for best results
            </p>
            <p className="text-slate-500 mb-4">Not sure which plan is right for you?</p>
            <button 
              onClick={onOpenBottomSheet}
              className="px-8 py-3 rounded-lg font-medium text-slate-300 border border-slate-700 hover:bg-slate-800 hover:text-white transition-colors"
            >
                Talk to us first
            </button>
        </div>
      </motion.div>
    </div>
  );
};
