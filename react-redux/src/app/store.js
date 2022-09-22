import { configureStore } from '@reduxjs/toolkit'
import cakeReducer from '../features/cakes/cakeSlice'
import icecreamReducer from '../features/icecream/icecreamSlice'
import userReducer from '../features/user/userSlice'


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

export default store