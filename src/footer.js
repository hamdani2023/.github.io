document.addEventListener("DOMContentLoaded", function() {
  // Fetch footer.html and insert it into each page
  fetch("src/footer.html")
      .then(response => response.text())
      .then(html => {
          document.querySelector("body").insertAdjacentHTML("beforeend", html);
      })
      .catch(error => console.error("Error fetching footer:", error));
});
