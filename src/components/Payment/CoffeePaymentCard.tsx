import { Trash } from 'phosphor-react';
import { useCartContext } from '../../hooks/useCartContext';
import { QuantityInput } from '../Menu/QuantityInput';

export function CoffeePaymentCard() {
  const { cart } = useCartContext();

  return (
    <div>
      {cart.map((item, index) => (
        <div
          key={index}
          className="flex flex-col px-1 py-2 pb-6 mb-6 border-b-[1px] border-b-base-button border-solid lg:flex-row"
        >
          <div>
            <img className="w-16 w-16" src={item.src} alt={item.coffeeName} />
          </div>

          <div className="flex flex-col ml-5 ">
            <h1 className="text-base-subtitle">{item.coffeeName}</h1>
            <div className="flex gap-2 ">
              <QuantityInput value={item.quantity} />
              <button className="flex items-center gap-1 px-2 bg-base-button rounded-lg text-xs text-base-subtitle hover:bg-base-hover">
                <Trash className="text-purple-normal" size={15} />
                REMOVER
              </button>
            </div>
          </div>

          <div>
            <h1 className="text-base-text font-bold ml-12">
              R$ {item.price.toFixed(2)}
            </h1>
          </div>
        </div>
      ))}
    </div>
  );
}
