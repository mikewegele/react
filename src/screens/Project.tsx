import React from "react";
import {Button, Typography} from "@mui/material";
import {useNavigate} from "react-router";
import {tss} from "tss-react/mui";
import useApiStates from "../util/UseApiStates";

const useStyles = tss.create(() => ({
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