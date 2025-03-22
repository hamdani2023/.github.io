$(document).ready(function () {
  fetch("json/orgCom.json")
    .then((response) => response.json())
    .then((data) => {
      const $orgCom = $("#orgCom");
      data.orgCom.forEach((name) => {
        $orgCom.append(`<li>${name}</li>`);
      });
    })
    .catch((error) => {
      console.error("حدث خطأ أثناء تحميل البيانات:", error);
    });
});
