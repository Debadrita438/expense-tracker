import ExpenseItem from '../expense-item/expense-item.component';

import './expenses-list.styles.css';

const ExpensesList = ({ filteredExpenses }) => ( 
    <ul className='expenses-list'>
        {filteredExpenses.length === 0 && <h2 className='expenses-list__fallback'>No Expenses Found! :(</h2>}
        {
            filteredExpenses.length > 0 && filteredExpenses
            .map(expense =>
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            )
        }
    </ul>
);
 
export default ExpensesList;