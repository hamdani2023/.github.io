fetch("get_videos.php")
  .then((response) => response.json())
  .then((videos) => {
    const gallery = document.getElementById("videos");
    gallery.innerHTML = ""; // Clear existing content

    videos.forEach((src) => {
      const video = document.createElement("video");
      video.controls = true; // Enables play, pause, volume controls
      video.width = 320; // Set a width (adjust as needed)
      video.height = 240; // Set a height (adjust as needed)

      const source = document.createElement("source");
      source.src = src;
      source.type = "video/mp4"; // Ensure correct MIME type

      video.appendChild(source);
      gallery.appendChild(video);
    });
  })
  .catch((error) => {
    document.getElementById("videos").innerText =
      "حدث خطأ أثناء تحميل مقاطع الفيديو.";
    console.error(error);
  });