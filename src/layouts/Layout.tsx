import { useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import { UserProfileContext } from "../context/user-profile.context";
import { links } from "../const/const";

export default function Layout() {
  const [isLogged, setIsLogged] = useState(true);

  // const { users, addUser, changeUsers } = useContext(UserProfileContext);

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
