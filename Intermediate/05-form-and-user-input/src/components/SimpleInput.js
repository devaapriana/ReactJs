import { useState } from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput
  } = useInput(value => value.trim() !== '');

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput
  } = useInput(value => value.includes('@'));
  
  let formIsValid = false;

  if(enteredNameIsValid && enteredEmailIsValid ){
    formIsValid = true;
  }

  

  const formSubmissionHandler = event => {
    event.preventDefault();


    if(!enteredNameIsValid && !enteredEmailIsValid){
      return;
    }


    resetNameInput();
    resetEmailInput();
  }

  
  const nameInputIsValid = nameInputHasError ? 'form-control invalid' : 'form-control';
  const emailInputIsValid = emailInputHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputIsValid}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameChangeHandler} onBlur={nameBlurHandler} value={enteredName}/>
      {nameInputHasError && <p className="error-text">Name is empty</p>}
      </div>
      <div className={emailInputIsValid}>
        <label htmlFor='email'>Your Email</label>
        <input type='email' id='email' onChange={emailChangeHandler} onBlur={emailBlurHandler} value={enteredEmail}/>
      {emailInputHasError && <p className="error-text">Value must be contain @</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
