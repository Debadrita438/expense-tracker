import { useState } from 'react';

import Card from '../../UI/card/card.component';
import ExpenseDate from '../expense-date/expense-date.component';

import './expense-item.styles.css';

const ExpenseItem = ({ title, amount, date }) => {
    const [name, setName] = useState(title);
    const handleClick = () => {
        setName('Updated');
    }

    return (
        <Card className='expense-item'>
            <ExpenseDate date={date} />
            <div className='expense-item__description'>
                <h2>{name}</h2>
                <div className='expense-item__price'>₹{amount}</div>
            </div>
            <button onClick={handleClick}>Change Title</button>
        </Card>
    );
}


export default ExpenseItem;