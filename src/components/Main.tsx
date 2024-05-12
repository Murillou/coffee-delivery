import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react';
import coffeeBackground from '../assets/coffee-bg.png';

export function Main() {
  return (
    <main className="flex justify-between items-center mx-40 mt-20">
      <div className="flex flex-col">
        <h1 className="text-base-title text-5xl font-extrabold">
          Encontre o café perfeito
        </h1>
        <h1 className="text-base-title text-5xl font-extrabold">
          para qualquer hora do dia
        </h1>
        <h3 className="text-base-subtitle text-xl font-roboto font-normal mt-4 mb-[4.1rem]">
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </h3>
        <div className="flex flex-row  text-base-subtitle gap-10 text-lg">
          <div className="flex flex-col gap-6">
            <span className="flex items-center gap-3">
              <ShoppingCart
                className="text-white bg-yellow-dark rounded-full p-2 h-8 w-8"
                size={22}
                weight="fill"
              />
              Compra simples e segura
            </span>

            <span className="flex items-center gap-3">
              <Timer
                className="text-white bg-yellow-normal rounded-full p-2 h-8 w-8"
                size={22}
                weight="fill"
              />
              Entrega rápida e rastreada
            </span>
          </div>

          <div className="flex flex-col gap-6">
            <span className="flex items-center gap-3">
              <Package
                className="text-white bg-base-text rounded-full p-2 h-8 w-8"
                size={22}
                weight="fill"
              />
              Embalagem mantém o café intacto
            </span>

            <span className="flex items-center gap-3">
              <Coffee
                className="text-white bg-purple-normal rounded-full p-2 h-8 w-8"
                size={22}
                weight="fill"
              />
              O café chega fresquinho até você
            </span>
          </div>
        </div>
      </div>

      <div>
        <img src={coffeeBackground} alt="Coffee" />
      </div>
    </main>
  );
}
