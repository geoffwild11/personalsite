import React from "react";
import { IJobInfo } from "./models/job.models";

interface IJobProps {
    jobInfo: IJobInfo;
}

const Job: React.SFC<IJobProps> = (props: IJobProps) => {
    const jobInfo = props.jobInfo;
    const dateFormat = new Intl.DateTimeFormat(["en-US", "en-GB"], {month: "long", year: "numeric"});

    return (
        <div>
            <h3>{jobInfo.position}</h3>
            <h4>
                {jobInfo.employer} / {jobInfo.resumeInfo.location} / {dateFormat.format(jobInfo.resumeInfo.dateStart)}
                <span>{jobInfo.resumeInfo.dateEnd ? `- ${dateFormat.format(jobInfo.resumeInfo.dateEnd)}` : "- Present"}</span>
            </h4> 
            <ul className="responsibilityList">
                {getResumeInfoList(jobInfo.resumeInfo.infoList)}
            </ul>
        </div>
    );
};

function getResumeInfoList(infoList?: string[]): JSX.Element[] | null
{
    if (!infoList) { return null; }

    return infoList.map((info: string, _: number) => {
        return <li>{info}</li>;
    });
}

export default Job;