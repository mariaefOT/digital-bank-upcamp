import {createSlice} from '@reduxjs/toolkit'

const accountSlice = createSlice({
    name:'accounts',
    initialState:{
        accounts:[]
    },
    reducers:{
        getAccountsList(state,action){
            state.accounts = action.payload; 
        }
    }
}); 

export const {getAccountsList} = accountSlice.actions;
export default accountSlice.reducer; 