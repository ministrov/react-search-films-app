import { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import FilmCard from '../filmCard/FilmCard';
import styles from './CardsCarousel.module.css';

function CardsCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel();

    const scrollPrev = useCallback(() => {
        if (emblaApi) {
            emblaApi.scrollPrev();
        }
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) {
            emblaApi.scrollNext()
        }
    }, [emblaApi]);

    return (
        <div className={styles['embla']}>
            <div className={styles['embla__viewport']} ref={emblaRef}>
                <div className={styles['embla__container']}>
                    <div className={styles['embla__slide']}>
                        <FilmCard
                            id={'1'}
                            img={'/poster-1.png'}
                            title={'Black Widow'}
                            rating={0}
                        />
                    </div>
                    <div className={styles['embla__slide']}>
                        <FilmCard
                            id={'2'}
                            img={'/poster-2.png'}
                            title={'Shang Chi'}
                            rating={123}
                        />
                    </div>
                    <div className={styles['embla__slide']}>
                        <FilmCard
                            id={'3'}
                            img={'/poster-3.png'}
                            title={'Loki'}
                            rating={34}
                        />
                    </div>
                    <div className={styles['embla__slide']}>
                        <FilmCard
                            id={'4'}
                            img={'/poster-4.png'}
                            title={'How I Met Your Mother'}
                            rating={456}
                        />
                    </div>
                    <div className={styles['embla__slide']}>
                        <FilmCard
                            id={'5'}
                            img={'/poster-5.png'}
                            title={'Money Heist'}
                            rating={12}
                        />
                    </div>
                    <div className={styles['embla__slide']}>
                        <FilmCard
                            id={'6'}
                            img={'/poster-6.png'}
                            title={'Friends'}
                            rating={78}
                        />
                    </div>
                    <div className={styles['embla__slide']}>
                        <FilmCard
                            id={'7'}
                            img={'/poster-7.png'}
                            title={'The Big band theory'}
                            rating={89}
                        />
                    </div>
                    <div className={styles['embla__slide']}>
                        <FilmCard
                            id={'8'}
                            img={'/poster-8.png'}
                            title={'Two and a half man'}
                            rating={434}
                        />
                    </div>
                </div>
            </div>
            <button className="embla__prev" onClick={scrollPrev}>
                Prev
            </button>
            <button className="embla__next" onClick={scrollNext}>
                Next
            </button>
        </div>
    )
}

export default CardsCarousel;