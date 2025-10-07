
import React from 'react';
import type { Purchase } from '../types';
import TrashIcon from './icons/TrashIcon';

interface PurchaseInputRowProps {
  purchase: Purchase;
  onUpdate: (id: string, field: 'units' | 'price', value: string) => void;
  onRemove: (id: string) => void;
  isRemovable: boolean;
  index: number;
}

const PurchaseInputRow: React.FC<PurchaseInputRowProps> = ({
  purchase,
  onUpdate,
  onRemove,
  isRemovable,
  index,
}) => {
  return (
    <div className="grid grid-cols-12 gap-4 items-center">
      {/* Units Input */}
      <div className="col-span-12 sm:col-span-5">
         <label className="sm:hidden text-xs font-medium text-slate-500 dark:text-slate-400 mb-1 block">
          Units
        </label>
        <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-500 dark:text-slate-400 pointer-events-none">
              *
            </span>
            
            <input
                type="text"
                inputMode="decimal"
                placeholder="e.g., 10"
                value={purchase.units}
                onChange={(e) => onUpdate(purchase.id, 'units', e.target.value)}
                className="w-full pl-8 pr-3 py-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                aria-label={`Units for purchase ${index + 1}`}
            />
        </div>
      </div>

      {/* Price Input */}
      <div className="col-span-12 sm:col-span-5">
        <label className="sm:hidden text-xs font-medium text-slate-500 dark:text-slate-400 mb-1 block">
          Price per Share
        </label>
        <div className="relative">
             <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-500 dark:text-slate-400 pointer-events-none">
                @
            </span>
            <input
                type="text"
                inputMode="decimal"
                placeholder="e.g., 150.25"
                value={purchase.price}
                onChange={(e) => onUpdate(purchase.id, 'price', e.target.value)}
                className="w-full pl-8 pr-3 py-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                aria-label={`Price for purchase ${index + 1}`}
            />
        </div>
      </div>

      {/* Remove Button */}
      <div className="col-span-12 sm:col-span-2 flex justify-end">
        {isRemovable && (
          <button
            onClick={() => onRemove(purchase.id)}
            className="p-2 text-slate-500 dark:text-slate-400 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-red-500 dark:hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-800 focus:ring-red-500 transition-colors"
            aria-label={`Remove purchase ${index + 1}`}
          >
            <TrashIcon />
          </button>
        )}
      </div>
    </div>
  );
};

export default PurchaseInputRow;
