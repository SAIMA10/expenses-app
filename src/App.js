import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React, { useState } from "react";

const DUMMY_EXPENSES = [
  {
    id: 'itm-100',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2022, 7, 14),
  },

  {
    id: 'itm-101',
    title: 'TV',
    amount: 799.10,
    date: new Date(2022, 3, 30),
  },

  {
    id: 'itm-102',
    title: 'Car Insurance',
    amount: 399.50,
    date: new Date(2022, 1, 10),
  },

  {
    id: 'itm-103',
    title: 'Wooden Desk',
    amount: 200,
    date: new Date(2022, 7, 1),
  },
  
  {
    id: 'itm-104',
    title: 'A Book',
    amount: 12.99,
    date: new Date(2021, 6, 25),
  },

  
  {
    id: 'itm-105',
    title: 'Pack of pens',
    amount: 5.99,
    date: new Date(2021, 1, 10),
  },

  
  {
    id: 'itm-106',
    title: 'Medical Insurance',
    amount: 200,
    date: new Date(2020, 3, 1),
  },

  
  {
    id: 'itm-107',
    title: 'Smartphone',
    amount: 100,
    date: new Date(2020, 12, 1),
  },

  
  {
    id: 'itm-108',
    title: 'Watch',
    amount: 50,
    date: new Date(2019, 5, 14),
  },

];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler} />
      <Expenses items = {expenses}/>
    </div>
  );
};

export default App;
