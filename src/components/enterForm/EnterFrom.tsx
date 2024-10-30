import { FormEvent, useContext, useRef, useState } from 'react';
import { UserProfileContext, MyContexType } from '../../context/user-profile.context';
import useLocaleStorage from "../../hooks/use-local-storage.hook";
import EnterInput from '../enterInput/EnterInput';
import Heading from '../heading/Heading';
import Button from '../button/Button';
import styles from './EnterForm.module.css';

export default function EnterFrom() {
  const [userProfiles, setUserProfiles] = useLocaleStorage('user-profile');
  const { users, addUser } = useContext<MyContexType | any>(UserProfileContext);
  // const [inputValue, setInputValue] = useState('');

  function addUserHandler(event: FormEvent) {
    event.preventDefault();
    // addUser({ name: '', isLogged: true });
    // setUserProfiles(users);
    setUserProfiles([...users, { name: getInputValue, isLogged: true }]);

    console.log(userProfiles);
  }

  const getInputValue = (string: string) => {
    console.log(string);
    // setInputValue(string);
  };

  return (
    <div className={styles['enter-form-wrapper']}>
      <Heading text={'Вход'} />
      <form className={styles['enter-form']} action="#" method='#' onSubmit={addUserHandler}>
        <EnterInput onChange={getInputValue} />
        <Button className={'button-big'}>
          Войти в профиль
        </Button>
      </form>
    </div>
  )
}
