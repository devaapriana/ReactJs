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
            <ExpenseItem
            title={props.expenses[0].title}
            date={props.expenses[0].date}
            amount={props.expenses[0].amount}
            />
            <ExpenseItem
            title={props.expenses[1].title}
            date={props.expenses[1].date}
            amount={props.expenses[1].amount}
            />
            <ExpenseItem
            title={props.expenses[2].title}
            date={props.expenses[2].date}
            amount={props.expenses[2].amount}
            />
            <ExpenseItem
            title={props.expenses[3].title}
            date={props.expenses[3].date}
            amount={props.expenses[3].amount}
            />
        </Card>
        </div>
    );
}

export default Expenses;