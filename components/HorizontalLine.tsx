import React from "react";

interface HorizontalLineProps {
    className: string
}

const HorizontalLine = ({className}: HorizontalLineProps): JSX.Element => {
    return (
        <div
            className={className}
            style={{
                backgroundColor: "rgba(255,255,255,0.5)",
                height: "1px",
            }}

        />
    );
};

export default HorizontalLine;
