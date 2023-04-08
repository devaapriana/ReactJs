import {useState} from 'react';
import ExpenseList from './ExpenseList';
import './Expenses.css';
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseChart from './ExpenseChart';
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

    

    return (
        <li>
        <Card className="expenses">
            <ExpenseFilter onChangeDropdownHandler={changeDropdownHandler} selectedYear={selectedYear}/>
            <ExpenseChart expenses={filteredExpenses}/>
            <ExpenseList expenses={filteredExpenses} />
            
        </Card>
        </li>
    );
}

export default Expenses;