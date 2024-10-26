import { useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import { links } from "../const/const";

export default function Layout() {
  const [isLogged, setIsLogged] = useState(true);

  const onLogoutHandler = () => {
    console.log('click');
    setIsLogged(false);
  };

  return (
    <>
      <div className='top container'>
        <Header
          links={links}
          logout={onLogoutHandler}
          isLogged={isLogged}
        />
      </div>
      <main>
        <div className='container'>
          <Outlet />
        </div>
      </main>
    </>
  )
}
