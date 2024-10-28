import { useState, useEffect } from "react";
import EnterFrom from "../../components/enterForm/EnterFrom";
import useLocaleStorage from "../../hooks/use-local-storage.hook";

export default function LoginPage() {
  const [profiles, setProfiles] = useLocaleStorage('user-profile');
  const [inputValue, setInputValue] = useState('');

  const onSubmitHandler = () => {
    // if (!profiles && profiles !== 'undefined') {
    //   setProfiles([{ name: inputValue.trim(), isLogged: true }]);
    // } else {
    //   setProfiles([...profiles as [{ name: string, isLogged: boolean }], { name: inputValue.trim(), isLogged: true }]);
    //   setProfile(...profiles as [{ name: string, isLogged: boolean }]);
    // }
  };

  useEffect(() => {
    onSubmitHandler();
  }, [inputValue]);

  const getInputValue = (string: string) => {
    setInputValue(string);
  };

  return (
    <section>
      <h2 className="visually-hidden">Страница входа пользователя</h2>
      <EnterFrom onChange={getInputValue} onSubmit={() => console.log('dfsdfsdfsd')} />
    </section>
  )
}
