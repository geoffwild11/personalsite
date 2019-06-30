import { IEducationInfo } from 'src/app/education/education.models';

export const EDUCATION: IEducationInfo[] = [
  {
    degree: 'Bachelor of Science',
    institution: 'St. Norbert College',
    major: 'Computer Science with Graphic Design Concentration',
    resumeInfo: {
      dateEnd: new Date(2010, 4),
      dateStart: new Date(2006, 7),
      location: 'De Pere, WI',
      infoList: []
    }
  },
  {
    institution: 'Streamwood High School',
    resumeInfo: {
      dateEnd: new Date(2006, 4),
      dateStart: new Date(2002, 7),
      location: 'Streamwood, IL',
      infoList: []
    }
  }
];
