import { FaFacebookF, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import arrowUp from '../assets/innovation/uparrow.png'

export default function Footer() {
	const currentYear = new Date().getFullYear()

	return (
		<footer className="bg-[#263238] pb-8 pt-24 lg:py-16 text-white mt-24 lg:mt-[12rem] relative">
			<Link
				to={'#innovation'}
				className="absolute right-7 -top-5 inline-block sm:top-1/4 sm:right-12"
			>
				<img
					src={arrowUp}
					alt="scroll to top"
					role="navigation"
					className="w-10 aspect-square object-contain hover:scale-110 hover:shadow-md transition-all active:scale-95"
				/>
			</Link>
			<div className="text-center flex flex-col items-center justify-center">
				<div className="flex flex-col sm:flex-row gap-6 sm:gap-6 items-center">
					<ul className="flex gap-6 md:gap-12 text-center font-montserrat font-light text-sm">
						<li>Eco</li>
						<li>PALs</li>
						<li>iPALs</li>
						<li>Innovation</li>
					</ul>
					<Link
						to={'/signup'}
						className=" bg-ecoGreen capitalize text-white w-fit mx-auto inline-block rounded-md text-lg px-10 py-3 font-semibold hover:bg-ecoGreen/70 focus-within:outline-ecoGreen focus-within:outline-2 focus-within:shadow-lg focus-within:rounded-none focus-within:bg-ecoGreen/70 transition-all"
					>
						create account
					</Link>
				</div>
				<div className="mt-6 mb-6">
					<ul className="flex gap-14 items-center">
						{SOCIALS.map((social) => (
							<a
								href={social.link}
								key={social.title}
								className="w-8 text-xl lg:text-2xl object-contain"
								target="_blank"
								title={social.title}
							>
								<social.icon />
							</a>
						))}
					</ul>
				</div>
				<p className="font-montserrat font-light text-xs">
					&copy; {currentYear} Eco Africa. All rights reserved.
				</p>
			</div>
		</footer>
	)
}

const SOCIALS = [
	{
		title: 'facebook',
		link: 'www.facebook.com/eco',
		icon: FaFacebookF,
	},
	{
		title: 'twitter',
		link: 'www.twitter.com/eco',
		icon: FaXTwitter,
	},
	{
		title: 'linkedin',
		link: 'www.linkedin.com/in/eco',
		icon: FaLinkedinIn,
	},
]
