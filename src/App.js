import React, { useState } from 'react';
import AddExpenseButton from "./components/AddExpenseButton";
import NewExpense from "./components/NewExpense";
import Expenses from "./components/Expenses";
const DUMMY_EXPENSES = [
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

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const [hideBlock, setHideBlock] = useState(false);
  const addExpenseHandler = (expense) => {
    setHideBlock(true);
    setExpenses((prevExpenses) => {
      return [expense,...prevExpenses];
    });
  };
  const showAddExpenseHandler = () =>{
    setHideBlock(false);
  }
  const hideAddExpenseHandler = () =>{
    setHideBlock(true);
  }

  let upperBlock =  <NewExpense onCancelAddExpense={ hideAddExpenseHandler} onAddExpense={addExpenseHandler} />;
  if(hideBlock){
    upperBlock = <AddExpenseButton onShowAddExpense={showAddExpenseHandler}/>
  }
  return (
      <div>
        {upperBlock}
        <Expenses items={expenses} />
      </div>
  );
};

export default App;