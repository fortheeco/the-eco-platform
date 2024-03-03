const editMode = JSON.parse(document.getElementById("edit").textContent);


let category = document.querySelectorAll("select")[0];
let goal = document.querySelectorAll("select")[1];
let upload = document.querySelector(".uploader");
let thumbnail = document.querySelector(".thumbnail-cont");
let desc = document.querySelector("textarea");
let locale = document.querySelector(".location");

// Coded by Neon, aka Fine Boy

let form = new FormData();
// CSRF TOKEN

var csrfcookie = function () {
  var cookieValue = null,
    name = "csrftoken";
  if (document.cookie && document.cookie !== "") {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();
      if (cookie.substring(0, name.length + 1) == name + "=") {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
};

let image_arr = [];

upload.addEventListener("change", (e) => {
  Addthumbnail(e.target.files[0], e);
});

const Addthumbnail = (file, e) => {
  if (image_arr.length == 3) {
    alert("Upload only 3 images");
  } else {
    image_arr.push(file);
    let imageCont = document.createElement("div");
    let image = document.createElement("img");
    image.classList.add("thumbnail");
    image.src = window.URL.createObjectURL(file);
    let remove = document.createElement("p");
    remove.classList.add("remove");
    remove.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path fill="#FFFFFF" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>';
    remove.addEventListener("click", () => {
      thumbnail.removeChild(imageCont);
      e.target.value = null;
      image_arr.pop(file);
    });
    imageCont.append(remove);
    imageCont.append(image);
    thumbnail.append(imageCont);
  }
};
// accuarial
// Submit problem to backend via post request

let createUrl = document.querySelector(".add-problem").dataset.createUrl;
let editUrl = document.querySelector(".add-problem").dataset.editUrl;

document.querySelector(".echo").addEventListener("click", async () => {
  if (image_arr.length < 3 &&!editMode) {
    alert("Upload 3 images");
  } else {
    for (let i in image_arr) {
      form.append(`img${i}`, image_arr[i]);
    }
    form.append("category", category.value);
    form.append("goal", parseInt(goal.value));
    form.append("description", desc.value);
    form.append("location", locale.value);

    // Use the correct URL based on whether it's an edit or create scenario
    // from neon..................................
    // turns out changing the url is redundant, using an empty string will target the original url
    // the code below is irrelevant but the actual way to toggle the edit or create state by sending a boolean
    // from the template via json_script.
    let url = editMode?`url for editin                                                                                                                                                                                                                                                                                                                                                                            m                                                                                                                                                                                                                                                                                             g the problem`:'url for creating a problem'


    let res = await fetch('', {
      method: "POST",
      body: form,
      headers: {
        "X-CSRFToken": csrfcookie(),
      },
    });

    if (res.status == 200) {
      // Redirect to the problems page after successful update or create
       window.location.assign(
         `${window.location.origin}/accounts/user/problems`
       );
    }
  }
});

// document.querySelector('#edit_form').addEventListener("submit", async (e) => {
//   e.preventDefault();

//   if (image_arr.length < 3) {
//       alert("Upload 3 images");
//   } else {
//       for (let i in image_arr) {
//           form.append(`img${i}`, image_arr[i]);
//       }
//       form.append("category", category.value);
//       form.append("goal", parseInt(goal.value));
//       form.append("description", desc.value);
//       form.append("location", locale.value);

//       // Use the correct URL based on whether it's an edit or create scenario
//       let url = "{% url 'edit_problem' problem.id %}";
//       if (!url) {
//           url = "{% url 'problems' %}";
//       }

//       // Remove the template tags from the constructed URL
//       url = url.replace("{%", "").replace("%}", "");

//       let res = await fetch(url, {
//           method: "POST",
//           body: form,
//           headers: {
//               "X-CSRFToken": csrfcookie(),
//           },
//       });

//       if (res.status == 200) {
//           // Redirect to the problems page after successful update or create
//           window.location.href = "{% url 'problems' %}";
//       } else {
//           alert("Update failed. Please try again.");
//       }
//   }
// });

export default csrfcookie;
