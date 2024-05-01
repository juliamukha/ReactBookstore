import Button from '../../CommonComponents/Button/Button';
import Input from '../../CommonComponents/Input/Input';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './FormSignUp.scss';



export default function FormSignUp({ sendAuthorizationState }: any) {
  const [logUpData, setLogUpData] = useState({
    userName: "",
    userEmail: "",
    password: "",
    passwordRepeat: ""
  });

  function changeLogUp(e: any) {
    setLogUpData({ ...logUpData, [e.target.name]: e.target.value });
  };


  return (
    <div className="form-holder">
      <form className='form form-signUp'>
        <Input id='userName' inputType='text' placeholder='Your name' isError={false} changeFunction={changeLogUp}>Name</Input>
        <Input id='userEmail' inputType='email' placeholder='Your email' isError={false} changeFunction={changeLogUp}>Email</Input>
        <Input id='password' inputType='password' placeholder='Ypur password' isError={false} changeFunction={changeLogUp}>Password</Input>
        <Input id='passwordRepeat' inputType='password' placeholder='Confirm password' isError={false} changeFunction={changeLogUp}>Confirm password</Input>
        <Button isDisabled={false} typeButton="button_primary form-signUp__button" action='submit' clickFunction={() => sendAuthorizationState()}>Sign Up</Button>
        <p className='form-signUp__text text-info'>Already have an account? <Link className='link' to="/signIn">Sign In</Link></p>
      </form>
    </div>
  );
}
