import styles from './Subheading.module.css';

type SubheadingProps = {
    content: string;
}

function Subheading({ content }: SubheadingProps) {
    return (
        <h2 className={styles['subheading']}>{content}</h2>
    )
}

export default Subheading;