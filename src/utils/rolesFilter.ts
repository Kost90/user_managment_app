import { Roles } from "@/constants/types";

export const rolesFilter = (rolesArr:Roles[],userRolesArr:string[]) => {
 return rolesArr.filter((role) => userRolesArr.includes(role.id));
}