import { Link } from 'react-router-dom'
import arrowUp from '../../assets/innovation/uparrow.png'
import logo from '../../assets/SVG/nav-logo.svg'

export default function Footer() {
	const currentYear = new Date().getFullYear()

	function scrollToTop() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}

	return (
		<footer className="bg-[#263238] pb-8 pt-24 lg:py-16 text-white mt-24 lg:mt-[12rem] relative">
			<button
				role="navigation"
				aria-description="scroll to top of page"
				onClick={scrollToTop}
				className="absolute right-7 -top-5 inline-block sm:top-1/4 sm:right-12"
			>
				<img
					src={arrowUp}
					alt="arrow up"
					className="w-10 aspect-square object-contain hover:scale-110 hover:shadow-md transition-all active:scale-95"
				/>
			</button>
			<div className="w-full flex flex-wrap gap-10 sm:gap-20 items-start justify-between px-10 lg:px-20">
				<img
					src={logo}
					alt="ECO logo"
					className="w-16 sm:w-32 object-fill aspect-square"
				/>
				<ul className="flex flex-col gap-4 items-center">
					{ECOLINKS.map((link) => (
						<Link
							to={link.link}
							key={link.text}
							className="text-xl lg:text-2xl object-contain capitalize whitespace-nowrap"
							title={link.text}
						>
							{link.text}
						</Link>
					))}
				</ul>

				<div className="mt-6 mb-6">
					<ul className="flex flex-col gap-4 items-center w-40">
						{SOCIALS.map((social) => (
							<a
								href={social.link}
								key={social.title}
								className="text-xl lg:text-2xl object-contain capitalize"
								target="_blank"
								title={social.title}
							>
								{social.title}
							</a>
						))}
					</ul>
				</div>
			</div>
			<p className="font-montserrat font-light text-xs w-fit mx-auto">
				&copy; {currentYear} Eco Africa. All rights reserved.
			</p>
		</footer>
	)
}

const SOCIALS = [
	{
		title: 'facebook',
		link: 'www.facebook.com/eco',
	},
	{
		title: 'twitter',
		link: 'www.twitter.com/eco',
	},
	{
		title: 'linkedin',
		link: 'www.linkedin.com/in/eco',
	},
]

const ECOLINKS = [
	{ text: 'home', link: '/' },
	{ text: 'the ECO', link: '#' },
	{ text: 'PALs app', link: '#' },
	{ text: 'Tech4Good', link: '#' },
	{ text: 'services', link: '#' },
]
