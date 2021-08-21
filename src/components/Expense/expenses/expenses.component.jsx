import { useState } from 'react';

import Card from '../../UI/card/card.component';
import ExpenseFilter from '../expense-filter/expense-filter.component';
import ExpensesChart from '../expenses-chart/expenses-chart.component';
import ExpensesList from '../expenses-list/expenses-list.component';

import './expenses.styles.css';

const Expenses = ({ expenses }) => {
    const [selectedYear, setSelectedYear] = useState('2019');
    const selectYearHandler = selectedYear => {
        setSelectedYear(selectedYear);
    }

    const filteredExpenses = expenses.filter(expense => {
        return expense.date.getFullYear().toString() === selectedYear
    });

    return (
        <Card className='expenses'>
            <ExpenseFilter onSelectedYear={selectYearHandler} year={selectedYear} />
            <ExpensesChart filteredExpenses={filteredExpenses} />
            <ExpensesList filteredExpenses={filteredExpenses} />
        </Card>
    );
}

export default Expenses;