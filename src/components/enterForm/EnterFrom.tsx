import { useRef } from 'react';
// import EnterInput from '../enterInput/EnterInput';
import Heading from '../heading/Heading';
import Button from '../button/Button';
import styles from './EnterForm.module.css';

type EnterFormProps = {
  onSubmit: () => void;
  onChange: () => void;
}

export default function EnterFrom({ onSubmit, onChange }: EnterFormProps) {
  const inputRef = useRef(null);

  return (
    <div className={styles['enter-form-wrapper']}>
      <Heading text={'Вход'}/>
      <form className={styles['enter-form']} action="#">
        {/* <EnterInput ref={inputRef.current} onChange={onChange} /> */}
        <Button content={'Войти в профиль'} className={'button-big'} onClick={onSubmit}/>
      </form>
    </div>
  )
}
