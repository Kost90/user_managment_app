import { store } from "@/store/store";
import { fetchUsers } from "@/store/feature/users/usersSlice";

export const usersLoader = async () => {
   return await store.dispatch(fetchUsers()); 
}