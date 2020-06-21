import { IResumeEntryInfo } from './resume.models';

/**
 * @summary Contains information about jobs
 */
export interface IJobInfo {
  employer: string;
  position: string;
  resumeInfo: IResumeEntryInfo;
}
