$(document).ready(function () {
  fetch("json/scientCom.json")
    .then((response) => response.json())
    .then((data) => {
      const $scientComList = $("#scientCom");
      data.scientCom.forEach((name) => {
        $scientComList.append(`<li>${name}</li>`);
      });
    })
    .catch((error) => {
      console.error("حدث خطأ أثناء تحميل البيانات:", error);
    });
});
