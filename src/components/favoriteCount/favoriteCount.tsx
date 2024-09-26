import styles from './FavoriteCount.module.css';

export default function FavoriteCount({ count }: any) {
  return (
    <span className={styles['count']}>{count}</span>
  )
}
