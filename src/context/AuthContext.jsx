import Cookies from 'js-cookie'
import { createContext, useEffect, useReducer, useState } from 'react'
import { toast } from 'react-toastify'
import api from '../api/axios'

export const AuthContext = createContext()

function reducer(state, action) {
	switch (action.type) {
		case 'LOGIN':
			return {
				...state,
				user: action.user,
				token: action.token,
			}

		case 'LOGOUT':
			return { ...state, user: null, token: null }

		default:
			return state
	}
}

export function AuthContextProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, {
		user: null,
		token: null,
	})
	const [authIsReady, setAuthIsReady] = useState(false)

	useEffect(() => {
		async function getUser() {
			let currentUser

			try {
				const res = await api.get('edit-profile/', { timeout: 6000 })
				currentUser = res?.data
				if (currentUser) {
					const token = Cookies.get('token')
					dispatch({ type: 'LOGIN', user: currentUser, token })
				}
			} catch (err) {
				console.error(err)
				// if it's a network error, do nothing
				if (err?.message == 'Network Error') {
					toast.error('Please check your internet and try again', {
						position: 'top-center',
						hideProgressBar: true,
					})
					return
				}

				currentUser = null
				dispatch({ type: 'LOGOUT' })
				Cookies.remove('token')
			} finally {
				setAuthIsReady(true)
			}
		}
		getUser()
	}, [])

	return (
		<AuthContext.Provider value={{ ...state, dispatch, authIsReady }}>
			{children}
		</AuthContext.Provider>
	)
}
