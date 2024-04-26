import React from "react";
import Button from "../Button/Button";

interface IProps {
    title: React.ReactNode;
    items: React.ReactNode[];
}

const Dropdown = ({ title, items }: IProps) => {
    return (
        <div className="dropdown">
            <Button tabIndex={0} role="button" className="btn m-1">
                {title}
            </Button>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default Dropdown;
