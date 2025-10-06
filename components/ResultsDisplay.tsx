
import React from 'react';

interface ResultsDisplayProps {
  totalUnits: number;
  totalInvestment: number;
  averagePrice: number;
}

const ResultItem: React.FC<{ label: string; value: string; isPrimary?: boolean }> = ({ label, value, isPrimary = false }) => (
  <div className={`p-4 rounded-lg ${isPrimary ? 'bg-indigo-50 dark:bg-indigo-900/50' : 'bg-slate-100 dark:bg-slate-700/50'}`}>
    <dt className={`text-sm font-medium text-slate-600 dark:text-slate-400 truncate ${isPrimary ? 'text-indigo-800 dark:text-indigo-300' : ''}`}>
      {label}
    </dt>
    <dd className={`mt-1 text-2xl font-semibold tracking-tight text-slate-900 dark:text-white ${isPrimary ? 'text-indigo-600 dark:text-indigo-300' : ''}`}>
      {value}
    </dd>
  </div>
);

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ totalUnits, totalInvestment, averagePrice }) => {
  const formatCurrency = (value: number) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'INR' }).format(value);

  const formatNumber = (value: number) =>
    new Intl.NumberFormat('en-US').format(value);

  return (
    <div className="bg-slate-50 dark:bg-slate-900/50 p-6 md:p-8">
      <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4">Results</h2>
      <dl className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ResultItem label="Average Buy Price" value={formatCurrency(averagePrice)} isPrimary />
        <ResultItem label="Total Units" value={formatNumber(totalUnits)} />
        <ResultItem label="Total Investment" value={formatCurrency(totalInvestment)} />
      </dl>
    </div>
  );
};

export default ResultsDisplay;
