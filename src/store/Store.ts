import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {ProjectsSlice} from "./reducer/projects";
import {UsersSlice} from "./reducer/users";
import {useDispatch, useSelector} from "react-redux";

export const rootReducer = combineReducers({
    projects: ProjectsSlice.reducer,
    users: UsersSlice.reducer
});

export type RootState = ReturnType<typeof rootReducer>

export const ClearStore = {
    type: "Root:Clear"
};

export const store = configureStore({
    reducer: <RootState>(state: RootState, action: { type: string }) => {
        if (action === ClearStore) {
            return rootReducer(undefined, action);
        }

        // See https://github.com/rt2zz/redux-persist/issues/1140
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return rootReducer(state as any, action);
    }
});

export type RootDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<RootDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()

export type ReducerReturn = {}