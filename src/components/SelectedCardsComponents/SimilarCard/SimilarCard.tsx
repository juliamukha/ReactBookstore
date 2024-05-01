import './SimilarCard.scss';
import ButtonIcon from '../../../components/CommonComponents/ButtonIcon/ButtonIcon';
import { cards } from '../../../types/CardsInterface';
import { ICards } from '../../../types/CardsInterface';
import Card from '../../../components/CardsComponents/Card';
import { useState } from 'react';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';





export default function SimilarCard({ firstBook }: { firstBook: string }) {
  const getRandomElements = function (): ICards[] {
    let result = [];
    let first = cards.findIndex(item => item.isbn13 == firstBook);
    let index = first;
    while (result.length < 6) {
      if (result.indexOf(cards[index]) == -1) {
        result.push(cards[index]);
        index++;
      } else {
        index = first;
        index--;
        result.push(cards[index]);
      }
    }
    return result;
  };
  const similarCard = getRandomElements();

  const [firstCard, setFirstCard] = useState(1);
  function nextTick() {
    if (firstCard == 6) {
      setFirstCard(1);
    } else {
      setFirstCard(firstCard + 1);
    }
  };
  function previousTick() {
    if (firstCard == 1) {
      setFirstCard(6);
    } else {
      setFirstCard(firstCard - 1);
    }
  };


  return (
    <section className='similar-card'>
      <div className="similar-card__title-holder">
        <h4 className="similar-card__title">Similar books</h4>
        <div className="similar-card__arrow-holder">
          <ButtonIcon fontAwesome={faArrowLeft} isDisabled={false} titleButton='Previous' clickFunction={nextTick}></ButtonIcon>
          <ButtonIcon fontAwesome={faArrowRight} isDisabled={false} titleButton='Next' clickFunction={previousTick}></ButtonIcon>
        </div>
      </div>
      <div className="similar-cards">
        {similarCard.map((item, index) => {
          return (<Card key={item.isbn13} card={item} orderItem={firstCard + index}></Card>)
        })}
      </div>
    </section>
  );
}
