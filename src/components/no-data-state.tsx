import React from 'react';
import { PawPrint } from 'lucide-react';

interface NoDataStateProps {
  message?: string;
  className?: string;
}

const NoDataState: React.FC<NoDataStateProps> = ({ 
  message = 'No data available', 
  className = '' 
}) => {
  return (
    <div className={`flex flex-col items-center justify-center p-8 ${className}`}>
      <PawPrint className="w-16 h-16 mb-4" />
      <p className="text-lg font-medium">{message}</p>
    </div>
  );
};

export default NoDataState; 