export interface IResumeEntryInfo {
  dateEnd?: Date;
  dateStart: Date;
  location: string;
  infoList?: string[];
}

export enum ResumeSectionType {
  work = 1,
  education = 2
}
