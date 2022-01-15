import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './reducers/ItemCounter';

export default configureStore({
    reducer: {
        counter: counterReducer
    }
});