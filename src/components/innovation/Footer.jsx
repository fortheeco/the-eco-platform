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
		<footer className="bg-[#263238] pb-8 pt-28 md:pb-16 text-dimWhite mt-24 lg:mt-[12rem] relative font-nunito">
			<button
				role="navigation"
				aria-description="scroll to top of page"
				onClick={scrollToTop}
				className="absolute right-7 -top-5 inline-block sm:top-1/4 sm:right-12 xxlg:right-[15rem]"
			>
				<img
					src={arrowUp}
					alt="arrow up"
					className="w-10 aspect-square object-contain xxlg:w-14 hover:scale-110 hover:shadow-md transition-all active:scale-95"
				/>
			</button>
			<Link
				to={'/'}
				className="w-16 sm:w-20 xxlg:w-24 object-fill aspect-square absolute inline-block left-8 md:left-20 md:top-32 top-8 xxlg:left-[10rem]"
			>
				<img src={logo} alt="ECO logo" className="w-full" />
			</Link>
			<section className="w-full max-w-screen-md lg:max-w-screen-lg mx-auto flex gap-10 flex-col-reverse sm:flex-row sm:gap-20 items-start justify-between px-10 md:px-40 sm:mt-6 md:mt-12">
				<address className="flex flex-col gap-4 w-full lg:w-1/5 not-italic capitalize text-sm">
					<div className="w-full">
						<strong className="text-lg font-semibold not-italic text-white block">
							united kingdom
						</strong>
						<p>
							65 Kingsway, Burnage, <br />
							manchester, M19 2LL
						</p>
					</div>
					<div className="w-full">
						<strong className="text-lg font-semibold not-italic text-white block">
							nigeria
						</strong>
						<p>
							61 adamo close, obamusa <br />
							avenue, lekki, lagos
						</p>
					</div>
					<a
						href="tel:+234123456789"
						className="underline text-white font-semibold text-sm"
					>
						(+234) 0123456789
					</a>
				</address>
				<div className="flex justify-start flex-wrap gap-10 w-full lg:w-2/3 lg:justify-evenly">
					<ul className="flex flex-col gap-4 mr-6">
						{ECOLINKS.map((link) => (
							<Link
								to={link.link}
								key={link.text}
								className="text-base lg:text-lg object-contain capitalize hover:text-white transition-all duration-200"
								title={link.text}
							>
								{link.text}
							</Link>
						))}
					</ul>

					<ul className="flex flex-col gap-4">
						{SOCIALS.map((social) => (
							<a
								href={social.link}
								key={social.title}
								className="text-base lg:text-lg object-contain capitalize hover:text-white transition-all duration-200"
								target="_blank"
								title={social.title}
							>
								{social.title}
							</a>
						))}
					</ul>
				</div>
			</section>
			<p className="font-montserrat font-light text-xs w-fit mx-auto block mt-8 md:mt-16 md:text-sm">
				&copy; {currentYear} Eco Africa. All rights reserved.
			</p>
		</footer>
	)
}

const SOCIALS = [
	{
		title: 'Facebook',
		link: 'www.facebook.com/eco',
	},
	{
		title: 'Twitter',
		link: 'www.twitter.com/eco',
	},
	{
		title: 'Linkedin',
		link: 'www.linkedin.com/in/eco',
	},
	{
		title: 'Instagram',
		link: 'www.instagram.com/eco',
	},
	{
		title: 'Send a mail',
		link: 'mailto:',
	},
]

const ECOLINKS = [
	{ text: 'home', link: '/' },
	{ text: 'the ECO', link: '#' },
	{ text: 'PALs app', link: '#' },
	{ text: 'Tech4Good', link: '#' },
	{ text: 'services', link: '#' },
]
