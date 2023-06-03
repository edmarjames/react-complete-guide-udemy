import React, { useState } from 'react'

import ExpenseItem from './ExpenseItem'
import ExpensesFilter from './ExpensesFilter'
import Card from '../UI/Card'

export default function Expenses({items}) {

    const [filterYear, setFilterYear] = useState('');

    const getFilterYear = (year) => {
        setFilterYear(year);
        console.log(year);
    };

    const filteredItems = items.filter(expense => {
        return expense.date.getFullYear().toString() === filterYear;
    })

    let expensesContent = <p>No results found.</p>

    if (filteredItems.length > 0) {
        expensesContent = filteredItems.map(expense => (
            <ExpenseItem 
                key={expense.id}
                title={expense.title} 
                amount={expense.amount} 
                date={expense.date}    
            />
        ));
    };

    return (
        <>
            <Card className='expenses'>
                <ExpensesFilter filterYear={filterYear} getFilterYear={getFilterYear}/>
                {expensesContent}
            </Card>
        </>
    )
}
