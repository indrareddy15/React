const createSlice = require('@reduxjs/toolkit').createSlice;
const cakeActions = require('@reduxjs/toolkit').cakeActions;


const initialState = {
    noOfIceCreams: 20,
}

const iceCreamSlice = createSlice({
    name: 'iceCream',
    initialState,
    reducer: {
        iceCreamOrdered: (state) => {
            state.noOfIceCreams--;
        },
        iceCreamRestocked: (state, action) => {
            state.noOfIceCreams += action.payload;
        },

    },
    // extraReducers: {
    //     ['cake/ordered']: (state) => {
    //         state.noOfIceCreams--;
    //     }
    // }
    // extraReducers: (builder) => {
    //     builder.addCase(cakeActions.ordered, state => {
    //         state.noOfIceCreams--;
    //     })
    // }
});

module.exports = iceCreamSlice.reducer;
module.exports.iceCreamActions = iceCreamSlice.actions;