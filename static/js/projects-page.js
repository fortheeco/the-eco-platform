const ShowForm = document.querySelector('.toggle-form')
const FormInputContainer = document.querySelector('label')
const HideFormIcon = FormInputContainer.querySelector('.form__close')

// show search form and focus on the input
ShowForm.addEventListener('click', (e) => {
	showForm()

	// hide form when user clicks on escape key
	document.addEventListener('keyup', (e) => {
		if (e.key === 'Escape') {
			hideForm()
		}
	})
})

// show form when user clicks on ctrl + k
document.addEventListener('keydown', (e) => {
	if (e.key === 'k' && e.ctrlKey) {
		// some browsers bind `ctrl + k` to Google search
		// prevent the default browser key binding
		e.preventDefault()
		showForm()
	}

	// hide form when user clicks on escape key
	document.addEventListener('keyup', (e) => {
		if (e.key === 'Escape') {
			hideForm()
		}
	})
})

// hide form when user clicks on close icon (x)
HideFormIcon.addEventListener('click', hideForm)

function hideForm() {
	FormInputContainer.classList.add('hidden')
}

function showForm() {
	FormInputContainer.classList.remove('hidden')
	FormInputContainer.querySelector('input').focus()
}
