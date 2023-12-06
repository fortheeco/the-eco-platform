let skills=[]

let skill_input=document.querySelector('.input')
let skills_box=document.querySelector('.skills-box')
let btn=document.querySelector('.add-btn')
let smt=document.querySelector('.submit')


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

btn.addEventListener('click',()=>{
  if(skill_input.value){
        skills.push(skill_input.value.toLowerCase());
        let skill = document.createElement("p");
        skill.textContent = skill_input.value;
        skills_box.appendChild(skill);
        skill_input.value = "";
  }
  console.log(skills);

})

smt.addEventListener('click',async()=>{
    let skill_obj={
        skills
    }
    let response = await fetch(`${window.location.href}/skill`, {
      method: "POST",
      body: JSON.stringify(skill_obj),
      headers: {
        "X-CSRFToken": csrfcookie(),
      },
    });
    if (response.status==200){
        console.log("skills sent");
    }
})


