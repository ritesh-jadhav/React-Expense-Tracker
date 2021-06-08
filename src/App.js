import React,{ useState} from 'react';

import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";

const App = () => {
 

  const DUMMY_EXPENSES = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 43.76,
      date: new Date(2021, 1, 28),
    },
    {
      id: "e2",
      title: "Car Insurance",
      amount: 243.61,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e1",
      title: "New Desk",
      amount: 143.23,
      date: new Date(2021, 3, 8),
    },
  ];
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
};
export default App;
