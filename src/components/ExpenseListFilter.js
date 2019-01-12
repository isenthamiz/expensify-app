import React from 'react';
import {connect} from 'react-redux';
import {setTextFilter, sortByDate, sortByAmount} from '../actions/filters';

const ExpenseListFilter = (props) => {
    return (
        <div>
            <input type="text" value={props.filters.text} onChange={(e)=> {
                props.dispatch(setTextFilter(e.target.value));
            }} />
            <select
                value={props.filters.sortBy}
                onChange={(e)=> {
                    if(e.target.value === 'Date') {
                        props.dispatch(sortByDate());
                    } else if (e.target.value === 'Amount') {
                        props.dispatch(sortByAmount());
                    }
                }}
            >
                <option value="Date">Date</option>
                <option value="Amount">Amount</option>
            </select>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListFilter);