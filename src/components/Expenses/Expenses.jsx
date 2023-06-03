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

    return (
        <>
            <Card className='expenses'>
                <ExpensesFilter filterYear={filterYear} getFilterYear={getFilterYear}/>
                {filteredItems.map(expense => (
                    <ExpenseItem 
                        key={expense.id}
                        title={expense.title} 
                        amount={expense.amount} 
                        date={expense.date}    
                    />
                ))}
            </Card>
        </>
    )
}
