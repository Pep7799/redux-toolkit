const configureStore = require('@reduxjs/toolkit').configureStore
const cakeReducer = require('../features/cakes/cakeSlice')
const icecreamReducer = require('../features/icecream/icecreamSlice')
//const reduxLogger = require('redux-logger')                                 //importing the logger
//const { getDefaultMiddleware } = require('@reduxjs/toolkit')
const userReducer = require('../features/user/userSlice')


//logger
//const logger = reduxLogger.createLogger()                   

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer,
        user: userReducer 
    },
   // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)  //appending logger middleware 
})

module.exports = store