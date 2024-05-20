import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';
import { CoffeeProvider } from './contexts/CoffeesContext';
import { CartProvider } from './contexts/CartContext';
import { AddressProvider } from './contexts/AddressContext';

export function App() {
  return (
    <BrowserRouter>
      <AddressProvider>
        <CartProvider>
          <CoffeeProvider>
            <Router />
          </CoffeeProvider>
        </CartProvider>
      </AddressProvider>
    </BrowserRouter>
  );
}
