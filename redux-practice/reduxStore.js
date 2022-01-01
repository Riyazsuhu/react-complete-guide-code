const redux = require('redux')

const storeReducer = (state = {
    counter: 0
}, action) => {
    switch (action.type) {
        case 'increment':
            return {
                counter: state.counter + 1
            }
        case 'decrement':
            return {
                counter: state.counter - 1
            }
    }
    return state
}

const store = redux.createStore(storeReducer)

const counterSubscribe = () => {
    const latestState = store.getState()
    console.log(latestState)
}

store.subscribe(counterSubscribe)

store.dispatch({ type: 'increment' })
store.dispatch({ type: 'decrement' })
