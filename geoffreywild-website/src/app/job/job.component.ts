import { Component, OnInit, Input } from '@angular/core';
import { IJobInfo } from './job.models';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
})

/**
 * @summary Contains all information for jobs for a resume
 */
export class JobComponent implements OnInit {
  @Input() public jobModel: IJobInfo;
  constructor() { }

  ngOnInit() {
  }

}
