import React from "react";

interface IProps {
    size?: "sm" | "md" | "lg" | "xs";
}

const Spinner = ({ size }: IProps) => {
    return <span className={`loading loading-spinner loading-${size}`}></span>;
};

export default Spinner;
