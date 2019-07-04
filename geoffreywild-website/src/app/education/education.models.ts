import { IResumeEntryInfo } from '../resume/resume.models';

export interface IEducationInfo {
  degree?: string;
  institution: string;
  major?: string;
  resumeInfo: IResumeEntryInfo;
}
