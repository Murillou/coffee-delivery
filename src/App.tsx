import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';
import { CoffeeProvider } from './contexts/CoffeesContext';
import { CartProvider } from './contexts/CartContext';

export function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <CoffeeProvider>
          <Router />
        </CoffeeProvider>
      </CartProvider>
    </BrowserRouter>
  );
}
