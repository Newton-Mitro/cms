import { ILink } from 'shared/interfaces/ILink';
import { IPost } from 'shared/interfaces/IPost';

export class PageModel implements IPost {
  icon: string | null = null;
  publishStatus: string = 'Draft';
  order: number = 0;
  status?: string | undefined;
  links: ILink[] = [];
  title: string = '';
  slug: string = '';
  postType: string = '';
  originalAttachmentUrl?: string | undefined;
  thumbnailAttachmentUrl?: string | undefined;
  landscapeAttachmentUrl?: string | undefined;
  portraitAttachmentUrl?: string | undefined;
  shortDescription: string = '';
  content?: string | undefined;
}
