const createSlice = require('@reduxjs/toolkit').createSlice                 //(1)


const initialState = {                                                      //(3)    
    noOfIcecreams: 20,
} 

const icecreamSlice = createSlice({                                         //(1)
    name: icecream,                                                         //(2)        
    initialState,
    reducers: {
        ordered: (state) => {
            state.noOfIcecreams--
        },                                                                  //(4)                
        restocked: (state, action ) => {
             state.noOfIcecreams += action.payload   
        } 
    }                 
})                                     


module.exports = icecreamSlice.reducer
module.exports.icecreamActions = icecreamSlice.actions 