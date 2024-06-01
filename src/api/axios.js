import axios from 'axios'

export default axios.create({
	baseURL: 'https://theeco.pythonanywhere.com/api',
})
