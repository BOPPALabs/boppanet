import React from 'react';
import { ButtonVariant, ButtonSize } from '../../types';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  isLoading?: boolean;
  href?: string;
  target?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  isLoading = false,
  className = '',
  href,
  target,
  ...props
}) => {
  const baseClasses = 'font-medium rounded-md transition-all duration-200 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-boppa-darker';
  
  const variantClasses = {
    primary: 'bg-boppa-primary hover:bg-boppa-primary/90 text-white focus:ring-boppa-primary/50',
    secondary: 'bg-boppa-secondary hover:bg-boppa-secondary/90 text-white focus:ring-boppa-secondary/50',
    accent: 'bg-boppa-accent hover:bg-boppa-accent/90 text-white focus:ring-boppa-accent/50',
    outline: 'bg-transparent border-2 border-boppa-primary text-boppa-primary hover:bg-boppa-primary/10 focus:ring-boppa-primary/30',
  };

  const sizeClasses = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-base px-4 py-2',
    lg: 'text-lg px-6 py-3',
  };

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  const content = (
    <>
      {isLoading && (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current\" xmlns="http://www.w3.org/2000/svg\" fill="none\" viewBox="0 0 24 24">
          <circle className="opacity-25\" cx="12\" cy="12\" r="10\" stroke="currentColor\" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {icon && !isLoading && <span className="mr-2">{icon}</span>}
      {children}
    </>
  );

  if (href) {
    return (
      <a 
        href={href}
        target={target}
        className={buttonClasses}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={buttonClasses} disabled={isLoading} {...props}>
      {content}
    </button>
  );
};

export default Button;