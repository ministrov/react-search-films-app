import { Outlet } from "react-router-dom"
import Header from "../components/header/Header"
import { links } from "../const/const"
import { useContext } from "react"
import { UserProfileContext, UserProfileContextProvider } from "../context/user-profile.context"

export default function Layout() {
  const profiles = useContext<any>(UserProfileContext);
  const profile = profiles[0];
  console.log(profiles);
  console.log(profile);
  return (
    <>
      <div className='top container'>
        <UserProfileContextProvider>
          <Header
            links={links}
            profile={profile}
          // onClick={onClickHandler}
          // isLogged={isLogged}
          />
        </UserProfileContextProvider>
      </div>
      <main>
        <div className='container'>
          <Outlet />
        </div>
      </main>
    </>
  )
}
