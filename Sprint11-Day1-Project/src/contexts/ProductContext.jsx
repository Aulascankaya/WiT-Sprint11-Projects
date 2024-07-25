import { createContext, useState } from 'react';
import { data } from '../data';

export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState(data);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
