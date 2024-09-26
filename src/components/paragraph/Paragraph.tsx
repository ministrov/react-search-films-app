import cn from 'classnames';
import styles from './Paragraph.module.css';
import { ReactNode } from 'react';

type ParagraphProps = {
  children: ReactNode;
  size?: string
}

export default function Paragraph({ children, size }: ParagraphProps) {
  return (
    <p className={cn(styles['paragraph'], {
      [styles['scaled']]: size
    })}>
      {children}
    </p>
  )
}
