import { Component, OnInit } from '@angular/core';

import { JOBS } from '../../data/jobs';
import { IJobInfo } from '../job/job.models';
import { IEducationInfo } from '../education/education.models';
import { EDUCATION } from 'src/data/education';
import { ResumeSectionType } from './resume.models';

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
  public toggleText: string;

  private readonly ExpandAllText: string = 'Expand all';
  private readonly CollapseAllText: string = 'Collapse all';

  constructor() {
    this.isWorkSectionCollapsed = true;
    this.isEducationSectionCollapsed = true;
    this.toggleText = this.ExpandAllText;
  }

  ngOnInit() {
  }

  public toggleAllSections(): void {

    if (this.__anySectionsCollapsed()) {
      this.isEducationSectionCollapsed = false;
      this.isWorkSectionCollapsed = false;
    } else {
      this.isEducationSectionCollapsed = true;
      this.isWorkSectionCollapsed = true;
    }

    this.__updateToggleText();
  }

  public toggleResumeSection(section: ResumeSectionType) {
    switch (section) {
      case ResumeSectionType.work:
        this.isWorkSectionCollapsed = !this.isWorkSectionCollapsed;
        break;
      case ResumeSectionType.education:
        this.isEducationSectionCollapsed = !this.isEducationSectionCollapsed;
        break;
      default:
        break;
    }

    this.__updateToggleText();
  }

  private __anySectionsCollapsed(): boolean {
    return (this.isEducationSectionCollapsed || this.isWorkSectionCollapsed);
  }

  private __updateToggleText(): void {
    this.toggleText = this.__anySectionsCollapsed() ? this.ExpandAllText : this.CollapseAllText;
  }
}
