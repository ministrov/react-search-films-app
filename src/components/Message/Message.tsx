import styles from './Message.module.css';

type MessageProps = {
  type: 'search' | 'error';
};

export default function Message({ type }: MessageProps) {
  return (
    type === 'error' ? (
      <div className={styles['message']}>
        <h2 className={styles['message-title']}>Упс... Произошла ошибка</h2>
        <p className={styles['message-text']}>Попробуйте еще раз</p>
      </div>
    ) : (
      <div className={styles['message']}>
        <h2 className={styles['message-title']}>Упс... Ничего не найдено</h2>
        <p className={styles['message-text']}>Попробуйте изменить запрос или ввести более точное название фильма</p>
      </div>
    )
  )
}
