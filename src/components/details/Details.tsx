import styles from './Details.module.css';

type DetailsProps = {
    firstname: string;
    lastname: string;
    email: string;
    comment: string;
}

function Details({ firstname, lastname, email, comment }: DetailsProps) {
    return (
        <div className={styles['details']}>
            <h2 className={styles['details__title']}>Проверка введенных данных</h2>
            <p className={styles['details__info']}>
                <div className={styles['details__info-wrap']}>
                    <b>Name: </b> {firstname} <br />
                </div>
                <div className={styles['details__info-wrap']}>
                    <b>Lastname: </b> {lastname} <br />
                </div>
                <div className={styles['details__info-wrap']}>
                    <b>Email: </b> {email} <br />
                </div>
                <div className={styles['details__info-wrap']}>
                    <b>Comment: </b> {comment} <br />
                </div>
            </p>
        </div>
    )
}

export default Details