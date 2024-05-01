import './Card.scss';
import { ICards } from '../../types/CardsInterface';
import { Link } from 'react-router-dom';
import Stars from '../CommonComponents/Stars/Stars';




export default function Card({ card, orderItem }: { card: ICards, orderItem?: number }) {

  return (
    <article className={`card ${orderItem ? 'card-' + orderItem : ''}`}>
      <div className='card__image-holder'>
        {card.image != null && <img className='card__image' src={card.image} alt={card.title} />}
      </div>
      <Link to={`/post/${card.isbn13}`} key={card.isbn13} className='card__title'>{card.title}</Link>
      <p className='card__author'>{card.subtitle}</p>

      <div className='card__price-holder'>
        <p className='card__price'>{card.price}</p>
        <Stars rating={0}></Stars>
      </div>
    </article>
  );
};