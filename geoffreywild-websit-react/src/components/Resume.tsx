import React from "react";

import {EDUCATION} from "../data/education";
import { JOBS } from "../data/jobs";
import { IEducationInfo } from "./models/education.models";
import { IJobInfo } from "./models/job.models";
import Job from "./Job";

const jobs = JOBS;
const education = EDUCATION;
function Resume() {
    return (<div>
        <div>
            <h2>Work Experience</h2>
            {jobs.map((job: IJobInfo, _: number) => {
                return <Job jobInfo={job}/>
            })}
        </div>
        <div>
            <h2>Education</h2>
            {education.map((eduInfo: IEducationInfo, _: number) => {
                return (
                    <div>
                        {eduInfo.institution}
                    </div>
                );
            })}
        </div>
    </div>
    );
}

export default Resume;