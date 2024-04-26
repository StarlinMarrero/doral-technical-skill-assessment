import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import config from "../../../config";
import { IWikipediaFeedRequest, IWikipediaFeedResponse } from "./feed.interfaces";

export const feedRTKProvider = createApi({
    reducerPath: "feedRTKProvider",
    baseQuery: fetchBaseQuery({ baseUrl: config.api.baseURL }),
    tagTypes: ["Post"],
    endpoints: (builder) => ({
        getFeed: builder.query<IWikipediaFeedResponse, Partial<IWikipediaFeedRequest>>({
            query: (data) => ({
                url: `feed`,
                method: "GET",
                params: data,
            }),
            transformResponse: (response: IWikipediaFeedResponse) => {
                console.log(`🚨 - getFeed - response:`, response);
                
                return response;
            }
        }),
    }),
});

export const { useGetFeedQuery } = feedRTKProvider;
