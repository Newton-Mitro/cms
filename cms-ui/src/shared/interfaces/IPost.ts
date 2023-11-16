import { ILink } from './ILink';

export interface IPost {
  title: string;
  slug: string;
  postType: string;
  originalAttachmentUrl?: string;
  thumbnailAttachmentUrl?: string;
  landscapeAttachmentUrl?: string;
  portraitAttachmentUrl?: string;
  shortDescription: string;
  content?: string;
  publishStatus: string;
  order: number;
  icon: string | null;
  links?: ILink[];
}
