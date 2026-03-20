import React from 'react';
import { PageView } from '../types';
import { Button } from '../components/Button';
import { MessageCircle, FileText, Activity, ClipboardCheck, Calendar } from 'lucide-react';

interface HowItWorksProps {
  onNavigate: (view: PageView) => void;
}

const steps = [
    {
        icon: <MessageCircle className="h-8 w-8 text-white" />,
        title: "Step 1: Detailed Consultation",
        desc: "We start with a detailed WhatsApp chat. We discuss your current eating habits, work timing, stress levels, sleep quality, allergies, and past injuries. This is the foundation of your plan."
    },
    {
        icon: <Activity className="h-8 w-8 text-white" />,
        title: "Step 2: Health Analysis",
        desc: "We may recommend basic bloodwork (CBC, Lipid Profile, Thyroid, Vitamin D/B12) if you haven't done them recently. This ensures we are not working against hidden deficiencies."
    },
    {
        icon: <ClipboardCheck className="h-8 w-8 text-white" />,
        title: "Step 3: Safety Check",
        desc: "If any medical flags appear in your consultation or reports, we will strictly advise you to visit a doctor first. We only proceed once we know it is safe for you to diet and exercise."
    },
    {
        icon: <FileText className="h-8 w-8 text-white" />,
        title: "Step 4: Your Personalized Plan",
        desc: "Within 48 hours of gathering all data, you receive your Nutrition and Workout Chart. It will include foods available in your kitchen and workouts that fit your schedule."
    },
    {
        icon: <Calendar className="h-8 w-8 text-white" />,
        title: "Step 5: Execution & Support",
        desc: "Plans are typically designed in 2-week cycles. You get WhatsApp support for queries. We review progress every week and adjust the plan based on your feedback and results."
    }
];

export const HowItWorks: React.FC<HowItWorksProps> = ({ onNavigate }) => {
  return (
    <div className="bg-white">
      <div className="bg-emerald-900 py-16 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">How It Works</h1>
        <p className="text-emerald-100 text-lg max-w-2xl mx-auto px-4">
            A scientific, step-by-step process designed to ensure your safety and success.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12">
            {steps.map((step, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                    <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-emerald-600 shadow-lg">
                            {step.icon}
                        </div>
                    </div>
                    <div className="flex-1 pt-2">
                        <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                        <p className="text-slate-600 leading-relaxed text-lg">
                            {step.desc}
                        </p>
                    </div>
                </div>
            ))}
        </div>
        
        <div className="mt-16 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
            <h4 className="text-lg font-bold text-blue-900 mb-2">Why do we ask for blood tests?</h4>
            <p className="text-blue-800">
                Often, weight loss stalls due to Vitamin D deficiency or thyroid issues. By identifying these early, we can suggest simple dietary fixes or refer you to a doctor, saving you months of frustration.
            </p>
        </div>

        <div className="mt-12 text-center">
            <Button onClick={() => onNavigate(PageView.PRICING)} variant="primary" className="px-8 py-3 text-lg">
                View Pricing Plans
            </Button>
        </div>
      </div>
    </div>
  );
};