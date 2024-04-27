import React from "react";
// | "icon-card" //if need to add more types of images

type TypeImageToUse = "logo";

interface IProps {
    typeToUSe: TypeImageToUse;
}

const ImageToUse = ({ typeToUSe }: IProps) => {
    const imageSource = {
        logo: "/icons/icons8-book-100.png",
    };
    return <img src={imageSource[typeToUSe]} alt="Wikipedia" className="w-10 h-10" />;
};

export default ImageToUse;
