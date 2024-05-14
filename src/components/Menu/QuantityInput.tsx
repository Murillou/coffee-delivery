import { useState } from 'react';

export function QuantityInput() {
  const [quantity, setQuantity] = useState(0);

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="flex justify-center items-center gap-2 font-roboto bg-base-button py-1 rounded-md w-[65px]">
      <button
        className="text-purple-normal font-extrabold "
        onClick={decrement}
      >
        -
      </button>
      <span>{quantity}</span>
      <button
        className="text-purple-normal font-extrabold "
        onClick={increment}
      >
        +
      </button>
    </div>
  );
}
