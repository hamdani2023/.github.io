$(document).ready(function () {
    fetch("data/conference.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Display introduction
        $("#introduction-content").html(`<p>${data.introduction}</p>`);
  
        // Display problematics
        $("#problematic-content").html(`<p>${data.problematic}</p>`);
  
        // Display objectives title
        $("#objectives-title").html(`<h3>${data.objectivesTitle}</h3>`);
  
        // Clear and fill objectives list
        $("#objectives-list").empty();
        data.objectives.forEach(function (objective) {
          $("#objectives-list").append(`<li>${objective}</li>`);
        });
  
        // Display axes
        $("#axes").empty();
        data.axes.forEach(function (axe, index) {
          let axeContent = `<div class="axe">
            <h4>المحور ${index + 1}: ${axe.title}</h4>
            <ul>`;
          axe.items.forEach(function (item) {
            axeContent += `<li>${item}</li>`;
          });
          axeContent += `</ul></div>`;
          $("#axes").append(axeContent);
        });
  
        // Display conditions
        $("#conditions-list").empty();
        data.conditions.forEach(function (condition) {
          $("#conditions-list").append(`<li>${condition}</li>`);
        });
  
        // Display contact email
        $("#contact-email").html(
          `<a href="mailto:${data.contactEmail}">${data.contactEmail}</a>`
        );
      })
      .catch((error) => {
        console.log("Error loading the conference data:", error);
      });
  });