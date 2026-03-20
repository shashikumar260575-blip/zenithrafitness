import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { HowItWorks } from './pages/HowItWorks';
import { Pricing } from './pages/Pricing';
import { Contact } from './pages/Contact';
import { ContactBottomSheet } from './components/ContactBottomSheet';
import { PageView } from './types';

export default function App() {
  const [currentView, setCurrentView] = useState<PageView>(PageView.HOME);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const handleOpenBottomSheet = () => setIsBottomSheetOpen(true);
  const handleCloseBottomSheet = () => setIsBottomSheetOpen(false);

  const renderPage = () => {
    switch (currentView) {
      case PageView.HOME:
        return <Home onNavigate={setCurrentView} onOpenBottomSheet={handleOpenBottomSheet} />;
      case PageView.ABOUT:
        return <About onNavigate={setCurrentView} />;
      case PageView.HOW_IT_WORKS:
        return <HowItWorks onNavigate={setCurrentView} />;
      case PageView.PRICING:
        return <Pricing onNavigate={setCurrentView} onOpenBottomSheet={handleOpenBottomSheet} />;
      case PageView.CONTACT:
        return <Contact onNavigate={setCurrentView} />;
      default:
        return <Home onNavigate={setCurrentView} onOpenBottomSheet={handleOpenBottomSheet} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-900">
      <Navbar currentView={currentView} onNavigate={setCurrentView} />
      
      <main className="flex-grow">
        {renderPage()}
      </main>

      <Footer onNavigate={setCurrentView} />

      <ContactBottomSheet 
        isOpen={isBottomSheetOpen} 
        onClose={handleCloseBottomSheet} 
      />
    </div>
  );
}