import { Navigate, Outlet, useLocation } from 'react-router-dom'
// import { toast } from 'react-toastify'
import { useAuthContext } from '../hooks/useAuthContext'

export default function ProtectedRoute() {
	const { token } = useAuthContext()
	const location = useLocation()

	return token ? (
		<Outlet />
	) : (
		<>
			<Navigate
				to={`/login?next=${location.pathname}`}
				state={{ from: location }}
				replace={true}
			/>
		</>
	)
}
