import './SearchResultPage.scss';
import { cards } from '../../types/CardsInterface';
import Title from '../../components/CommonComponents/Title/Title';
import Card from '../../components/CardsComponents/Card';

export default function SearchResultPage() {

  return (
    <>
      <Title titleClass='title title_black' children='Search result «smth»'></Title>
      <section className='cards-search-holder'>
        {/* {cards.map(item => {
          return <Card key={item.id} card={item} changeLike={changeLike} changeDislike={changeDislike} likeCounter={likes} dislikeCounter={dislikes} likeActive={likeActive} dislikeActive={dislikeActive}></Card>
        })} */}
      </section>
    </>
  );
}