import React from 'react';

export const Card = ({ children }) => {
  return (
    <div className="border border-gray-300 p-4 rounded-md shadow-sm">
      {children}
    </div>
  );
};

export const CardHeader = ({ children }) => {
  return <div className="border-b pb-2">{children}</div>;
};

export const CardTitle = ({ children, className }) => {
  return <h2 className={`text-xl font-semibold ${className}`}>{children}</h2>;
};

export const CardContent = ({ children }) => {
  return <div className="pt-2">{children}</div>;
};
