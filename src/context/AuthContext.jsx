import { createContext, useReducer } from 'react'
// import Cookies from 'js-cookie'

export const AuthContext = createContext()

function reducer(state, action) {
	switch (action.type) {
		case 'LOGIN':
			return {
				...state,
				user: action.user,
				isAuthenticated: true,
				token: action.token,
			}

		case 'LOGOUT':
			return { ...state, user: null, isAuthenticated: false, token: null }

		default:
			return state
	}
}

export function AuthContextProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, {
		user: null,
		token: null,
		isAuthenticated: false,
	})

	return (
		<AuthContext.Provider value={{ ...state, dispatch }}>
			{children}
		</AuthContext.Provider>
	)
}
