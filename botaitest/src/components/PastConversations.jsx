import React from "react";
import { List, ListItem, ListItemText, Card } from "@mui/material";

const PastConversations = ({ conversations }) => (
  <Card sx={{ mt: 3 }}>
    <List>
      {conversations.length === 0 ? (
        <ListItem>
          <ListItemText primary="No past conversations." />
        </ListItem>
      ) : (
        conversations.map((conv, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={`Q: ${conv.question}`}
              secondary={`A: ${conv.response}`}
            />
          </ListItem>
        ))
      )}
    </List>
  </Card>
);

export default PastConversations;
