import { useState } from "react";

const SimpleInput = (props) => {

  const [enteredName, setEnteredName] = useState('');
  const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const inputNameIsInvalid = !enteredNameIsValid && enteredNameIsTouched;
  
  let formIsValid = false;

  if(enteredNameIsValid){
    formIsValid = true;
  }

  const changeEnteredNameHandler = event => {
    setEnteredName(event.target.value);
  } 

  const inputNameBlurHandler = event => {
    event.preventDefault();

    setEnteredNameIsTouched(true);

    if(enteredName.trim() === ''){
      return;
    }
  }

  const formSubmissionHandler = event => {
    event.preventDefault();

    setEnteredNameIsTouched(true);

    if(!enteredNameIsValid){
      return;
    }

    console.log(enteredName);

    setEnteredName('');
    setEnteredNameIsTouched(false);
  }

  
  const formClasses = inputNameIsInvalid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={formClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={changeEnteredNameHandler} onBlur={inputNameBlurHandler} value={enteredName}/>
      {inputNameIsInvalid && <p className="error-text">Name is empty</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
