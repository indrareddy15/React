import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

const FeedbackForm = ({ onSubmitFeedback }) => {
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = () => {
    onSubmitFeedback({ rating, comment });
    setRating("");
    setComment("");
  };

  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant="h6">Leave Feedback:</Typography>
      <TextField
        label="Rating"
        variant="outlined"
        fullWidth
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      <TextField
        label="Comment"
        variant="outlined"
        fullWidth
        sx={{ mt: 2 }}
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 2 }}
        onClick={handleSubmit}
      >
        Submit Feedback
      </Button>
    </Box>
  );
};

export default FeedbackForm;
