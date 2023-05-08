import { useState } from "react";

const SimpleInput = (props) => {

  const [enteredName, setEnteredName] = useState('');
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);

  const changeEnteredNameHandler = event => {
    setEnteredName(event.target.value);
  } 

  const inputNameBlurHandler = event => {
    event.preventDefault();

    setEnteredNameIsTouched(true);

    if(enteredName.trim() === ''){
      setEnteredNameIsValid(false);
      return;
    }
  }

  const formSubmissionHandler = event => {
    event.preventDefault();

    setEnteredNameIsTouched(true);

    if(enteredName.trim() === ''){
      setEnteredNameIsValid(false);
      return;
    }

    setEnteredNameIsValid(true);

    console.log(enteredName);

    setEnteredName('');
  }

  const inputNameIsInvalid = !enteredNameIsValid && enteredNameIsTouched;
  const formClasses = inputNameIsInvalid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={formClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={changeEnteredNameHandler} onBlur={inputNameBlurHandler} value={enteredName}/>
      {inputNameIsInvalid && <p className="error-text">Name is empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
