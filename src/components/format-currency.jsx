import { useMemo } from 'react';

import { formatCurrency } from '../utils/utils';
import { useCurrency } from '../hooks/use-currency';

function FormatCurrency({ children, noCurrency }) {
  const { currencyData } = useCurrency();

  return useMemo(() => {
    if (!currencyData) {
      return '';
    }

    return formatCurrency(children, currencyData, { noCurrency });
  }, [children, currencyData, noCurrency]);
}

export default FormatCurrency;
