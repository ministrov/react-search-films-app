import { ChangeEvent, FormEvent, useContext, useState } from 'react';
import useLocaleStorage from "../../hooks/use-local-storage.hook";
import { MyContexType, UserProfile, UserProfileContext } from '../../context/user-profile.context';
import Heading from '../heading/Heading';
import Input from '../Input/Input';
import Button from '../button/Button';
import styles from './EnterForm.module.css';

function EnterFrom() {
  const [, setUserProfiles] = useLocaleStorage<UserProfile[]>('user-profile');
  const { users, addUser } = useContext<MyContexType | any>(UserProfileContext);
  const [login, setLogin] = useState<string>('');

  function updateLogin(event: ChangeEvent<HTMLInputElement>) {
    setLogin(event.target.value);
  }

  // console.log(users);

  function addUserHandler(event: FormEvent) {
    event.preventDefault();
    addUser({ name: login, isLogged: true })
    setUserProfiles(users);
    setLogin('');
  }

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

export default EnterFrom;
