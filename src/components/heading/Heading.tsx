import styles from './Heading.module.css';

type HeadingProps = {
  text: string;
}

export default function Heading({ text }: HeadingProps) {
  return (
    <h1 className={styles['heading']}>{text}</h1>
  )
}
