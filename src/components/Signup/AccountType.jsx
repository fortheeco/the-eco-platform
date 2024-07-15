import { Link } from 'react-router-dom'
// import bannerImg from '../../assets/ecoBannerImage.png'
import { useState } from 'react'
import innovIconGreen from '../../assets/signup/innov-green.svg'
import innovIconBlack from '../../assets/signup/innovation-hub-icon.svg'
import orgIconBlack from '../../assets/signup/org-icon-black.svg'
import orgIconGreen from '../../assets/signup/org-icon-green.svg'
import userIconBlack from '../../assets/signup/user-icon-black.svg'
import userIconGreen from '../../assets/signup/user-icon-green.svg'
import AuthNav from './AuthNav'
import SplitLayout from './SplitLayout'
import './signup.css'

export default function AccountType() {
	const [activeLink, setActiveLink] = useState('user')
	return (
		<SplitLayout activeLink={activeLink}>
			<article className="w-full h-full">
				<AuthNav />
				<h4 className="capitalize text-2xl underline text-center my-6 block lg:text-3xl">
					select Account type
				</h4>
				<div className="grid grid-cols-2 gap-3 md:gap-8 lg:gap-20 w-full justify-between mt-16">
					{accountTypeObj.map((card) => (
						<div
							key={card.id}
							onClick={() => setActiveLink(card.link)}
							className={`w-full h-72 flex flex-col items-center justify-center gap-5 px-10 py-20 rounded-xl bg-white hover:shadow-xl transition-all duration-100 cursor-pointer shadow-md ${
								activeLink === card.link
									? 'border-2 border-ecoGreen text-ecoGreen'
									: ''
							}`}
						>
							<img
								src={
									activeLink === card.link ? card.icon.green : card.icon.black
								}
								alt="new user avatar"
								className="w-2/3 aspect-square mt-6 object-fill filter fill-ecoGreen"
							/>
							<h4 className="flex whitespace-nowrap md:text-xl capitalize">
								{card.name}
							</h4>
							{/* <small className="capitalize text-base">free</small> */}
						</div>
					))}
				</div>
			</article>
			<div className="w-full flex gap-4 mt-28 mb-10 justify-between items-center">
				<a
					href="#"
					className="w-fit text-base text-center text-ecoGreen underline"
				>
					Learn more about ECO Partners
				</a>
				<Link
					to={activeLink}
					className="capitalize bg-ecoGreen text-white py-3 flex justify-center rounded-full text-lg px-10 focus-within:outline-ecoGreen focus-within:outline-2 focus-within:shadow-lg focus-within:rounded-none focus-within:bg-ecoGreen/70 transition-all"
				>
					save & continue
				</Link>
			</div>
		</SplitLayout>
	)
}

const accountTypeObj = [
	{
		id: 1,
		name: 'Individual Account',
		icon: { black: userIconBlack, green: userIconGreen },
		link: 'user',
	},
	{
		id: 2,
		name: 'organization account',
		icon: { black: orgIconBlack, green: orgIconGreen },
		link: 'organization',
	},
	{
		id: 3,
		name: 'ECO hub innovation',
		icon: { black: innovIconBlack, green: innovIconGreen },
		link: 'innovation',
	},
]
