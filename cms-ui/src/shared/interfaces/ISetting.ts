import { ILink } from './ILink';

export interface ISetting {
  organizationName: string;
  organizationShortName: string;
  slogan: string;
  address?: string;
  hrEmail?: string;
  customerSupportEmail?: string;
  technicalSupportEmail?: string;
  fax: string;
  hrContact?: string;
  customerSupportContact?: string;
  technicalSupportContact?: string;
  website?: string;
  officeHour?: string;
  originalLogo?: string;
  base64OriginalLogo?: string;
  whiteLogo?: string;
  base64WhiteLogo?: string;
  facebookPage?: string;
  messengerLink?: string;
  youtubeUrl?: string;
  featuredVideoUrl?: string;
  links: ILink[];
}
