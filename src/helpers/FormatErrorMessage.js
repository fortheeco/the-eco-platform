export function formatResError(error) {
	let logErr =
		error?.response.data.error ||
		error?.response.data.detail ||
		error?.response.data.message ||
		error?.message ||
		'Oops... Something went wrong! Please try again'
	// if the error is due to network
	// if (logErr.toLowerCase().includes('request failed'))
	// 	logErr = 'check your network and try again'

	return logErr
}
