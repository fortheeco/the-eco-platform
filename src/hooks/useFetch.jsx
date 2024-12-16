import { useEffect, useState } from 'react'
import api from '../api/axios'
import { formatResError } from '../helpers/FormatErrorMessage'

export function useFetch(url) {
	const [data, setData] = useState(null)
	const [error, setError] = useState(null)
	const [isPending, setIsPending] = useState(false)
	const [isCancelled, setIsCancelled] = useState(false)

	useEffect(() => {
		const controller = new AbortController()

		async function getInnovations() {
			setIsPending(true)
			setError(null)
			try {
				const res = await api.get(url, {
					signal: controller.signal,
				})
				if (!isCancelled) {
					setData(res.data.data)
				}
				// setIsPending(false)
				// console.log(res.data)
			} catch (err) {
				if (!isCancelled) {
					console.error(err)
					let logError = formatResError(err)
					setError(logError)
				}
			} finally {
				setIsPending(false)
			}
		}
		getInnovations()

		return () => {
			setIsCancelled(true)
			controller.abort('request ended abruptly')
		}
	}, [])

	return { data, error, isPending }
}
