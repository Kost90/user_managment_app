import { User } from "@/constants/types"

export type SortType = 'asc' | 'desc'

export const sortElements = (arr:User[],sortType:SortType = 'asc'):User[] => {
    return arr.sort((a,b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();

        if(sortType === 'asc'){
            return nameA < nameB ? -1 : nameA > nameB ? 1: 0;
        }else{
            return nameA > nameB ? -1 : nameA < nameB ? 1 :0;
        }
    })
};