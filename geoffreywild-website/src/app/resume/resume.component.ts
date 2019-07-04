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

/**
 * @summary Displays all information related to the resume
 */
export class ResumeComponent implements OnInit {

  public jobs: IJobInfo[] = JOBS;
  public education: IEducationInfo[] = EDUCATION;
  public isWorkSectionCollapsed: boolean;
  public isEducationSectionCollapsed: boolean;
  public toggleButtonText: string;

  // This makes the enum usable from the view template
  public ResumeSectionType: typeof ResumeSectionType = ResumeSectionType;

  private readonly ExpandAllText: string = 'Expand all';
  private readonly CollapseAllText: string = 'Collapse all';

  constructor() {
    this.isWorkSectionCollapsed = false;
    this.isEducationSectionCollapsed = false;
    this.__updateToggleButtonText();
  }

  ngOnInit() {
  }

  /**
   * @summary Used to toggle all sections within the resume component
   */
  public toggleAllSections(): void {
    if (this.__anySectionsCollapsed()) {
      this.isEducationSectionCollapsed = false;
      this.isWorkSectionCollapsed = false;
    } else {
      this.isEducationSectionCollapsed = true;
      this.isWorkSectionCollapsed = true;
    }

    this.__updateToggleButtonText();
  }

  /**
   * @summary Toggles a specific resume section
   * @param section The section type for current section of resume
   */
  public toggleResumeSection(section: ResumeSectionType) {
    switch (section) {
      case ResumeSectionType.Work:
        this.isWorkSectionCollapsed = !this.isWorkSectionCollapsed;
        break;
      case ResumeSectionType.Education:
        this.isEducationSectionCollapsed = !this.isEducationSectionCollapsed;
        break;
      default:
        break;
    }

    this.__updateToggleButtonText();
  }

  /**
   * @summary Checks if any sections in the resume component are collapsed
   */
  private __anySectionsCollapsed(): boolean {
    return (this.isEducationSectionCollapsed || this.isWorkSectionCollapsed);
  }

  /**
   * @summary Updates the toggle buttons text based on the state of sections within the component
   */
  private __updateToggleButtonText(): void {
    this.toggleButtonText = this.__anySectionsCollapsed() ? this.ExpandAllText : this.CollapseAllText;
  }
}
