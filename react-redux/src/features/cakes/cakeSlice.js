import {createSlice} from '@reduxjs/toolkit' 

const initialState =  {         //initalState
    numOfCakes: 10,
}

const cakeSlice = createSlice({                 //action defined
    name: 'cake',
    initialState,
    reducers: {
        ordered: (state) => {                                                                       //direct mutations
            state.numOfCakes--
        },
        restocked: (state, action) => {
            state.numOfCakes += action.payload
        }
    },
    
  
})


//export reducer
export default cakeSlice.reducer
export const { ordered, restocked} = cakeSlice.actions          //cake actions from cakeSlice.js