import { Outlet } from 'react-router-dom'
import Nav from '../Nav/Nav'

export default function AccountSettings() {
	return (
		<div className="w-full relative block">
			<Nav />
			<Outlet />
		</div>
	)
}
