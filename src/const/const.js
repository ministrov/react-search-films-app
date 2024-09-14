import poster1 from '../assets/images/poster-1.png';
import poster2 from '../assets/images/poster-2.png';
import poster3 from '../assets/images/poster-3.png';
import poster4 from '../assets/images/poster-4.png';
import poster5 from '../assets/images/poster-5.png';
import poster6 from '../assets/images/poster-6.png';
import poster7 from '../assets/images/poster-7.png';
import poster8 from '../assets/images/poster-8.png';

const name = 'Антон';

export const links = [
  {
    id: 1,
    label: 'Поиск фильмов',
    isActive: true,
    hasCount: false,
    hasIcon: false
  },
  {
    id: 2,
    label: 'Мои фильмы',
    isActive: false,
    hasCount: true,
    hasIcon: false
  },
  {
    id: 3,
    label: 'Войти',
    isActive: false,
    hasCount: false,
    hasIcon: true
  },
];

export const loggedLinks = [
  {
    id: 1,
    label: 'Поиск фильмов',
    isActive: true,
    hasCount: false,
    hasIcon: false
  },
  {
    id: 2,
    label: 'Мои фильмы',
    isActive: false,
    hasCount: true,
    hasIcon: false
  },
  {
    id: 3,
    label: `${name}`,
    isActive: false,
    hasCount: false,
    hasIcon: true
  },
  {
    id: 4,
    label: 'Выйти',
    isActive: false,
    hasCount: false,
    hasIcon: false
  },
];

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