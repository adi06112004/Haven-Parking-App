import React from 'react';

export const Button = ({ children, onClick, className, variant = 'solid', size = 'md' }) => {
  return (
    <button
      onClick={onClick}
      className={`${className} ${variant === 'outline' ? 'border border-gray-300' : 'bg-black text-white'} ${size === 'sm' ? 'py-1 px-3' : 'py-2 px-4'} rounded-lg`}
    >
      {children}
    </button>
  );
};
