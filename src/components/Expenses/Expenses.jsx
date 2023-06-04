import React, { useState } from 'react'

import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'
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

    return (
        <>
            <Card className='expenses'>
                <ExpensesFilter 
                    filterYear={filterYear} 
                    getFilterYear={getFilterYear}
                />
                <ExpensesList items={filteredItems}/>
            </Card>
        </>
    )
}
