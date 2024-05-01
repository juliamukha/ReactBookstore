import './Header.scss';
import Logo from '../Logo/Logo';
import SearchBar from '../SearchBar/SearchBar';
import UserInfo from '../UserInfo/UserInfo';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';



export default function Header() {

  const [isAuthorized, setAuthorization] = useState(false);




  return (
    <header className="header">
      <div className='container'>
        <div className="header-container">
          <Logo></Logo>

          <SearchBar></SearchBar>

          <div className="header-icons-holder">
            <Link to="/" className="icon-link icon-link_favorities" title="Favorites">
              <FontAwesomeIcon icon={faHeart} />
            </Link>
            <Link to="/" className="icon-link icon-link_basket" title="Basket">
              <FontAwesomeIcon icon={faBasketShopping} />
            </Link>
            {isAuthorized ?
              <UserInfo userName="Artem Malkin"></UserInfo> :
              <Link to="/signIn" className="icon-link icon-link_user" title="Sign In">
                <FontAwesomeIcon icon={faUser} />
              </Link>
            }
          </div>
        </div>
      </div>
    </header>
  );
}