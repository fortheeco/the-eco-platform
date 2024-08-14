import { useState } from 'react'
// import { TbCurrencyNaira } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import ecoIcon from '../../assets/SVG/nav-logo.svg'
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
				<section className="flex flex-col gap-0 w-full justify-center items-center mt-16">
					<AccountCard
						card={accountTypeObj.individual}
						activeLink={activeLink}
						setActiveLink={setActiveLink}
					/>
					<img
						src={ecoIcon}
						alt="ECO icon"
						className="w-20 aspect-square object-fill hidden sm:inline-block"
					/>
					<div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-fit mx-auto mt-6 sm:-mt-28">
						<AccountCard
							card={accountTypeObj.hub}
							activeLink={activeLink}
							setActiveLink={setActiveLink}
						/>
						<AccountCard
							card={accountTypeObj.org}
							activeLink={activeLink}
							setActiveLink={setActiveLink}
						/>
					</div>
				</section>
			</article>
			<div className="w-full flex flex-col-reverse sm:flex-row gap-8 sm:gap-4 mt-28 mb-10 justify-between items-center">
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

const AccountCard = ({ card, activeLink, setActiveLink }) => {
	return (
		<div
			onClick={() => setActiveLink(card.link)}
			className={`h-[15rem] xs:h-[20rem] aspect-square relative flex flex-col items-center justify-center gap-2 p-10 xs:p-20 rounded-full bg-white hover:shadow-xl transition-all duration-100 cursor-pointer shadow-md ${
				activeLink === card.link ? 'border-2 border-ecoGreen text-ecoGreen' : ''
			}`}
		>
			<img
				src={activeLink === card.link ? card.icon.green : card.icon.black}
				alt="new user avatar"
				className="w-2/3 max-w-[10rem] aspect-square mt-6 object-contain"
			/>
			<h4 className="flex whitespace-nowrap font-semibold md:text-xl capitalize">
				{card.name}
			</h4>
			{card.amount && (
				<button
					className={
						card.amount === 'free'
							? 'inline-block'
							: 'bg-ecoGreen text-white p-2 rounded-full flex'
					}
				>
					{card.amount}
				</button>
			)}
		</div>
	)
}

const accountTypeObj = {
	individual: {
		id: 1,
		name: 'Individual Account',
		icon: { black: userIconBlack, green: userIconGreen },
		link: 'user',
		amount: 'free',
	},
	org: {
		id: 2,
		name: 'organization account',
		icon: { black: orgIconBlack, green: orgIconGreen },
		link: 'organization',
	},
	hub: {
		id: 3,
		name: 'ECO hub innovation',
		icon: { black: innovIconBlack, green: innovIconGreen },
		link: 'innovation',
		amount: 'N100,000/yr',
	},
}
