import React, { ReactNode } from "react";

interface IProps {
    children: ReactNode;
    link: string;
}

const SafeBlankLink: React.SFC<IProps> = (props: IProps) => {
    return (
        <a href={props.link} target="_blank" rel="noopener noreferrer">
            {props.children}
        </a>
    );
}

export default SafeBlankLink;