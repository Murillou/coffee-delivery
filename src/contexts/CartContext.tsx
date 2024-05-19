import { ReactNode, createContext, useState } from 'react';

interface Coffee {
  src: string;
  types: string[];
  coffeeName: string;
  description: string;
  quantity: number;
  price: number;
}

interface CartContextType {
  cart: Coffee[];
  addToCart: (coffee: Coffee) => void;
}

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Coffee[]>([]);

  function addToCart(coffee: Coffee) {
    setCart(prevCart => [...prevCart, coffee]);
  }

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}
