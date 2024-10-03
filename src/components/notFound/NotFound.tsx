import styles from './NotFound.module.css';

export default function NotFound() {
  return (
    <div className={styles['not-found']}>
      <h2 className={styles['not-found-title']}>Упс... Ничего не найдено</h2>
      <p className={styles['not-found-text']}>Попробуйте изменить запрос или ввести более точное название фильма</p>
    </div>
  )
}
