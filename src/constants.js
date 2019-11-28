export const BREAKPOINT_SM = 767;

export const IS_MOBILE =
  typeof window !== 'undefined' && window.innerWidth <= BREAKPOINT_SM;

export const COLORS = {
  BLACK: 'BLACK',
  WHITE: 'WHITE',
};

export const CART_LOCAL_STORAGE_KEY = 'cart-selected-products.v1.33';

export const DEFAULT_CURRENCY_CODE = 'EUR';
export const DEFAULT_CURRENCY_SYMBOL = '€';

export const PRODUCTS = [
  {
    id: 0,
    title: 'M1',
    description: 'Heating area: 15m²',
    descriptionDetailedTitle: 'M1 450W Heater',
    descriptionDetailed: `
      Heating area: 15m²<br/>
      Rated Input: 450W<br/>
      Weight: 4.5kg<br/>
      Rated Voltage: 220/110V 50/60Hz<br/>
      Dimensions: 750 x 321 x 10 mm (W x H x D)
    `,
    price: 340,
  },
  {
    id: 1,
    title: 'M2',
    description: 'Heating area: 20m²',
    descriptionDetailedTitle: 'M2 800W Heater',
    descriptionDetailed: `
      Heating area: 20m²<br/>
      Rated Input: 800W<br/>
      Weight: 10kg<br/>
      Rated Voltage: 220/110V 50/60Hz<br/>
      Dimensions: 1050 x 445 x 10 mm (W x H x D)<br/>
      Temperature sensor: included<br/>
      Feet: not compatible
    `,
    price: 440,
  },
  {
    id: 2,
    title: 'Starter Kit',
    description:
      'Heating area: 55m².<br/><span style="color: #ff8e4f;">28% OFF!</span><br/>2x M2 & 1x M1',
    descriptionDetailedTitle: null,
    descriptionDetailed: null,
    price: 880,
  },
];

export const COUNTRY_FIELD_NAME = 'country__solus';

export const PAYPAL_CLIENT_ID_PRODUCTION =
  'AY5-2OUUmaOU0gjxU8TwGqJ-dpI_sBJYnPmnYMNuDweJ0gzYs0HZRlE3_1zVXhC4Nn1hWfBeXRAnrw8c';

export const PAYPAL_CLIENT_ID_SANDBOX =
  'Ab115IoTrFjgeoyb2z9JEL2Njm7ovP8uBUY-FBWYvQvZMUuIkMb6G-JyIR0DTDw4Xh8bQ8tsaQxVpa8A';

export const DISCOUNT_CODES = {
  '4b1de0f4': {
    discountPercent: 5,
  },
  '6d3e6073': {
    discountPercent: 10,
  },
  '2c7156c0': {
    discountPercent: 15,
  },
  '7e872d32': {
    discountPercent: 20,
  },
  '5b1b9d5e': {
    discountPercent: 25,
  },
  '9f914a24': {
    discountPercent: 30,
  },
  Black30: {
    discountPercent: 30,
  },
};
