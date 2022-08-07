import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()            
        };
        // console.log(expenseData);
        props.onAddExpense(expenseData);
    };

    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    )
};

export default NewExpense;

/*
child to parent component communication was done by adding a function in the
parent component and then linking it to the child by executing the function
9that is the function call in the child componenet

to confirm if the linking is done, check the file where the data is coming
from in the console.log while executing and put a console.log command to display
the data.

... operator will extract all the data that is there, that is the key value
pairs and add it to the new id which we will generated

rn we linked the expenseForm.js file with the parent that is NewExpense.js file

for the linking we also need to pass "props" and then execute it by props.<functions name> 
that will then be linked to a function (saveExpenseDataHandler) that will get executed in the
parent component

we add props parameter to the child and use it to execute

*/