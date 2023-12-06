// returns an option Nodelist based on a given category
import setSelectOptions from './unsdg-goals-select.js'




// csrf token

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

// ECO category + UNSDG select menu
const categories = document.querySelectorAll('.radio')
const selectMenu = document.getElementById('goal-select')
const form_el=document.querySelector('form')
// Your Javascript style is lovely Gee
// Meanwhile........................
// Since we are sending a number of skills to the backend,
// I'll make use of a form data instance to bundle the skills inputed in an array and send
// to the backend server
let required_skills=[]



let form=new FormData(form_el)

console.log("Mena");

for(const key of form.keys()){
	console.log(key);
}

// input for adding skill requirements
const skillsInput = document.querySelector('.skills__input')

// Insert new skill tag to the DOM
function insertSkillTag(text) {
	const template = document.querySelector('template')
	const skillTemplate = template.content.cloneNode(true)
	// wrapper for skill tags + input field
	const skillContainer = document.querySelector('.skills__wrapper')

	const skillText = skillTemplate.querySelector('.skill__txt')
	skillText.textContent = text
	// add the required skill to the array(Neon)
    required_skills.push(text)
	console.log(required_skills);
	// insert new skill tag before input field
	skillContainer.insertBefore(skillTemplate, skillsInput)
}

// add click listener to cancel icon to remove skill tag
function removeSkillTag() {
	const deleteTagIcons = document.querySelectorAll('.skill__cancel')

	deleteTagIcons.forEach((icon) => {
		icon.addEventListener('click', () => {
			// remove the skill from the skill array(Added by Neon)
			required_skills=required_skills.filter(item=>item!=icon.parentElement.textContent.trim())
			console.log(required_skills);
			icon.parentElement.remove()
		})
	})
}

window.addEventListener('DOMContentLoaded', () => {
	// add new skill when user clicks 'Enter' key
	skillsInput.addEventListener('keypress', (e) => {
		const text = e.target.value

		if (e.key === 'Enter' && text.length > 1) {
			// stop browser from focusing on next input
			e.preventDefault()

			// add new skill and clear the input field
			insertSkillTag(text)
			e.target.value = ''

			// init listener for removing skill tags
			// putting it here so that it also affects new tags
			removeSkillTag()
		}
	})
	// removeSkillTag()

	// set the default select options == default checked ECO category
	categories.forEach((ecoCategory) => {
		if (ecoCategory.checked === true) {
			selectMenu.innerHTML = setSelectOptions(ecoCategory.id)
		}
	})
})

// set Current ECO + UNSDG Select Menu options/Category
categories.forEach((ecoCategory) => {
	ecoCategory.addEventListener('click', (e) => {
		if (e.target.checked === true) {
			// const selectOptions = setSelectOptions(e.target.value)

			selectMenu.innerHTML = setSelectOptions(e.target.value)
		}
	})
})

// Added by Neon, make a request to the backend server to process and save the form data(s)

form_el.addEventListener('submit',async(e)=>{
	e.preventDefault();
	// Set the key value pair propertis for the form data
    for(const key of form.keys()){
		form.set(key,e.target[key].value)
	}
	form.set('skills',required_skills)
    let res = await fetch("", {
      method: "POST",
      body: form,
      headers: {
        "X-CSRFToken": csrfcookie(),
      },
    });
	if (res.status==200){
		    window.location.assign(
          `${window.location.href.split("/")[0]}//${
            window.location.host
          }/accounts/user/projects`
        );
	}
})
