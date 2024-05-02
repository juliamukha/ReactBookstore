import './SelectedCard.scss';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import Title from '../../components/CommonComponents/Title/Title';
import ButtonIcon from '../../components/CommonComponents/ButtonIcon/ButtonIcon';
import Button from '../../components/CommonComponents/Button/Button';
import Stars from '../../components/CommonComponents/Stars/Stars';
import Tabs from './Tabs/Tabs';
import { ICard } from '../../types/CardsInterface';




export default function SelectedCard({ book }: { book: ICard }) {
  return (

    <section className='selected-card'>
      <Title titleClass='title' children={book.title}></Title>
      <div className="selected-card__top-description">
        <div className="selected-card__image-holder">
          <ButtonIcon fontAwesome={faHeart} isDisabled={false} titleButton='To favorites' typeButton='favorites-icon'></ButtonIcon>
          {book.image != null && <img className='selected-card__image' src={book.image} alt={book.subtitle} />}
        </div>
        <div className='selected-card__main-info'>
          <div className="flex-card m-b-3">
            <p className='selected-card__price'>{book.price}</p>
            <Stars rating={Number(book.rating)}></Stars>
          </div>
          {book.authors &&
            <div className='flex-card m-b-8'>
              <p className='flex-card_left'>Authors</p>
              <p className='flex-card_right'>{book.authors}</p>
            </div>
          }
          {(book.publisher || book.year) &&
            <div className='flex-card m-b-8'>
              <p className='flex-card_left'>Publisher</p>
              <p className='flex-card_right'>{book.publisher}, {book.year}</p>
            </div>
          }
          <div className='flex-card m-b-8'>
            <p className='flex-card_left'>Language</p>
            <p className='flex-card_right'>English</p>
          </div>
          <div className='flex-card m-b-8'>
            <p className='flex-card_left'>Format</p>
            <p className='flex-card_right'>Paper book
              {book.pdf && <span>/ ebook (pdf)</span>}</p>
          </div>
          {(book.subtitle || book.pages) &&
            <details className='selected-card__details'>
              <summary className='selected-card__summary'>More detailse</summary>
              <div className='selected-card__details-info'>
                {book.subtitle &&
                  <div className='flex-card m-b-8'>
                    <p className='flex-card_left'>Subtitle</p>
                    <p className='flex-card_right'>{book.subtitle}</p>
                  </div>
                }
                {book.pages &&
                  <div className='flex-card m-b-8'>
                    <p className='flex-card_left'>Pages</p>
                    <p className='flex-card_right'>{book.pages}</p>
                  </div>
                }
              </div>
            </details>
          }
          <Button isDisabled={false} typeButton='addToCart-button'>Add to Cart</Button>
          {book.pdf &&
            <div className="center">
              <Link to={Object.values(book.pdf)[0]} className='link'>Preview book</Link>
            </div>
          }
        </div>
      </div>
      <Tabs book={book}></Tabs>
    </section>
  );
};