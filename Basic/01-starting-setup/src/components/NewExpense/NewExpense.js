import React, {useState} from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false);

    const onOpenEditing = () => {
        setIsEditing(true);
    }

    const onCloseEditing = () => {
        setIsEditing(false);
    }

    const saveExpenseHandler = (expenseData) => {
        const expense = {
            ...expenseData,
            id : Math.random().toString()
        }

        props.onAddExpense(expense);
    }

    return (
        <div className="new-expense">
            {!isEditing && <button onClick={onOpenEditing}>Add Expense</button>}
            {isEditing && <ExpenseForm onSaveExpense={saveExpenseHandler} onStopEditing={onCloseEditing} />}
        </div>
    )
}

export default NewExpense;