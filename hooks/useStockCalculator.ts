
import { useState, useCallback, useMemo } from 'react';
import type { Purchase } from '../types';

export const useStockCalculator = () => {
  const [purchases, setPurchases] = useState<Purchase[]>([
    { id: crypto.randomUUID(), units: '', price: '' },
  ]);

  const addPurchase = useCallback(() => {
    setPurchases((prev) => [
      ...prev,
      { id: crypto.randomUUID(), units: '', price: '' },
    ]);
  }, []);

  const removePurchase = useCallback((id: string) => {
    setPurchases((prev) => prev.filter((p) => p.id !== id));
  }, []);

  const updatePurchase = useCallback(
    (id: string, field: 'units' | 'price', value: string) => {
      // Allow only numbers and a single decimal point
      if (value && !/^\d*\.?\d*$/.test(value)) {
        return;
      }
      setPurchases((prev) =>
        prev.map((p) => (p.id === id ? { ...p, [field]: value } : p))
      );
    },
    []
  );

  const results = useMemo(() => {
    let totalInvestment = 0;
    let totalUnits = 0;

    purchases.forEach((p) => {
      const units = parseFloat(p.units);
      const price = parseFloat(p.price);

      if (!isNaN(units) && !isNaN(price) && units > 0 && price > 0) {
        totalInvestment += units * price;
        totalUnits += units;
      }
    });

    const averagePrice = totalUnits > 0 ? totalInvestment / totalUnits : 0;

    return { totalInvestment, totalUnits, averagePrice };
  }, [purchases]);

  return { purchases, addPurchase, removePurchase, updatePurchase, results };
};
