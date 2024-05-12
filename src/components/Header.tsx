/* eslint-disable @typescript-eslint/no-explicit-any */
import { MapPin, ShoppingCart } from 'phosphor-react';
import coffeelogo from '../assets/logo-coffee.png';
import { useState, useEffect } from 'react';

export function Header() {
  const [city, setCity] = useState('');

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(async position => {
        const { latitude, longitude } = position.coords;
        try {
          const response = await fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyBre0xp45CXu5ycVVZdNEL4TZAIhE4PhTE`
          );

          const data = await response.json();
          const cityAndState = data.results
            .map((result: any) => {
              const cityComponent = data.results[7]?.address_components.find(
                (component: any) => component.types.includes('locality')
              )?.long_name;

              const stateComponent = result.address_components.find(
                (component: any) =>
                  component.types.includes('administrative_area_level_1')
              )?.short_name;

              return `${cityComponent}, ${stateComponent}`;
            })
            .find((city: string) => city);
          setCity(cityAndState || 'Cidade desconhecida');
        } catch (error) {
          console.log('Erro ao obter o nome da cidade', error);
          setCity('Cidade Desconhecida');
        }
      });
    } else {
      alert('Não foi possível pegar sua localização');
    }
  }, []);

  return (
    <header>
      <div className="flex justify-between items-center h-[6.5rem] p-4 md:flex-row sm:mx-40 sm1:flex-col sm1:gap-2 sm1:mx-auto">
        <div>
          <img src={coffeelogo} alt="Logo Coffee Delivery" />
        </div>

        <div className="flex gap-3 md:flex-row sm1:flex-col">
          <div className="flex gap-1 items-center p-2 bg-purple-light text-purple-dark rounded-md cursor-pointer hover:bg-purple-normal hover:text-purple-light">
            <MapPin size={22} weight="fill" />
            <span>{city}</span>
          </div>

          <ShoppingCart
            className="bg-yellow-light h-[2.375rem] w-[2.375rem] p-2 text-yellow-dark hover:text-yellow-light hover:bg-yellow-dark  rounded-md cursor-pointer sm1:w-auto"
            size={25}
            weight="fill"
          />
        </div>
      </div>
    </header>
  );
}
