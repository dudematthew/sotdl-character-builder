import { configureStore, combineReducers, AnyAction } from "@reduxjs/toolkit";
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

// Create an empty reducer for now (you'll add your own character slice later)
const emptyReducer = (state = {}, action: AnyAction) => state;

const persistConfig = {
	key: "root",
	storage,
	version: 1,
	whitelist: [], // Add slices you want to persist here
};

const rootReducer = combineReducers({
	// Add your reducers here
	empty: emptyReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [
					FLUSH,
					REHYDRATE,
					PAUSE,
					PERSIST,
					PURGE,
					REGISTER,
				],
			},
		}),
	devTools: import.meta.env.DEV,
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
