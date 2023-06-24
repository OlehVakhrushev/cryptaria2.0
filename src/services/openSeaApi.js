// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
//
//
// const nftsApiHeaders = {
//     'x-rapidapi-host': process.env.REACT_APP_NFTS_RAPIDAPI_HOST,
//     'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
// };
//
// const createRequest = (url) => ({ url, headers: nftsApiHeaders });
//
// export const openSeaApi = createApi({
//     reducerPath: 'openSeaApi',
//     baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_NFT_API_URL}),
//     endpoints: (builder) => ({
//         getSalesNfts: builder.query({
//             query: () => createRequest(`/api/get-collections-ranking`),
//         }),
//     }),
// });
//
// export const {
//     useGetSalesNftsQuery,
// } = openSeaApi;
