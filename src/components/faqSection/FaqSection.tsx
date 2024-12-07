import { useState } from 'react';
import { FaPlus } from "react-icons/fa6";
import { faqs } from '../../const';
import cn from 'classnames';
import styles from './FaqSection.module.css';

function FaqSection() {
    const [activeIndex, setActiveIndex] = useState(-1);
    return (
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
    )
}

export default FaqSection