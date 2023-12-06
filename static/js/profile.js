// UI VARIABLES
const projectsBtn = document.getElementById('project-nav')
const problemsBtn = document.getElementById('problem-nav')
const ideaBtn = document.getElementById('idea-nav')

const problemSection = document.getElementById('problems')
const projectSection = document.getElementById('projects')
const ideaSection = document.getElementById('ideas')

const profileNavElements = document.querySelectorAll('.user-nav__link')

const allNavToggle = document.querySelectorAll('.card-nav__toggle')
const navContainer = document.querySelectorAll('.card-nav__wrapper')

// toggle active nav
profileNavElements.forEach((nav) => {
	nav.addEventListener('click', () => {
		toggleActive(nav, ...profileNavElements)
	})
})

// display projects
projectsBtn.addEventListener('click', () =>
	toggleDisplay(projectSection, problemSection, ideaSection)
)

// display problems
problemsBtn.addEventListener('click', () =>
	toggleDisplay(problemSection, projectSection, ideaSection)
)

// display ideas
ideaBtn.addEventListener('click', () =>
	toggleDisplay(ideaSection, projectSection, problemSection)
)

// toggle display hidden
function toggleDisplay(show, ...hide) {
	show.classList.remove('hidden')
	hide.forEach((element) => element.classList.add('hidden'))
}

// Toggle Active nav class
function toggleActive(active, ...notActive) {
	notActive.forEach((element) => element.classList.remove('active-nav'))
	active.classList.add('active-nav')
}

// TOGGLE MENU
for (let toggleIndex = 0; toggleIndex < allNavToggle.length; toggleIndex++) {
	allNavToggle[toggleIndex].addEventListener('click', () =>
		toggleNavbar(toggleIndex)
	)
}

// TOGGLE MENU BAR BASED ON INDEX OF THE MENU GROUP
function toggleNavbar(index) {
	navContainer[index].classList.toggle('hidden')
}
