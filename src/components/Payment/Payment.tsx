import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react';
import { NavLink } from 'react-router-dom';
import { ButtonPayment } from './ButtonPayment';

export function Payment() {
  return (
    <main className="flex flex-col-reverse items-center justify-center max-w-7xl mx-auto p-4 gap-4 lg:flex-row">
      <section className="flex flex-col items-center justify-center gap-3">
        <h1 className="font-baloo2 font-extrabold text-2xl mb-4">
          Complete seu pedido
        </h1>

        <form
          className="flex flex-col bg-base-card p-4 rounded-lg gap-4 text-sm"
          action="#"
        >
          <div>
            <h1 className="flex flex-row items-center text-base-subtitle font-roboto font-medium">
              <MapPinLine className="text-yellow-dark" size={22} /> Endereço de
              entrega
            </h1>

            <p className="font-roboto text-base-text text-sm mt-2">
              Informe o endereço onde deseja receber seu pedido
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <input type="text" placeholder="CEP" required />
            <input type="text" placeholder="Rua" required />

            <div className="flex flex-col gap-4">
              <input type="text" placeholder="Número" required />
              <input type="text" placeholder="Complemento" />
            </div>

            <div className="flex flex-col gap-4">
              <input type="text" placeholder="Bairro" />
              <input type="text" placeholder="Cidade" />
              <input type="text" placeholder="UF" />
            </div>
          </div>
        </form>

        <div className="flex flex-col p-4 bg-base-card rounded-lg">
          <div>
            <h1 className="flex flex-row items-center text-base-subtitle font-roboto font-medium mb-2">
              <CurrencyDollar className="text-purple-normal" size={22} />
              Pagamento
            </h1>

            <p className="font-roboto text-base-text text-sm mb-4">
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </div>

          <div>
            <ButtonPayment
              icon={<CreditCard size={22} />}
              value="CARTÃO DE CRÉDITO"
            />
            <ButtonPayment icon={<Bank size={22} />} value="CARTÃO DE DÈBITO" />
            <ButtonPayment icon={<Money size={22} />} value="DINHEIRO" />
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center">
        <h1 className="font-baloo2 font-extrabold text-2xl mb-4">
          Cafés selecionados
        </h1>

        <div className="flex flex-col gap-4 bg-base-card p-4 rounded-tl-lg rounded-br-lg rounded-tr-[40px] rounded-bl-[40px] font-baloo2 font-bold text-sm">
          <img className="w-56" src="/src/assets/cafe-tristonho.png" alt="" />
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
      </section>
    </main>
  );
}
