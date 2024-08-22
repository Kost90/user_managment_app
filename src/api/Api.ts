import { FetchArgs } from '@/constants/types';

class API {
  private readonly baseUrl: string;
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }
  async fetch<ResponseType = unknown>({
    path = '',
    method = 'GET',
    body,
    signal,
    headers = {},
    ...rest
  }: FetchArgs) {
    const response = await fetch(`${this.baseUrl}/${path}`, {
      method,
      signal,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: JSON.stringify(body),
      ...rest,
    });

    if (!response.ok) {
      // Handle errors, possibly throw an exception here.
      throw new Error('Network response was not ok' + response.statusText);
  }
  
    return (await response.json()) as Awaited<ResponseType>;
  }
}

export {API}