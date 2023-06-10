import React, { useState } from 'react'

import ExpenseForm from './ExpenseForm'

export default function NewExpense(props) {

    const [hidden, setHidden] = useState(true);

    const handleShow = () => {
        setHidden(false);
    };
    const handleHide = () => {
        setHidden(true);
    }

    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
    };

    return (
        <div className='new-expense'>
            {hidden && (
                <button className='new-expense__actions' onClick={handleShow}>Add New Expense</button>
            )}
            {hidden === false && (
                <ExpenseForm 
                    onSaveExpenseData={onSaveExpenseDataHandler}
                    handleHide={handleHide}    
                />
            )}
        </div>
    )
}
