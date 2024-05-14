import { ShoppingCart } from 'phosphor-react';
import { QuantityInput } from './QuantityInput';

interface CardProps {
  src: string;
  types: string[];
  coffeeName: string;
  description: string;
}

export function Card({ src, types, coffeeName, description }: CardProps) {
  function handleSubmitForm(e) {
    e.preventDefault();
  }

  return (
    <div className="bg-base-card flex flex-col items-center justify-center p-4 rounded-tr-3xl rounded-bl-3xl my-10 w-[256px] h-[310px] font-roboto">
      <img className="-mt-12" src={src} alt="" />
      <div className="flex gap-1">
        {types.map((type, index) => (
          <span
            className=" bg-yellow-light text-yellow-dark font-bold rounded-full py-1 px-2 mt-[15px]"
            key={index}
          >
            {type}
          </span>
        ))}
      </div>
      <h1 className="font-baloo2 font-extrabold mt-4 text-xl ">{coffeeName}</h1>
      <p className="text-base-label text-center text-sm mt-1">{description}</p>
      <form
        onClick={handleSubmitForm}
        className="flex items-center gap-6 mt-[33px]"
        action="#"
      >
        <h1 className="font-baloo2">
          R$ <span className="font-extrabold text-2xl">9,90</span>
        </h1>
        <div className="flex items-center gap-2">
          <QuantityInput />
          <ShoppingCart
            className="bg-purple-dark text-white h-[2rem] w-[2rem] p-2 hover:bg-purple-normal rounded-md cursor-pointer"
            size={25}
            weight="fill"
          />
        </div>
      </form>
    </div>
  );
}
