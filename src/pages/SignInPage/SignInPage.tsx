import './SignInPage.scss';
import { useState } from 'react';
import Title from '../../components/CommonComponents/Title/Title';
import BreadCrumbs from '../../components/CommonComponents/BreadCrumbs/BreadCrumbs';
import FormSignIn from '../../components/FormComponents/FormSignIn/FormSignIn';


export default function SignInPage() {
  const [isAuthorized, setAuthorizationState] = useState(false);

  function checkAuthorization() {
    setAuthorizationState(!isAuthorized);
  }

  return (
    <>
      <BreadCrumbs breadcrumbsClass="breadcrumbs__item" children='Back to home' url='/signIn'></BreadCrumbs>
      <Title titleClass='title' children={!isAuthorized ? 'Sign In' : 'Success'}></Title>
      <FormSignIn sendAuthorizationState={checkAuthorization}></FormSignIn>
    </>
  );
}