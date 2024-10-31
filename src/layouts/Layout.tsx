import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import { links } from "../const/const";
import useLocaleStorage from "../hooks/use-local-storage.hook";
import { UserProfile } from "../context/user-profile.context";

export default function Layout() {
  const [, , getUserProfiles] = useLocaleStorage<UserProfile[] | any>('user-profile');
  const [isLogged, setIsLogged] = useState<boolean>(true);

  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const profiles = getUserProfiles();
  const profile = profiles?.map((item: UserProfile) => item);

  useEffect(() => {
    setUserProfile(profile);
  }, []);

  const onLogoutHandler = () => {
    setIsLogged(false);
  };

  // console.log(userProfiles);

  return (
    <div className="container">
      <Header
        user={userProfile}
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
