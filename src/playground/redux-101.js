import {createStore} from 'redux';

const incrementCount = ({incrementBy = 1} = {}) => {
    return {
        type: 'INCREMENT',
        incrementBy: incrementBy
    }
}

const decrementCount = ({decrementBy = 1} = {}) => {
    return {
        type: 'DECREMENT',
        decrementBy: decrementBy
    }
}

const setCount = ({count = 0} = {}) => {
    return {
        type: 'SET',
        count: count
    }
}

const store = createStore((state = { Count : 0},action) => {
    switch(action.type){
        case 'INCREMENT':
                return {
                    Count: state.Count + action.incrementBy
                }
        case 'DECREMENT':
                return {
                    Count: state.Count - action.decrementBy
                }
        case 'RESET':
                return {
                    Count: 0
                }
        case 'SET':
                return {
                    Count: action.count
                }
        default: 
                return state
    }
})

const unsubscribe = store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch(incrementCount({incrementBy: 5}))

store.dispatch(incrementCount());

store.dispatch(incrementCount());

store.dispatch(decrementCount({decrementBy: 3}));


store.dispatch({
    type: 'RESET'
})

store.dispatch(setCount({count: 99}))

