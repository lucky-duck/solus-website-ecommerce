import React, { useContext, useState, useMemo, useEffect } from 'react';
import sortBy from 'lodash/sortBy';

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

  const totalPrice = useMemo(() => {
    return selectedProductsWithData.reduce(
      (acc, curr) => acc + curr.price * curr.quantity,
      0
    );
  }, [selectedProductsWithData]);

  useEffect(() => {
    saveSelectedToLocalStorage(selectedProducts);
  }, [selectedProducts]);

  useEffect(() => {
    setSelectedProductsWithData(
      sortBy(
        selectedProducts.map((v) => {
          const productData = PRODUCTS.filter((data) => data.id === v.id)[0];
          return { ...v, ...productData };
        }),
        'id'
      )
    );
  }, [selectedProducts]);

  function addProduct(id) {
    setSelectedProducts(changeItemQuantity('+', id));
  }

  function removeProduct(id) {
    setSelectedProducts(changeItemQuantity('-', id));
  }

  function setProductQuantity(id, quantity) {
    setSelectedProducts(changeItemQuantity('', id, quantity));
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
        addProduct,
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
