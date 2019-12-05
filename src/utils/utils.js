import axios from 'axios';

import { GEO_DATA_API_URL } from '../constants';

export function formatCurrency(value, currencyData, { noCurrency } = {}) {
  const currencyPart = noCurrency || !currencyData ? '' : currencyData.symbol;

  if (isNaN(value)) {
    return `${currencyPart}0.00`;
  }

  return `${currencyPart}${value.toFixed(2)}`;
}

export function convertSelectedProductsToPlainText(
  selectedProducts,
  { plainTextLineBreak, currencyData } = {}
) {
  const textArray = selectedProducts.map((v, index) => {
    return `${index + 1}. ${v.quantity}x ${v.title}, Price: ${formatCurrency(
      v.price[currencyData.code] * v.quantity,
      currencyData
    )}, Colour: ${v.color && v.color.toLowerCase()} `;
  });

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

export async function getGeoData() {
  try {
    const response = await axios.get(GEO_DATA_API_URL, {
      withCredentials: false,
      headers: {
        'Content-Type': 'text/plain',
      },
    });
    return response.data;
  } catch (err) {
    console.warn('Cannot fetch geo data');
  }
}
