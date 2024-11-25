import styles from './Message.module.css';

type MessageProps = {
  type: 'search' | 'error';
};

function Message({ type }: MessageProps) {
  return (
    type === 'error' ? (
      <div className={styles['message']}>
        <h2 className={styles['message__title']}>Упс... Произошла ошибка</h2>
        <p className={styles['message__text']}>Попробуйте еще раз</p>
      </div>
    ) : (
      <div className={styles['message']}>
        <h2 className={styles['message__title']}>Упс... Ничего не найдено</h2>
        <p className={styles['message__text']}>Попробуйте изменить запрос или ввести более точное название фильма</p>
      </div>
    )
  )
}

export default Message;