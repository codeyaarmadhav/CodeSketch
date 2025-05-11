const handleDownload = async (umlImage) => {
    try {
      const response = await fetch(umlImage, {
        mode: 'cors' // make sure CORS is allowed
      });

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = "diagram.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Optional: revoke object URL to free memory
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed", error);
      alert("Failed to download image. Try right-click > Save Image As.");
    }
  };

  export { handleDownload };