// Desc: Redux store
import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducers';

// Create a Redux store holding the state of your app
const store = configureStore({
    reducer,
    });


export default store;