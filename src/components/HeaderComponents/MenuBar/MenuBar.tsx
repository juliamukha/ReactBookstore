import { useState, useEffect, useContext } from 'react';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faSun, faMoon } from '@fortawesome/free-regular-svg-icons';
import Button from '../../CommonComponents/Button/Button';
import ButtonIcon from '../../CommonComponents/ButtonIcon/ButtonIcon';
import MenuList from '../MenuList/MenuList';
import './MenuBar.scss';
import { ThemeContext } from "../../../providers/ThemeContext";



export default function MenuBar() {
  const [allValues, setMenuValues] = useState({
    isHidden: false,
    menuIconTitle: 'Show menu'
  });

  const [isAuthorized, setAuthorization] = useState(false);

  const { darkTheme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkTheme ? "dark" : "light"
    );
  }, [darkTheme]);


  function toggleMenu() {
    setMenuValues({
      ...allValues,
      isHidden: !allValues.isHidden,
      menuIconTitle: allValues.isHidden ? 'Show menu' : 'Hide menu'
    });
  }
  function toogleAuthorization() {
    setAuthorization(!isAuthorized);
  }

  return (
    <>
      <div className='header-menu'>
        <ButtonIcon typeButton='header-menu-icon icon-button' clickFunction={toggleMenu} isDisabled={false} titleButton={allValues.menuIconTitle}
          fontAwesome={allValues.isHidden ? faXmark : faBars}></ButtonIcon>

        {allValues.isHidden &&
          <div className="header-menu-holder">
            <div className="menu-top">
              <MenuList></MenuList>
            </div>
            <div className="menu-bottom">
              <div className="menu-bottom__topicSwitcher">
                <ButtonIcon typeButton="light-topic-button" clickFunction={toggleTheme} isDisabled={!darkTheme} titleButton="Switch to light theme" fontAwesome={faSun}></ButtonIcon>
                <ButtonIcon typeButton="dark-topic-button" clickFunction={toggleTheme} isDisabled={darkTheme} titleButton="Switch to dark theme" fontAwesome={faMoon}></ButtonIcon>
              </div>
              <Button children={isAuthorized ? 'Sign In' : 'Log out'} typeButton='menu-bottom__button button button_secondary' clickFunction={toogleAuthorization} isDisabled={false}></Button>
            </div>
          </div>
        }
      </div>
    </>
  );
}
