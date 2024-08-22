import { createAsyncThunk, createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Filters, User } from '@/constants/types';
import ServerApi from '@/api/ServerApi';
import { RootState } from '@/store/store';
import { selectFilters } from '../filters/filtersSlice';

type updateUserPayload = {
    id:string;
    updates:Partial<User>;
}

const initialUsers:User[] = [];

export const fetchUsers = createAsyncThunk<User[]>('users/fetchUsers', async (_,{rejectWithValue}) => {
    try {
    const controller = new AbortController();
    const signal = controller.signal;
    return await ServerApi.getUsers({signal});
    } catch (error:any) {
        return rejectWithValue(error.message || 'Failed to fetch users');
    }
});

// export const fetchUser = createAsyncThunk<User, string>('users/fetchUser',async (id, { rejectWithValue }) => {
//       try {
//         const controller = new AbortController();
//         const signal = controller.signal;
//         return await ServerApi.getUser({ id, signal });
//       } catch (error: any) {
//         return rejectWithValue(error.message || 'Failed to fetch user');
//       }
//     }
//   );

export const updateUser = createAsyncThunk<User,updateUserPayload>('users/updateUser', async ({ id, updates },{rejectWithValue}) => {
    try {
    const controller = new AbortController();
    const signal = controller.signal;
    return (await ServerApi.updateUSer({ id, signal, updates })) as User;
    } catch (error:any) {
        return rejectWithValue(error.message || 'Failed to update user');
    }
  })

export const usersSlice = createSlice({
    name:'users',
    initialState:{
        users:initialUsers,
        // selectedUser: null as User | null,
        loading:false,
        error:null as unknown as string || null, 
    },
    reducers:{
        updateUsers:(state, action:PayloadAction<User>) => {
            state.users = state.users.map((user) => {
                if(user.id === action.payload.id){
                    return action.payload
                }else{
                    return user
                }
            })
        }
    },
    extraReducers:(builder) => {
        builder
        .addCase(fetchUsers.pending,(state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchUsers.fulfilled,(state, action) => {
            state.users = action.payload;
            state.loading = false;
        })
        .addCase(fetchUsers.rejected,(state, action) => {
            state.error = action.payload as string;
            state.loading = false;
        })
        // .addCase(fetchUser.pending, (state) => {
        //     state.loading = true;
        //     state.error = null;
        //   })
        //   .addCase(fetchUser.fulfilled, (state, action) => {
        //     state.selectedUser = action.payload;
        //     state.loading = false;
        //   })
        //   .addCase(fetchUser.rejected, (state, action) => {
        //     state.error = action.payload as string;
        //     state.loading = false;
        //   })
        .addCase(updateUser.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
        .addCase(updateUser.fulfilled, (state, action) => {
            state.users = state.users.map((user) => {
              if (user.id === action.payload.id) {
                return action.payload
              } else {
                return user
            }})
            state.loading = false;
          })
          .addCase(updateUser.rejected,(state, action) => {
            state.error = action.payload as string;
            state.loading = false;
        })
    },
});

export const {updateUsers} = usersSlice.actions;
export const selectUsers = (state: RootState) => state.users;
// export const selectSelectedUser = (state: RootState) => state.users.selectedUser;
export const selectUsersForFilter = (state: RootState) => state.users.users;
export const selectFilteredUsers = createSelector([selectUsersForFilter, selectFilters],(users:User[],filters:Filters) => {
    return users.filter((user) => {
        const matchesName = user.name.toLowerCase().includes(filters.name.toLowerCase());
        const matchHair = !filters.hair || user.hair.toLowerCase() === filters.hair.toLowerCase();
        const matcheEyes = !filters.eyes || user.eyes.toLowerCase() === filters.eyes.toLowerCase();
        const matchesGender = !filters.gender || user.gender.toLowerCase() === filters.gender.toLowerCase();
        const matchesGlasses = filters.glasses === 'all' || (filters.glasses === 'glasses' && user.glasses) || (filters.glasses === 'no-glasses' && !user.glasses);
        return matchesName && matchHair && matcheEyes && matchesGender && matchesGlasses;
    })
});

