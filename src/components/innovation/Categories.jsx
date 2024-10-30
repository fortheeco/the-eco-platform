import { SearchIcon } from 'lucide-react'
import { useState } from 'react'
import jacketImg from '../../assets/jackets.jpg'
import menImg from '../../assets/shirtmen.jpg'
import gridIcon from '../../assets/SVG/grid-icon.svg'
import listIcon from '../../assets/SVG/list-icon.svg'
import womenImg from '../../assets/women.jpg'
import { layout } from '../../style'

export default function Categories() {
	const [isGrid, toggleLayout] = useState(true)
	const [showCat, setShowCat] = useState(true)
	const [searchInput, setSearchInput] = useState('')
	const [selectedCategory, setSelectedCategory] = useState('all')
	const innovationData =
		selectedCategory === 'all'
			? CATEGORY_LIST
			: CATEGORY_LIST.filter(
					(card) => card.category === selectedCategory.toLocaleLowerCase()
			  )
	const cardList = innovationData.filter((data) =>
		data.title.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase())
	)

	function toggleShowCat() {
		setShowCat((prev) => !prev)
	}

	return (
		<article
			className={`${layout.section} w-full relative`}
			aria-description="innovation categories"
		>
			<div className="w-full flex flex-col items-center justify-center gap-4 relative">
				<form className="w-full max-w-screen-sm mx-auto mb-6 flex items-center justify-between bg-ecoGreen/20 rounded-md px-4 py-2 h-14 input-parent">
					<input
						type="search"
						name="innovation"
						value={searchInput}
						onChange={(e) => setSearchInput(e.target.value)}
						placeholder="Search"
						autoComplete="off"
						aria-description="search innovation categories"
						id="innovation"
						className="w-full text-lg bg-transparent outline-0 border-0 autofill:bg-ecoGreen/20"
					/>
					<button className="h-full aspect-square object-fill p-2 ml-4 inline-block bg-ecoGreen text-white rounded-full relative">
						<SearchIcon />
					</button>
				</form>
				<aside className="flex justify-between items-center gap-8 my-2 w-full lg:hidden">
					<h5 className="font-semibold text-xl">Categories</h5>
					<button
						className="text-ecoGreen font-semibold font-nunito text-lg"
						onClick={toggleShowCat}
					>
						{showCat ? 'Collapse' : 'See all'}
					</button>
				</aside>
				<nav
					className={`w-full flex items-center gap-2 lg:gap-4 lg:px-10 ${
						showCat
							? 'flex-wrap justify-center'
							: 'flex-nowrap justify-start overflow-x-hidden'
					}`}
				>
					{categories.map((category) => (
						<button
							key={category}
							onClick={() => setSelectedCategory(category)}
							className={`px-4 py-2 text-xl sm:font-semibold font-nunito sm:text-2xl capitalize whitespace-nowrap w-fit transition-all duration-500 ease-in-out ${
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
					<button
						onClick={() => toggleLayout(false)}
						className={`w-8 xs:w-12 p-2 cursor-pointer rounded-md transition-all duration-500 ease-in-out ${
							isGrid ? 'bg-white' : 'bg-ecoGreen'
						}`}
					>
						<img
							src={listIcon}
							className={`w-full ${isGrid ? 'invert-0' : 'invert'}`}
						/>
					</button>
					<button
						onClick={() => toggleLayout(true)}
						className={`w-8 xs:w-12 p-2 cursor-pointer rounded-md transition-all duration-500 ease-in-out ${
							!isGrid ? 'bg-white text-black' : 'bg-ecoGreen text-white'
						}`}
					>
						<img
							src={gridIcon}
							className={`w-full text-white ${!isGrid ? 'invert-0' : 'invert'}`}
						/>
					</button>
				</div>
				<ul className="w-full flex justify-center sm:justify-start flex-wrap gap-x-20 gap-y-12 items-start">
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
				isGrid
					? 'w-full flex-col xs:w-60'
					: 'flex-col sm:flex-row w-full gap-5 sm:pl-8'
			}`}
		>
			<img
				src={img}
				alt={title}
				className="w-full sm:max-w-xs object-fill h-60 rounded-md"
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
					target="_blank"
					href={`https://${link}`}
					rel="noreferrer noopener"
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
]

const categories = [
	'all',
	'finTech',
	'agrotech',
	'health Tech',
	'AI',
	'eduTech',
	'cleantech',
	'biotech',
	'govtech',
	'insurtech',
	'martech',
	'proptech',
]
