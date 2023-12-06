const welcomeBtn = document.querySelector("#welcomeBtn");
const welcomePage = document.querySelector("#user-welcome");
const moreBtn = document.querySelector("#more");
const skillsetPage = document.querySelector("#more-details");
const addSKillBtn = document.querySelector("#add-skill");
const skillInput = document.getElementById("skillInput");
const skillList = document.getElementById("skill-List");
const skills = [];

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
    removeButton.textContent="x"
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
  let response = await fetch(`${window.location.href}/skill`, {
    method: "POST",
    body: JSON.stringify(skill_obj),
    headers: {
      "X-CSRFToken": csrfcookie(),
    },
  });
  if (response.status == 200) {
    window.location.assign(
      `${window.location.href.split("/")[0]}//${window.location.host}/accounts/user/profile`
    );
  }
});
