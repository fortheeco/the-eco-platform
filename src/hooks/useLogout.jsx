import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../api/axios'
import { useAuthContext } from './useAuthContext'

export default function useLogout() {
	const { setUser, setToken } = useAuthContext()
	const navigate = useNavigate()
	const [error, setError] = useState(null)
	const [isPending, setIsPending] = useState(false)

	async function logout() {
		setIsPending(true)
		setError(null)

		try {
			await api.post('logout/')
			setUser(null)
			setToken(null)
			localStorage.removeItem('site')
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
