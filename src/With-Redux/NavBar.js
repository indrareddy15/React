import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";

const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Box flexGrow={1}>
                    <Typography variant="h6">Login and Logout Application</Typography>
                </Box>
                <img
                    src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=2000"
                    width="40"
                    height="40"
                    alt="login"
                    style={{ borderRadius: "50%" }}
                />
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
