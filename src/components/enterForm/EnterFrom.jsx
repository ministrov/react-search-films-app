import React from 'react';
import EnterInput from '../enterInput/EnterInput';
import Heading from '../heading/Heading';
import Button from '../button/Button';
import styles from './EnterForm.module.css';

export default function EnterFrom() {
  const onClickHandler = () => {
    console.log(`${this}: button is clicked`);
  };
  return (
    <div className={styles['enter-form-wrapper']}>
      <Heading text={'Вход'}/>
      <form className={styles['enter-form']} action="#">
        <EnterInput/>
        <Button content={'Войти в профиль'} onClick={onClickHandler}/>
      </form>
    </div>
  )
}
