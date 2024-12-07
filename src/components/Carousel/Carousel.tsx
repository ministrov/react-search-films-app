import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from 'embla-carousel-autoplay';

import styles from './Carousel.module.css';

function Carousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

    useEffect(() => {
        if (emblaApi) {
            // console.log(emblaApi.slideNodes());
        }
    }, [emblaApi]);

    return (
        <div className={styles['embla']} ref={emblaRef}>
            <div className={styles['embla__container']}>
                <div className={styles['embla__slide']}>
                    {/* <img src="/poster-1.png" width={'100%'} height={'328'} alt="" /> */}
                </div>
                <div className={styles['embla__slide']}>
                    {/* <img src="/poster-2.png" width={'100%'} height={'328'} alt="" /> */}
                </div>
                <div className={styles['embla__slide']}>
                    {/* <img src="/poster-3.png" width={'100%'} height={'328'} alt="" /> */}
                </div>
            </div>
        </div>
    )
}

export default Carousel;
