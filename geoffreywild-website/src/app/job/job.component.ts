import { Component, OnInit, Input } from '@angular/core';
import { IJobInfo } from './job-info';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {
  @Input() public jobModel: IJobInfo;
  constructor() { }

  ngOnInit() {
  }

}
