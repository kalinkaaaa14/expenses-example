import React, { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2021');
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredExp = props.items.filter(exp =>{
        return exp.date.getFullYear().toString() === filteredYear;
    });


    return (
        <div className='expenses'>
                <ExpensesFilter
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler}
                />
                <ExpensesChart expenses={filteredExp}/>
                <ExpensesList filteredExpressions={filteredExp}/>

            {/*{filteredExp.length ===0 &&(<p>No expenses found</p>) }*/}
            {/*{filteredExp.length >0 && (*/}
            {/*    filteredExp.map((expense) => (*/}
            {/*        <ExpenseItem*/}
            {/*            key={expense.id}*/}
            {/*            title={expense.title}*/}
            {/*            amount={expense.amount}*/}
            {/*            date={expense.date}*/}
            {/*        />*/}
            {/*    ))*/}
            {/*)}*/}

            {/*{ filteredExp.length ===0 ? (<p>No expenses found</p>)*/}
            {/*    :  filteredExp.map((expense) => (*/}
            {/*        <ExpenseItem*/}
            {/*            key={expense.id}*/}
            {/*            title={expense.title}*/}
            {/*            amount={expense.amount}*/}
            {/*            date={expense.date}*/}
            {/*        />*/}
            {/*))}*/}

        </div>
    );
};

export default Expenses;