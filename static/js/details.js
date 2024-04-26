const welcomeBtn = document.querySelector("#welcomeBtn");
const welcomePage = document.querySelector("#user-welcome");
const moreBtn = document.querySelector("#more");
const skillsetPage = document.querySelector("#more-details");
const addSKillBtn = document.querySelector("#add-skill");
const skillInput = document.getElementById("skillInput");
const skillList = document.getElementById("skill-List");
const skills = [];
const location_form = document.querySelector(".location-form");
let backBtn = document.querySelector(".back-btn");
let profile_img = Array.from(document.querySelectorAll(".profile_img"));
let location_submit_form = new FormData(location_form);

let static_url = location.origin;

// submit location, bio and profile image form to the server
location_form.addEventListener("submit", async (e) => {
  e.preventDefault();
  for (let field of location_submit_form.keys()) {
    location_submit_form.set(field, e.target[field].value);
  }
  location_submit_form.set("image", e.target.image.files[0]);
  await fetch("", {
    method: "POST",
    body: location_submit_form,
  }).then(async (res) => {
    let data = await res.json();
    profile_img.forEach((img) => {
      img.src = `${static_url}${data.data}`;
    });
  });
  skillsetPage.classList.remove("d-none");
  skillsetPage.classList.add("d-show");
  welcomePage.classList.add("d-none");
});

backBtn.addEventListener("click", () => {
  skillsetPage.classList.add("d-none");
  skillsetPage.classList.remove("d-show");
  welcomePage.classList.remove("d-none");
  welcomePage.classList.remove("d-show");
});

welcomeBtn.addEventListener("click", () => {
  skillsetPage.classList.remove("d-none");
  skillsetPage.classList.add("d-show");
  welcomePage.classList.add("d-none");
});

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

addSKillBtn.addEventListener("click", () => {
  const skill = skillInput.value.trim();
  if (skill !== "") {
    skills.push(skill);
    updateSkillList();
    skillInput.value = "";
  }
});

updateSkillList = () => {
  skillList.innerHTML = ""; // Clear previous list

  skills.forEach((skill, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = skill;
    listItem.classList.add("skills");

    const removeButton = document.createElement("button");
    removeButton.innerHTML =
      "<ion-icon name='close-circle-outline' style='font-size: 1.2rem;'></ion-icon>";
    const removeIcon = document.createElement("img");
    // removeIcon.src = "/static/assets/icons/x-lg.svg";
    // removeButton.appendChild(removeIcon);
    removeButton.addEventListener("click", () => {
      skills.splice(index, 1);
      updateSkillList();
    });
    listItem.appendChild(removeButton);
    skillList.appendChild(listItem);
  });
};

moreBtn.addEventListener("click", async () => {
  let skill_obj = {
    skills,
  };
  let response = await fetch(`${window.location.href}skill/`, {
    method: "POST",
    body: JSON.stringify(skill_obj),
    headers: {
      "X-CSRFToken": csrfcookie(),
    },
  });
  if (response.status == 200) {
    window.location.assign(
      `${window.location.href.split("/")[0]}//${
        window.location.host
      }/accounts/user/profile`
    );
  }
});
