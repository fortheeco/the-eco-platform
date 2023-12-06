const pswd = document.querySelectorAll('.pwsd')
const reveal = document.querySelectorAll('.pswd-reveal--toggle')

// ADD EVENT LISTENER TO ALL PASSWORD TOGGLE ICONS
for (let toggleIndex = 0; toggleIndex < reveal.length; toggleIndex++) {
	reveal[toggleIndex].addEventListener('click', () =>
		togglePassword(toggleIndex)
	)
}

const profileUpdatePopup = document.querySelector('#profile-update-modal')
const logoutModal = document.querySelector('dialog')

// show popup on button click
// TODO change to form onSubmit
document
	.querySelector('.submit-btn')
	.addEventListener('click', () => displayModal(profileUpdatePopup))

// logout button click
document.querySelector('.logout-btn').addEventListener('click', toggleDialog)
// cancel logout button click
document.querySelector('#cancel-logout').addEventListener('click', toggleDialog)

//display error message when user clicks on 'Become an Ambassador'
document.querySelector('.ambassador-btn').addEventListener('click', () => {
	const popup = document.querySelector('#membership')
	displayModal(popup)
})

// TOGGLE PASSWORD
function togglePassword(index) {
	pswd[index].type === 'password'
		? (pswd[index].type = 'text')
		: (pswd[index].type = 'password')
}

// DISPLAY A MODAL FOR 3 SECONDS
function displayModal(modal) {
	setTimeout(() => {
		modal.classList.add('hidden')
	}, 3000)

	modal.classList.remove('hidden')
}

// TOGGLE MODAL DISPLAY
function toggleDialog() {
	logoutModal.classList.toggle('hidden')
}
