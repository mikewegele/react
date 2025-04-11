import {RootState, useAppSelector} from "../store/Store";

type AllowedStoreNames = "users" | "projects";
type StoreData = { [key in AllowedStoreNames]: RootState[key] };

const useApiStates = <T extends AllowedStoreNames[]>(...storeNames: T): StoreData => {
    const result = {} as StoreData;
    const selector = useAppSelector;
    storeNames.forEach(storeName => {
        result[storeName as T[number]] = selector((state) => state[storeName]) as StoreData[T[number]];
    });
    return result;
};

export default useApiStates;
