import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import { useState } from 'react';

const ExpenseItem = (props) => {
    // const expenseDate = new Date(2022, 7, 14);
    // const expenseTitle = 'Car Insurance';
    // const expenseAmount = 399.50;
    // const [title, setTitle] = useState(props.title);

    // const clickHandler = () => {
    //     setTitle('Updated!')
    //     console.log(title); 
    // }

    return (
        <li>
        <Card className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2> {props.title} </h2>
                <div className='expense-item__price'> ${props.amount} </div>
            </div>
            {/* <button onClick={clickHandler}> Change title </button> */}
        </Card>
        </li>
    );
};
 
export default ExpenseItem; 