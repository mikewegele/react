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
