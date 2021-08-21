import Card from '../../UI/card/card.component';
import ExpenseDate from '../expense-date/expense-date.component';

import './expense-item.styles.css';

const ExpenseItem = ({ title, amount, date }) => (
    <li>
        <Card className='expense-item'>
            <ExpenseDate date={date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>₹{amount}</div>
            </div>
        </Card>
    </li>
);



export default ExpenseItem;