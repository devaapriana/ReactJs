import React, {useState} from 'react';

import './ExpenseForm.css';
const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const changeTitleHandler = (event) => {
        setEnteredTitle(event.target.value);
    }

    const changeAmountHandler = (event) => {
        setEnteredAmount(event.target.value);
    }

    const changeDateHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        let expenseData = {
            title : enteredTitle,
            amount : enteredAmount,
            date : new Date(enteredDate)
        }

        props.onSaveExpense(expenseData);

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }
  

    return (
        <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type='text' onChange={changeTitleHandler} value={enteredTitle} />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type='number' onChange={changeAmountHandler} value={enteredAmount} min='0.01' step='0.01' />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type='date' onChange={changeDateHandler} value={enteredDate} min='2020-01-01' step='2023-12-31' />
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </div>
        </form>
    )
}

export default ExpenseForm;