import { FaStar } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'
import icon from '../../../assets/innovation/chowdeck_icon.png'
import heroImg from '../../../assets/innovation/innovation-header.png'
import { layout } from '../../../style'

export default function ProfileWrapper({ children }) {
	return (
		<section className={`w-full bg-white text-black ${layout.section}`}>
			<article className="relative w-full p-12 md:p-0 mt-20 md:mt-28">
				<div className="w-full">
					<img
						src={heroImg}
						alt="innovation header image"
						className="w-full h-[20rem] object-fill object-center"
					/>
					<div className="w-full flex items-center gap-4 my-4">
						<img
							src={icon}
							alt="innovation icon"
							className="w-12 aspect-square object-fill object-center rounded-full sm:w-20 md:w-32 inline-block"
						/>
						<div className="inline-block">
							<h4 className="text-2xl font-semibold md:text-3xl capitalize">
								chowdeck
							</h4>
							<p className="flex">
								<FaStar role="button" className="text-2xl text-orange pr-1" />
								{4.7}
							</p>
						</div>
						<p className="text-base ml-20">{200} likes</p>
					</div>
				</div>
				<nav className="w-full max-w-screen-md flex items-center justify-start mt-16 mb-8 gap-5 md:gap-12 border-b-2">
					{navLinks.map((link) => (
						<NavLink
							key={link.url}
							to={`/innovation/profile/${link.url}`}
							className={({ isActive }) =>
								`${
									isActive
										? 'border-black text-black font-normal border-b-2'
										: 'border-0 text-[#606060] font-light'
								} capitalize text-lg w-fit inline-block`
							}
						>
							{link.text}
						</NavLink>
					))}
				</nav>
				<section className="w-full block max-w-screen-sm">{children}</section>
			</article>
		</section>
	)
}

const navLinks = [
	{ text: 'organization information', url: 'information' },
	{ text: 'innovation details', url: 'details' },
	{ text: 'impact and reach', url: 'impact-and-reach' },
	{ text: 'media', url: 'media' },
]
