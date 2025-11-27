export interface User {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface UsersResponse extends Array<User> {}
