import './MenuList.scss';
import { useState } from 'react';
import { menuLink } from '../../../types/MenuItemsInterface';
import { Link } from 'react-router-dom';



export default function MenuList() {
  const [navs] = useState(menuLink);

  return (
    <>
      <ul className='menu-list'>
        {navs.map((item, index) => (
          <li key={index} className='menu-item'>
            <Link to={item.url} className='menu-item__link'>{item.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
