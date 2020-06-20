// Education Info "database"

import { IEducationInfo } from '../components/models/education.models';

export const EDUCATION: IEducationInfo[] = [
  {
    degree: 'Bachelor of Science',
    institution: 'St. Norbert College',
    major: 'Computer Science with Graphic Design Concentration',
    resumeInfo: {
      dateEnd: new Date(2010, 4),
      dateStart: new Date(2006, 7),
      location: 'De Pere, WI',
      infoList: [
        'Computer Science teaching assistant from Feb 2008 - Dec 2009',
        'Drawing program senior project aimed at elementary-aged children',
        'Modify existing robot code to have robot follow someone rather than avoid objects'
      ]
    }
  },
  {
    institution: 'Streamwood High School',
    resumeInfo: {
      dateEnd: new Date(2006, 4),
      dateStart: new Date(2002, 7),
      location: 'Streamwood, IL',
      infoList: [
        'Athletic Training Student Aide for 2 years',
        'First place in Athletic Training Health Occupation Students of America competition'
      ]
    }
  }
];
