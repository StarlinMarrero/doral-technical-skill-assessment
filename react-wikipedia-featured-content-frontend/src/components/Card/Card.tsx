import React from "react";

interface IProps {
    children: React.ReactNode;
    imgSrc?: string;
    style?: React.CSSProperties;
    className?: string;
    imgStyle?: React.CSSProperties;
    footer?: React.ReactNode;
}

const Card = ({ children, imgSrc, style, className = "w-full p-6 bg-base-100 shadow-xl mt-6 flex flex-col", imgStyle, footer }: IProps) => {
    return (
        <>
            <div className={`card ${className}`} style={style}>
                {imgSrc && (
                    <figure className="flex-grow-0 flex-shrink-0">
                        <img src={imgSrc} style={imgStyle} className="w-full h-auto" />
                    </figure>
                )}
                <div className="card-body p-1">
                    {children}
                    {footer && <div className="card-actions justify-end">{footer}</div>}
                </div>
            </div>
        </>
    );
};

export default Card;
