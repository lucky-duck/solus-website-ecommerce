export const BREAKPOINT_SM = 767;

export const IS_MOBILE =
  typeof window !== 'undefined' && window.innerWidth <= BREAKPOINT_SM;

export const COLORS = {
  BLACK: 'BLACK',
  WHITE: 'WHITE',
};

export const CART_LOCAL_STORAGE_KEY = 'cart-selected-products.v1.33';

export const CURRENCY_CODE_EUR = 'EUR';
export const CURRENCY_CODE_USD = 'USD';
export const CURRENCY_CODE_GBP = 'GBP';
export const CURRENCY_CODE_CAD = 'CAD';
export const CURRENCY_CODE_AUD = 'AUD';

export const WARRANTY_PRODUCT_ID = 'extended_warranty';

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
    price: {
      [CURRENCY_CODE_EUR]: 340,
      [CURRENCY_CODE_GBP]: 290,
      [CURRENCY_CODE_USD]: 375,
      [CURRENCY_CODE_CAD]: 499,
      [CURRENCY_CODE_AUD]: 552,
    },
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
    price: {
      [CURRENCY_CODE_EUR]: 440,
      [CURRENCY_CODE_GBP]: 375,
      [CURRENCY_CODE_USD]: 485,
      [CURRENCY_CODE_CAD]: 646,
      [CURRENCY_CODE_AUD]: 714,
    },
  },
  {
    id: 2,
    title: 'Starter Kit',
    description:
      'Heating area: 55m².<br/><span style="color: #ff8e4f;">28% OFF!</span><br/>2x M2 & 1x M1',
    descriptionDetailedTitle: null,
    descriptionDetailed: null,
    price: {
      [CURRENCY_CODE_EUR]: 880,
      [CURRENCY_CODE_GBP]: 751,
      [CURRENCY_CODE_USD]: 971,
      [CURRENCY_CODE_CAD]: 1292,
      [CURRENCY_CODE_AUD]: 1429,
    },
  },
  {
    id: WARRANTY_PRODUCT_ID,
    title: 'SOLUS+ Extended Waranty',
    description:
      'Buy an additional 2 year full unit exchange warranty for your SOLUS+ unit and don’t worry about your heater for 4 years. If it stops working, we will send you a new one to replace it.',
    descriptionDetailedTitle: null,
    descriptionDetailed: null,
    price: {
      [CURRENCY_CODE_EUR]: 40,
      [CURRENCY_CODE_GBP]: 35,
      [CURRENCY_CODE_USD]: 45,
      [CURRENCY_CODE_CAD]: 58,
      [CURRENCY_CODE_AUD]: 65,
    },
    isWarranty: true,
  },
];

export const COUNTRY_FIELD_NAME = 'country__solus';

export const PAYPAL_CLIENT_ID_PRODUCTION =
  'AY5-2OUUmaOU0gjxU8TwGqJ-dpI_sBJYnPmnYMNuDweJ0gzYs0HZRlE3_1zVXhC4Nn1hWfBeXRAnrw8c';

export const PAYPAL_CLIENT_ID_SANDBOX =
  'Ab115IoTrFjgeoyb2z9JEL2Njm7ovP8uBUY-FBWYvQvZMUuIkMb6G-JyIR0DTDw4Xh8bQ8tsaQxVpa8A';

export const DISCOUNT_CODES = {
  SAVE10: {
    discountPercent: 10,
  },
  WINTER25: {
    discountPercent: 25,
  },
  WARM30: {
    discountPercent: 30,
  },
  WARMUP20: {
    discountPercent: 20,
  },
  KOLEDA15: {
    discountPercent: 15,
  },
  TEST13: {
    discountPercent: 99,
  },
};

export const GEO_DATA_API_URL =
  'https://api.ipdata.co/?api-key=f155746521299bf31c5e2026cae75e166deabc355f05c2a67e0403ce';
