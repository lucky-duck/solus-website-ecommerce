import React, { useContext, useState, useMemo, useEffect } from 'react';
import sortBy from 'lodash/sortBy';
import range from 'lodash/range';
import uuid from 'uuid';

import { CART_LOCAL_STORAGE_KEY, COLORS, PRODUCTS } from '../constants';

const ProductsContext = React.createContext({});

function changeItemQuantity(operation, id, quantity = 1) {
  const isAdding = operation === '+';
  const isSubtracting = operation === '-';
  return function(products) {
    const found = products.filter((v) => v.id === id)[0];
    if (found) {
      if ((isSubtracting && found.quantity === 1) || quantity === 0) {
        return products.filter((v) => v.id !== id);
      }
      return products.map((v) => {
        if (v.id !== id) {
          return v;
        }
        let newQuantity;

        if (isAdding) {
          newQuantity = v.quantity + 1;
        } else if (isSubtracting) {
          newQuantity = v.quantity - 1;
        } else {
          newQuantity = quantity;
        }

        return {
          ...v,
          quantity: newQuantity,
        };
      });
    }

    if (!isSubtracting) {
      return [
        ...products,
        {
          id,
          color: COLORS.BLACK,
          quantity,
        },
      ];
    }

    return products;
  };
}

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

export function ProductsProvider({ children }) {
  const [selectedProducts, setSelectedProducts] = useState(
    getSelectedFromLocalStorage()
  );
  const [selectedProductsWithData, setSelectedProductsWithData] = useState([]);
  const [cartSelectedProducts, setCartSelectedProducts] = useState([]);

  const totalPrice = useMemo(() => {
    return cartSelectedProducts.reduce(
      (acc, curr) => acc + curr.price * curr.quantity,
      0
    );
  }, [cartSelectedProducts]);

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
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export function useProducts() {
  return useContext(ProductsContext);
}
