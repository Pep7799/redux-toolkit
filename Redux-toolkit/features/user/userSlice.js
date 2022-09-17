const createSlice = require('@reduxjs/toolkit').createSlice
const createAsyncThunk = require('@reduxjs/toolkit').createAsyncThunk       //async
const axios = require('axios')

const initialState = {                                          //defining the initialState
    loading: false,
    users: [],
    error: '',
} 


//for pending, fulfilled and rejected action types
const fetchUsers = createAsyncThunk ('users/fetchUsers', () => {
   return axios
    .get('http://jsonplaceholder.typicode.com/users')
    .then ((response) => response.data.map((user) => user.id))
} )

const userSlice = createSlice({                                 //invoking the createSlice and assigning userSlice                                        
    name: 'user',
    initialState,
    extraReducers: builder => {
        builder.addCase (fetchUsers.pending, state => {
            state.loading = true
        })
        builder.addCase (fetchUsers.fulfilled, (state, action) => {
            state.loading = false,
            state.users = action.payload
            state.error = ''
        })
        builder.addCase (fetchUsers.rejected, (state, action) => {
            state.loading = false,
            state.users = [],
            state.error = action.error.message
        } )
    }
})

module.exports = userSlice.reducer
module.exports.fetchUsers = fetchUsers