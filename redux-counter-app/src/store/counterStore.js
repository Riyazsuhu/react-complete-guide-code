import { createSlice } from '@reduxjs/toolkit'

const initialCounterState = {
    counter: 0,
    showCounter: true
}
const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state){ state.counter++ },
        decrement(state){ state.counter-- },
        toggleCounter(state){ state.showCounter = !state.showCounter },
        increase(state, action){ state.counter += action.payload }
    }
})

export const counterActions = counterSlice.actions;
export default counterSlice.reducer