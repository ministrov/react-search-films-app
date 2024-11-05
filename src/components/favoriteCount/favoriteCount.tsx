import styles from './FavoriteCount.module.css';

type FavoriteCountProps = {
  count: number | undefined;
}

function FavoriteCount({ count }: FavoriteCountProps) {
  return (
    <span className={styles['count']}>{count}</span>
  )
}

export default FavoriteCount;
