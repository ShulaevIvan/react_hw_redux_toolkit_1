import {configureStore} from '@reduxjs/toolkit';
import numberReducer from '../slices/numberSlice';
import factsReducer from '../slices/factsSlice';

export const store = configureStore({
    reducer: {
        number: numberReducer,
        facts: factsReducer,
    }
});