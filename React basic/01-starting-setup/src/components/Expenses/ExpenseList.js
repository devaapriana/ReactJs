import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';

const ExpenseList = props => {
    
    
    if(props.expenses.length == 0){
        return <h2 className='expenses-list__fallback'>No expenses found</h2>
    }
    
    return <ul className='expenses-list'>
    { props.expenses.map( (expense) => <ExpenseItem key={expense.id} title={expense.title} date={expense.date} amount={expense.amount}></ExpenseItem>)}
    </ul>
}

export default ExpenseList;