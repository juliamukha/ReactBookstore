import './Tabs.scss';
import { useState } from 'react';
import { ICard } from '../../../types/CardsInterface';




export default function Tabs({ book }: { book: ICard }) {
  const tabItems = ['Description', 'Author', 'Review'];
  const [activeTab, setActiveTab] = useState(0);
  function openTab(e: any) {
    console.log(e.target.dataset.item);
    setActiveTab(e.target.dataset.item);
  }

  return (
    <>
      <div className="tabs">
        <ul className="tabs__nav">
          {tabItems.map((item, index) => {
            return <li key={item} className={`tabs__nav-link ${index == activeTab ? 'active' : ''}`} onClick={openTab} data-item={index}>
              {item}
            </li>
          })
          }
        </ul>
        <div className="tabs__content">
          {activeTab == 0 && <div>{book.desc}</div>}
          {activeTab == 1 && <div>{book.authors}</div>}
          {activeTab == 2 && <div>This book has no reviews yet</div>}
        </div>
      </div>
    </>
  );
}
