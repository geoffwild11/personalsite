/**
 * @summary Contains information about jobs
 */
export interface JobInfo {
  dateStart: Date;
  dateEnd?: Date;
  employer: string;
  location: string;
  position: string;
  responsibilities: string[];
}
