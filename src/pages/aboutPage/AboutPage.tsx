import Heading from '../../components/heading/Heading';
import FeedbackFrom from "../../components/feedbackForm/FeedbackFrom";
import Carousel from '../../components/Carousel/Carousel';
import useWindowSize from '../../hooks/use-window-size';
import styles from './AboutPage.module.css';
import Subscription from '../../components/subscription/Subscription';
import Subheading from '../../components/subheading/Subheading';

function AboutPage() {
    const { width } = useWindowSize();

    return (
        <section className={styles['about-page']}>
            <Heading text={'О нас'} />

            <div className={styles['about-page__promo']}>
                <Carousel />
            </div>

            <div className={styles['about-page__subscription']}>
                <Subscription />
            </div>

            <div className={styles['about-page__trends']}>
                <Subheading content='Тренды' />

                <div className={styles['about-page__carousel-trends']}>
                    {/* Create a carousel-trends component like in Netflix.com */}
                </div>
            </div>

            {<div>{width}</div>}
        </section>
    )
}

export default AboutPage;
