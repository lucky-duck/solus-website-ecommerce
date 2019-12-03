import React, { useContext, useEffect, useState } from 'react';
import { determineCurrency } from '../utils/currencies';

const CurrencyContext = React.createContext({});

export function CurrencyProvider({ children }) {
  const [currencyData, setCurrencyData] = useState(null);

  useEffect(() => {
    async function fetchCurrency() {
      const currencyData = await determineCurrency();
      setCurrencyData(currencyData);
    }
    fetchCurrency();
  }, []);

  return (
    <CurrencyContext.Provider
      value={{
        currencyData,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  return useContext(CurrencyContext);
}
