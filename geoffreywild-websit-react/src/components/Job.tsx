import React from "react";
import { IJobInfo } from "./models/job.models";
import ResumeDateRange from "./ResumeDateRange";
import ResumeInfoList from "./ResumeInfoList";

interface IJobProps {
    /** Information related to the job */
    jobInfo: IJobInfo;
}

/**
 * Creates a job with related information
 * @param props Contains information about the job
 */
const Job: React.SFC<IJobProps> = (props: IJobProps) => {
    const jobInfo = props.jobInfo;

    return (
        <div>
            <h3>{jobInfo.position}</h3>
            <h4>
                {jobInfo.employer} / {jobInfo.resumeInfo.location} / <ResumeDateRange dateStart={jobInfo.resumeInfo.dateStart} dateEnd={jobInfo.resumeInfo.dateEnd}/>
            </h4> 

            <ResumeInfoList infoList={jobInfo.resumeInfo.infoList} />
        </div>
    );
};

export default Job;