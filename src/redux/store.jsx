import { applyMiddleware, legacy_createStore as createstore } from "redux";
import { createLogger } from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'
import rpm from "redux-promise-middleware"
import reducers from "./reducer";

//setup redux-persist
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ["auth"]
}

const persistedReducer = persistReducer(persistConfig, reducers)

const logger = createLogger();
const middlewares = applyMiddleware(rpm, logger)

export let store = createstore(persistedReducer, middlewares);
export let persistor = persistStore(store)

