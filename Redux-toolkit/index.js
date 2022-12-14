const store = require('./app/store')
const cakeActions = require('./features/cakes/cakeSlice').cakeActions       //calling the cake actions from cakes folder
const icecreamActions = require('./features/icecream/icecreamSlice').icecreamActions 
const fetchUsers = require('./features/user/userSlice').fetchUsers

console.log('Initial state ', store.getState());




//subscribe



const unsubscribe = store.subscribe(() => {
    console.log('Updated ', store.getState());
})

store.dispatch(fetchUsers())            //fetching

//dispatch
/*store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.restocked(3))

store.dispatch(icecreamActions.ordered())
store.dispatch(icecreamActions.ordered())
store.dispatch(icecreamActions.ordered())
store.dispatch(icecreamActions.restocked(3)) 

//call the unsubscribe 
unsubscribe()*/