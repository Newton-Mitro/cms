import { ILink } from './ILink';

export interface IResponseModel<T> {
  data?: T | undefined;
  links?: {
    first: string | null;
    last: string | null;
    prev: string | null;
    next: string | null;
  };
  meta?: {
    current_page: number;
    from: number;
    last_page: number;
    links: [
      {
        url: string | null;
        label: string | null;
        active: boolean;
      }
    ];
    path: string | null;
    per_page: number;
    to: number;
    total: number;
  } | null;
  createNew?: ILink | null;
  message?: any;
  errors?: any;
}
