import { ChangeEvent, FormEvent, useRef } from 'react';
import EnterInput from '../enterInput/EnterInput';
import Heading from '../heading/Heading';
import Button from '../button/Button';
import styles from './EnterForm.module.css';

type EnterFormProps = {
  onSubmit: (user: string) => void
  onChange: (f: string) => void;
}

export default function EnterFrom({ onChange, onSubmit }: EnterFormProps) {
  const inputRef = useRef(null);

  function addUser(event: FormEvent) {
    event.preventDefault();

    console.log('form is submitted!!!');
  }

  return (
    <div className={styles['enter-form-wrapper']}>
      <Heading text={'Вход'} />
      <form className={styles['enter-form']} action="#" method='#' onSubmit={addUser}>
        <EnterInput ref={inputRef.current} onChange={onChange} />
        <Button className={'button-big'}>
          Войти в профиль
        </Button>
      </form>
    </div>
  )
}
