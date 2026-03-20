import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'whatsapp';
  fullWidth?: boolean;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  icon,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 border text-base font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "border-transparent text-white bg-emerald-600 hover:bg-emerald-700 focus:ring-emerald-500 shadow-md",
    secondary: "border-transparent text-emerald-700 bg-emerald-100 hover:bg-emerald-200 focus:ring-emerald-500",
    outline: "border-slate-300 text-slate-700 bg-white hover:bg-slate-50 focus:ring-slate-500",
    whatsapp: "border-transparent text-white bg-[#25D366] hover:bg-[#128C7E] focus:ring-green-500 shadow-md",
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthStyle} ${className}`}
      {...props}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};