import styles from './FeedbackFrom.module.css';

function FeedbackFrom() {
    return (
        <form className='feedback-form'>
            <label htmlFor="firsname">Name:</label>
            <input id='firstname' />

            <label htmlFor="lastname">Lastname:</label>
            <input id='lastname' />

            <label htmlFor="email">Email:</label>
            <input id='email' />

            <label htmlFor="comment">Comment:</label>
            <textarea id="comment"></textarea>

            <button type='submit'></button>
        </form>
    )
}

export default FeedbackFrom