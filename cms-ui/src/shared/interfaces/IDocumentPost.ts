import { ILink } from './ILink';

export interface IDocumentPost {
  title: string;
  slug: string;
  documentUrl?: string;
  shortDescription: string;
  content?: string;
  publishStatus: string;
  order?: number;
  icon?: string;
  links: ILink[];
}
