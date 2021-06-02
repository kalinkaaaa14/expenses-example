import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'
import React from "react";
function ExpensesList(props){

    if(props.filteredExpressions.length===0){
        return <h2 className="expenses-list__fallback">No expenses found</h2>;
    }
    return <ul className="expenses-list">
    {      props.filteredExpressions.map((expense) => (
        <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
        />
    ))}
</ul>
}

export default ExpensesList;
