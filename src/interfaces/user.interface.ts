import { Auth } from "./auth.interface";

export interface User extends Auth {
  company: string;
  city: string;
  rol: string;
}
