import React from 'react';
import { PageView } from '../types';
import { Button } from '../components/Button';
import { Shield, BookOpen, UserCheck } from 'lucide-react';

interface AboutProps {
  onNavigate: (view: PageView) => void;
}

export const About: React.FC<AboutProps> = ({ onNavigate }) => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-slate-50 py-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Our Team & Philosophy</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                We are a team of Certified Fitness & Nutrition Coaches dedicated to changing the narrative around weight loss in India.
            </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* The Problem & Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-center">
            <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Not Just Another "Diet Plan"</h2>
                <p className="text-slate-600 mb-4 leading-relaxed">
                    Most weight loss programs fail because they are designed to be temporary. They rely on starvation, expensive supplements, or unrealistic workout routines that you can't maintain for more than a month.
                </p>
                <p className="text-slate-600 leading-relaxed">
                    At <strong>Zenithra Fitness</strong>, we take a "consultation-first" approach. We spend time understanding your current lifestyle, your work stress, your sleep patterns, and your food preferences before we even write a single line of your diet plan.
                </p>
            </div>
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
                 <img 
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop" 
                    alt="Fitness coaching session" 
                    className="w-full h-full object-cover"
                />
            </div>
        </div>

        {/* Credentials Grid */}
        <div className="mb-20">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-900">Credibility You Can Trust</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 <div className="bg-white p-6 rounded-lg border border-slate-200 text-center">
                    <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-emerald-100 text-emerald-600 mb-6">
                        <BookOpen className="h-8 w-8" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">Science-Backed</h3>
                    <p className="text-slate-600 text-sm">
                        All our protocols are based on current nutritional science, not trends or fads from social media.
                    </p>
                 </div>
                 <div className="bg-white p-6 rounded-lg border border-slate-200 text-center">
                    <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mb-6">
                        <UserCheck className="h-8 w-8" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">Certified Experts</h3>
                    <p className="text-slate-600 text-sm">
                        Our team consists of Certified Fitness & Nutrition Coaches. We are professionals.
                    </p>
                 </div>
                 <div className="bg-white p-6 rounded-lg border border-slate-200 text-center">
                    <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-amber-100 text-amber-600 mb-6">
                        <Shield className="h-8 w-8" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">Ethical Practice</h3>
                    <p className="text-slate-600 text-sm">
                        We know our limits. We refer clients to doctors for medical issues and never prescribe medicines.
                    </p>
                 </div>
            </div>
        </div>

        {/* CTA */}
        <div className="bg-emerald-50 rounded-2xl p-8 md:p-12 text-center">
             <h2 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-4">Meet Your New Coaches</h2>
             <p className="text-emerald-800 mb-8 max-w-2xl mx-auto">
                 We are ready to guide you towards a healthier, happier you. No judgement, just support.
             </p>
             <Button onClick={() => onNavigate(PageView.CONTACT)} variant="primary">
                 Chat on WhatsApp
             </Button>
        </div>

      </div>
    </div>
  );
};