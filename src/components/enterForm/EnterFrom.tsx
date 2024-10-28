import { FormEvent, useContext, useRef, useState } from 'react';
import { UserProfileContext, MyContexType } from '../../context/user-profile.context';
import useLocaleStorage from "../../hooks/use-local-storage.hook";
import EnterInput from '../enterInput/EnterInput';
import Heading from '../heading/Heading';
import Button from '../button/Button';
import styles from './EnterForm.module.css';

// type EnterFormProps = {
//   onSubmit: (user: string) => void
// }

export default function EnterFrom() {
  const [userProfiles, setUserProfiles] = useLocaleStorage('user-profile');
  const { users, addUser } = useContext<MyContexType | any>(UserProfileContext);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);

  function addUserHandler(event: FormEvent) {
    event.preventDefault();
    addUser({ name: inputValue, isLogged: true });
    setUserProfiles([...users]);

    console.log(userProfiles);

    console.log('form is submitted!!!');
  }

  const getInputValue = (string: string) => {
    setInputValue(string);
  };

  return (
    <div className={styles['enter-form-wrapper']}>
      <Heading text={'Вход'} />
      <form className={styles['enter-form']} action="#" method='#' onSubmit={addUserHandler}>
        <EnterInput ref={inputRef.current} onChange={getInputValue} />
        <Button className={'button-big'}>
          Войти в профиль
        </Button>
      </form>
    </div>
  )
}
