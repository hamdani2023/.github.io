document.addEventListener("DOMContentLoaded", function () {
  // Collect all galleries by their class
  const galleries = document.querySelectorAll(".gallery");
  const previewContainer = document.getElementById("preview-container");
  const previewImage = document.getElementById("preview-image");

  // Function to handle image click and show the preview
  function handleImageClick(event) {
    if (event.target.tagName === "IMG") {
      previewImage.src = event.target.src; // Set the clicked image as preview
      previewContainer.classList.add("active"); // Show the preview container
    }
  }

  // Add click event listener to each gallery if it exists
  galleries.forEach((gallery) => {
    gallery.addEventListener("click", handleImageClick);
  });

  // Close the preview when clicking outside the image
  previewContainer.addEventListener("click", function (event) {
    if (event.target === previewContainer) {
      previewContainer.classList.remove("active"); // Hide the preview container
    }
  });
});
