import { useEffect, useState } from 'react'
import api from '../api/axios'
import { formatResError } from '../helpers/FormatErrorMessage'

export function useFetch(url) {
	const [data, setData] = useState(null)
	const [error, setError] = useState(null)
	const [isPending, setIsPending] = useState(false)

	useEffect(() => {
		const controller = new AbortController()

		async function getInnovations() {
			setIsPending(true)
			setError(null)
			try {
				const res = await api.get(url, {
					signal: controller.signal,
				})
				setData(res.data.data)
				setIsPending(false)
				console.log(res.data)
			} catch (err) {
				console.error(err)
				let logError = formatResError(err)
				setError(logError)
			}
		}
		getInnovations()

		return () => controller.abort('request ended abruptly')
	}, [])

	return { data, error, isPending }
}
