import React from "react";

interface IInfoListProps {
    infoList?: string[];
}

const ResumeInfoList: React.SFC<IInfoListProps> = (props: IInfoListProps) => {
    if (!props.infoList) {return null;}
    
    return (
        <ul className="responsibilityList">
            {props.infoList.map((info: string) => <li>{info}</li>)}
        </ul>
    );
}

export default ResumeInfoList;