import { Component, OnInit } from '@angular/core';

import { JOBS } from '../../data/jobs';
import { IJobInfo } from '../job/job.models';
import { IEducationInfo } from '../education/education.models';
import { EDUCATION } from 'src/data/education';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  public jobs: IJobInfo[] = JOBS;
  public education: IEducationInfo[] = EDUCATION;
  public isWorkSectionCollapsed: boolean;
  public isEducationSectionCollapsed: boolean;

  constructor() {
    this.isWorkSectionCollapsed = true;
    this.isEducationSectionCollapsed = true;
  }

  ngOnInit() {
  }

}
