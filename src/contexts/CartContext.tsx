import { ReactNode, createContext, useState } from 'react';

interface CartItem {
  src: string;
  types: string[];
  coffeeName: string;
  description: string;
  quantity: number;
  price: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (coffee: CartItem) => void;
  updateQuantity: (coffeeName: string, quantity: number) => void;
  removeFromCart: (coffeeName: string) => void;
}

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  function addToCart(coffee: CartItem) {
    setCart(prevCart => [...prevCart, coffee]);
  }

  function updateQuantity(coffeeName: string, quantity: number) {
    setCart(prevCart =>
      prevCart.map(item =>
        item.coffeeName === coffeeName ? { ...item, quantity } : item
      )
    );
  }

  function removeFromCart(coffeeName: string) {
    setCart(prevCart => prevCart.filter(item => item.coffeeName != coffeeName));
  }

  return (
    <CartContext.Provider
      value={{ cart, addToCart, updateQuantity, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
