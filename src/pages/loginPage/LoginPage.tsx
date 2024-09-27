import Header from "../../components/header/Header";
import EnterFrom from "../../components/enterForm/EnterFrom";
import { links } from "../../const/const";
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
    <main>
      <div className='top container'>
        <Header
          links={links}
          profile={profile}
          // onClick={onClickHandler}
          // isLogged={isLogged}
        />


        <EnterFrom onSubmit={onSubmitHandler} onChange={getInputValue} />
      </div>
    </main>
  )
}
