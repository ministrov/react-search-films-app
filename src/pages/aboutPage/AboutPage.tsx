import { useState } from 'react';
import { FaPlus } from "react-icons/fa6";
import Heading from '../../components/heading/Heading';
import Carousel from '../../components/Carousel/Carousel';
import useWindowSize from '../../hooks/use-window-size';
import Subscription from '../../components/subscription/Subscription';
import Subheading from '../../components/subheading/Subheading';
import CardsCarousel from '../../components/cardsCarousel/CardsCarousel';
import cn from 'classnames';
import { faqs } from '../../const';
import styles from './AboutPage.module.css';

function AboutPage() {
    const [activeIndex, setActiveIndex] = useState(-1);
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
                <Subheading content='Часто задаваемые вопросы' />

                <section className={styles['faq']}>
                    <div className={styles['faq__list']}>
                        {
                            faqs.map((item, index) => (
                                <div className={`${styles['faq__item']} ${activeIndex === index ? styles['faq__item--active'] : ''}`}
                                    key={index}
                                    onClick={() => {
                                        if (activeIndex === index) {
                                            return setActiveIndex(-1);
                                        }
                                        setActiveIndex(index);
                                    }}
                                >
                                    <div className={styles['faq__question']}>
                                        <h3>{item.title}</h3>
                                        {
                                            activeIndex === index
                                                ? (
                                                    <div className={styles['faq__icon']}>
                                                        <FaPlus />
                                                    </div>
                                                )
                                                : (
                                                    <div className={cn(styles['faq__icon'], styles['faq__icon--cross'])}>
                                                        <FaPlus />
                                                    </div>
                                                )

                                        }
                                    </div>
                                    <div className={styles['faq__answer']}>
                                        <p className={styles['faq__muted']}>{item.description}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </section>
            </div>

            {<div>{width}</div>}
        </section>
    )
}

export default AboutPage;
