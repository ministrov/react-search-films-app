import { ChangeEvent, FormEvent, useContext, useRef, useState } from 'react';
import useLocaleStorage from "../../hooks/use-local-storage.hook";
import { UserProfile } from '../../context/user-profile.context';
import Heading from '../heading/Heading';
import Input from '../Input/Input';
import Button from '../button/Button';
import styles from './EnterForm.module.css';

export default function EnterFrom() {
  const [userProfiles, setUserProfiles] = useLocaleStorage<UserProfile[]>('user-profile');
  const [login, setLogin] = useState<string>('');

  // const isLoginEmpty = login === '' ? true : false;

  function updateLogin(event: ChangeEvent<HTMLInputElement>) {
    setLogin(event.target.value);
  }

  function addUserHandler(event: FormEvent) {
    event.preventDefault();
    setUserProfiles([{ name: login, isLogged: true }]);
    setLogin('');
  }

  console.log(userProfiles);
  return (
    <div className={styles['enter-form-wrapper']}>
      <Heading text={'Вход'} />
      <form className={styles['enter-form']} action="#" method='#' onSubmit={addUserHandler}>
        <Input onChange={updateLogin} value={login} isValid={true} icon={false} type={'text'} placeholder={'Ваше имя'} />
        <Button className={'button-big'}>
          Войти в профиль
        </Button>
      </form>
    </div>
  )
}
