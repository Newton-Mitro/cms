import { ILink } from './ILink';

export interface IVisitorLog {
  id: string;
  app: string;
  device: string;
  url?: string;
  method?: string;
  locale?: string;
  country?: string;
  city: string;
  latitude?: string;
  longitude?: string;
  zipCode?: number;
  postalCode?: string;
  links: ILink[];
}
