import React from 'react';
import Skeleton from './skeleton';

const TableSkeleton: React.FC = () => {
  return (
    <div>
      <Skeleton className="h-8 w-48 mb-4" /> {/* Title skeleton */}
      <div className="space-y-3">
        <div className="flex gap-4">
          <Skeleton className="h-6 w-16" /> {/* ID column header */}
          <Skeleton className="h-6 w-32" /> {/* Name column header */}
        </div>
        {[...Array(2)].map((_, index) => (
          <div key={index} className="flex gap-4">
            <Skeleton className="h-6 w-16" /> {/* ID cell */}
            <Skeleton className="h-6 w-32" /> {/* Name cell */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableSkeleton; 