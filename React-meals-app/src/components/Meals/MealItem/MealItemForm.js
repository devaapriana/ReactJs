import { useState, useRef } from 'react';
import Input from '../../UI/Input/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = props => {

    const [amountIsValid, setAmountIsValid] = useState(true);
    const inputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        const amountValue = inputRef.current.value;
        const amountValueNumber = +amountValue;
        if(amountValue.trim().length === 0 || amountValueNumber < 1 || amountValueNumber > 5){
            setAmountIsValid(false);
            return;
        }

        props.onAddToCart(amountValueNumber);
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input ref={inputRef} label="Amount" input={{
                id: 'amount_'+ props.id,
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1'
            }} />
            <button>+ Add</button>
            {!amountIsValid && <p>Please input amount between [1-5]</p>}
        </form>
    )
}

export default MealItemForm;