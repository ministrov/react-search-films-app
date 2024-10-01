import EnterFrom from "../../components/enterForm/EnterFrom";
import InfoPanel from "../../components/infoPanel/InfoPanel";
import useLocaleStorage from "../../hooks/use-local-storage.hook";
import { useState } from "react";

export default function LoginPage() {
  const [profiles, setProfiles] = useLocaleStorage<[{ name: string, isLogged: boolean }]>('user-profile');
  const [inputValue, setInputValue] = useState('');
  const [profile, setProfile] = useState({});
  const onSubmitHandler = () => {
    // e.preventDefault();
    console.log('click');

    if (!profiles && profiles !== 'undefined') {
      setProfiles([{ name: inputValue.trim(), isLogged: true }]);
    } else {
      // setProfiles([...profiles, { name: inputValue.trim(), isLogged: true }]);
      setProfile(...profiles);
    }
  };

  const getInputValue = (string: string) => {
    setInputValue(string);
  };
  return (
    <section>
      <h2 className="visually-hidden">Страница входа пользователя</h2>
      <EnterFrom onSubmit={onSubmitHandler} onChange={getInputValue} />
      <InfoPanel title="This is an extendebale panel">
        Lorem ipsum dolor sit amet.
      </InfoPanel>
    </section>
  )
}
