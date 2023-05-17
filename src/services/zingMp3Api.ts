import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const zingMp3Api = createApi({
    reducerPath: 'zingMp3Api',
    baseQuery: fetchBaseQuery({baseUrl:'http://mp3.zing.vn/'}),
    endpoints: (builder) => ({
        getSong :  builder.query({
            query: (params) => ({
                url:'xhr/media/get-source?type=audio&key=kmJHTZHNCVaSmSuymyFHLH',
                params,
            }),
        })
    })
})

export const {useGetSongQuery} =  zingMp3Api;