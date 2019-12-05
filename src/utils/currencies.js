import { LOCALES } from './locales';
import {
  CURRENCY_CODE_AUD,
  CURRENCY_CODE_CAD,
  CURRENCY_CODE_EUR,
  CURRENCY_CODE_GBP,
  CURRENCY_CODE_USD,
} from '../constants';
import { getGeoData } from './utils';

export async function getCurrencyFromIp() {
  try {
    const geoData = await getGeoData();
    const currencyCode = geoData.currency.code;
    return CURRENCIES[currencyCode];
  } catch (err) {
    console.warn('Currency was not detected via third-party service');
  }
}

function getCurrencyCodeFromBrowser() {
  if (typeof window === 'undefined' || !window.navigator) {
    return null;
  }

  const locale = window.navigator.language
    ? window.navigator.language.toLowerCase()
    : '';

  const localeSettings = LOCALES[locale];

  if (!localeSettings) {
    return null;
  }

  return CURRENCIES[localeSettings.currency];
}

export async function determineCurrency() {
  let currencyData;

  currencyData = await getCurrencyFromIp();

  if (!currencyData) {
    currencyData = getCurrencyCodeFromBrowser();
  }

  console.log('currencyData', currencyData);

  return currencyData || DEFAULT_CURRENCY;
}

export const CURRENCIES = {
  [CURRENCY_CODE_USD]: {
    code: CURRENCY_CODE_USD,
    symbol: '$',
  },
  [CURRENCY_CODE_GBP]: {
    code: CURRENCY_CODE_GBP,
    symbol: '£',
  },
  [CURRENCY_CODE_EUR]: {
    code: CURRENCY_CODE_EUR,
    symbol: '€',
  },
  [CURRENCY_CODE_CAD]: {
    code: CURRENCY_CODE_CAD,
    symbol: 'C$',
  },
  [CURRENCY_CODE_AUD]: {
    code: CURRENCY_CODE_AUD,
    symbol: 'A$',
  },
};

export const DEFAULT_CURRENCY = CURRENCIES[CURRENCY_CODE_EUR];
