import {createSlice} from '@reduxjs/toolkit' 

import { ordered as cakeOrdered } from '../cakes/cakeSlice'

const initialState = {                                                      //(3)    
    noOfIcecreams: 20,
} 

const icecreamSlice = createSlice({                                         //(1)
    name: 'icecream',                                                         //(2)        
    initialState,
    reducers: {
        ordered: (state) => {
            state.noOfIcecreams--
        },                                                                  //(4)                
        restocked: (state, action ) => {
             state.noOfIcecreams += action.payload   
        } 
    },
    /* extraReducers: {
        ['cake/ordered']: (state) => {
            state.noOfIcecreams --
        }
    }  */
    
    extraReducers: (builder) => {
        builder.addCase(cakeOrdered,( state )=> {
            state.noOfIcecreams -- 
        })
    }
})                                     


export default icecreamSlice.reducer
export const { ordered, restocked} = icecreamSlice.actions 