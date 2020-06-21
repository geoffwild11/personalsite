import React from "react";

import {EDUCATION} from "../data/education";
import { JOBS } from "../data/jobs";
import { IEducationInfo } from "./models/education.models";
import { IJobInfo } from "./models/job.models";
import Job from "./Job";
import Education from "./Education";
import "./styles/Resume.scss";

const jobs = JOBS;
const education = EDUCATION;
function Resume() {
    return (<div>
        <div className="collapsibleSection">
            <h2>Work Experience</h2>
            {jobs.map((job: IJobInfo, _: number) => <Job jobInfo={job}/>)}
        </div>
        <div style={{height: 20}}/>
        <div className="collapsibleSection">
            <h2>Education</h2>
            {education.map((eduInfo: IEducationInfo, _: number) => <Education educationInfo={eduInfo}/>)}
        </div>
    </div>
    );
}

export default Resume;