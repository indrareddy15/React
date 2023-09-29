import { createSlice } from '@reduxjs/toolkit'


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


export default breadSlice.reducer
export const { addBead, removeBread } = breadSlice.actions