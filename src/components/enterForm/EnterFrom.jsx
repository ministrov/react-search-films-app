import React, { useRef, useState } from 'react';
import EnterInput from '../enterInput/EnterInput';
import Heading from '../heading/Heading';
import Button from '../button/Button';
import styles from './EnterForm.module.css';

export default function EnterFrom() {
  const [ value, setValue ] = useState('');
  const inputRef = useRef(null);

  const onClickHandler = () => {
    console.log(`${this}: button is clicked`);
  };

  const onChangeHandler = (event) => {
    setValue(event.target.value);
  };

  // useEffect(() => {
  //   console.log(value);
  // }, [value]);

  return (
    <div className={styles['enter-form-wrapper']}>
      <Heading text={'Вход'}/>
      <form className={styles['enter-form']} action="#">
        <EnterInput ref={inputRef.current} onChange={onChangeHandler} values={value}/>
        <Button content={'Войти в профиль'} className={'button-big'} onClick={onClickHandler}/>
      </form>
    </div>
  )
}
