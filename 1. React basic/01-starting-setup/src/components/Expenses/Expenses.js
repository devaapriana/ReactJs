import {useState} from 'react';
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
function Expenses(props)
{
    const [selectedYear, setSelectedYear] = useState('2020');
    const changeDropdownHandler = (selectedYear) => {
        console.log(selectedYear)
        setSelectedYear(selectedYear);
    }

    const filteredExpenses = props.expenses.filter( expense => {
        return expense.date.getFullYear().toString() === selectedYear;
    });

    let expensesElement = <p>No expenses found</p>
    
    if(filteredExpenses.length > 0){
        expensesElement = filteredExpenses.map( (expense) => <ExpenseItem key={expense.id} title={expense.title} date={expense.date} amount={expense.amount}></ExpenseItem>)
    }

    return (
        <div>
        <Card className="expenses">
            <ExpenseFilter onChangeDropdownHandler={changeDropdownHandler} selectedYear={selectedYear}/>
            
            {expensesElement}
            
        </Card>
        </div>
    );
}

export default Expenses;