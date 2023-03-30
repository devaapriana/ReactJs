import Expenses from "./components/Expenses";

function App() {

  const expenses = [
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
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
