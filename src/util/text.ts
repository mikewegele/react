import {RootState, useAppSelector} from "../store/Store";

type AllowedStoreNames = "users" | "projects";

const useApiStates4 = <T extends AllowedStoreNames>(storeName: T): { [K in T]: RootState[T] } => {
    const storeData = useAppSelector((state) => state) as RootState;
    return {
        [storeName]: storeData[storeName]
    } as { [K in T]: RootState[T] };
};

export default useApiStates4;

// Define the structure of states for different store names
interface UsersState {
    value: string | undefined;
}

interface ProjectsState {
    value: string | undefined;
    test: string | undefined;
}

// Map store names to their respective state types
type StoreStateMap = {
    users: UsersState;
    projects: ProjectsState;
};
/*
// Define the function with generic types
const useApiStates2 = <T extends keyof StoreStateMap>(...storeNames: T[]): { [K in T]: StoreStateMap[K] } => {
    const storeData = useAppSelector((state) => state) as RootState;
    const result = {} as { [K in T]: StoreStateMap[K] };
    storeNames.forEach(storeName => {
        result[storeName] = storeData[storeName];
    });
    return result;
};
*/

/*

import {RootState, useAppSelector} from "../store/Store";

type AllowedStoreNames = "users" | "projects";

type StoreData = {
    [key in AllowedStoreNames]: RootState[key];
};

const useApiStates = <T extends AllowedStoreNames[]>(...storeNames: T): StoreData => {
    const storeData = useAppSelector((state) => state) as StoreData;
    const result: StoreData = {} as StoreData;
    storeNames.forEach(storeName => {
        result[storeName] = storeData[storeName];
    });
    return result;
};

export default useApiStates;


 */