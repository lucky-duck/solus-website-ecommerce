export const BREAKPOINT_SM = 767;

export const IS_MOBILE =
  typeof window !== 'undefined' && window.innerWidth <= BREAKPOINT_SM;

export const COLORS = {
  BLACK: 'BLACK',
  WHITE: 'WHITE',
};

export const CART_LOCAL_STORAGE_KEY = 'cart-selected-products.v1.21';

export const DEFAULT_CURRENCY_SYMBOL = '€';

export const PRODUCTS = [
  {
    id: 0,
    title: 'SOLUS+ M1 200W Heater',
    description: '4.5 kg 750 x 321 x 10 mm<br/>(W x H x D)',
    price: 340,
  },
  {
    id: 1,
    title: 'SOLUS+ M2 400W Heater',
    description: '10 kg 1050 x 445 x 10 mm<br/>(W x H x D)',
    price: 440,
  },
  {
    id: 2,
    title: 'Starter Kit<br/> (2x M2 and 1x M1)',
    description: '35% OFF!',
    price: 793,
  },
];

export const COUNTRY_FIELD_NAME = 'country__solus'
