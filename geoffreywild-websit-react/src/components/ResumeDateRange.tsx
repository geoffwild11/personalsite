import React from "react";

interface IDateRangeProps {
    dateEnd?: Date;
    dateStart: Date;
}

const ResumeDateRange: React.SFC<IDateRangeProps> = (props: IDateRangeProps) => {
    const dateFormat = new Intl.DateTimeFormat(["en-US", "en-GB"], {month: "long", year: "numeric"});

    return (
    <span>
        {dateFormat.format(props.dateStart)} - {props.dateEnd ? dateFormat.format(props.dateEnd) : "Present" }
    </span>);
}

export default ResumeDateRange;