import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../api/axios'

export default function useLogin() {
	const navigate = useNavigate()
	const [error, setError] = useState(null)
	const [isPending, setIsPending] = useState(false)

	async function signup(email, password) {
		const data = {
			email,
			password,
		}
		setIsPending(true)
		setError(null)

		try {
			const response = await api.post('/login', data)
			const userId = response.data.id
			console.log(response)
			setError(null)
			setIsPending(false)
			navigate(`/${userId}/profile`)
		} catch (err) {
			setError(err?.message)
			setIsPending(false)
		}
	}

	return { signup, error, isPending }
}
