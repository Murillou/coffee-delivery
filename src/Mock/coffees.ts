import coffeeTradicional from '../assets/coffees/tradicional.png';
import coffeeAmericano from '../assets/coffees/americano.png';
import coffeeCremoso from '../assets/coffees/cremoso.png';
import coffeeGelado from '../assets/coffees/gelado.png';
import coffeeComLeite from '../assets/coffees/cafécomleite.png';
import coffeeLatte from '../assets/coffees/latte.png';
import coffeeCapuccino from '../assets/coffees/capuccino.png';
import coffeeMacchiato from '../assets/coffees/macchiato.png';
import coffeeMocaccino from '../assets/coffees/mocaccino.png';
import coffeeChocolateQuente from '../assets/coffees/chocolatequente.png';
import coffeeCubano from '../assets/coffees/cubano.png';
import coffeeHavaiano from '../assets/coffees/havaiano.png';
import coffeeArabe from '../assets/coffees/arabe.png';
import coffeeIrlandes from '../assets/coffees/irlandes.png';

export const coffees = [
  {
    src: coffeeTradicional,
    types: ['TRADICIONAL'],
    coffeeName: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
  },
  {
    src: coffeeAmericano,
    types: ['TRADICIONAL'],
    coffeeName: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
  },
  {
    src: coffeeCremoso,
    types: ['TRADICIONAL'],
    coffeeName: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
  },
  {
    src: coffeeGelado,
    types: ['TRADICIONAL', 'GELADO'],
    coffeeName: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
  },
  {
    src: coffeeComLeite,
    types: ['TRADICIONAL', 'COM LEITE'],
    coffeeName: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
  },
  {
    src: coffeeLatte,
    types: ['TRADICIONAL', 'COM LEITE'],
    coffeeName: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
  },
  {
    src: coffeeCapuccino,
    types: ['TRADICIONAL', 'COM LEITE'],
    coffeeName: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
  },
  {
    src: coffeeMacchiato,
    types: ['TRADICIONAL', 'COM LEITE'],
    coffeeName: 'Macchiato',
    description: 'Café expresso misturado com pouco de leite quente e espuma',
  },
  {
    src: coffeeMocaccino,
    types: ['TRADICIONAL', 'COM LEITE'],
    coffeeName: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
  },
  {
    src: coffeeChocolateQuente,
    types: ['ESPECIAL', 'COM LEITE'],
    coffeeName: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
  },
  {
    src: coffeeCubano,
    types: ['ESPECIAL', 'ALCOÒLICO', 'GELADO'],
    coffeeName: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
  },
  {
    src: coffeeHavaiano,
    types: ['ESPECIAL'],
    coffeeName: 'Havaiano',
    description: 'Bebidaa adocicada preparadaa com café e leite de coco',
  },
  {
    src: coffeeArabe,
    types: ['ESPECIAL'],
    coffeeName: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
  },
  {
    src: coffeeIrlandes,
    types: ['ESPECIAl', 'ALCOÒLICO'],
    coffeeName: 'Irlandês',
    description: 'Bebida a base de café, uisque irlândes, açícar e chantilly',
  },
];
