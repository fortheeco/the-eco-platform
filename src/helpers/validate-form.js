const pswdRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
const emailRegex = /\S+@\S+\.\S+/

export function validateForm(data) {
	const errors = {}

	if (!data.full_name.trim()) {
		errors.full_name = 'A valid name is required'
	}

	errors.email = validateEmail(data.email)
	errors.password = validatePassword(data.password)

	return errors
}

export function validateEmail(email) {
	let error

	if (!email.trim()) {
		error = 'Email is required'
	} else if (!emailRegex.test(email)) {
		error = 'Please enter a email valid address'
	}

	return error
}

export function validatePassword(password) {
	let error

	if (!password) {
		error = 'Password is required'
	} else if (password.length < 8) {
		error = `Password must be at 
        least 8 characters long`
	} else if (!pswdRegex.test(password)) {
		error = 'Please choose a more secure password'
	}

	return error
}
