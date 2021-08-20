import { useState } from 'react';
import Card from '../../UI/card/card.component';
import ExpenseFilter from '../expense-filter/expense-filter.component';
import ExpenseItem from '../expense-item/expense-item.component';

import './expenses.styles.css';

const Expenses = ({ expenses }) => {
    const [selectedYear, setSelectedYear] = useState('2019');
    const selectYearHandler = selectedYear => {
        setSelectedYear(selectedYear);
    }

    const filteredExpenses = expenses.filter(expense => {
        return expense.date.getFullYear().toString() === selectedYear
    });

    let expensesContent = <p>No Expenses Found! :(</p>;

    if(filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map(expense =>
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        )
    }

    return (
        <Card className='expenses'>
            <ExpenseFilter onSelectedYear={selectYearHandler} year={selectedYear} />
            {/* { filteredExpenses.length === 0 && <p>No Expenses Found! :(</p> }   When the first condition is approved then the statement beyond the && is shown to the browser
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
            } */}
            {expensesContent}
        </Card>
    );
}

export default Expenses;