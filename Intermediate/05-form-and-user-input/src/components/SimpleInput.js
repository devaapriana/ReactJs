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
  
  let formIsValid = false;

  if(enteredNameIsValid){
    formIsValid = true;
  }

  

  const formSubmissionHandler = event => {
    event.preventDefault();


    if(!enteredNameIsValid){
      return;
    }

    console.log(enteredName);

    resetNameInput();
  }

  
  const nameInputIsValid = nameInputHasError ? 'form-control invalid' : 'form-control';
  // const emailInputIsValid = emailInput ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputIsValid}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameChangeHandler} onBlur={nameBlurHandler} value={enteredName}/>
      {nameInputHasError && <p className="error-text">Name is empty</p>}
      </div>
      {/* <div className={nameInputIsValid}>
        <label htmlFor='email'>Your Email</label>
        <input type='email' id='email' onChange={changeEnteredNameHandler} onBlur={inputNameBlurHandler} value={enteredName}/>
      {nameInputHasError && <p className="error-text">Name is empty</p>}
      </div> */}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
