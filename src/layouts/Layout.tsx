import { useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import { UserProfileContext, MyContexType } from "../context/user-profile.context";
import { links } from "../const/const";

export default function Layout() {
  const { users, addUser, changeUsers } = useContext<MyContexType | any>(UserProfileContext);
  const [isLogged, setIsLogged] = useState<boolean>(true);


  const onLogoutHandler = () => {
    console.log('click');
    setIsLogged(false);
  };

  return (
    <div className="container">
      <Header
        links={links}
        logout={onLogoutHandler}
        isLogged={isLogged}
      />

      <main>
        <Outlet />
      </main>
    </div>
  )
}
