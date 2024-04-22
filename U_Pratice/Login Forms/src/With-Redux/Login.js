import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Typography,
    TextField,
    Button,
    Container,
    Grid,
} from "@mui/material";

const Login = () => {
    const [text, updateText] = useState("");
    const [password, updatePassword] = useState("");

    const history = useNavigate();

    const handleClick = (e) => {
        history("/logout");
    };

    const handleChangeText = (e) => {
        updateText(e.target.value);
    };

    const handleChangePass = (e) => {
        updatePassword(e.target.value);
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" gutterBottom>
                Login Component Data
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        label="User Name"
                        fullWidth
                        variant="outlined"
                        value={text}
                        onChange={handleChangeText}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Password"
                        fullWidth
                        variant="outlined"
                        type="password"
                        value={password}
                        onChange={handleChangePass}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        onClick={handleClick}
                    >
                        Login
                    </Button>
                </Grid>
            </Grid>
            <hr />
            <Typography variant="body1">{[text, password].join(", ")}</Typography>
        </Container>
    );
};

export default Login;
