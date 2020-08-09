import React, { useState } from "react";

import Job from "./Job";
import Education from "./Education";

import {EDUCATION} from "../data/education";
import { JOBS } from "../data/jobs";
import { IEducationInfo } from "./models/education.models";
import { IJobInfo } from "./models/job.models";
import "./styles/Resume.scss";

const jobs = JOBS;
const education = EDUCATION;


function Resume() {
    const [workExpanded, setWorkExpanded] = useState(true);
    const [educationExpanded, setEducationExpanded] = useState(true);

    const workIconClassName: string = workExpanded ? "fas fa-caret-down" : "fas fa-caret-right";
    const eduIconClassName: string = educationExpanded ? "fas fa-caret-down" : "fas fa-caret-right";
    return (<div>
        <div className="expandButton" onClick={() => setWorkExpanded(!workExpanded)}>Work Experience<i className={`${workIconClassName} iconExpansion`} /></div>
        {workExpanded ? <div className="collapsibleSection">{jobs.map((job: IJobInfo) => <Job jobInfo={job}/>)}</div> : <div />}
        <div className="expandButton" onClick={() => setEducationExpanded(!educationExpanded)}>Education<i className={`${eduIconClassName} iconExpansion`}/></div>
        {educationExpanded ? <div className="collapsibleSection">{education.map((eduInfo: IEducationInfo) => <Education educationInfo={eduInfo}/>)}</div> : null}
    </div>
    );
}

export default Resume;