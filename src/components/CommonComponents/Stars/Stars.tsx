import './Stars.scss';
import ButtonIcon from '../ButtonIcon/ButtonIcon';
import { useState } from 'react';
import { faStar } from '@fortawesome/free-solid-svg-icons';




export default function Stars({ rating }: { rating: number }) {
  const [userRating, setUserRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  rating = rating ? Number(rating) : Math.floor(Math.random() * 5) + 1
  return (
    <div className='card__stars'>
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <ButtonIcon key={index + 1} fontAwesome={faStar} isDisabled={false} titleButton='Rate the book'
            typeButton={`star-rate${index <= rating ? ' rated' : ''}${(index <= userRating || index <= hoverRating) ? ' user-rated' : ''}`}
            clickFunction={() => setUserRating(index)}
            hoverFunction={() => setHoverRating(index)}
            unhoverFunction={() => setHoverRating(0)} ></ButtonIcon>
        )
      })}
    </div>
  );
}
