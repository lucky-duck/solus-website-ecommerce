import { LOCALES } from '../constants';
import { CURRENCY, DEFAULT_CURRENCY } from './currencies';

export function formatCurrency(value, { noCurrency } = {}) {
  const currencyPart = noCurrency ? '' : CURRENCY.symbol;

  if (isNaN(value)) {
    return `${currencyPart}0.00`;
  }

  return `${currencyPart}${value.toFixed(2)}`;
}

export function convertSelectedProductsToPlainText(
  selectedProducts,
  { plainTextLineBreak } = {}
) {
  const textArray = selectedProducts.map(
    (v, index) =>
      `${index + 1}. ${v.quantity}x ${v.title}, Price: ${formatCurrency(
        v.price * v.quantity
      )}, Colour: ${v.color && v.color.toLowerCase()} `
  );

  return textArray.join(plainTextLineBreak ? '\n' : '<br/>');
}

export function removeNodeChildren(node) {
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
}

export function envIsProduction() {
  return process.env.NODE_ENV === 'production';
}

export function facebookTrackEvent(name, options) {
  if (!envIsProduction()) {
    return;
  }

  if (!window.fbq) {
    console.error('Cannot call Facebook event');
    return;
  }

  window.fbq('track', name, options);
}

