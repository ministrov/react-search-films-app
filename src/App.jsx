import Button from "./components/button/Button";
import Header from "./components/header/Header";
import Heading from "./components/heading/Heading";
import Logo from "./components/logo/Logo";
import NavMenu from "./components/navMenu/NavMenu";
import NavMenuItem from "./components/navMenuItem/NavMenuItem";
import Paragraph from "./components/paragraph/Paragraph";
import SearchInput from "./components/searchInput/SearchInput";

function App() {
  const onClickHandler = () => {
    console.log('button is clicked');
  };

  return (
    <>
      <div className="top">
        <Header>
          <Logo />
          <NavMenu>
            <ul>
              <NavMenuItem href={'#'} isActive>
                Поиск фильмов
              </NavMenuItem>
              <NavMenuItem href={'#'} isActive={false}>
                Мои фильмы
                <span>2</span>
              </NavMenuItem>
              <NavMenuItem href={'#'} isActive={false}>
                Войти
                <img src="../src/assets/enter.svg" width={24} height={24} alt="Иконка входа" />
              </NavMenuItem>
            </ul>
          </NavMenu>
        </Header>
      </div>
      <div className='container'>
        <div className='left-box'>
          <Heading text={'Поиск'} />
          <Paragraph>
            Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.
          </Paragraph>
          <div className='left-box-bottom'>
            <SearchInput/>
            <Button
              content={'Искать'}
              onClick={onClickHandler}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App
