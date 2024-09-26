// import star from '../../assets/star.svg';
import styles from './Rating.module.css';

type RatingProps = {
  count: number;
}

export default function Rating({ count }: RatingProps) {
  return (
    <div className={styles['rating']}>
      <img src={'../../assets/star.svg'} alt="Picture of the yellow star" />
      <p>{count}</p>
    </div>
  )
}
