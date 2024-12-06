import styles from './Footer.module.css';

function Footer() {
    return (
        <div className={styles['footer']}>
            <span>Политика конфиденциальности</span>
            <span>Правила пользования</span>
            <span>© 2023 Все права защищены</span>
        </div>
    )
}

export default Footer