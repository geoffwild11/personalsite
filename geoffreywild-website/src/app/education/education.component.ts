import { Component, OnInit, Input } from '@angular/core';
import { IEducationInfo } from './education.models';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
})
export class EducationComponent implements OnInit {

  @Input() educationModel: IEducationInfo;
  constructor() { }

  ngOnInit() {
  }

}
