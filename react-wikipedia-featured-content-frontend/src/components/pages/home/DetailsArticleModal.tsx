import React from "react";
import { Tfa } from "../../../redux/rtk-query/feed/feed.interfaces";

interface IProps {
    data: Partial<Tfa>;
}

const DetailsArticleModal = ({ data }: IProps) => {
    console.log(`🚨 - DetailsArticleModal - data:`, data);

    return (
        <>
            <div className="mb-5">
                {data.thumbnail && (
                    <img
                        src={data.thumbnail?.source}
                        alt={data.normalizedtitle}
                        className="w-full h-auto"
                        style={{
                            width: "45%",
                            height: "auto",
                            margin: "0 auto",
                            display: "block",
                            objectFit: "cover",
                            borderRadius: "10px",
                        }}
                    />
                )}
            </div>
            <div>
                <h1 className="text-3xl font-bold">{data.normalizedtitle}</h1>
                <p>{data.extract}</p>

                <div className="mt-5">
                    <a href={`https://en.wikipedia.org/wiki/${data.normalizedtitle}`} target="_blank" rel="noreferrer" className="text-blue-500 underline">
                        Read more
                    </a>
                </div>
            </div>
        </>
    );
};

export default DetailsArticleModal;
