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

    return (
        <div>
        <Card className="expenses">
            <ExpenseFilter onChangeDropdownHandler={changeDropdownHandler} selectedYear={selectedYear}/>
            
            {props.expenses.map( (expense) => <ExpenseItem key={expense.id} title={expense.title} date={expense.date} amount={expense.amount}></ExpenseItem>)}
            
        </Card>
        </div>
    );
}

export default Expenses;