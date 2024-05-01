import './Logo.scss';
import { Link } from 'react-router-dom';




export default function Logo() {
  const logo: string = require("../../../assets/images/logo.svg").default;

  return (
    <>
      <div className='header-logo'>
        <Link to="/" className='logo-link'>
          <img src={logo} className='logo-link-image' alt="logo" />
        </Link>
      </div>
    </>
  );
}
