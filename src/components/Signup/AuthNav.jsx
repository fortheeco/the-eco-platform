import { NavLink } from 'react-router-dom'

export default function AuthNav() {
	return (
		<div className="flex w-full capitalize bg-ecoGreen/20 rounded-xl text-xl mb-20">
			<NavLink
				to={'/login'}
				className={({ isActive }) =>
					`${
						isActive
							? 'bg-ecoGreen text-nav/70 rounded-xl'
							: 'bg-transparent text-ecoGreen'
					} w-full flex items-center justify-center text-center cursor-pointer p-3`
				}
			>
				login
			</NavLink>
			<NavLink
				to={'/signup'}
				className={({ isActive }) =>
					`${
						isActive
							? 'bg-ecoGreen text-nav/70 rounded-xl'
							: 'bg-transparent text-ecoGreen'
					} w-full flex items-center justify-center text-center cursor-pointer p-3 text-white`
				}
			>
				signup
			</NavLink>
		</div>
	)
}
;('w-1/2 flex items-center justify-center cursor-pointer p-3 bg-dimWhite text-ecoGreen rounded-xl')
