import { useLocation } from 'react-router-dom'

export function getToken() {
	const location = useLocation()
	const params = new URLSearchParams(location.search)
	const token = params.get('token')

	return token
}
