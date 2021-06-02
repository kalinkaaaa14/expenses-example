import './NewExpense.css';
import React from "react";

function AddExpenseButton(props){
    return (
    <div className='new-expense'>
        <button onClick={props.onShowAddExpense}>Add Expense</button>
    </div>
    )
}

export default AddExpenseButton;