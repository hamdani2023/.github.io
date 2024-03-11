document.addEventListener("DOMContentLoaded", function () {
  // Fetch header.html and insert it into each page
  fetch("src/header.html")
    .then((response) => response.text())
    .then((html) => {
      document.querySelector("body").insertAdjacentHTML("afterbegin", html);
    })
    .catch((error) => console.error("Error fetching header:", error));
});
