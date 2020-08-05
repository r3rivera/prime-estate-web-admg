export interface AuthUser{
  username: string;
  firstname: string;
  lastname: string;
  roles?: string[];
  token?: string;
}
