import { NavLink } from 'react-router-dom'

export default function AuthNav() {
	return (
		<div className="flex w-full capitalize bg-ecoGreen rounded-xl text-xl mb-20">
			<NavLink
				to={'/login'}
				className="w-1/2 flex items-center justify-center cursor-pointer p-3 bg-dimWhite text-ecoGreen rounded-xl"
			>
				login
			</NavLink>
			<NavLink
				to={'/signup'}
				className="w-1/2 flex items-center justify-center cursor-pointer p-3 bg-dimWhite text-ecoGreen rounded-xl"
			>
				signup
			</NavLink>
		</div>
	)
}
