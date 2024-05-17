import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react';
import { NavLink } from 'react-router-dom';
import { ButtonPayment } from './ButtonPayment';
import cafeTriste from '../../assets/cafe-tristonho.png';
import { InputPayment } from './InputPayment';

export function Payment() {
  return (
    <main className="flex flex-col-reverse items-center justify-center max-w-7xl mx-auto p-4 gap-4 xl:flex-row">
      <section className="flex flex-col items-center xl:items-start xl:justify-center gap-3 ">
        <h1 className="font-baloo2 font-extrabold text-2xl mb-4">
          Complete seu pedido
        </h1>

        <form
          className="flex flex-col bg-base-card rounded-lg gap-8 text-sm p-2 sm:p-10 w-full"
          action="#"
        >
          <div className="space-y-1">
            <h1 className="flex flex-row text-base-subtitle font-roboto font-medium">
              <MapPinLine className="text-yellow-dark" size={22} /> Endereço de
              entrega
            </h1>

            <p className="font-roboto text-base-text text-sm pl-5">
              Informe o endereço onde deseja receber seu pedido
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <InputPayment placeholder="CEP" className="lg:w-[200px]" />
            <InputPayment placeholder="Rua" />

            <div className="flex flex-col gap-4 md:flex-row">
              <InputPayment placeholder="Número" className="lg:w-[200px]" />
              <InputPayment placeholder="Complemento" />
            </div>

            <div className="flex flex-col gap-4 md:flex-row">
              <InputPayment placeholder="Bairro" className="lg:w-[200px]" />
              <InputPayment placeholder="Cidade" />
              <InputPayment placeholder="UF" className="lg:w-[60px]" />
            </div>
          </div>
        </form>

        <div className="flex flex-col justify-center gap-8 p-2 sm:p-10 max-h-[372px]  bg-base-card rounded-lg w-full">
          <div className="space-y-1">
            <h1 className="flex flex-row items-center text-base-subtitle font-roboto font-medium ">
              <CurrencyDollar className="text-purple-normal" size={22} />
              Pagamento
            </h1>

            <p className="font-roboto text-base-text text-sm  pl-5">
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </div>

          <div className="flex flex-col gap-3 lg:flex-row items-center text-sm sm:text-base">
            <ButtonPayment
              icon={<CreditCard size={22} />}
              value="CARTÃO DE CRÉDITO"
            />
            <ButtonPayment icon={<Bank size={22} />} value="CARTÃO DE DÈBITO" />
            <ButtonPayment icon={<Money size={22} />} value="DINHEIRO" />
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center xl:items-stretch -mt-60">
        <h1 className="font-baloo2 font-extrabold text-2xl mb-4">
          Cafés selecionados
        </h1>

        <div className="flex flex-col items-center gap-2 bg-base-card p-10 rounded-tl-lg rounded-br-lg rounded-tr-[40px] rounded-bl-[40px] font-baloo2 font-bold text-sm md:text-lg ">
          <img className="w-56" src={cafeTriste} alt="" />
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
