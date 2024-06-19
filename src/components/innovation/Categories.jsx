import { useState } from 'react'
import { layout } from '../../style'
import edenImg from '../assets/innovation/eden.png'
import flutterwaveImg from '../assets/innovation/flutterwave.png'
import kudaImg from '../assets/innovation/kuda.png'
import moniepointImg from '../assets/innovation/moniepoint.png'

const CATEGORY_LIST = [
	{ img: kudaImg, category: 'fintech', id: 1 },
	{ img: moniepointImg, category: 'fintech', id: 2 },
	{ img: flutterwaveImg, category: 'fintech', id: 3 },
	{ img: edenImg, category: 'fintech', id: 4 },
]

const categories = [
	'all',
	'finTech',
	'healthTech',
	'eduTech',
	'agroTech',
	'innovative AI',
]

export default function Categories() {
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
			<div className="w-full flex flex-col items-center justify-center gap-4 p-10 lg:px-20">
				<h2 className="text-3xl font-Montserrat font-bold text-center lg:text-4xl mb-4">
					INNOVATIONS COMING OUT OF AFRICA #ForAfrica
				</h2>
				<nav className="w-full flex items-center justify-center gap-4 my-4 overflow-x-scroll lg:overflow-auto px-10">
					{categories.map((category) => (
						<button
							key={category}
							onClick={() => setSelectedCategory(category)}
							className={`px-4 py-2 font-semibold font-montserrat text-2xl capitalize whitespace-nowrap w-fit ${
								category === selectedCategory
									? 'bg-ecoGreen text-white rounded-md'
									: 'text-black'
							}`}
						>
							{category}
						</button>
					))}
				</nav>
				<ul className="w-full flex items-center justify-center gap-x-10 gap-y-16 lg:gap-y-20 lg:gap-x-16">
					{cardList.length !== 0 ? (
						cardList.map((card) => <Card key={card.id} {...card} />)
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

const Card = ({ img }) => {
	return (
		<div className="flex w-full min-w-[18rem] max-w-xs h-72 relative rounded-sm ">
			<img
				src={img}
				alt=""
				className="absolute inline-block w-full h-full inset-0 object-fill z-[1]"
			/>
			<h6 className="text-2xl h-full w-full flex text-center items-center justify-center text-ecoGreen font-bold capitalize bg-[#F2F2F2CC]/80 rounded-lg z-10">
				coming soon
			</h6>
		</div>
	)
}
