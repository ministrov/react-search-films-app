import { ChangeEvent, FormEvent, useContext, useRef, useState } from 'react';
import { UserProfileContext, MyContexType } from '../../context/user-profile.context';
import useLocaleStorage from "../../hooks/use-local-storage.hook";
import Heading from '../heading/Heading';
import Input from '../Input/Input';
import Button from '../button/Button';
import styles from './EnterForm.module.css';

export default function EnterFrom() {
  const [userProfiles, setUserProfiles] = useLocaleStorage('user-profile');
  const { users, addUser } = useContext<MyContexType | any>(UserProfileContext);
  const [login, setLogin] = useState('');

  function updateLogin(event: ChangeEvent<HTMLInputElement>) {
    setLogin(event.target.value);
  }

  function addUserHandler(event: FormEvent) {
    event.preventDefault();
    // addUser({ name: '', isLogged: true });
    // setUserProfiles(users);
    setUserProfiles([...users, { name: login, isLogged: true }]);

    console.log(userProfiles);
    setLogin('');
  }

  return (
    <div className={styles['enter-form-wrapper']}>
      <Heading text={'Вход'} />
      <form className={styles['enter-form']} action="#" method='#' onSubmit={addUserHandler}>
        <Input onChange={updateLogin} value={login} isValid={login !== ''} icon={false} type={'text'} placeholder={'Ваше имя'} />
        <Button className={'button-big'}>
          Войти в профиль
        </Button>
      </form>
    </div>
  )
}
