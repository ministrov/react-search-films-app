import Heading from '../../components/heading/Heading';
import Carousel from '../../components/Carousel/Carousel';
import useWindowSize from '../../hooks/use-window-size';
import Subscription from '../../components/subscription/Subscription';
import Subheading from '../../components/subheading/Subheading';
import CardsCarousel from '../../components/cardsCarousel/CardsCarousel';

import styles from './AboutPage.module.css';
import FaqSection from '../../components/faqSection/FaqSection';

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
                    <CardsCarousel />
                </div>
            </div>

            <div className={styles['about-page__only']}>
                <Subheading content='Только у нас' />

                <div className={styles['about-page__carousel-trends']}>
                    <CardsCarousel />
                </div>
            </div>

            <div className={styles['about-page__faq']}>
                <Subheading content='Частые вопросы' />

                <FaqSection />
            </div>

            {<div>{width}</div>}
        </section>
    )
}

export default AboutPage;
