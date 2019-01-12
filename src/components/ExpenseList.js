import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import setVisibleExpenses from '../selectors/expenses';

const ExpenseList = (props) => {
    return (
        <div>
            <p>Expense List</p>
            {props.expense.map((ex) => {
                return <ExpenseListItem key={ex.id} {...ex} />
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        expense: setVisibleExpenses(state.expense, state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseList);