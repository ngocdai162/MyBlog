import { configureStore} from "@reduxjs/toolkit";
import { zingMp3Api } from "../services/zingMp3Api";


export const store  = configureStore({
    reducer: {
        [zingMp3Api.reducerPath]: zingMp3Api.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(zingMp3Api.middleware),
})