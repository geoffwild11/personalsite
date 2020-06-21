import React from "react";

interface IDateRangeProps {
    dateEnd?: Date;
    dateStart: Date;
}

/**
 * Creates a date range that can be used for resume information.
 * @param props Properties for determining a date range
 * @returns A span with a date range from start to end. If no end date is provided, replaces the end date with "Present"
 */
const ResumeDateRange: React.SFC<IDateRangeProps> = (props: IDateRangeProps) => {
    const dateFormat = new Intl.DateTimeFormat(["en-US", "en-GB"], {month: "long", year: "numeric"});

    return (
    <span>
        {dateFormat.format(props.dateStart)} - {props.dateEnd ? dateFormat.format(props.dateEnd) : "Present" }
    </span>);
}

export default ResumeDateRange;