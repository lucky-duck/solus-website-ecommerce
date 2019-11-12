import React, { useContext, useState, useMemo, useEffect } from 'react';
import { CART_LOCAL_STORAGE_KEY, COLORS } from '../constants';

const ProductsContext = React.createContext({});

const allProducts = [
  {
    id: 0,
    title: 'SOLUS+ M1 200W Heater',
    description: '40x45x80 cm',
    price: 250,
  },
  {
    id: 1,
    title: 'SOLUS+ M2 400W Heater',
    description: '60x79x110 cm',
    price: 350,
  },
  {
    id: 2,
    title: 'Starter Kit M1 2xM1 200W Heater',
    description: '40x45x80 cm',
    price: 450,
  },
  {
    id: 3,
    title: 'Starter Kit M2 2xM2 400W Heater',
    description: '60x79x110 cm',
    price: 650,
  },
];

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
      const productData = allProducts.filter((v) => v.id === id)[0];
      return [
        ...products,
        {
          id,
          ...productData,
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

export function ProductsProvider({ children }) {
  const [selectedProducts, setSelectedProducts] = useState(
    getSelectedFromLocalStorage()
  );
  const totalPrice = useMemo(() => {
    return selectedProducts.reduce(
      (acc, curr) => acc + curr.price * curr.quantity,
      0
    );
  }, [selectedProducts]);
  useEffect(() => {
    saveSelectedToLocalStorage(selectedProducts);
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
      return [];
    }
    const parsed = JSON.parse(selectedProducts);
    if (!Array.isArray(parsed)) {
      return [];
    }
    return parsed;
  }

  function saveSelectedToLocalStorage(selectedProducts) {
    window.localStorage.setItem(
      CART_LOCAL_STORAGE_KEY,
      JSON.stringify(selectedProducts)
    );
  }

  return (
    <ProductsContext.Provider
      value={{
        allProducts,
        selectedProducts,
        addProduct,
        removeProduct,
        setProductQuantity,
        changeProductColor,
        totalPrice,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export function useProducts() {
  return useContext(ProductsContext);
}
