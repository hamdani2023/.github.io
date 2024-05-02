document.addEventListener("DOMContentLoaded", function () {
    // Fetch HTML content from external file
    fetch("src/canevasPOO.html")
      .then((response) => response.text())
      .then((html) => {
        // Select the target element where you want to insert the HTML content
        const targetElement = document.getElementById("content-placeholder");
  
        // Insert the fetched HTML content into the target element
        targetElement.insertAdjacentHTML("afterbegin", html);
      })
      .catch((error) => console.error("Error fetching HTML content:", error));
  });