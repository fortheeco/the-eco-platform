import { useState } from 'react'
import jacketImg from '../../assets/jackets.jpg'
import menImg from '../../assets/shirtmen.jpg'
import gridIcon from '../../assets/SVG/grid-icon.svg'
import listIcon from '../../assets/SVG/list-icon.svg'
import womenImg from '../../assets/women.jpg'
import { layout } from '../../style'

const CATEGORY_LIST = [
	{
		img: menImg,
		category: 'fintech',
		id: 1,
		title: 'Sendlify: Send and receive money like texts',
		text: 'Introducing our cutting-edge fintech app, designed to revolutionize the way you manage your finances. Take control of your money like never before with powerful features and intuitive tools at your fingertips. Track your expenses in real-time, effortlessly categorize transactions, and gain valuable insights into your spending habits.',
		link: 'www.sendlify.com ',
		tag: 'finance',
	},
	{
		img: womenImg,
		category: 'fintech',
		id: 1,
		title: 'Sendlify: Send and receive money like texts',
		text: 'Introducing our cutting-edge fintech app, designed to revolutionize the way you manage your finances.',
		link: 'www.sendlify.com ',
		tag: 'finance',
	},
	{
		img: jacketImg,
		category: 'fintech',
		id: 1,
		title: 'Sendlify: Send and receive money like texts',
		text: 'Introducing our cutting-edge fintech app, designed to revolutionize the way you manage your finances. Take control of your money like never before with powerful features and intuitive tools at your fingertips. Track your expenses in real-time, effortlessly categorize transactions, and gain valuable insights into your spending habits.',
		link: 'www.sendlify.com ',
		tag: 'finance',
	},
]

const categories = [
	'all',
	'finTech',
	'agrotech',
	'health Tech',
	'AI (Artificial Intelligence)',
	'eduTech',
	'cleantech',
	'biotech',
	'govtech',
	'insurtech',
	'martech',
	'proptech',
]

export default function Categories() {
	const [isGrid, toggleLayout] = useState(true)
	const [selectedCategory, setSelectedCategory] = useState('all')
	const cardList =
		selectedCategory === 'all'
			? CATEGORY_LIST
			: CATEGORY_LIST.filter(
					(card) => card.category === selectedCategory.toLocaleLowerCase()
			  )

	return (
		<article
			className={layout.section}
			aria-description="innovation categories"
		>
			<div className="w-full flex flex-col items-center justify-center gap-4 relative">
				<nav className="w-full flex flex-wrap items-center justify-center gap-4 px-10">
					{categories.map((category) => (
						<button
							key={category}
							onClick={() => setSelectedCategory(category)}
							className={`px-4 py-2 font-semibold font-nunito text-2xl capitalize whitespace-nowrap w-fit ${
								category === selectedCategory
									? 'bg-ecoGreen text-white rounded-md'
									: 'text-black'
							}`}
						>
							{category}
						</button>
					))}
				</nav>
				<div className="w-fit ml-auto mr-0 mt-12 flex items-center gap-4">
					<img
						src={listIcon}
						onClick={() => toggleLayout(false)}
						className={`w-10 xs:w-12 aspect-square p-2 cursor-pointer rounded-md ${
							isGrid ? 'bg-white' : 'bg-ecoGreen'
						}`}
					/>
					<img
						src={gridIcon}
						onClick={() => toggleLayout(true)}
						className={`w-10 xs:w-12 aspect-square p-2 cursor-pointer rounded-md ${
							!isGrid ? 'bg-white' : 'bg-ecoGreen'
						}`}
					/>
				</div>
				<ul className="w-full flex flex-wrap gap-x-20 gap-y-12 items-start">
					{cardList.length !== 0 ? (
						cardList.map((card) => (
							<Card key={card.id} isGrid={isGrid} {...card} />
						))
					) : (
						<p className="w-full text-center font-semibold text-lg my-5">
							There's nothing to see here.
						</p>
					)}
				</ul>
			</div>
		</article>
	)
}

const Card = ({ img, title, text, tag, link, isGrid }) => {
	return (
		<article
			className={`bg-white rounded-md shadow-md p-2 flex gap-2 ${
				isGrid ? 'flex-col w-60' : 'flex-row w-full gap-5 pl-8'
			}`}
		>
			<img
				src={img}
				alt={title}
				className="w-full max-w-xs object-fill h-60 rounded-md"
			/>
			<div className="w-full flex flex-col justify-evenly gap-1">
				<h5 className="font-semibold text-lg md:text-xl">{title}</h5>
				<div className="flex items-center gap-1">
					<small aria-hidden className="w-2 h-2 rounded-full bg-black"></small>
					<h6 className="text-xs capitalize text-nav/70">{tag}</h6>
				</div>
				<p
					className={`text-nav/70 leading-relaxed ${
						isGrid ? 'hidden' : 'block'
					}`}
				>
					{text}
				</p>
				<a
					target="_blanck"
					href={`https://${link}`}
					className={`text-black underline font-bold text-xs ${
						isGrid ? 'hidden' : 'inline-block'
					}`}
				>
					{link}
				</a>
			</div>
		</article>
	)
}
