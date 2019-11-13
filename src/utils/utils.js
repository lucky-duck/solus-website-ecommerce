import { DEFAULT_CURRENCY_SYMBOL } from '../constants';

export function formatCurrency(value) {
  if (isNaN(value)) {
    return `${DEFAULT_CURRENCY_SYMBOL}0.00`;
  }

  return `${DEFAULT_CURRENCY_SYMBOL}${value.toFixed(2)}`;
}
