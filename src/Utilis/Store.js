import {configureStore} from '@reduxjs/toolkit';
import apptoggleSlice from './apptoggleSlice';

const store = configureStore({
    reducer: {
        app: apptoggleSlice
    }
})

export default store;