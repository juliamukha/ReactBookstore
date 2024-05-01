import Button from '../../CommonComponents/Button/Button';
import Input from '../../CommonComponents/Input/Input';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './FormSignIn.scss';



export default function FormSignIn({ sendAuthorizationState }: any) {
  const [logInData, setLogInData] = useState({
    userEmail: "",
    password: ""
  });

  function changeLogIn(e: any) {
    setLogInData({ ...logInData, [e.target.name]: e.target.value });
  };

  function submitLogIn(e: any) {
    e.preventDefault();
    sendAuthorizationState();
    console.log(logInData);
  }

  return (
    <form className='form form_signIn' onSubmit={submitLogIn}>
      <Input id='userEmail' inputType='email' placeholder='Your email' isError={false} changeFunction={changeLogIn}>Email</Input>
      <Input id='password' inputType='password' placeholder='Ypur password' isError={false} changeFunction={changeLogIn}>Password</Input>
      <Link to="/" className='text-link'>Forget password?</Link>
      <Button isDisabled={false} typeButton="button_primary form_signIn__button" action='submit'>Sign In</Button>
      <p className="text-info">Don’t have an account? <Link to="/signUp">Sign Up</Link></p>
    </form>
  );
}
