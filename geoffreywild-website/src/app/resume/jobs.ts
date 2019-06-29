import { IJobInfo } from '../job/job.models';

export const JOBS: IJobInfo[] = [
  {
    dateStart: new Date(2015, 11),
    employer: 'Epic Systems',
    location: 'Verona, WI',
    position: 'Software Developer',
    responsibilities: [
      'Identify bugs within the system, design a solution to the problem, and implement the design',
      'Prototype and design enhancements that are usable and efficient ',
      'Refactor code to simplify code maintenance and improve readability ',
      'Review code for other developers, review designs, and assist customers when necessary',
      'Worked on two company-wide projects with heavy focus on UX',
      'Working with 3rd party systems for scanning documents',
      'Carrying out role as Scrum Master for web migration projects',
      'Languages: VB6, M, C#, TypeScript, JavaScript, ASP.NET'
    ]
  },
  {
    dateStart: new Date(2014, 11),
    dateEnd: new Date(2015, 10),
    employer: 'Sonic Foundry',
    location: 'Madison, WI',
    position: 'Quality Assurance Engineer',
    responsibilities: [
      'Design and execute system software test plans, report defects, and ensure proper resolution of reported bugs',
      'Work with developers to maintain a clear understanding of technical application content, changes, and feature timelines',
      'Test and troubleshoot Learning Management System solutions for Mediasite',
      'Assist with technical documentation activities',
      'Train interns on using Bug Reporting system and creation of test plans',
      'Create automated tests for regression testing on new releases'
    ]
  }
];
