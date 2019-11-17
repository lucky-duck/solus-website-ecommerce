import { DEFAULT_CURRENCY_SYMBOL } from '../constants';

export function formatCurrency(value, { noCurrency } = {}) {
  const currencyPart = noCurrency ? '' : DEFAULT_CURRENCY_SYMBOL;

  if (isNaN(value)) {
    return `${currencyPart}0.00`;
  }

  return `${currencyPart}${value.toFixed(2)}`;
}

export function convertSelectedProductsToPlainText(selectedProducts) {
  const textArray = selectedProducts.map(
    (v, index) =>
      `${index + 1}. ${v.quantity}x ${v.title}, Price: ${formatCurrency(
        v.price * v.quantity
      )} `
  );

  return textArray.join('<br/>');
}

export function removeNodeChildren(node) {
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
}
