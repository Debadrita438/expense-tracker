import ExpenseForm from '../expense-form/expense-form.component';
import './new-expense.styles.css';

const NewExpense = ({ onAddExpense }) => {
    const saveExpenseDataHandler = newExpenseData => {
        const expenseData = {
            ...newExpenseData,
            id: Math.random().toString()
        }
        onAddExpense(expenseData);
    }
    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    );
}

export default NewExpense;