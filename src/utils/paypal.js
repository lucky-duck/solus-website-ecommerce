import { envIsProduction } from './utils';
import {
  PAYPAL_CLIENT_ID_PRODUCTION,
  PAYPAL_CLIENT_ID_SANDBOX,
} from '../constants';

export function loadPaypalSdk({ currencyData }) {
  return new Promise((resolve, reject) => {
    const scriptEl = document.createElement('script');
    const clientId = envIsProduction()
      ? PAYPAL_CLIENT_ID_PRODUCTION
      : PAYPAL_CLIENT_ID_SANDBOX;
    if (!clientId) {
      reject('PayPal client is not defined');
    }
    if (!currencyData || !currencyData.code) {
      reject('Currency code is not defined');
    }
    scriptEl.src = `https://www.paypal.com/sdk/js?client-id=${clientId}&currency=${currencyData.code}`;
    document.body.appendChild(scriptEl);
    scriptEl.onload = resolve;
  });
}
