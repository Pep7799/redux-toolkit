const createSlice = require('@reduxjs/toolkit').createSlice

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
module.exports = cakeSlice.reducer
module.exports.cakeActions = cakeSlice.actions          //cake actions from cakeSlice.js