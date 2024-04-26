import React from "react";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = ({ placeholder = "Type here", ...rest }: IProps) => {
    return <input className="input input-bordered w-full max-w-xs" {...rest} />;
};

export default Input;
