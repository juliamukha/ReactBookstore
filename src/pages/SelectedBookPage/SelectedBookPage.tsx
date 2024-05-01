import './SelectedBookPage.scss';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { card } from '../../types/CardsInterface';
import { Link } from 'react-router-dom';
import Subscription from '../../components/Subscription/Subscription';
import SelectedCard from '../../components/SelectedCardsComponents/SelectedCard';
import { FacebookShareButton, TwitterShareButton } from "react-share";
import SimilarCard from '../../components/SelectedCardsComponents/SimilarCard/SimilarCard';




export default function SelectedBookPage() {
  const { item } = useParams();
  const book = card.find((card) => card.isbn13 === item);
  if (!book) {
    return <p>{`This page doesn't contain selected book`}</p>
  }

  return (
    <>
      <Link to="/" className="icon-link icon-back_link" title="Back to New releases books">
        <FontAwesomeIcon icon={faArrowLeftLong} />
      </Link>

      <SelectedCard book={book}></SelectedCard>

      <div className="share-icon">
        <FacebookShareButton url={`https://http://localhost:3000/post/${book.isbn13}`} className="icon-link Facebook__share-button">
          <FontAwesomeIcon icon={faFacebookF} /></FacebookShareButton>
        <TwitterShareButton url={`https://http://localhost:3000/post/${book.isbn13}`} className="icon-link Twitter__share-button">
          <FontAwesomeIcon icon={faTwitter} /></TwitterShareButton>
      </div>

      <Subscription></Subscription>
      <SimilarCard firstBook={book.isbn13}></SimilarCard>
    </>
  );
}