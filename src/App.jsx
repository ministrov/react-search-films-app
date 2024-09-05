import Button from "./components/button/Button";
import Header from "./components/header/Header";
import Heading from "./components/heading/Heading";
import Logo from "./components/logo/Logo";
import NavMenu from "./components/navMenu/NavMenu";
import NavMenuItem from "./components/navMenuItem/NavMenuItem";
import Paragraph from "./components/paragraph/Paragraph";

function App() {
  return (
    <>
      <Header>
        <Logo />
        <NavMenu>
          <NavMenuItem href={'#'}>
            Поиск фильмов
          </NavMenuItem>
          <NavMenuItem href={'#'}>
            Мои фильмы
            <span>2</span>
          </NavMenuItem>
          <NavMenuItem href={'#'}>
            Войти
            <img src="../src/assets/enter.svg" width={24} height={24} alt="Иконка входа" />
          </NavMenuItem>
        </NavMenu>
      </Header>
      <div className='container'>
        <Heading text={'Поиск'} />
        <Paragraph>
          Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.
        </Paragraph>
        <Paragraph size>
          After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos
        </Paragraph>
        <Button content={'Искать'} />
        <Button content={'Войти в профиль'} />
      </div>
    </>
  );
}

export default App
