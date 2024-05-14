import { coffees } from '../../Mock/coffees';
import { Card } from './Card';

export function Menu() {
  return (
    <main className="flex flex-col flex-wrap items-center mt-10">
      <h1 className="text-base-title font-extrabold text-3xl font-baloo2">
        Nossos cafés
      </h1>
      <div className="flex flex-col items-center justify-center">
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
