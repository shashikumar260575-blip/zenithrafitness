import React, { useState } from 'react';
import { Menu, X, Heart, Activity } from 'lucide-react';
import { PageView, NavItem } from '../types';

interface NavbarProps {
  currentView: PageView;
  onNavigate: (view: PageView) => void;
}

const navItems: NavItem[] = [
  { label: 'Home', view: PageView.HOME },
  { label: 'About', view: PageView.ABOUT },
  { label: 'Process', view: PageView.HOW_IT_WORKS },
  { label: 'Plans', view: PageView.PRICING },
  { label: 'Contact', view: PageView.CONTACT },
];

export const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNav = (view: PageView) => {
    onNavigate(view);
    setIsOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center cursor-pointer" onClick={() => handleNav(PageView.HOME)}>
            <div className="flex-shrink-0 flex items-center gap-2">
              <Activity className="h-8 w-8 text-emerald-600" />
              <span className="font-bold text-xl text-slate-900 tracking-tight">Zenithra<span className="text-emerald-600">Fitness</span></span>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNav(item.view)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentView === item.view
                    ? 'text-emerald-600 bg-emerald-50'
                    : 'text-slate-600 hover:text-emerald-600 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNav(PageView.CONTACT)}
              className="ml-4 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
            >
              Book Consultation
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNav(item.view)}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                  currentView === item.view
                    ? 'text-emerald-600 bg-emerald-50'
                    : 'text-slate-600 hover:text-emerald-600 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
             <button
              onClick={() => handleNav(PageView.CONTACT)}
              className="mt-4 w-full block px-3 py-3 rounded-md text-base font-medium text-white bg-emerald-600 hover:bg-emerald-700 text-center"
            >
              Book Free Consultation
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};