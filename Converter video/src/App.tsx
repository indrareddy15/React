import React, { useState } from "react";
import { Container, Typography, Button, TextField } from "@mui/material";

function App() {
  const [convertedVideoUrl, setConvertedVideoUrl]: any = useState(null);

  const handleFileChange = async (event: any) => {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("video", file);

    try {
      const response = await fetch("http://localhost:5000/convert", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setConvertedVideoUrl(URL.createObjectURL(await response.blob()));
      } else {
        console.error("Conversion failed.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Video Converter
      </Typography>
      <TextField
        variant="outlined"
        label="Select a video file"
        type="file"
        fullWidth
        onChange={handleFileChange}
      />
      <Button variant="contained" color="primary" fullWidth>
        Convert
      </Button>
      {convertedVideoUrl && (
        <video controls width="100%" src={convertedVideoUrl} />
      )}
    </Container>
  );
}

export default App;
