import ExpenseItem from "./components/ExpenseItem";

function App() {

  const expense = [
    {
      'id' : 'e1',
      'title' : 'Coffe',
      'date' : new Date(2023, 3, 29),
      'amount' : 400
    },
    {
      'id' : 'e2',
      'title' : 'Milk',
      'date' : new Date(2023, 4, 10),
      'amount' : 100
    },
    {
      'id' : 'e3',
      'title' : 'Apple',
      'date' : new Date(2023, 9, 14),
      'amount' : 700
    },
    {
      'id' : 'e4',
      'title' : 'Car',
      'date' : new Date(2023, 10, 14),
      'amount' : 60
    }
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
      title={expense[0].title}
      date={expense[0].date.toISOString()}
      amount={expense[0].amount}
      ></ExpenseItem>

      <ExpenseItem
      title={expense[1].title}
      date={expense[1].date.toISOString()}
      amount={expense[1].amount}
      ></ExpenseItem>

      <ExpenseItem
      title={expense[2].title}
      date={expense[2].date.toISOString()}
      amount={expense[2].amount}
      ></ExpenseItem>

      <ExpenseItem
      title={expense[3].title}
      date={expense[3].date.toISOString()}
      amount={expense[3].amount}
      ></ExpenseItem>
    </div>
  );
}

export default App;
