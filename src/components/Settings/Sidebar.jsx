// import {useState} from 'react'
import { NavLink } from 'react-router-dom'

export default function Sidebar() {
	return (
		<aside className="bg-white shadow-sm rounded-sm p-12 h-fit">
			<h4 className="text-2xl capitalize mb-6 font-semibold">
				settings and privacy
			</h4>
			<nav className="flex flex-col gap-6 mr-4 w-fit">
				{sidebarLinks.map((item) => (
					<NavLink
						key={item.text}
						to={item.link}
						className={({ isActive }) =>
							`${
								isActive
									? `${
											item?.warning
												? 'bg-red text-white'
												: 'bg-ecoLightGreen border-ecoLightGreen'
									  }`
									: `${
											item?.warning
												? 'bg-slate-300/20 text-red focus-within:border-red'
												: 'bg-slate-300/20 text-nav/70'
									  }`
							} min-w-max inline-block capitalize py-2 pr-16 border-2 focus-within:outline-0 focus-within:border-ecoGreen focus-within:scale-105 active:scale-100 transition-all duration-200 origin-left pl-4 rounded-md text-lg whitespace-nowrap`
						}
					>
						{item.text}
					</NavLink>
				))}
			</nav>
		</aside>
	)
}

const sidebarLinks = [
	{ text: 'change password', link: '/settings/password' },
	{ text: 'privacy settings', link: '/settings/privacy' },
	{ text: 'reset account data', link: '/settings/reset-data' },
	{ text: 'delete account', link: '/settings/delete-account', warning: true },
]
