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
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    <div className="embla__slide">
                        Slide 1
                        <FilmCard
                            id={'1'}
                            img={''}
                            title={''}
                            rating={0}
                        />
                    </div>
                    <div className="embla__slide">
                        Slide 2
                        <FilmCard
                            id={'2'}
                            img={''}
                            title={''}
                            rating={123}
                        />
                    </div>
                    <div className="embla__slide">
                        Slide 3
                        <FilmCard
                            id={'3'}
                            img={''}
                            title={''}
                            rating={34}
                        />
                    </div>
                    <div className="embla__slide">
                        Slide 4
                        <FilmCard
                            id={'4'}
                            img={''}
                            title={''}
                            rating={456}
                        />
                    </div>
                    <div className="embla__slide">
                        Slide 5
                        <FilmCard
                            id={'5'}
                            img={''}
                            title={''}
                            rating={12}
                        />
                    </div>
                    <div className="embla__slide">
                        Slide 6
                        <FilmCard
                            id={'6'}
                            img={''}
                            title={''}
                            rating={78}
                        />
                    </div>
                    <div className="embla__slide">
                        Slide 7
                        <FilmCard
                            id={'7'}
                            img={''}
                            title={''}
                            rating={89}
                        />
                    </div>
                    <div className="embla__slide">
                        Slide 8
                        <FilmCard
                            id={'8'}
                            img={''}
                            title={''}
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