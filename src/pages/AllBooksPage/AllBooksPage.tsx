import './AllBooksPage.scss';
import { cards } from '../../types/CardsInterface';
import Title from '../../components/CommonComponents/Title/Title';
import Card from '../../components/CardsComponents/Card';
import Subscription from '../../components/Subscription/Subscription';
import { useDispatch } from 'react-redux';
import fetchCards from '../../redux/slice/cardStateSlice';


export default function AllBooksPage() {
  const dispatch = useDispatch<any>();


  return (
    <>
      <Title titleClass='title' children='New Releases Books'></Title>
      <section className='cards'>
        <div className='cards-holder'>
          {cards.map(item => {
            return (<Card key={item.isbn13} card={item}></Card>)
          })}
        </div>
      </section>
      <Subscription></Subscription>
    </>
  );
}