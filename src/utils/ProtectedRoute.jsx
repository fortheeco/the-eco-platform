import { Navigate, Outlet } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'

export default function ProtectedRoute() {
	const { user } = useAuthContext()

	return user ? <Outlet /> : <Navigate to="/sign-in" />
}
