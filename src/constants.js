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
    title: 'M1',
    description: 'Heating area: 15m²',
    descriptionDetailed: `
      Heating area: 15m2
      Rated Input: 450W
      Weight: 4.5kg
      Rated Voltage: 220/110V 50/60Hz
      Dimensions: 750 x 321 x 10 mm (W x H x D)
    `,
    price: 340,
  },
  {
    id: 1,
    title: 'M2',
    description: 'Heating area: 20m²',
    descriptionDetailed: `Heating area: 20m2
      Rated Input: 800W
      Weight: 10kg
      Rated Voltage: 220/110V 50/60Hz
      Dimensions: 1050 x 445 x 10 mm (W x H x D)
      Temperature sensor: included
      Feet: not compatible
    `,
    price: 440,
  },
  {
    id: 2,
    title: 'Starter Kit',
    description: 'Heating area: 55m². 35% OFF<br/>M2 x2, M1 x1',
    descriptionDetailed: '',
    price: 793,
  },
];

export const COUNTRY_FIELD_NAME = 'country__solus';
