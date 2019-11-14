import { DEFAULT_CURRENCY_SYMBOL } from '../constants';

export function formatCurrency(value) {
  if (isNaN(value)) {
    return `${DEFAULT_CURRENCY_SYMBOL}0.00`;
  }

  return `${DEFAULT_CURRENCY_SYMBOL}${value.toFixed(2)}`;
}

export function convertSelectedProductsToPlainText(selectedProducts) {
  const textArray = selectedProducts.map(
    (v, index) =>
      `${index + 1}. ${v.title}, Price: ${formatCurrency(
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
