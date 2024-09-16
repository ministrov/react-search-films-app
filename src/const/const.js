import poster1 from '../assets/images/poster-1.png';
import poster2 from '../assets/images/poster-2.png';
import poster3 from '../assets/images/poster-3.png';
import poster4 from '../assets/images/poster-4.png';
import poster5 from '../assets/images/poster-5.png';
import poster6 from '../assets/images/poster-6.png';
import poster7 from '../assets/images/poster-7.png';
import poster8 from '../assets/images/poster-8.png';

export const links = [
  {
    id: 1,
    label: 'Поиск фильмов',
    isActive: true,
    count: null,
    hasCount: false,
    hasIcon: false
  },
  {
    id: 2,
    label: 'Мои фильмы',
    isActive: false,
    count: 2,
    hasCount: true,
    hasIcon: false
  }
];

// export const userLinks = [
//   {
//     id: 1,
//     label: 'Поиск фильмов',
//     isActive: true,
//     count: null,
//     hasCount: false,
//     hasIcon: false
//   },
//   {
//     id: 2,
//     label: 'Мои фильмы',
//     isActive: false,
//     count: 2,
//     hasCount: true,
//     hasIcon: false
//   }
// ];

export const films = [
  {
    id: 1,
    title: 'Black Widow',
    isFavorite: false,
    poster: `${poster1}`,
    rating: 324
  },
  {
    id: 2,
    title: 'Shang Chi',
    isFavorite: false,
    poster: `${poster2}`,
    rating: 124
  },
  {
    id: 3,
    title: 'Loki',
    isFavorite: false,
    poster: `${poster3}`,
    rating: 235
  },
  {
    id: 4,
    title: 'How I Met Your Mother',
    isFavorite: false,
    poster: `${poster4}`,
    rating: 8125
  },
  {
    id: 5,
    title: 'Money Heist',
    isFavorite: true,
    poster: `${poster5}`,
    rating: 8123
  },
  {
    id: 6,
    title: 'Friends',
    isFavorite: false,
    poster: `${poster6}`,
    rating: 123
  },
  {
    id: 7,
    title: 'The Big Bang Theory',
    isFavorite: false,
    poster: `${poster7}`,
    rating: 12
  },
  {
    id: 8,
    title: 'Two And a Half Men',
    isFavorite: false,
    poster: `${poster8}`,
    rating: 456
  },
];