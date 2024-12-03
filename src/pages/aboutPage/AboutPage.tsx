import Heading from '../../components/heading/Heading';
import FeedbackFrom from "../../components/feedbackForm/FeedbackFrom";
import Carousel from '../../components/Carousel/Carousel';
import styles from './AboutPage.module.css';

function AboutPage() {
    return (
        <section className={styles['about-page']}>
            <Heading text={'О нас'} />

            <FeedbackFrom />

            <Carousel />
        </section>
    )
}

export default AboutPage;
