import React, { useContext, useState, useMemo, useEffect, useRef } from 'react';
import sortBy from 'lodash/sortBy';
import range from 'lodash/range';
import uuid from 'uuid';

import {
  CART_LOCAL_STORAGE_KEY,
  COLORS,
  PRODUCTS,
  WARRANTY_PRODUCT_ID,
} from '../constants';
import { useCurrency } from './use-currency';

const ProductsContext = React.createContext({});

function changeItemColor(id, color) {
  return function(products) {
    return products.map((v) => {
      if (v.id !== id) {
        return v;
      }
      return {
        ...v,
        color,
      };
    });
  };
}

const initialSelectedProducts = [];
const initialDiscountData = null;

export function ProductsProvider({ children }) {
  const { currencyData } = useCurrency();
  const warrantyModalWasShown = useRef(false);
  const [warrantyModalShown, setWarrantyModalShown] = useState(false);
  const initialRender = useRef(true);

  const [selectedProducts, setSelectedProducts] = useState(
    getSelectedFromLocalStorage()
  );
  const [selectedProductsWithData, setSelectedProductsWithData] = useState([]);
  const [cartSelectedProducts, setCartSelectedProducts] = useState([]);
  const [discountData, setDiscountData] = useState(initialDiscountData);
  const onWhiteSelectedCallbacks = useRef([]);

  const totalPrice = useMemo(() => {
    if (!currencyData) {
      return 0;
    }

    const total = cartSelectedProducts.reduce(
      (acc, curr) => acc + curr.price[currencyData.code] * curr.quantity,
      0
    );
    return discountData
      ? +(total * ((100 - discountData.discountPercent) / 100)).toFixed(2)
      : total;
  }, [currencyData, discountData, cartSelectedProducts]);

  const warrantyIsInCart = useMemo(() => {
    return selectedProductsWithData.filter((v) => v.isWarranty)[0];
  }, [selectedProductsWithData]);

  useEffect(() => {
    saveSelectedToLocalStorage(selectedProducts);
  }, [selectedProducts]);

  useEffect(() => {
    setSelectedProductsWithData(
      sortBy(
        selectedProducts.map((v) => {
          const productData = PRODUCTS.filter(
            (data) => data.id === v.productId
          )[0];
          return { ...productData, ...v };
        }),
        ['productId']
      )
    );
  }, [selectedProducts]);

  useEffect(() => {
    if (
      warrantyIsInCart ||
      warrantyModalWasShown.current ||
      initialRender.current
    ) {
      return;
    }

    showWarrantyModal();

    warrantyModalWasShown.current = true;

    // eslint-disable-next-line
  }, [selectedProducts]);

  useEffect(() => {
    setCartSelectedProducts(
      selectedProductsWithData.reduce((acc, curr) => {
        const foundIndex = acc.findIndex(
          (v) => v.productId === curr.productId && v.color === curr.color
        );
        if (foundIndex > -1) {
          acc[foundIndex] = {
            ...acc[foundIndex],
            quantity: acc[foundIndex].quantity + 1,
          };
        } else {
          acc = [
            ...acc,
            {
              ...curr,
              quantity: 1,
            },
          ];
        }
        return acc;
      }, [])
    );
  }, [selectedProductsWithData]);

  useEffect(() => {
    initialRender.current = false;
  }, []);

  const warrantyProduct = useMemo(() => {
    return PRODUCTS.filter((v) => v.isWarranty)[0];
  }, []);

  // function addProduct(id) {
  //   setSelectedProducts(changeItemQuantity('+', id));
  // }

  function removeProduct(productId, color) {
    setSelectedProducts((state) =>
      state.filter((v) => {
        return !(v.productId === productId && v.color === color);
      })
    );
  }

  function setProductQuantity(productId, quantity) {
    setSelectedProducts((state) => [
      ...state.filter((v) => v.productId !== productId),
      ...range(0, quantity).map(() => ({
        id: uuid.v4(),
        productId,
        color: COLORS.BLACK,
      })),
    ]);
    // setSelectedProducts(changeItemQuantity('', id, quantity));
  }

  function changeProductColor(id, color) {
    setSelectedProducts(changeItemColor(id, color));
  }

  function getSelectedFromLocalStorage() {
    const selectedProducts = window.localStorage.getItem(
      CART_LOCAL_STORAGE_KEY
    );
    if (!selectedProducts) {
      return initialSelectedProducts;
    }
    const parsed = JSON.parse(selectedProducts);
    if (!Array.isArray(parsed)) {
      return initialSelectedProducts;
    }
    return parsed;
  }

  function saveSelectedToLocalStorage(selectedProducts) {
    window.localStorage.setItem(
      CART_LOCAL_STORAGE_KEY,
      JSON.stringify(selectedProducts)
    );
  }

  function resetCart() {
    setSelectedProducts(initialSelectedProducts);
  }

  function handleAddWarranty() {
    setProductQuantity(WARRANTY_PRODUCT_ID, 1);
    setWarrantyModalShown(false);
  }

  function showWarrantyModal() {
    setWarrantyModalShown(true);
  }

  function handleCloseWarrantyModal() {
    setWarrantyModalShown(false);
  }

  return (
    <ProductsContext.Provider
      value={{
        allProducts: PRODUCTS,
        selectedProducts: selectedProductsWithData,
        cartSelectedProducts,
        // addProduct,
        removeProduct,
        setProductQuantity,
        changeProductColor,
        totalPrice,
        resetCart,
        setDiscountData,
        discountData,
        onWhiteSelected: () => {
          onWhiteSelectedCallbacks.current.forEach((cb) => cb());
        },
        addOnWhiteSelectedCallback: (cb) => {
          onWhiteSelectedCallbacks.current = [
            ...onWhiteSelectedCallbacks.current,
            cb,
          ];
        },
        warrantyProduct,
        warrantyModalShown,
        onCloseWarrantyModal: handleCloseWarrantyModal,
        onAddWarranty: handleAddWarranty,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export function useProducts() {
  return useContext(ProductsContext);
}
