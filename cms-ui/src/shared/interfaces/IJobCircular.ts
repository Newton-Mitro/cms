import { ILink } from './ILink';

export interface IJobCircular {
  slug: string;
  jobPosition: string;
  totalNumberVacancy: string;
  jobContext: string;
  jobResponsibility: string;
  employmentStatus: string;
  educationalRequirement: string;
  experienceRequirements: string;
  additionalRequirements: string;
  religion: string;
  age: string;
  gender: string;
  jobLocation: string;
  salary?: string;
  compensationAndOtherBenefits?: string;
  applicationDeadline: string;
  publishedDate: string;
  applicationInstruction: string;
  publishStatus: string;
  links: ILink[];
}
