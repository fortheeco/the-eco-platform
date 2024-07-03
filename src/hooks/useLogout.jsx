import Cookies from 'js-cookie'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../api/axios'
import { useAuthContext } from './useAuthContext'

export default function useLogout() {
	const { dispatch } = useAuthContext()
	const navigate = useNavigate()
	const [error, setError] = useState(null)
	const [isPending, setIsPending] = useState(false)
	const token = Cookies.get('token')

	async function logout() {
		setIsPending(true)
		setError(null)

		try {
			await axios.post('logout/')
			dispatch({ type: 'LOGOUT' })
			Cookies.remove('token')
			localStorage.removeItem('user')
			setError(null)
			setIsPending(false)
			navigate('/login')
		} catch (err) {
			setError(err?.message)
			setIsPending(false)
		}
	}

	return { logout, error, isPending }
}
