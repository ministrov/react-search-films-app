import Heading from '../../components/heading/Heading';
import FeedbackFrom from "../../components/feedbackForm/FeedbackFrom";
import Carousel from '../../components/Carousel/Carousel';
import useWindowSize from '../../hooks/use-window-size';
import styles from './AboutPage.module.css';

function AboutPage() {
    const { width } = useWindowSize();

    return (
        <section className={styles['about-page']}>
            <Heading text={'О нас'} />

            <div className={styles['about-page__promo']}>
                <Carousel />
            </div>

            {<div>{width}</div>}
        </section>
    )
}

export default AboutPage;
