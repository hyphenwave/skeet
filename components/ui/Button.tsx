import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "font-bold tracking-wide transition-all duration-200 flex items-center justify-center uppercase";
  
  const variants = {
    primary: "bg-skeet-green text-black hover:bg-[#35993a] hover:shadow-[0_0_15px_rgba(63,180,67,0.5)]",
    secondary: "bg-white text-black hover:bg-gray-200",
    outline: "border-2 border-white text-white hover:bg-white hover:text-black",
    danger: "bg-red-600 text-white hover:bg-red-700"
  };

  const sizes = {
    sm: "px-4 py-1 text-xs",
    md: "px-6 py-2 text-sm",
    lg: "px-8 py-3 text-base md:text-lg"
  };

  const width = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${width} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};