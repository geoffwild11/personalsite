import React from "react";

import { JOBS } from "../data/jobs";
import { IJobInfo } from "./models/job.models";

const jobs = JOBS;
function Resume() {
    return (<div>
        {jobs.map((job: IJobInfo, _: number) => {
             return (
             <div>
                {job.employer} - {job.position}
            </div>
             );
        })}
    </div>
    );
}

export default Resume;