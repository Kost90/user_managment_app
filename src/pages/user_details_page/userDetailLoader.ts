import type { LoaderFunction } from 'react-router-dom'

import ServerApi from "@/api/ServerApi";

export const userDetailLoader = async ({params:{id},request:{ signal }}:Parameters<LoaderFunction>[number]) => {
    if(!id) throw new Error('No user ID provided');
    const user = await ServerApi.getUser({signal,id:id});
    const roles = await ServerApi.getRoles({signal});
    return {user,roles}
 }