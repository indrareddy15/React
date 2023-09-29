import { configureStore } from '@reduxjs/toolkit';
import cakeReducer from '../features/cake/cakeSlice';
import iceCreamReducer from '../features/iceCream/iceCreamSlice';
import breadsReducer from '../features/Bread/brideSlice';
import userReducer from '../features/user/userSlice';

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        iceCream: iceCreamReducer,
        breads: breadsReducer,
        users: userReducer
    },
});

export default store;
