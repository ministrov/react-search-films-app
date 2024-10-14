import { useRef } from 'react';
import EnterInput from '../enterInput/EnterInput';
import Heading from '../heading/Heading';
import Button from '../button/Button';
import styles from './EnterForm.module.css';

type EnterFormProps = {
  // onSubmit: (e: HTMLFormElement) => void
  onChange: (f: string) => void;
}

export default function EnterFrom({ onChange }: EnterFormProps) {
  const inputRef = useRef(null);

  return (
    <div className={styles['enter-form-wrapper']}>
      <Heading text={'Вход'} />
      <form className={styles['enter-form']} action="#" method='#'>
        <EnterInput ref={inputRef.current} onChange={onChange} />
        <Button className={'button-big'}>
          Войти в профиль
        </Button>
      </form>
    </div>
  )
}
