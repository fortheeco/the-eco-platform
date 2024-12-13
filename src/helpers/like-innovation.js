import { toast } from 'react-toastify'
import api from '../api/axios'
import { formatResError } from './FormatErrorMessage'

export async function likeInnovation(id) {
	// https://theeco.pythonanywhere.com/api/organisation/like-innovation/{id}
	try {
		const res = await api.get(`organisation/like-innovation/${id}`)
		console.log(res.data)
	} catch (err) {
		console.error(err)
		let error = formatResError(err)
		toast.error(error)
	}
}
