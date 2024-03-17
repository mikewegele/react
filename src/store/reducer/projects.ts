import {createSlice, Draft, PayloadAction} from "@reduxjs/toolkit";
import {RootDispatch, RootState} from "../Store";


interface State {
    value: string | undefined,
}

const reduceAddProject = (draft: Draft<State>, action: PayloadAction<string>) => {
    draft.value = action.payload;
};

const slice = createSlice({
    name: "Projects",
    initialState: {
        value: undefined,
    } as State,
    reducers: {
        "PROJECT": reduceAddProject
    }
});

const addProject = slice.actions["PROJECT"];

const fetchProjects = () => {
    return async (dispatch: RootDispatch, getState: () => RootState): Promise<void> => {
        dispatch(addProject("TEST 212345235"))
    };
};

export {
    slice as ProjectsSlice,
    addProject,
    fetchProjects
};
