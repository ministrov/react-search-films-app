import Heading from '../../components/heading/Heading';
import styles from './AboutPage.module.css';

function AboutPage() {


    return (
        <section className={styles['about-page']}>
            <Heading text={'О нас'} />
        </section>
    )
}

export default AboutPage;
