import React from "react";
import { IEducationInfo } from "./models/education.models";
import ResumeDateRange from "./ResumeDateRange";
import ResumeInfoList from "./ResumeInfoList";

interface IEducationProps {
    educationInfo: IEducationInfo;
}

const Education: React.SFC<IEducationProps> = (props: IEducationProps) => {
    const education = props.educationInfo;
    return (
        <div>
            <h3>{education.institution}</h3>
            <div className="institutionInfo">
                {education.resumeInfo.location} / <ResumeDateRange dateStart={education.resumeInfo.dateStart} dateEnd={education.resumeInfo.dateEnd} />
            </div>

            {education.degree && education.major ? <div>{education.degree} / {education.major}</div> : null }

            <ResumeInfoList infoList={education.resumeInfo.infoList} />
        </div>
    );
}

export default Education;