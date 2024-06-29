import axios from 'axios'
// import { useAuthContext } from '../hooks/useAuthContext'

export default axios.create({
	baseURL: 'https://theeco.pythonanywhere.com/api',
	// withCredentials: true,
})

// .interceptors.request.use((config) => {
// 	const { state } = useAuthContext()

// 	if (state.isAuthenticated) {
// 		config.headers.Authorization = `Bearer ${state.token}`
// 	}

// 	return config
// })

// export default api
