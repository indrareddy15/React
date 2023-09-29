const VedioConverter = (file: any) => {
  return new Promise((resolve, reject) => {
    if (!file) {
      reject(new Error("No file provided."));
      return;
    }

    // Simulate video conversion (replace this with your actual conversion logic)
    setTimeout(() => {
      const convertedVideoUrl = URL.createObjectURL(file);
      resolve(convertedVideoUrl);
    }, 3000);
  });
};

export default VedioConverter;
