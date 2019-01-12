import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css'

const now = moment();

console.log(now.format('MMM Do, YYYY'))

export default class ExpenseForm extends React.Component {

constructor(props) {

    super(props);

    this.state = {
        description: props.expense ? props.expense.description : '',
        amount: props.expense ? props.expense.amount : '',
        note: props.expense ? props.expense.note : '',
        createdAt: moment(),
        calenderFocused: false,
        error: undefined
    };

    this.onDescriptionChange = this.onDescriptionChange.bind(this);
    this.onNoteChange = this.onNoteChange.bind(this);
    this.onAmountChange = this.onAmountChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
}


onDescriptionChange(e) {
    const description = e.target.value;
    this.setState(() => {
        return {description}
    });

}

onAmountChange(e) {
    const amount = e.target.value;
    if(amount.match(/^\d*(\.\d{0,2})?$/)) {
        this.setState(() => {
            return {amount}
        })
    }
}

onDateChange(createdAt) {
    this.setState(()=> {
        return {
            createdAt: createdAt
        }
    })
}

onFocusChange( {focused}) {
    return {
        calenderFocused: focused
    }
}

onNoteChange(e) {
    const note = e.target.value;
    this.setState(() => ({note}));
}

formSubmit(e) {
    e.preventDefault();
    if(!this.state.description || !this.state.amount) {
        this.setState(() => ({ error: 'Please provide description and amount !'}));
    } else {
        this.setState(()=> {
            return {
                error: ''
            }
        })
        this.props.onSubmit({
            description: this.state.description,
            amount: this.state.amount,
            createdAt: this.state.createdAt.valueOf(),
            note: this.state.note
        })
    }
}

render() {
    return (
        <div>
            <form onSubmit={this.formSubmit}>
                <p>{this.state.error}</p>
                <input type="text" placeholder="Description" autoFocus value={this.state.description} onChange={this.onDescriptionChange} />
                <input type="text" placeholder="Amount" value={this.state.amount} onChange={this.onAmountChange} />
                <textarea placeholder="Add a note for your expense (Optional)" value={this.state.note} onChange={this.onNoteChange}></textarea>
                <SingleDatePicker
                    date = {this.state.createdAt}
                    onDateChange = {this.onDateChange}
                    focused = {this.state.calenderFocused}
                    onFocusChange ={this.onFocusChange}
                >
                </SingleDatePicker>
                <br/>
                <button>Add Expense</button>
            </form>
        </div>
    )
}
}