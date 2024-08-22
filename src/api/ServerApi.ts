import { serverUrl } from '@/constants/constants';
import { User } from '@/constants/types';
import { API } from './Api';

type FetchArg<Updates = Record<string, unknown>> = {
  signal: AbortSignal;
  id?: string;
  updates?: Updates;
};

class ServerAPI extends API {
  async getUsers({ signal }: FetchArg) {
    return await this.fetch<User[]>({ path: 'users', signal });
  }
  async getUser({ signal, id }: FetchArg) {
    return await this.fetch<User>({ path: `users/${id}`, signal });
  }
  async getRoles({ signal }: FetchArg) {
    return await this.fetch<User[]>({ path: 'roles', signal });
  }
  async updateUSer({ signal, id, updates }: FetchArg) {
    return await this.fetch<User>({ path: `users/${id}`, signal, method: 'PATCH', body: updates });
  }
}

export default new ServerAPI(serverUrl);
