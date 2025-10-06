
import React from 'react';
import { useStockCalculator } from './hooks/useStockCalculator';
import PurchaseInputRow from './components/PurchaseInputRow';
import ResultsDisplay from './components/ResultsDisplay';
import PlusIcon from './components/icons/PlusIcon';

const App: React.FC = () => {
  const {
    purchases,
    addPurchase,
    removePurchase,
    updatePurchase,
    results,
  } = useStockCalculator();

  return (
    <div className="min-h-screen font-sans text-slate-800 dark:text-slate-200 flex flex-col items-center justify-center p-4">
      <main className="w-full max-w-2xl mx-auto">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden">
          <header className="p-6 md:p-8 border-b border-slate-200 dark:border-slate-700">
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
              Stock Average Calculator
            </h1>
            <p className="mt-2 text-slate-600 dark:text-slate-400">
              Enter your stock purchases to calculate the average buy price.
            </p>
          </header>

          <div className="p-6 md:p-8">
            <div className="space-y-4">
              <div className="hidden sm:grid grid-cols-12 gap-4 items-center px-4">
                <label className="col-span-5 text-sm font-semibold text-slate-500 dark:text-slate-400">
                  Units
                </label>
                <label className="col-span-5 text-sm font-semibold text-slate-500 dark:text-slate-400">
                  Price per Share
                </label>
                <div className="col-span-2"></div>
              </div>
              
              {purchases.map((purchase, index) => (
                <PurchaseInputRow
                  key={purchase.id}
                  purchase={purchase}
                  onUpdate={updatePurchase}
                  onRemove={removePurchase}
                  isRemovable={purchases.length > 1}
                  index={index}
                />
              ))}
            </div>

            <div className="mt-6">
              <button
                onClick={addPurchase}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-800 focus:ring-indigo-500 transition-colors"
              >
                <PlusIcon />
                Add Another Purchase
              </button>
            </div>
          </div>

          <ResultsDisplay
            totalUnits={results.totalUnits}
            totalInvestment={results.totalInvestment}
            averagePrice={results.averagePrice}
          />
        </div>
        <footer className="text-center mt-8">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Sourav Malviya Codes
          </p>
        </footer>
      </main>
    </div>
  );
};

export default App;
