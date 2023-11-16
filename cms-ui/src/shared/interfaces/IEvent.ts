import { ILink } from './ILink';

export interface IEvent {
  title: string;
  slug: string;
  fromDate: string;
  toDate: string;
  venue: string;
  shortDescription: string;
  details?: string;
  originalAttachmentUrl?: string;
  thumbnailAttachmentUrl?: string;
  landscapeAttachmentUrl?: string;
  portraitAttachmentUrl?: string;
  publishStatus?: string;
  order?: number;
  icon?: string;
  links: ILink[];
}
