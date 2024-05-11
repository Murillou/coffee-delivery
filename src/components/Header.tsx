import { MapPin, ShoppingCart } from 'phosphor-react';
import coffeelogo from '../assets/logo-coffee.png';

export function Header() {
  return (
    <header>
      <div className="flex justify-between items-center h-[6.5rem] p-4 mx-40">
        <div>
          <img src={coffeelogo} alt="Logo Coffee Delivery" />
        </div>

        <div className="flex gap-3">
          <div className="flex gap-1 items-center p-2 bg-purple-light text-purple-dark rounded-md cursor-pointer hover:bg-purple-normal hover:text-purple-light">
            <MapPin size={22} weight="fill" />
            <span>João Pessoa, PB</span>
          </div>

          <ShoppingCart
            className="bg-yellow-light h-[2.375rem] w-[2.375rem] p-2 text-yellow-dark hover:text-yellow-light hover:bg-yellow-dark  rounded-md cursor-pointer"
            size={25}
            weight="fill"
          />
        </div>
      </div>
    </header>
  );
}
