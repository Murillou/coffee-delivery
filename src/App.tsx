import { BrowserRouter } from 'react-router-dom';
import { Router } from './components/Router/Router';

export function App() {
  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
}
