import { useState } from 'react'
import Expenses from './components/Core/Expenses/Expenses';
import NewExpense from './components/Core/NewExpense/NewExpense'

function App() {
  const DummyData = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  const [expenses, setExpenses] = useState(DummyData)
  const AddNewExpense = (newExpense) => {
    setExpenses( prevState => [newExpense, ...prevState])
  }
  return (
    <div className="App">
      <h1 className='app-title'>Expencify App</h1>
      <NewExpense AddNewExpense={AddNewExpense} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
