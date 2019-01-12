import React from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import {removeExpense} from '../actions/expenses';

const ExpenseListItem = ({id, description, note, amount, createdAt, dispatch}) => {
    return (
        <div>
            <p>
                <Link
                    to={`/edit/${id}`}
                >
                     ID : {id} <br />
                </Link>
                Description : {description} <br />
                Note: {note} <br />
                Amount: {amount} <br />
                CreatedAt: {createdAt}
            </p>
            <button onClick={()=> {
                dispatch(removeExpense({id}));
            }}>Remove</button>
        </div>
    )
}

export default connect()(ExpenseListItem);