import { IJobInfo } from '../job/job.models';

export const JOBS: IJobInfo[] = [
  {
    dateStart: new Date(2015, 10),
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
    dateStart: new Date(2014, 10),
    dateEnd: new Date(2015, 9),
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
  },
  {
    dateStart: new Date(2012, 8),
    dateEnd: new Date(2014, 10),
    employer: 'St. Norbert College',
    location: 'De Pere, WI',
    position: 'Application Administrator (Academic Technology)',
    responsibilities: [
      'Develop, implement, and maintain systems for use in the academic spaces on campus',
      'Train faculty, employees, and students in the utilization of academic technology',
      'Train co-workers on Enterprise Desktop Administrator functions',
      'Coordinate with faculty and Information Technology Services on pilot programs',
      'Maintain the campus learning management system, SNoodle (Moodle)',
      'Technical lead on second desktop virtualization project aimed at improving user experience in the academic environment',
      'Coordinated with many external vendors to both proactively and reactively solve problems',
      'Implemented lecture capture system that integrates with SNoodle',
      'Developed a program in Perl to report on system updates sent to SNoodle',
      'Created SQL queries to pull data from SNoodle for troubleshooting and testing',
      'Redesigned all learning spaces computers/zero clients to automatically login to speed up access to computing resources',
      'Configured computer science development environment (Visual Studio 2008/2010) for use in learning spaces'
    ]
  },
  {
    dateStart: new Date(2010, 5),
    dateEnd: new Date(2012, 8),
    employer: 'St. Norbert College',
    location: 'De Pere, WI',
    position: 'Microcomputer Support Specialist (Technology Support Services)',
    responsibilities: [
      'Solved campus computing issues for labs, classrooms, staff, and faculty',
      'Developed, implemented, and maintained imaging system for Windows 7 migration',
      'Led a team migrating a majority of campus owned machines to Active Directory',
      'Led a desktop virtualization project with Citrix XenApp 6.0',
      'Presented virtualization project progress to the Wisconsin Association of Independent Colleges and Universities (WAICU) board',
      'Implemented Citrix XenApp for use with campus enterprise management system',
      'Responsible for imaging of lab/classroom computers every semester',
      'Managed, trained, and empowered students to do a high level of work'

    ]
  }
];
