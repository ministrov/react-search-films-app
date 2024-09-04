import Button from "./components/button/Button";
import Heading from "./components/heading/Heading";
import Paragraph from "./components/paragraph/Paragraph";

function App() {
  return (
    <>
      <Heading text={'Поиск'} />
      <Paragraph text={'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'}/>
      <Paragraph text={'After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos'} size/>
      <Button content={'Искать'} />
      <Button content={'Войти в профиль'} />
    </>
  );
}

export default App
