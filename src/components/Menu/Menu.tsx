import { coffees } from '../../Mock/coffees';
import { Card } from './Card';

export function Menu() {
  return (
    <main className="flex flex-col flex-wrap text-center mt-10 md:mx-30 xl-mx-40">
      <h1 className="text-base-title font-extrabold text-3xl font-baloo2  ">
        Nossos cafés
      </h1>
      <div className="grid grid-cols-1 justify-items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {coffees.map((coffee, index) => (
          <Card
            key={index}
            src={coffee.src}
            types={coffee.types}
            coffeeName={coffee.coffeeName}
            description={coffee.description}
          />
        ))}
      </div>
    </main>
  );
}
