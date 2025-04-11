import React from "react";
import {Button, Typography} from "@mui/material";
import {useNavigate} from "react-router";
import useApiStates from "../util/useApiStates";
import makeStyles from "../util/makeStyles";

const useStyles = makeStyles(() => ({
    button: {
        color: "white",
        font: "18px bold",
        background: "red"
    }
}))

const Project: React.FC = () => {

    const {classes} = useStyles();
    const navigate = useNavigate();

    const {users} = useApiStates("users");

    return (
        <>
            <Button
                className={classes.button}
                onClick={() => navigate("/")}>
                HOME
            </Button>
            <Typography>
                {users.value}
            </Typography>
            <Typography>
                {users.valueNumber}
            </Typography>
        </>
    );
}

export default Project;