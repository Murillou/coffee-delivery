import { useState } from 'react';
import { coffees } from '../../Mock/coffees';
import { Card } from './Card';

export function Menu() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  function handlePriceChange(price: number) {
    const newTotalPrice = totalPrice + price;
    setTotalPrice(newTotalPrice);
    console.log(newTotalPrice);
    console.log(typeof setTotalPrice);
  }

  function handleQuantityItems(quantity: number) {
    const totalItemsUpdate = totalItems + quantity;
    setTotalItems(totalItemsUpdate);
    console.log(totalItemsUpdate);
  }
  return (
    <main className="flex flex-col  max-w-7xl mx-auto p-4 ">
      <div>
        <h1 className="text-base-title font-extrabold text-3xl font-baloo2 text-center xl:text-left ">
          Nossos cafés
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-5 justify-items-center xl:justify-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {coffees.map((coffee, index) => (
          <Card
            key={index}
            src={coffee.src}
            types={coffee.types}
            coffeeName={coffee.coffeeName}
            description={coffee.description}
            onPriceChange={handlePriceChange}
            onQuantityChange={handleQuantityItems}
          />
        ))}
      </div>
    </main>
  );
}
