import React, { useState } from "react";
import { Box, Typography, Select, MenuItem } from "@mui/material";

const FeedbackView = ({ feedback }) => {
  const [filter, setFilter] = useState("all");
  const filteredFeedback = feedback.filter((fb) =>
    filter === "all" ? true : fb.rating === filter
  );

  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant="h6">Feedback:</Typography>
      <Select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        displayEmpty
      >
        <MenuItem value="all">All</MenuItem>
        <MenuItem value="positive">Positive</MenuItem>
        <MenuItem value="negative">Negative</MenuItem>
      </Select>
      {filteredFeedback.length === 0 ? (
        <Typography>No feedback available.</Typography>
      ) : (
        filteredFeedback.map((fb, index) => (
          <Typography
            key={index}
          >{`Rating: ${fb.rating}, Feedback: ${fb.comment}`}</Typography>
        ))
      )}
    </Box>
  );
};

export default FeedbackView;
