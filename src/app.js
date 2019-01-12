import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense, editExpense, removeExpense} from './actions/expenses';
import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from './actions/filters';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const appRoot = document.getElementById('root');

const store = configureStore();

const expense1 = store.dispatch(addExpense({description: 'Rent',amount: 14000}))

store.dispatch(addExpense({description: 'Rent Home',amount: 22000}))

store.dispatch(setTextFilter('Rent'))

console.log(store.getState());

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, appRoot)