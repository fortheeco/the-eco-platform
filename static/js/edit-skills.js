// start with removing skills from the user profile

// let curr_skills_el=document.querySelectorAll('.skill-item')



// for(let skill of curr_skills_el){
//     skill.children[0].addEventListener('click',(e)=>{
//         console.log(skill.textContent);
//     })
// }

const add_skill=document.querySelector('.add')
const input=document.querySelector('input')
const new_skills=document.querySelector('.new-skills')
let addSKillBtn=document.querySelector('.update')

const skills = [];

add_skill.addEventListener('click',(e)=>{
    let new_skill=input.value.trim()
    if (new_skill!==''){
           let skill_el = document.createElement("p");
           let remove = document.createElement("p");
           remove.innerHTML =
          '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>';
           remove.classList.add("remove-added");
           remove.addEventListener("click", () => {
             new_skills.removeChild(skill_el);
           });
           skill_el.classList.add("skill-item");
           skill_el.textContent = new_skill;
           skill_el.appendChild(remove);
           skills.push(new_skill);
           input.value = "";
           new_skills.appendChild(skill_el);
    }
    else{
        alert("Input a skill")
    }


    // remove skill elem


})





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





addSKillBtn.addEventListener("click", async () => {
  let skill_obj = {
    skills,
  };
  let response = await fetch(
    `${window.location.href.split("/")[0]}//${
      window.location.host
    }/accounts/update-profile/skill`,
    {
      method: "POST",
      body: JSON.stringify(skill_obj),
      headers: {
        "X-CSRFToken": csrfcookie(),
      },
    }
  );
  if (response.status == 200) {
    // console.log(window.location.host);
    // window.location.assign(
    //   `${window.location.href.split("/")[0]}//${
    //     window.location.host
    //   }/accounts/update-skills/?skill=added`
    // );
     window.location.reload()
  }
});
