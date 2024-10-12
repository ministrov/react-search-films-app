import { RootData } from "../interfaces/films-description.interface";

export const INITIAL_STATE = [{
  name: '',
  isLogged: true
}];

export const links = [
  {
    id: 1,
    label: 'Поиск фильмов',
    isActive: true,
    count: null,
    hasCount: false,
    hasIcon: false,
    href: '/'
  },
  {
    id: 2,
    label: 'Мои фильмы',
    isActive: false,
    count: 2,
    hasCount: true,
    hasIcon: false,
    href: '/favorites'
  }
];

export const films = [
  {
    id: 1,
    title: 'Black Widow',
    isFavorite: false,
    poster: '/poster-1.png',
    rating: 324
  },
  {
    id: 2,
    title: 'Shang Chi',
    isFavorite: false,
    poster: '/poster-2.png',
    rating: 124
  },
  {
    id: 3,
    title: 'Loki',
    isFavorite: false,
    poster: '/poster-3.png',
    rating: 235
  },
  {
    id: 4,
    title: 'How I Met Your Mother',
    isFavorite: false,
    poster: '/poster-4.png',
    rating: 8125
  },
  {
    id: 5,
    title: 'Money Heist',
    isFavorite: true,
    poster: '/poster-5.png',
    rating: 8123
  },
  {
    id: 6,
    title: 'Friends',
    isFavorite: false,
    poster: '/poster-6.png',
    rating: 123
  },
  {
    id: 7,
    title: 'The Big Bang Theory',
    isFavorite: false,
    poster: '/poster-7.png',
    rating: 12
  },
  {
    id: 8,
    title: 'Two And a Half Men',
    isFavorite: false,
    poster: '/poster-8.png',
    rating: 456
  }
];

// let myName = 'Anton';

// getName(myName);

// const number = 10;

// function getNumber(number: number): void {
//   console.log(number);
// };

// getNumber(number)

export function getFilmsArrayFromJSON(character: RootData) {
  return character?.description;
};

// const promise = new Promise((res, rej) => {
//   setTimeout(() => res(1), 4000);
// });

// promise
//   .then(data => {
//     console.log(data)
//     return 2
//   })
//   .then(data => {
//     console.log(data)
//     return 'c'
//   })
//   .then(data => {
//     console.log(data)
//     return 3
//   })
//   .catch(err => {
//     console.log(err)
//     return 77
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .finally(data => {
//     console.log(data)
//   })

