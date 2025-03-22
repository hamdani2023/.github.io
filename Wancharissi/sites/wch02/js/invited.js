$(document).ready(function () {
  fetch("json/invited.json")
    .then((response) => response.json())
    .then((data) => {
      const $invitedList = $("#invited");
      data.invited.forEach((name) => {
        $invitedList.append(`<li>${name}</li>`);
      });
    })
    .catch((error) => {
      console.error("حدث خطأ أثناء تحميل البيانات:", error);
    });
});