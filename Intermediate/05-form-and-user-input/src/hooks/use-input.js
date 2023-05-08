import { useState } from "react";
const useInput = (validation) => {

  const [enteredValue, setEnteredValue] = useState('');
  const [inputIsTouched, setInputIsTouched] = useState(false);

  const isValid = validation(enteredValue);
  const hasError = !isValid && inputIsTouched;

  const changeEnteredHandler = event => {
    setEnteredValue(event.target.value);
  } 

  const inputBlurHandler = event => {
    event.preventDefault();

    setInputIsTouched(true);

    if(enteredValue.trim() === ''){
      return;
    }
  }

  const reset = () => {
    setEnteredValue('');
    setInputIsTouched(false);
  }

  return {
    value: enteredValue,
    isValid: isValid,
    hasError: hasError,
    valueChangeHandler: changeEnteredHandler,
    inputBlurHandler: inputBlurHandler,
    reset: reset
  }

}

export default useInput;