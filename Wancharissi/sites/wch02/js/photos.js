fetch("get_photos.php")
      .then((response) => response.json())
      .then((images) => {
        const gallery = document.getElementById("gallery");
        gallery.innerHTML = "";
        images.forEach((src) => {
          const img = document.createElement("img");
          img.src = src;
          gallery.appendChild(img);
        });
      })
      .catch((error) => {
        document.getElementById("gallery").innerText =
          "حدث خطأ أثناء تحميل الصور.";
        console.error(error);
      });