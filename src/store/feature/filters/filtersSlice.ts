import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Filters } from '@/constants/types';
import { RootState } from '@/store/store';

const initialState:Filters ={
    name: '',
    hair: null,
    eyes: null,
    gender: null,
    glasses: 'all',
};

export const filtersSlice = createSlice({
    name:'filters',
    initialState,
    reducers:{
        setName:(state, action:PayloadAction<string>) => {
            console.log(action.payload)
            state.name = action.payload;
        },
        setHair:(state, action:PayloadAction<string | null>) => {
            state.hair = action.payload;
        },
        setEyes:(state, action:PayloadAction<string | null>) => {
            state.eyes = action.payload;
        },
        setGender:(state, action:PayloadAction<string | null>) => {
            state.gender = action.payload;
        },
        setGlasses:(state, action:PayloadAction<"all" | "glasses" | "no-glasses">) => {
            state.glasses = action.payload;
        },
        resetFilters:(state) =>{
            state.name = '';
            state.hair = null;
            state.eyes = null;
            state.gender = null;
            state.glasses = 'all';
        },
        
    }
});

export const {setName,setHair,setEyes,setGender,setGlasses,resetFilters} = filtersSlice.actions;
export const selectFilters = (state: RootState) => state.filters;

