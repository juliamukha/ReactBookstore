import { configureStore } from '@reduxjs/toolkit';
import cardReducer from '../slice/cardStateSlice';


const store = configureStore({
    reducer: {
        cardState: cardReducer,
    },
});

export default store;