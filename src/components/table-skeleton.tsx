import React from 'react';

const TableSkeleton: React.FC = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <div className="h-8 w-48 bg-gray-200 rounded animate-pulse"></div>
        <div className="h-10 w-40 bg-gray-200 rounded animate-pulse"></div>
      </div>
      <table className="w-full">
        <tbody>
          {[...Array(2)].map((_, index) => (
            <tr key={index} className="border-t">
              <td className="p-2">
                <div className="h-4 w-12 bg-gray-200 rounded animate-pulse"></div>
              </td>
              <td className="p-2">
                <div className="h-4 w-32 bg-gray-200 rounded animate-pulse"></div>
              </td>
              <td className="p-2 text-right">
                <div className="h-5 w-5 bg-gray-200 rounded animate-pulse inline-block"></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableSkeleton; 