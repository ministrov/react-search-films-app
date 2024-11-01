import styles from './Rating.module.css';

type RatingProps = {
  count: number;
}

function Rating({ count }: RatingProps) {
  return (
    <div className={styles['rating']}>
      <img src={'/star.svg'} alt="Picture of the yellow star" />
      <p>{count}</p>
    </div>
  )
}

export default Rating;
