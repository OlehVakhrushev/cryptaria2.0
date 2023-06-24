import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const nftsApiHeaders = {
    'x-rapidapi-host': process.env.REACT_APP_NFTS_RAPIDAPI_HOST,
    'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
};

const createRequest = (url) => ({ url, headers: nftsApiHeaders });

export const openSeaApi = createApi({
    reducerPath: 'openSeaApi',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_NFT_API_URL}),
    endpoints: (builder) => ({
        getNfts: builder.query({
            query: (count) => createRequest(`/assets?limit=${count}`),
        }),

        getNftsDetails: builder.query({
            query: (token_id) => createRequest(`/assets/${token_id}`),
        }),

        // Note: Change the coin price history endpoint from this - `coin/${coinId}/history/${timeperiod} to this - `coin/${coinId}/history?timeperiod=${timeperiod}`
        // getNftsHistory: builder.query({
        //     query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
        // }),
    }),
});

export const {
    useGetNftsQuery,
    useGetNftsDetailsQuery,
    useGetNftsHistoryQuery,
} = openSeaApi;
