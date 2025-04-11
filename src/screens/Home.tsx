import React, {useCallback} from "react";
import {useNavigate} from "react-router";
import {Button} from "@mui/material";
import {useAppDispatch} from "../store/Store";
import {addProject} from "../store/reducer/projects";
import {addUser} from "../store/reducer/users";
import makeStyles from "../util/makeStyles";

const useStyles = makeStyles(() => ({
    button: {
        color: "white",
        font: "18px bold",
        background: "red"
    }
}))

const Home: React.FC = () => {

    const {classes} = useStyles();
    const navigate = useNavigate();

    const dispatch = useAppDispatch()

    const buttonClickHandler = useCallback(() => {
        dispatch(addUser("MIKE"));
        dispatch(addProject("TEST 123"));
        navigate("/project");
    }, [dispatch, navigate]);

    return (
        <Button
            className={classes.button}
            onClick={buttonClickHandler}>
            PROJECT
        </Button>
    );
}

export default Home;