import { ReactNode, useState } from 'react';
import styles from './InfoPanel.module.css';

type InfoPanelProps = {
  title: string;
  children: ReactNode;
}

function InfoPanel({ title, children }: InfoPanelProps) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <section className={styles['infoPanel']}>
      <h1>
        {title}
        <button onClick={() => setOpen((prev) => !prev)}>
          {open ? '^' : 'V'}
        </button>
      </h1>
      <div className={`${styles['infoPanel-details']}${open ? '' : 'infoPanel-details-closed'}`}>
        {children}
      </div>
    </section>
  )
}

export default InfoPanel;
