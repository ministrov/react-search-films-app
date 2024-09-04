import Button from "./components/button/Button";
import Header from "./components/header/Header";
import Heading from "./components/heading/Heading";
import Logo from "./components/logo/Logo";
import Paragraph from "./components/paragraph/Paragraph";

function App() {
  return (
    <>
      <Header>
        <Logo />
        
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
