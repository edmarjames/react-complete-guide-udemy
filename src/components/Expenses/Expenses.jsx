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

    return (
        <>
            <Card className='expenses'>
                <ExpensesFilter filterYear={filterYear} getFilterYear={getFilterYear}/>
                <ExpenseItem 
                    title={items[0].title} 
                    amount={items[0].amount} 
                    date={items[0].date}    
                />
                <ExpenseItem
                    title={items[1].title} 
                    amount={items[1].amount} 
                    date={items[1].date}
                />
                <ExpenseItem
                    title={items[2].title} 
                    amount={items[2].amount} 
                    date={items[2].date}
                />
                <ExpenseItem
                    title={items[3].title} 
                    amount={items[3].amount} 
                    date={items[3].date}
                />
            </Card>
        </>
    )
}
