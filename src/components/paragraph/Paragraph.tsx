import { ReactNode } from 'react';
import cn from 'classnames';
import styles from './Paragraph.module.css';

type ParagraphProps = {
  children: ReactNode;
  size?: string
}

function Paragraph({ children, size }: ParagraphProps) {
  return (
    <p className={cn(styles['paragraph'], {
      [styles['scaled']]: size
    })}>
      {children}
    </p>
  )
}

export default Paragraph;