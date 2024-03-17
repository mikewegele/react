import {createSlice, Draft, PayloadAction} from "@reduxjs/toolkit";
import {RootDispatch, RootState} from "../Store";


interface State {
    value: string | undefined,

}

const reduceAddUser = (draft: Draft<State>, action: PayloadAction<string>) => {
    draft.value = action.payload;
};

const slice = createSlice({
    name: "Users",
    initialState: {
        value: undefined
    } as State,
    reducers: {
        "USER": reduceAddUser
    }
});

const addUser = slice.actions["USER"];

const fetchUsers = (newValue: string) => {
    return async (dispatch: RootDispatch, getState: () => RootState): Promise<void> => {
        dispatch(addUser(newValue))
    };
};

export {
    slice as UsersSlice,
    addUser,
    fetchUsers
};
