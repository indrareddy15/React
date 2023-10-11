const createSlice = require('@reduxjs/toolkit').createSlice;


const initialState = {
    noOfBreads: 10,
}


const breadSlice = createSlice({
    name: 'bread',
    initialState,
    reducers: {
        removeBread: (state) => {
            state.noOfBreads--;
        },
        addBead: (state, action) => {
            state.noOfBreads += action.payload
        }
    }
});


module.exports = breadSlice.reducer
module.exports.breadActions = breadSlice.actions