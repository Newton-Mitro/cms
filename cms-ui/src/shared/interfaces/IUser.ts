import { ILink } from './ILink';

export interface IUser {
  id: number;
  name: string;
  photo?: string;
  email: string;
  phone: string;
  status: boolean;
  role: string;
  links?: ILink[];
}
