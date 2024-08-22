import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { usersSlice } from './feature/users/usersSlice';
import { filtersSlice } from './feature/filters/filtersSlice';

const rootReducer = combineReducers({
    users:usersSlice.reducer,
    filters:filtersSlice.reducer,
})

export const store = configureStore({
    reducer:rootReducer
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store
