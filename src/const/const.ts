// import { RootData } from "../interfaces/films-description.interface";

export const links = [
  {
    id: 1,
    label: 'Поиск фильмов',
    isActive: true,
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

// export function getFilmsArrayFromJSON(character: RootData) {
//   return character?.description;
// };

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

