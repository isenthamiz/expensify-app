import {createStore, combineReducers} from 'redux';
import uuid from 'uuid'

const expenseDefaultState = [];

const addExpense = ({description='',note='',amount=0,createdAt=0}={}) => {
    return {
        type: 'ADD_EXPENSE',
        expense: {
            id: uuid(),
            description,
            note,
            amount,
            createdAt
        }
    }
}

const editExpense = ( id, updates ) => {
    return {
        type: 'EDIT_EXPENSE',
        id,
        updates
    }
}

const removeExpense = ({id}={}) => {
    return {
        type: 'REMOVE_EXPENSE',
        expense: {
            id
        }
    }
}

const expenseReducer = (state = expenseDefaultState, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense]
        case 'REMOVE_EXPENSE':
            return state.filter( exp => exp.id !== action.expense.id )
        case 'EDIT_EXPENSE':
            return state.map( expense => {
                if(expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense
                }
            })
        default:
            return state;
    }
}

const filtersDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const setTextFilter = (text = '') => {
    return {
        type: 'SET_TEXT_FILTER',
        text
    }
}

const sortByDate = () => {
    return {
        type: 'SORT_BY_DATE'
    }
}

const sortByAmount = () => {
    return {
        type: 'SORT_BY_AMOUNT'
    }
}

const setStartDate = (startDate = 0) => {
    return {
        type: 'SET_START_DATE',
        startDate
    }
}

const setEndDate = (endDate = 0) => {
    return {
        type: 'SET_END_DATE',
        endDate
    }
}

const filtersReducer = (state=filtersDefaultState, action) => {
    switch(action.type) {
        case 'SET_TEXT_FILTER':
            return { 
                        ...state,
                        text: action.text
                    }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'Date'
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'Amount'
            }
        case 'SET_START_DATE':
            return { ...state, startDate: action.startDate }
        case 'SET_END_DATE':
            return { ...state, endDate: action.endDate }
        default: 
            return state;
    }
}

const setVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter( expense => {
        const startDateMatch = typeof(startDate) !== 'number' || expense.createdAt >= startDate;
        const endDateMatch= typeof(endDate) !== 'number' || expense.createdAt <= endDate;
        const textMatch= expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch
    }).sort((a,b)=> {
        if(sortBy === 'Date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if(sortBy === 'Amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    })
}

const store = createStore(combineReducers({
    expense: expenseReducer,
    filters: filtersReducer
}));

store.subscribe(()=> {
    const state = store.getState();
    const visibleExpenses = setVisibleExpenses(state.expense, state.filters);
    console.log(visibleExpenses);
});

const expense1 = store.dispatch(addExpense({description: 'Rent',amount: 14000}))

store.dispatch(addExpense({description: 'Rent Home',amount: 22000}))

// const id = expense1.expense.id

// store.dispatch(removeExpense({id: id}))

const expense3 = store.dispatch(addExpense({description: 'Coffee',amount: 220}))

// store.dispatch(editExpense(expense3.expense.id, { amount: 50 }))

store.dispatch(setTextFilter('Rent'))

// store.dispatch(sortByAmount())

// store.dispatch(sortByDate())

// store.dispatch(setStartDate(123));

// store.dispatch(setEndDate(1000));

// store.dispatch(setStartDate());

// store.dispatch(setEndDate());

const demoState = {
    expense: [
        {
            id: 'dskfjsldfj',
            description: 'January Rent',
            note: 'skdjfsldfjsdflkj',
            amount: 14000,
            createdAt: 0
        }
    ],
    filters: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
}