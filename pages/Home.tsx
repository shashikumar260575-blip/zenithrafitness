import React from 'react';
import { PageView } from '../types';
import { Button } from '../components/Button';
import { ArrowRight, CheckCircle, MessageCircle, Heart, ShieldCheck, Users } from 'lucide-react';
import { Pricing } from './Pricing';

interface HomeProps {
  onNavigate: (view: PageView) => void;
  onOpenBottomSheet: () => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate, onOpenBottomSheet }) => {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing-section');
    if (pricingSection) {
      // Add a slight delay before scrolling as requested (0.4s)
      setTimeout(() => {
        const yOffset = -80; // slight top spacing so content is not cut off
        const y = pricingSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }, 400);
    } else {
      onNavigate(PageView.PRICING);
    }
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
            <img 
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1920&auto=format&fit=crop" 
                alt="Premium fitness coaching" 
                className="w-full h-full object-cover"
            />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/90"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-8 tracking-wide uppercase">
            <ShieldCheck className="h-4 w-4" />
            Science-Backed • Blood Work Guided • Lasting Results
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            Transform Your Body <br/>
            <span className="text-emerald-500">Without Pausing Your Life.</span>
          </h1>
          
          <p className="text-xl text-slate-300 max-w-3xl mb-8 leading-relaxed">
            Premium, personalized coaching for busy men and women. Achieve peak fitness from home or the gym with flexible diets, expert accountability, and complete lifestyle transformation.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm font-medium text-slate-300">
            <span className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-emerald-500"/> Flexible Diet Plans</span>
            <span className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-emerald-500"/> Home & Gym Workouts</span>
            <span className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-emerald-500"/> Lifestyle Transformation</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center">
            <button 
                onClick={onOpenBottomSheet}
                className="w-full sm:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded-lg text-lg transition-colors flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]"
            >
              Start Your Transformation <ArrowRight className="h-5 w-5" />
            </button>
            <button 
                onClick={scrollToPricing}
                className="w-full sm:w-auto px-8 py-4 bg-transparent border border-slate-700 hover:bg-slate-800 text-white font-bold rounded-lg text-lg transition-colors flex items-center justify-center gap-2"
            >
              View Pricing Plan
            </button>
          </div>
          
          <p className="mt-8 text-sm text-slate-400 font-medium">
            * We recommend minimum 3 months for best results
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-900">Why Choose Zenithra Fitness?</h2>
                <p className="mt-4 text-lg text-slate-600">We believe in building habits, not restricting life.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                        <Heart className="h-6 w-6 text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Health First Approach</h3>
                    <p className="text-slate-600">
                        We prioritize your internal health markers over the weighing scale. Looking good is a byproduct of feeling good.
                    </p>
                </div>
                <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                        <ShieldCheck className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Certified Professionals</h3>
                    <p className="text-slate-600">
                        Your plan is designed by Certified Fitness & Nutrition Coaches, ensuring safety and scientific accuracy.
                    </p>
                </div>
                <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                        <Users className="h-6 w-6 text-amber-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Ethical Coaching</h3>
                    <p className="text-slate-600">
                        No false promises, no magic pills, and no copy-paste diet charts. Every plan is unique to your body.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* Features List */}
      <section className="py-16 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
                <img 
                    src="https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=800&auto=format&fit=crop" 
                    alt="Healthy food preparation" 
                    className="rounded-2xl shadow-xl object-cover w-full h-96 md:h-auto"
                />
            </div>
            <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Personalized Nutrition, Tailored to Indian Kitchens</h2>
                <ul className="space-y-4">
                    {[
                        "Home-cooked meal friendly plans",
                        "Vegetarian, Non-Veg, Vegan, and Jain options",
                        "Flexible workout schedules (Home or Gym)",
                        "Weekly progress tracking & adjustments"
                    ].map((item, index) => (
                        <li key={index} className="flex items-start">
                            <CheckCircle className="h-6 w-6 text-emerald-600 flex-shrink-0 mr-3" />
                            <span className="text-lg text-slate-700">{item}</span>
                        </li>
                    ))}
                </ul>
                <div className="mt-8">
                    <Button onClick={() => onNavigate(PageView.HOW_IT_WORKS)} variant="secondary">
                        See How It Works
                    </Button>
                </div>
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Lifestyle?</h2>
        <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
            Join hundreds of clients who have achieved sustainable results without giving up their favorite foods.
        </p>
        <Button onClick={onOpenBottomSheet} variant="primary" className="text-lg px-10 py-4">
            Start Your Journey Today
        </Button>
      </section>

      {/* Pricing Section on Home Page */}
      <Pricing onNavigate={onNavigate} onOpenBottomSheet={onOpenBottomSheet} />
    </div>
  );
};