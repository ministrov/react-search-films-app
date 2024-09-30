import { Outlet } from "react-router-dom"
import Header from "../components/header/Header"
import { links } from "../const/const"

export default function Layout() {
  return (
    <>
      <div className='top container'>
        <Header
          links={links}
          // profile={profile}
          // onClick={onClickHandler}
          // isLogged={isLogged}
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
