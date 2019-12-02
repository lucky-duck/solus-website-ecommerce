import { LOCALES } from './locales';
import {
  CURRENCY_CODE_AUD,
  CURRENCY_CODE_CAD,
  CURRENCY_CODE_EUR,
  CURRENCY_CODE_GBP,
  CURRENCY_CODE_USD,
} from '../constants';

export function determineCurrency() {
  if (typeof window === 'undefined' || !window.navigator) {
    return DEFAULT_CURRENCY;
  }
  const locale = window.navigator.language
    ? window.navigator.language.toLowerCase()
    : '';
  const localeSettings = LOCALES[locale];
  if (!localeSettings) {
    return DEFAULT_CURRENCY;
  }
  return localeSettings.currency;
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

export const CURRENCY = determineCurrency();
