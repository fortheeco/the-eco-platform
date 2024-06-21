import { FaFacebookF, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'
import { layout } from '../../style'
import dataIcon from '../assets/innovation/data-icon.png'
import designIcon from '../assets/innovation/design-icon.png'
import digitalIcon from '../assets/innovation/digital-icon.png'
import mediaIcon from '../assets/innovation/media-icon.png'

export default function Highlights() {
	return (
		<article className={`w-full ${layout.section}`}>
			<div className="w-full flex flex-col items-center justify-center gap-4 sm:p-10 lg:px-20 innov-highlight">
				<h3 className="text-2xl font-bold text-center lg:text-3xl">
					Build innovation and strategy
				</h3>
				<p className="text-lg text-center max-w-2xl">
					We have trusted PALs with great experience and professional skills
					that can help you work on your ideas and help you bring them into
					reality.{' '}
				</p>
				<ul className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-16 lg:gap-y-20 lg:gap-x-16 my-10 lg:my-20">
					{DATA.map((card) => (
						<li
							key={card.title}
							className="w-full border-t-[3px] border-ecoGreen rounded-md shadow-md bg-white text-black relative p-5"
						>
							<img
								src={card.icon}
								alt={card.title}
								className="w-14 aspect-square p-4 rounded-sm object-contain flex items-center justify-center absolute -top-6 left-6 shadow-md bg-gradient-to-br from-dimWhite to-[#DAF8E5]"
							/>
							<h5 className="font-semibold text-xl mb-3 mt-6 capitalize">
								{card.title}
							</h5>
							<p className="text-sm leading-9">{card.desc}</p>
						</li>
					))}
				</ul>
				<a
					href={'#'}
					className=" bg-ecoGreen text-white w-fit mx-auto inline-block rounded-md text-lg px-10 py-3 font-semibold hover:bg-ecoGreen/70 focus-within:outline-ecoGreen focus-within:outline-2 focus-within:shadow-lg focus-within:rounded-none focus-within:bg-ecoGreen/70 transition-all"
				>
					Contact Us
				</a>
				<div className="flex items-center justify-center gap-4 mt-4 w-full text-ecoGreen">
					{SOCIALS.map((social) => (
						<a
							href={social.link}
							key={social.title}
							className="w-8 text-2xl object-contain"
							target="_blank"
							title={social.title}
						>
							<social.icon />
						</a>
					))}
				</div>
			</div>
		</article>
	)
}

const DATA = [
	{
		icon: mediaIcon,
		title: 'media',
		desc: 'ECO is your one-stop shop for all your media needs. We specialize with our community in creating high-quality video and audio content that will help you connect with your audience and achieve your business goals.',
	},
	{
		icon: designIcon,
		title: 'design',
		desc: 'ECO provides professional design services to enhance online presence. Services include website design, logo creation, brochure design, and other marketing materials to create a visual identity that represents the brand and appeals to the target audience.',
	},
	{
		icon: dataIcon,
		title: 'data',
		desc: 'ECO is a leading provider of data management and analytics solutions, helping businesses and government of all sizes to turn data into actionable insights for growth and improvement.',
	},
	{
		icon: digitalIcon,
		title: 'digital',
		desc: 'We offer a wide range of services to help businesses succeed, including website design, SEO, online marketing, social media management, and branding. Our goal is to provide custom solutions tailored to specific business needs and goals.',
	},
]

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
