export type User = {
    id: string;
    name: string;
    avatar: string;
    gender: 'female' | 'male';
    hair: 'black' | 'brown' | 'blonde' | 'red' | 'grey';
    eyes: 'brown' | 'blue' | 'green' | 'grey';
    glasses: 'glasses' | 'no-glasses'| boolean;
    roles:string[];
  };

export interface FetchArgs extends Omit<RequestInit, 'body'> {
    path?: string
    body?: Record<string, unknown>
  };

export type Filters = {
  name:string;
  hair:string | null;
  eyes: string | null;
  gender:string | null;
  glasses: 'all' | 'glasses' | 'no-glasses';
}

export type TableHeader = {
  title:string;
  clickeble:boolean;
}

export type Roles = {
  id: string;
  name: string;
  description: string;
}

export type LoaderData = {
  user:User,
  roles:Roles[],
}