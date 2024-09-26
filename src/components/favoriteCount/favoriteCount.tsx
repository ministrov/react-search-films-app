import styles from './FavoriteCount.module.css';

type FavoriteCountProps = {
  count: number | undefined;
}

export default function FavoriteCount({ count }: FavoriteCountProps) {
  return (
    <span className={styles['count']}>{count}</span>
  )
}
