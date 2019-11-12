export const BREAKPOINT_SM = 767;

export const IS_MOBILE =
  typeof window !== 'undefined' && window.innerWidth <= BREAKPOINT_SM;

export const COLORS = {
  BLACK: 'BLACK',
  WHITE: 'WHITE',
};

export const CART_LOCAL_STORAGE_KEY = 'cart-selected-products';
