import { IResumeEntryInfo } from './resume.models';

export interface IEducationInfo {
  degree?: string;
  institution: string;
  major?: string;
  resumeInfo: IResumeEntryInfo;
}
