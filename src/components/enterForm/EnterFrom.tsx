import { ChangeEvent, FormEvent, useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Heading from '../heading/Heading';
import Input from '../input/Input';
import Button from '../button/Button';
import { AppDispatch, RootState } from '../../store/store';
import { login } from '../../store/user.slice';
import styles from './EnterForm.module.css';

function EnterFrom() {
  const [isLoginValid, setIsLoginValid] = useState<boolean>(true);
  const [userName, setUserName] = useState<string>('');
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { name } = useSelector((state: RootState) => state.profile);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (name) {
      navigate('/');
    }
  }, [name, navigate]);

  function updateLogin(event: ChangeEvent<HTMLInputElement>) {
    setUserName(event.target.value);
  }

  function addUserHandler(event: FormEvent) {
    event.preventDefault();

    const regex_only_text = /^[A-Za-z ]+$/;

    if (userName === '' || typeof userName !== 'string') {
      setIsLoginValid(false);
    }

    if (userName.length < 3) {
      setIsLoginValid(false);
    }

    if (!regex_only_text.test(userName)) {
      setIsLoginValid(false);
    }

    dispatch(login(userName));

    setUserName('');
  }

  return (
    <div className={styles['enter-form-wrapper']}>
      <Heading text={'Вход'} />
      <form className={styles['enter-form']} action="#" method='#' onSubmit={addUserHandler}>
        <Input onChange={updateLogin} ref={inputRef} value={userName} isValid={isLoginValid} icon={false} type={'text'} placeholder={'Ваше имя'} />
        <Button className={'button-big'}>
          Войти в профиль
        </Button>
      </form>
    </div>
  )
}

export default EnterFrom;
