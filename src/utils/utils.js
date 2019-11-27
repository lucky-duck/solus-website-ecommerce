import { DEFAULT_CURRENCY_SYMBOL } from '../constants';

export function formatCurrency(value, { noCurrency } = {}) {
  const currencyPart = noCurrency ? '' : DEFAULT_CURRENCY_SYMBOL;

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

export function facebookTrackEvent(name, options) {
  if (!window.fbq) {
    console.error('Cannot cal Facebook event');
    return;
  }

  window.fbq('track', name, options);
}
