import React, { useState, useEffect, useReducer, useContext } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/auth-context';
import Input from '../UI/Input/Input';

const emailReducer = (state, action) => {
  if(action.type === 'USER_INPUT'){
    return {value: action.val, isValid: action.val.includes('@')};
  }

  if(action.type == 'INPUT_BLUR'){
    return {value: state.value, isValid: state.value.includes('@')};
  }
  return {val : '', isValid : false}
}

const passwordReducer = (state, action) => {
  if(action.type === 'USER_INPUT'){
    return {value: action.val, isValid: action.val.trim().length > 6};
  }

  if(action.type == 'INPUT_BLUR'){
    return {value: state.value, isValid: state.value.trim().length > 6};
  }
  return {val : '', isValid : false}
}

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const authCtx = useContext(AuthContext);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: null
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: '',
    isValid: null
  });
  

  const {isValid: emailValid} = emailState;
  const {isValid: passwordValid} = passwordState;

  useEffect(()=>{

    const identifier = setTimeout(()=>{
      console.log('Check Validity')
      setFormIsValid(
        emailValid && passwordValid
      );
    },500);

    return ()=>{
      console.log('Clear time');
      clearTimeout(identifier);
    }

  }, [emailValid, passwordValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({type: 'USER_INPUT', val: event.target.value});

  //   setFormIsValid(
  //     emailState.isValid && emailState.isValid
  // );
  };
  
  const validateEmailHandler = () => {
    dispatchEmail({type: 'INPUT_BLUR'});
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({type: 'USER_INPUT', val: event.target.value});
    // setEnteredPassword(event.target.value);
  //   setFormIsValid(
  //     emailState.isValid && emailState.isValid
  // );
  };

  
  const validatePasswordHandler = () => {
    dispatchPassword({type: 'INPUT_BLUR'});
    // setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    authCtx.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input type={'email'} label="E-Mail" value={emailState.value} onChange={emailChangeHandler} onBlur={validateEmailHandler} isValid={emailValid}/>
        <Input type={'password'} label="Password" value={passwordState.value} onChange={passwordChangeHandler} onBlur={validatePasswordHandler} isValid={passwordValid}/>
        
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
