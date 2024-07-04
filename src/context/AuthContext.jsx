import Cookies from 'js-cookie'
import { createContext, useEffect, useReducer, useState } from 'react'

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
		const token = Cookies.get('token')
		if (token) {
			const loggedInUser = localStorage.getItem('user')
			const user = JSON.parse(loggedInUser)
			dispatch({ type: 'LOGIN', user, token })
		}
		setAuthIsReady(true)
	}, [])

	return (
		<AuthContext.Provider value={{ ...state, dispatch, authIsReady }}>
			{children}
		</AuthContext.Provider>
	)
}
