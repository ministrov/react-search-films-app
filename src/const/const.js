import poster1 from '../assets/images/poster-1.jpg';
import poster2 from '../assets/images/poster-2.jpg';
import poster3 from '../assets/images/poster-3.jpg';
import poster4 from '../assets/images/poster-4.jpg';
import poster5 from '../assets/images/poster-5.jpg';
import poster6 from '../assets/images/poster-6.jpg';
import poster7 from '../assets/images/poster-7.jpg';
import poster8 from '../assets/images/poster-8.jpg';

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

export const films = [
  {
    id: 1,
    title: 'Black Widow',
    isFavorite: false,
    poster: <img src={poster1} alt="Poster number one" />,
    rating: 324
  },
  {
    id: 2,
    title: 'Shang Chi',
    isFavorite: false,
    poster: <img src={poster2} alt="Poster number two" />,
    rating: 124
  },
  {
    id: 3,
    title: 'Loki',
    isFavorite: false,
    poster: <img src={poster3} alt="Poster number three" />,
    rating: 235
  },
  {
    id: 4,
    title: 'Money Heist',
    isFavorite: true,
    poster: <img src={poster4} alt="Poster number foure" />,
    rating: 8125
  },
  {
    id: 5,
    title: 'Friends',
    isFavorite: false,
    poster: <img src={poster5} alt="Poster number five" />,
    rating: 123
  },
  {
    id: 6,
    title: 'Friends',
    isFavorite: false,
    poster: <img src={poster6} alt="Poster number six" />,
    rating: 123
  },
  {
    id: 7,
    title: 'The Big Bang Theory',
    isFavorite: false,
    poster: <img src={poster7} alt="Poster number seven" />,
    rating: 12
  },
  {
    id: 8,
    title: 'Two And a Half Men',
    isFavorite: false,
    poster: <img src={poster8} alt="Poster number eight" />,
    rating: 456
  },
];