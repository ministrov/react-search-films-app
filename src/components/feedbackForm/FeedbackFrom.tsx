import { FormEvent, useState } from 'react';
import Details from '../details/Details';
import styles from './FeedbackFrom.module.css';

function FeedbackFrom() {
    const [isHideDetails, setIsHideDetails] = useState<boolean>(true);
    const [formData, setFormData] = useState<{ firstname: string, lastname: string, email: string, comment: string }>({
        firstname: '',
        lastname: '',
        email: '',
        comment: ''
    });

    function onChangeHandler(event: FormEvent) {
        const { name, value } = event.target as never;
        setFormData({ ...formData, [name]: value });
    }

    function showDetailsHandler() {
        setIsHideDetails((current) => !current);
    }

    function onUpdateHandler() {
        setFormData({
            firstname: 'fsfsfsdfsd',
            lastname: 'sfdfsdf',
            email: 'sfsdfsdf',
            comment: 'ddfdfdf'
        });
    }

    // console.log(formData);
    return (
        <div className={styles['feedback-form-wrapper']}>
            <form className={styles['feedback-form']}>
                <div className={styles['feedback-form__row']}>
                    <label className={styles['feedback-form__label']} htmlFor="firsname">Имя :</label>
                    <input className={styles['feedback-form__input']} onChange={onChangeHandler} name='firstname' value={formData.firstname} id='firstname' />
                </div>

                <div className={styles['feedback-form__row']}>
                    <label className={styles['feedback-form__label']} htmlFor="lastname">Фамилия :</label>
                    <input className={styles['feedback-form__input']} onChange={onChangeHandler} name='lastname' value={formData.lastname} id='lastname' />
                </div>

                <div className={styles['feedback-form__row']}>
                    <label className={styles['feedback-form__label']} htmlFor="email">Почта :</label>
                    <input className={styles['feedback-form__input']} onChange={onChangeHandler} name='email' value={formData.email} id='email' />
                </div>

                <div className={styles['feedback-form__row']}>
                    <label className={styles['feedback-form__label']} htmlFor="comment">Коментарии :</label>
                    <textarea className={styles['feedback-form__textarea']} id="comment" onChange={onChangeHandler} name='comment' value={formData.comment} ></textarea>
                </div>

                <div className={styles['feedback-form__controls']}>
                    <button className={styles['feedback-form__btn']} type='submit' onClick={(e) => {
                        e.preventDefault()
                        console.log(e.target)
                    }}>Send</button>
                    <button className={styles['feedback-form__btn']} type='button' onClick={onUpdateHandler}>Update</button>
                    <button className={styles['feedback-form__btn']} type='button' onClick={showDetailsHandler}>
                        {isHideDetails ? 'ShowDetails' : 'HideDetails'}
                    </button>
                </div>
            </form>

            {isHideDetails ? null : <Details {...formData} />}
        </div>
    )
}

export default FeedbackFrom