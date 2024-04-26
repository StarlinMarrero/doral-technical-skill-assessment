import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import config from "../config";
import middleware from "./middleware";
import { feedRTKProvider } from "./rtk-query/feed";

export const store = configureStore({
    reducer: {
        [feedRTKProvider.reducerPath]: feedRTKProvider.reducer,
    },

    middleware: (gDM) => {
        return gDM().concat(middleware);
    },
    devTools: !config.app.isProduction,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
