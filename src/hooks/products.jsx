import React, { useContext, useState } from 'react';

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
          quantity,
        },
      ];
    }

    return products;
  };
}

export function ProductsProvider({ children }) {
  const [selectedProducts, setSelectedProducts] = useState([]);

  function addProduct(id) {
    setSelectedProducts(changeItemQuantity('+', id));
  }

  function removeProduct(id) {
    setSelectedProducts(changeItemQuantity('-', id));
  }

  function setProductQuantity(id, quantity) {
    setSelectedProducts(changeItemQuantity('', id, quantity));
  }

  console.log('selectedProducts', selectedProducts);

  return (
    <ProductsContext.Provider
      value={{
        allProducts,
        selectedProducts,
        addProduct,
        removeProduct,
        setProductQuantity,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export function useProducts() {
  return useContext(ProductsContext);
}
