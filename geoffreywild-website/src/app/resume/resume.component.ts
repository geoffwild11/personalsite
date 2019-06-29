import { Component, OnInit } from '@angular/core';

import { JobInfo } from '../job/job-info';
import { JOBS } from './jobs';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  public jobs = JOBS;

  constructor() { }

  ngOnInit() {
  }

}
