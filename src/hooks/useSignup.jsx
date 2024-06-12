import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../api/axios'

export default function useSignup() {
	const navigate = useNavigate()
	const [error, setError] = useState(null)
	const [isPending, setIsPending] = useState(false)

	async function signup(name, email, gender, password) {
		const data = {
			full_name: name,
			email,
			gender,
			password,
		}
		setIsPending(true)
		setError(null)

		try {
			const response = await api.post('/signup/', data)
			console.log(response)
			setError(null)
			setIsPending(false)
			navigate('/signup/verify-email')
		} catch (err) {
			setError(err?.message)
			setIsPending(false)
		}
	}

	return { signup, error, isPending }
}
