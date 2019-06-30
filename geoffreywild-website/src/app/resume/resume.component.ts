import { Component, OnInit } from '@angular/core';

import { JOBS } from './jobs';
import { IJobInfo } from '../job/job.models';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  public jobs: IJobInfo[] = JOBS;

  constructor() { }

  ngOnInit() {
  }

}
