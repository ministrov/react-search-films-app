import Carousel from '../../components/Carousel/Carousel';
import FeedbackFrom from '../../components/feedbackForm/FeedbackFrom';
import Heading from '../../components/heading/Heading';
import styles from './ContactsPage.module.css';

function ContactsPage() {
    return (
        <section className={styles['about-page']}>
            <Heading text={'Свяжитесь с нами'} />

            <FeedbackFrom />
        </section>
    )
}

export default ContactsPage;