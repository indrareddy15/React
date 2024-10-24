import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import data from "../ai-data/sampleData.json";

const Chat = ({ conversations, setConversations }) => {
  const [question, setQuestion] = useState("");
  const [aiResponse, setAiResponse] = useState("");

  const handleAsk = () => {
    const randomResponse = data[Math.floor(Math.random() * data.length)];
    setAiResponse(randomResponse.response);
    setConversations([
      ...conversations,
      { question, response: randomResponse.response },
    ]);
    setQuestion("");
  };

  return (
    <Box sx={{ mt: 3 }}>
      <TextField
        label="Ask a question"
        variant="outlined"
        fullWidth
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 2 }}
        onClick={handleAsk}
      >
        Ask AI
      </Button>
      {aiResponse && (
        <Card sx={{ mt: 3 }}>
          <CardContent>
            <Typography variant="h6">AI Response:</Typography>
            <Typography>{aiResponse}</Typography>
          </CardContent>
        </Card>
      )}
    </Box>
  );
};

export default Chat;
