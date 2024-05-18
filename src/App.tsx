import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';
import { CoffeeProvider } from './contexts/CoffeesContext';

export function App() {
  return (
    <BrowserRouter>
      <CoffeeProvider>
        <Router />
      </CoffeeProvider>
    </BrowserRouter>
  );
}
