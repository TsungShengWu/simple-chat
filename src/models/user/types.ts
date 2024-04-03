export interface User {
  id: number;
  username: string;
  nickname: string;
}

export interface UserStore extends Partial<User> {
  token?: string;
}

export interface LoginPayload {
  username: string;
  password: string;
}

export interface LoginResult {
  token: string;
}
