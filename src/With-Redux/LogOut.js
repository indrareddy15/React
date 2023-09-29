import React from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Button, Container } from "@mui/material";

const Logout = () => {
    const history = useNavigate();

    const backToLogin = () => {
        history("/");
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h4">Logout ?</Typography>
            <Button variant="contained" color="primary" onClick={backToLogin}>
                Back to Login
            </Button>
        </Container>
    );
};

export default Logout;
