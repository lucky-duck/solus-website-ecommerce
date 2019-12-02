import { envIsProduction } from './utils';
import {
  PAYPAL_CLIENT_ID_PRODUCTION,
  PAYPAL_CLIENT_ID_SANDBOX,
} from '../constants';
import { CURRENCY } from './currencies';

export function loadPaypalSdk() {
  return new Promise((resolve, reject) => {
    const scriptEl = document.createElement('script');
    const clientId = envIsProduction()
      ? PAYPAL_CLIENT_ID_PRODUCTION
      : PAYPAL_CLIENT_ID_SANDBOX;
    if (!clientId) {
      reject('PayPal client is not defined');
    }
    if (!CURRENCY || !CURRENCY.code) {
      reject('Currency code is not defined');
    }
    scriptEl.src = `https://www.paypal.com/sdk/js?client-id=${clientId}&currency=${CURRENCY.code}`;
    document.body.appendChild(scriptEl);
    scriptEl.onload = resolve;
  });
}
