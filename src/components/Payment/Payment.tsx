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
import { useState, useEffect, ChangeEvent } from 'react';
import { useCoffeeContext } from '../../hooks/useCoffeeContext';

interface AddressData {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
}

export function Payment() {
  const { totalItems } = useCoffeeContext();
  const [addressData, setAddressData] = useState<AddressData>({
    cep: '',
    logradouro: '',
    complemento: '',
    bairro: '',
    localidade: '',
    uf: '',
  });

  function handleNewCep(event: ChangeEvent<HTMLInputElement>) {
    const newCep = event.target.value;
    setAddressData({
      ...addressData,
      cep: newCep,
    });
  }

  useEffect(() => {
    async function fetchAddressData() {
      try {
        const response = await fetch(
          `https://viacep.com.br/ws/${addressData.cep}/json/`
        );
        const data = await response.json();
        setAddressData(prevData => ({
          ...prevData,
          logradouro: data.logradouro || '',
          complemento: data.complemento || '',
          bairro: data.bairro || '',
          localidade: data.localidade || '',
          uf: data.uf || '',
        }));
      } catch (error) {
        console.error('Error fetching address data:', error);
      }
    }
    if (addressData.cep.length === 8) {
      fetchAddressData();
    }
  }, [addressData.cep]);

  return (
    <main className="flex flex-col-reverse items-center justify-center max-w-7xl mx-auto p-4 gap-8 xl:flex-row">
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
            <InputPayment
              onChange={handleNewCep}
              value={addressData.cep}
              placeholder="CEP"
              className="lg:w-[200px]"
              size={8}
            />
            <InputPayment value={addressData.logradouro} placeholder="Rua" />

            <div className="flex flex-col gap-4 md:flex-row">
              <InputPayment placeholder="Número" className="lg:w-[200px]" />
              <InputPayment placeholder="Complemento" />
            </div>

            <div className="flex flex-col gap-4 md:flex-row">
              <InputPayment
                value={addressData.bairro}
                placeholder="Bairro"
                className="lg:w-[200px]"
              />
              <InputPayment
                placeholder="Cidade"
                value={addressData.localidade}
              />
              <InputPayment
                value={addressData.uf}
                placeholder="UF"
                className="lg:w-[60px]"
              />
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
            <ButtonPayment icon={<Bank size={22} />} value="CARTÃO DE DÉBITO" />
            <ButtonPayment icon={<Money size={22} />} value="DINHEIRO" />
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center xl:items-stretch xl:-mt-60">
        <h1 className="font-baloo2 font-extrabold text-2xl mb-4">
          Cafés selecionados
        </h1>

        {totalItems > 0 ? (
          <div className="flex flex-col items-center gap-2 bg-base-card p-10 rounded-tl-lg rounded-br-lg rounded-tr-[40px] rounded-bl-[40px] font-baloo2 font-bold text-sm md:text-lg ">
            <div></div>
            <NavLink
              to="/success"
              className="text-purple-normal font-extrabold"
            >
              <button className="bg-yellow-normal text-white px-2 py-3 w-[386px]">
                CONFIRMAR PEDIDO
              </button>
            </NavLink>{' '}
          </div>
        ) : (
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
        )}
      </section>
    </main>
  );
}
