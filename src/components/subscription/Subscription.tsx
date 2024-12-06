import styles from './Subscription.module.css';

function Subscription() {
    return (
        <div className={styles['subscription']}>
            <div className={styles['subscription__left']}>
                <p>The Netflix you love for just £4.99.</p>
                <p>Enjoy savings and Netflix with a few advert breaks.</p>
            </div>
            <div className={styles['subscription__right']}>
                <a className={styles['subscrition__link']} href="#">Learn More</a>
            </div>
        </div>
    )
}

export default Subscription