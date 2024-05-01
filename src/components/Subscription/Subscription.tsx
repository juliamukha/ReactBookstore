import Input from '../CommonComponents/Input/Input';
import Button from '../CommonComponents/Button/Button';
import './Subscription.scss';
import { useState } from 'react';




export default function Subscription() {
  const [subscriptionData, setSubscriptionData] = useState("");

  function changeSubscriptionData(e: any) {
    setSubscriptionData(e.target.value);
  };


  return (
    <div className="subscription">
      <p className="subscription__title">subscribe to newsletter</p>
      <p className="subscription__text">Be the first to know about new IT books, upcoming releases, exclusive offers and more.</p>
      <div className='subscription__form'>
        <Input placeholder='Your email' inputType='email' id='subscription-input' isError={false} classText='subscription__input' changeFunction={changeSubscriptionData}></Input>
        <Button isDisabled={false} typeButton='subscription-button'>subscribe</Button>
      </div>
    </div>
  );
}