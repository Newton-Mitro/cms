import { ILink } from './ILink';

export interface IStaff {
  slug: string;
  name: string;
  position: string;
  originalAttachmentUrl?: string;
  thumbnailAttachmentUrl?: string;
  landscapeAttachmentUrl?: string;
  portraitAttachmentUrl?: string;
  bio: string;
  shortIntroduction?: string;
  staffType?: string;
  facebookProfile?: string;
  linkedinProfile?: string;
  skypeUserName?: string;
  mobile?: string;
  email?: string;
  publishStatus: string;
  order?: number;
  links: ILink[];
}
