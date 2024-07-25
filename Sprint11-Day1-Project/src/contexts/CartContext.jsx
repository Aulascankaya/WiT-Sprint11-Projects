import { createContext, useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useLocalStorage('s11g1', []);

  const addItem = (item) => {
    setCart([...cart, item]);
  };

  const removeItem = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
