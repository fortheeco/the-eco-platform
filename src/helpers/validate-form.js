const pswdRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
const emailRegex = /\S+@\S+\.\S+/

export function validateForm(data) {
	const errors = {}

	if (!data.full_name.trim()) {
		errors.full_name = 'A valid name is required'
	}

	if (!data.email.trim()) {
		errors.email = 'Email is required'
	} else if (!emailRegex.test(data.email)) {
		errors.email = 'Email is invalid'
	}

	if (!data.password) {
		errors.password = 'Password is required'
	} else if (data.password.length < 8) {
		errors.password = `Password must be at 
        least 8 characters long`
	} else if (!pswdRegex.test(data.password)) {
		errors.password = 'Please choose a more secure password'
	}

	return errors
}
