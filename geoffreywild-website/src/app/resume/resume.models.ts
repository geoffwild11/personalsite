/**
 * @summary Common data points for all resume sections
 */
export interface IResumeEntryInfo {
  dateEnd?: Date;
  dateStart: Date;
  location: string;
  infoList?: string[];
}

/**
 * @summary Representation of which resume section is being referenced
 */
export enum ResumeSectionType {
  Work = 1,
  Education = 2
}
