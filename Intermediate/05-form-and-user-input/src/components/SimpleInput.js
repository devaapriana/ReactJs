import { useState } from "react";

const SimpleInput = (props) => {

  const [enteredName, setEnteredName] = useState('');
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);

  const changeEnteredNameHandler = event => {
    setEnteredName(event.target.value);
  } 

  const formSubmissionHandler = event => {
    event.preventDefault();

    if(enteredName.trim() === ''){
      setEnteredNameIsValid(false);
      return;
    }

    setEnteredNameIsValid(true);

    console.log(enteredName);

    setEnteredName('');
  }

  const formClasses = enteredNameIsValid ? 'form-control' : 'form-control invalid';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={formClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={changeEnteredNameHandler} value={enteredName}/>
      {!enteredNameIsValid && <p>Name is empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
