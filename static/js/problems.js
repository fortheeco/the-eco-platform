import setSelectOptions from './unsdg-goals-select.js'

const problemCards = document.querySelectorAll('.problem-card')

// ALL EVENTS FOR PROBLEM CARDS GOES HERE
problemCards.forEach((card) => {
	// const shareIcon = card.querySelector('.share-icon')
	const upvoteCount = card.querySelector('.upvote__count')
	const downvoteCount = card.querySelector('.downvote__count')
	const ideaCount = card.querySelector('.idea__count')

	card.addEventListener('click', (e) => {
		// upvote
		if (e.target.classList.contains('upvote')) {
			increment(upvoteCount)
		}
		// downvote
		if (e.target.classList.contains('downvote')) {
			increment(downvoteCount)
		}
		// increment idea
		if (e.target.classList.contains('idea')) {
			increment(ideaCount)
		}
		// share
		if (e.target.classList.contains('share')) {
			shareProblem()
		}
	})
})

// INCREASE COUNT FUNC
function increment(countElement) {
	// get current value of the element, convert it to number, and increment it
	let currentCount = countElement.textContent
	currentCount = Number(currentCount)
	countElement.textContent = currentCount + 1
}

// SHARE FUNC
async function shareProblem(title) {
	// TODO the text property should be more descriptive and formal
	const shareData = {
		title: title ? title : 'ECO Problem',
		text: 'Participate on this impactful problem on ECO',
		url: window.location.href,
	}

	try {
		await navigator.share(shareData)
	} catch (err) {
		// notify the user if the browser doesn't support native share
		if (navigator.canShare == false) alert('not supported')
		console.log(err)
	}
}

// TOP PROJECTS (SIDEBAR) LOGIC
const showSidebar = document.querySelector('.toggle-sidebar')
const hideSidebar = document.querySelector('.hide-sidebar')
const sidebar = document.querySelector('.sidebar')

showSidebar.addEventListener('click', (e) => {
	sidebar.classList.add('visible')
})

hideSidebar.addEventListener('click', (e) => {
	sidebar.classList.remove('visible')
})

// set Current ECO + UNSDG Select Menu options/Category
const categorySelect = document.getElementById('eco-cat-select')
const selectMenu = document.getElementById('goal-select')

categorySelect.addEventListener('change', (e) => {
	// const selectOptions = setSelectOptions(e.target.value)

	selectMenu.innerHTML = setSelectOptions(e.target.value)
})
