import React from "react";

enum EnumButtonStyleTypes {
    PRIMARY = "btn-primary",
    SECONDARY = "btn-secondary",
    SUCCESS = "btn-success",
    DANGER = "btn-danger",
    WARNING = "btn-warning",
    INFO = "btn-info",
    LIGHT = "btn-light",
    DARK = "btn-dark",
    LINK = "btn-link",
}

type EnumButtonStyleTypesKeys = `${EnumButtonStyleTypes}`;

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    styleType?: EnumButtonStyleTypesKeys;
}

const Button = ({ children, styleType, ...rest }: IButtonProps) => {
    return (
        <button className={`btn ${styleType || EnumButtonStyleTypes.PRIMARY}`} {...rest}>
            {children}
        </button>
    );
};

export default Button;
