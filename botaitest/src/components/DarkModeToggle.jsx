import React from "react";
import { Switch, FormControlLabel } from "@mui/material";

const DarkModeToggle = ({ darkMode, setDarkMode }) => (
  <FormControlLabel
    control={
      <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
    }
    label="Dark Mode"
  />
);

export default DarkModeToggle;
