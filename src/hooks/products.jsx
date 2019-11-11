import React, { useContext, useState, useMemo } from 'react';
import { COLORS } from '../constants';

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
        const newQuantity =
          quantity !== undefined
            ? quantity
            : isAdding
            ? v.quantity + 1
            : v.quantity - 1;
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
  const [selectedProducts, setSelectedProducts] = useState([]);
  const totalPrice = useMemo(() => {
    return selectedProducts.reduce(
      (acc, curr) => acc + curr.price * curr.quantity,
      0
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
