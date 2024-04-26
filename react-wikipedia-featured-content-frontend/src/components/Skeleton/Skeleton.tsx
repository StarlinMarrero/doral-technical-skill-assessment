import React from "react";

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
    multiple?: number;
}

const SkeletonCard = ({ multiple = 1, ...rest }: IProps) => {
    if (multiple) {
        return (
            <>
                {[...Array(multiple)].map((_, index) => (
                    <div {...rest}>
                        <React.Fragment key={index}>
                            <div className="skeleton h-32 w-full"></div>
                            <div className="skeleton h-4 w-28"></div>
                            <div className="skeleton h-4 w-full"></div>
                            <div className="skeleton h-4 w-full"></div>
                        </React.Fragment>
                    </div>
                ))}
            </>
        );
    }
};

export default SkeletonCard;
