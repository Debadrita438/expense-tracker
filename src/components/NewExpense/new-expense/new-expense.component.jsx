import { useState } from 'react';

import ExpenseForm from '../expense-form/expense-form.component';
import './new-expense.styles.css';

const NewExpense = ({ onAddExpense }) => {
    const [isToggle, setIsToggle] = useState(false);

    const saveExpenseDataHandler = newExpenseData => {
        const expenseData = {
            ...newExpenseData,
            id: Math.random().toString()
        }
        onAddExpense(expenseData);
    }

    const startEditing = () => {
        setIsToggle(true);
    }

    const stopEditing = () => {
        setIsToggle(false);
    }

    return (
        <div className='new-expense'>
            {
                isToggle ?
                <ExpenseForm onCancelEditing={stopEditing} onSaveExpenseData={saveExpenseDataHandler} />
                :
                <button onClick={startEditing}>Add New Expense</button>
            }
        </div>
    );
}

export default NewExpense;