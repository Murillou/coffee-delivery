import { ShoppingCart } from 'phosphor-react';

interface CardProps {
  src: string;
  types: string[];
  coffeeName: string;
  description: string;
}

export function Card({ src, types, coffeeName, description }: CardProps) {
  return (
    <div className="bg-purple-normal flex flex-col items-center justify-center p-4 rounded-tr-3xl rounded-bl-3xl my-10">
      <img src={src} alt="" />
      <span>{types}</span>
      <h1>{coffeeName}</h1>
      <p>{description}</p>
      <form className="flex flex-col items-center justify-center" action="#">
        <h1>R$ 9,90</h1>
        <input type="number" placeholder="l0" name="" id="" min={0} />

        <ShoppingCart
          className="bg-purple-dark text-white h-[2.375rem] w-[2.375rem] p-2 hover:bg-purple-normal rounded-md cursor-pointer"
          size={25}
          weight="fill"
        />
      </form>
    </div>
  );
}
