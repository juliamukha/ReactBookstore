import './AllBooksPage.scss';
import Title from '../../components/CommonComponents/Title/Title';
import Card from '../../components/CardsComponents/Card';
import Subscription from '../../components/Subscription/Subscription';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCards } from '../../redux/slice/cardStateSlice';


export default function AllBooksPage() {
  const dispatch = useDispatch<any>();
  useEffect(() => { dispatch(fetchCards()) }, []);
  const cards = useSelector((state: any) => state.cardState);

  return (
    <>
      <Title titleClass='title' children='New Releases Books'></Title>
      <section className='cards'>
        <div className='cards-holder'>
          {cards.status === "loading" ? <h2>Loading...</h2> : null}
          {cards.status === "rejected" ? <h2>{cards.status}</h2> : null}
          {cards.status === "resolved" && cards.cards.books.length > 0 ? cards.cards.books.map((item: any) => {
            return (<Card key={item.isbn13} card={item}></Card>)
          }) : null}
        </div>
      </section>
      <Subscription></Subscription>
    </>
  );
}