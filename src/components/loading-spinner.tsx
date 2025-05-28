import React from "react";
import { Loader2 } from "lucide-react";

interface LoadingSpinnerProps {
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ className = "" }) => {
  return (
    <div className="flex items-center justify-center min-h-[200px]">
      <Loader2 className={`w-8 h-8 animate-spin text-green-500 ${className}`} />
    </div>
  );
};

export default LoadingSpinner; 