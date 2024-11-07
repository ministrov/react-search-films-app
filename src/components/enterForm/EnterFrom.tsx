import { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Heading from '../heading/Heading';
import Input from '../Input/Input';
import Button from '../button/Button';
import styles from './EnterForm.module.css';

function EnterFrom() {
  const [login, setLogin] = useState<string>('');
  const navigate = useNavigate();

  function updateLogin(event: ChangeEvent<HTMLInputElement>) {
    setLogin(event.target.value);
  }

  // console.log(users);

  function addUserHandler(event: FormEvent) {
    event.preventDefault();
    // localStorage.setItem('user-profile', JSON.stringify(users));
    setLogin('');
    navigate('/');
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
