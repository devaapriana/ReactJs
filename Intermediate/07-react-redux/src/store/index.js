import { createSlice, configureStore } from "@reduxjs/toolkit";
const initialState = {
    counter: 0,
    showCounter: true
}

const initialAuthState = {
    isAuthenticate : false
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state){
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        increase(state, action){
            state.counter = state.counter + action.payload;
        },
        toggleCounter(state){
            state.showCounter = !state.showCounter;
        }

    }
})

const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
        login(){},
        logout(){}
    }
})

const store = configureStore({
    reducer: {counter: counterSlice.reducer, auth: authSlice.reducer}
})

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;