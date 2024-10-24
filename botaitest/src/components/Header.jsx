import React from "react";
import { AppBar, Toolbar, Button, Typography } from "@mui/material";

const Header = ({ onNewConversation, onPastConversations }) => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        AI Chatbot
      </Typography>
      <Button color="inherit" onClick={onNewConversation}>
        New Chat
      </Button>
      <Button color="inherit" onClick={onPastConversations}>
        Past Conversations
      </Button>
    </Toolbar>
  </AppBar>
);

export default Header;
