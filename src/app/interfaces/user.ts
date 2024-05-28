export enum UserRole {
    ADMIN = 'ROLE_ADMIN',
    USER = 'ROLE_USER',
}

export interface User {
  userId: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: string;
  role:UserRole;

}
