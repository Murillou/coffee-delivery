import { MapPin } from 'phosphor-react';
import { NavLink } from 'react-router-dom';

export function Payment() {
  return (
    <main className="flex flex-col-reverse items-center justify-center max-w-7xl mx-auto p-4">
      <div>
        <h1 className="font-baloo2 font-extrabold">Complete seu pedido</h1>

        <form className="flex" action="#">
          <div>
            <h1>
              {' '}
              <MapPin /> Endereço de entrega
            </h1>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>

          <div>
            <input type="text" />
            <input type="text" />
            <div>
              <input type="number" name="" id="" /> <input type="text" />
            </div>

            <div>
              <input type="text" />
              <input type="text" />
              <input type="text" />
            </div>
          </div>
        </form>

        <div></div>
      </div>

      <div>
        <div></div>

        <div></div>
      </div>

      <div className="flex flex-col items-center">
        <h1 className="font-baloo2 font-extrabold text-2xl mb-4">
          Cafés selecionados
        </h1>

        <div className="flex flex-col gap-4 bg-base-card p-4 rounded-tl-lg rounded-br-lg rounded-tr-[40px] rounded-bl-[40px] font-baloo2 font-bold text-sm">
          <img src="/src/assets/cafe-tristonho.png" alt="" />
          <h1 className="font-baloo2">
            Você ainda não adicionou nenhum café no seu carrinho! :(
          </h1>

          <h1>
            <NavLink to="/" className="text-purple-normal font-extrabold">
              Clique aqui
            </NavLink>{' '}
            para escolher algum cafézinho do nosso cardápio! :D
          </h1>
        </div>
      </div>
    </main>
  );
}
