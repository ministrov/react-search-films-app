import Button from "./components/button/Button";
import Header from "./components/header/Header";
import Heading from "./components/heading/Heading";
import Logo from "./components/logo/Logo";
import NavMenu from "./components/navMenu/NavMenu";
import NavMenuItem from "./components/navMenuItem/NavMenuItem";
import Paragraph from "./components/paragraph/Paragraph";
import SearchInput from "./components/searchInput/SearchInput";
import FilmsList from "./components/filmsList/FilmsList";
import { links } from './const/const.js';
import icon from './assets/enter.svg';

function App({ films }) {
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
              {links.map(link => (
                <NavMenuItem
                  key={link.id}
                  label={link.label}
                  isActive={link.isActive}
                  icon={icon}
                  hasCount={link.hasCount}
                  hasIcon={link.hasIcon}
                >
                  {link.label}
                </NavMenuItem>
              ))}
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
          <div className='films-wrapper'>
              <FilmsList films={films} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App
