import { configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from 'redux-persist/lib/storage'
import { encryptTransform } from "redux-persist-transform-encrypt";
import rootReducer from "./features";
const persistConfig = {
    key: "root",
    storage,
    transforms: [
        encryptTransform({
            secretKey: "my-super-secret-key",
            onError: function (error) {
                console.log('error', error)
            },
        }),
    ],
    blacklist: [""],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware(
            {
                serializableCheck: {
                    ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
                },
            }
        )
}
)


export const persistor = persistStore(store);