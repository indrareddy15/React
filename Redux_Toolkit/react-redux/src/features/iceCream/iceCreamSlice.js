import { createSlice } from '@reduxjs/toolkit'
import { ordered as cakeOrdered } from '../cake/cakeSlice';


const initialState = {
    noOfIceCreams: 20,
}

const iceCreamSlice = createSlice({
    name: 'iceCream',
    initialState,
    reducer: {
        Ordered: (state) => {
            state.noOfIceCreams--;
        },
        restocked: (state, action) => {
            state.noOfIceCreams += action.payload;
        },

    },
    // extraReducers: {
    //     ['cake/ordered']: (state) => {
    //         state.noOfIceCreams--;
    //     }
    // }
    extraReducers: (builder) => {
        builder.addCase(cakeOrdered, state => {
            state.noOfIceCreams--;
        })
    }
});

export default iceCreamSlice.reducer;
export const { Ordered, restocked } = iceCreamSlice.actions;