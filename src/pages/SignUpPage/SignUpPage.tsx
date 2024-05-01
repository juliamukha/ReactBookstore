import './SignUpPage.scss';
import Title from '../../components/CommonComponents/Title/Title';
import BreadCrumbs from '../../components/CommonComponents/BreadCrumbs/BreadCrumbs';
import FormSignUp from '../../components/FormComponents/FormSignUp/FormSignUp';
import { useState } from 'react';


export default function SignUpPage() {
  const [isAuthorized, setAuthorizationState] = useState(false);

  function checkAuthorization() {
    setAuthorizationState(!isAuthorized);
  }

  return (
    <>
      <BreadCrumbs breadcrumbsClass="breadcrumbs__item" children='Back to home' url='/blog'></BreadCrumbs>
      <Title titleClass='title' children={!isAuthorized ? 'Sign Up' : 'Registration Confirmation'}></Title>
      <FormSignUp sendAuthorizationState={checkAuthorization}></FormSignUp>
    </>
  );
}


