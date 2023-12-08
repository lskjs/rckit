export interface User {
  _id: string;
  email: string;
  role: string;
  companyId: string;
}
export interface Session {
  _id: string;
  user?: User;
}
export interface Otp {
  _id: string;
}
