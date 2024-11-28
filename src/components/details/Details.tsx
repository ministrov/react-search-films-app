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
            <h2>Проверка введенных данных</h2>
            <p>
                <b>Name: </b> {firstname} <br />
                <b>Lastname: </b> {lastname} <br />
                <b>Email: </b> {email} <br />
                <b>Comment: </b> {comment} <br />
            </p>
        </div>
    )
}

export default Details