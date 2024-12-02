import Heading from '../../components/heading/Heading';
import FeedbackFrom from "../../components/feedbackForm/FeedbackFrom";
import { EmblaOptionsType } from 'embla-carousel'
import EmblaCarousel from '../../components/emblaCarousel/EmblaCarousel';
import styles from './AboutPage.module.css';

const OPTIONS: EmblaOptionsType = {
    dragFree: true,
    containScroll: 'keepSnaps',
    watchSlides: false,
    watchResize: false
}

const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

function AboutPage() {


    return (
        <section className={styles['about-page']}>
            <Heading text={'О нас'} />

            <FeedbackFrom />

            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </section>
    )
}

export default AboutPage;
