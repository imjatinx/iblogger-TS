import React, { createContext, useContext, useState } from 'react'

interface CartProviderProps {
  children: React.ReactNode;
}

interface CartContextValue {
  value: number;
  setCount: (num: number) => void;
}

const CartContext = createContext<CartContextValue | null>(null);

export const useCart = () => {
  return useContext(CartContext);
}

const CartProvider: React.FC<CartProviderProps> = (props) => {

  const [count, setCount] = useState<number>(1)

  return (
    <CartContext.Provider value={{
      value: count,
      setCount
    }}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider