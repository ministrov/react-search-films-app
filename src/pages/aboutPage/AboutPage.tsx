import Heading from '../../components/heading/Heading';
import FeedbackFrom from "../../components/feedbackForm/FeedbackFrom";
import styles from './AboutPage.module.css';

function AboutPage() {


    return (
        <section className={styles['about-page']}>
            <Heading text={'О нас'} />

            <FeedbackFrom />
        </section>
    )
}

export default AboutPage;
