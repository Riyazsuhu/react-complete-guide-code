import React, { useState, useEffect, useReducer, useContext, useRef } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/authContext'
import Input from '../UI/Input/Input'

const emailReducer = (state, action) => {
  switch (action.type) {
    case "USER_INPUT":
      return { value: action.val, isValid: action.val.includes('@') }
    case "INPUT_BLUR":
      return { value: state.value, isValid: state.value.includes('@') }
    default:
      return { value: '', isValid: false }
  }
}
const passwordReducer = (state, action) => {
  switch (action.type) {
    case "USER_INPUT":
      return { value: action.val, isValid: action.val.trim().length > 6 }
    case "INPUT_BLUR":
      return { value: state.value, isValid: state.value.trim().length > 6 }
    default:
      return { value: '', isValid: false }
  }
}
const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  const [emailState, emailDispatch] = useReducer(emailReducer, { value: '', isValid: null })
  const [passwordState, passwordDispatch] = useReducer(passwordReducer, { value: '', isValid: null })

  const [{ isValid: emailIsValid }, { isValid: passwordIsValid }] = [emailState, passwordState]

  const authCntx = useContext(AuthContext)

  const [emailRef, passwordRef] = [useRef(), useRef()]
  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(
        emailIsValid && passwordIsValid
      );
    }, 500)
    return () => {
      clearTimeout(identifier)
    }
  }, [emailIsValid, passwordIsValid])
  
  useEffect(() => emailRef.current.focus(), [])

  const emailChangeHandler = (event) => {
    emailDispatch({ type: 'USER_INPUT', val: event.target.value });
  };
  const passwordChangeHandler = (event) => {
    passwordDispatch({ type: 'USER_INPUT', val: event.target.value });
  };

  const validateEmailHandler = () => {
    emailDispatch({ type: 'INPUT_BLUR' });
  };

  const validatePasswordHandler = () => {
    passwordDispatch({ type: 'INPUT_BLUR' });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if(formIsValid){
    authCntx.onLogin(emailState.value, passwordState.value);

    }else if(!emailIsValid){
      emailRef.current.focus()
    }else{
      passwordRef.current.focus()
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailRef}
          key='email'
          label='Email'
          type='email'
          id='email'
          isValid={emailIsValid}
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          ref={passwordRef}
          key='password'
          label='Password'
          type='password'
          id='password'
          isValid={passwordIsValid}
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
