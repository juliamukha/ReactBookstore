import './SelectedBookPage.scss';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { ICards } from '../../types/CardsInterface';
import { Link } from 'react-router-dom';
import Subscription from '../../components/Subscription/Subscription';
import SelectedCard from '../../components/SelectedCardsComponents/SelectedCard';
import { FacebookShareButton, TwitterShareButton } from "react-share";
import SimilarCard from '../../components/SelectedCardsComponents/SimilarCard/SimilarCard';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCards, fetchSelectedCard } from '../../redux/slice/cardStateSlice';




export default function SelectedBookPage() {
  const { item } = useParams();
  const dispatch = useDispatch<any>();
  useEffect(() => { dispatch(fetchSelectedCard(item!)) }, []);
  useEffect(() => { dispatch(fetchCards()) }, []);
  const book = useSelector((state: any) => state.cardState);

  const getRandomElements = function (): ICards[] {
    let result = [];
    if (book.status === "resolved") {
      let first = book.cards.books.findIndex((element: ICards) => element.isbn13 == item);
      let index = first;
      if (book.cards.books.length >= 7 && book.cards.books.length - first >= 6) {
        while (result.length < 6) {
          index++;
          result.push(book.cards.books[index]);
        }
      }
    }
    return result;
  };
  const similarCard = getRandomElements();


  if (!book) {
    return <p>{`This page doesn't contain selected book`}</p>
  }

  return (
    <>
      <Link to="/" className="icon-link icon-back_link" title="Back to New releases books">
        <FontAwesomeIcon icon={faArrowLeftLong} />
      </Link>
      {book.statusBook === "loading" ? <h2>Loading...</h2> : null}
      {book.statusBook === "rejected" ? <h2>{book.statusBook}</h2> : null}
      {book.statusBook === "resolved" && book.selectedCard ?
        <>
          <SelectedCard book={book.selectedCard}></SelectedCard>
          <div className="share-icon">
            <FacebookShareButton url={`https://http://localhost:3000/post/${book.isbn13}`} className="icon-link Facebook__share-button">
              <FontAwesomeIcon icon={faFacebookF} /></FacebookShareButton>
            <TwitterShareButton url={`https://http://localhost:3000/post/${book.isbn13}`} className="icon-link Twitter__share-button">
              <FontAwesomeIcon icon={faTwitter} /></TwitterShareButton>
          </div>

          <Subscription></Subscription>
          <SimilarCard similarCard={similarCard}></SimilarCard>
        </>
        : null}
    </>
  );
}