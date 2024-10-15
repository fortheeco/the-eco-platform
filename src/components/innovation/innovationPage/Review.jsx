import { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import closeIcon from '../../../assets/SVG/close-circle.svg'
import { imageFromWord } from '../../../helpers/ImageFromWord'
import Overlay from '../../utils/Overlay'

export default function Reviews({ reviews = [] }) {
	const [showModal, setShowModal] = useState(false)
	function toggleModal() {
		setShowModal((prev) => !prev)
	}
	return (
		<section className="w-full flex flex-col gap-4 min-h-[10rem] my-8">
			<h5 className="text-xl font-semibold capitalize md:text-2xl mb-4">
				innovation review
			</h5>
			<article className="w-full flex gap-4 items-center">
				{reviews.length === 0 && <p>No reviews for this innovation yet!</p>}
				{reviews.map((review) => (
					<ReviewCard review={review} key={review.id} />
				))}
			</article>
			<button
				type="button"
				onClick={toggleModal}
				className="capitalize bg-ecoGreen text-white py-3 w-fit flex items-center justify-center rounded-lg mx-auto mt-8 text-lg px-8 focus-within:outline-ecoGreen focus-within:outline-2 focus-within:shadow-lg focus-within:rounded-lg focus-within:bg-ecoGreen/70 transition-all"
			>
				add review
			</button>
			{showModal && <AddReview close={toggleModal} />}
		</section>
	)
}

function ReviewCard({ review }) {
	return (
		<div className="w-full sm:w-1/2 bg-[#FBFBFB] border-4 border-nav/5 p-6 md:p-8 rounded-md">
			<div className="w-full flex gap-4 items-center justify-start mb-4">
				<img
					src={review?.avatar || imageFromWord(review.name)}
					alt=""
					className="w-10 aspect-square object-fill object-center bg-ecoBlue text-white font-bold text-2xl rounded-full sm:w-12 md:w-16 md:text-4xl inline-block"
				/>
				<div className="inline-block mr-auto">
					<h4 className="text-xl font-semibold md:text-2xl capitalize">
						{review.name}
					</h4>
					<div className="flex">
						{[...Array(review.count)].map((_, index) => (
							<FaStar key={index} className="text-orange text-2xl pr-1" />
						))}
					</div>
				</div>
			</div>
			<p>{review.review}</p>
		</div>
	)
}

function AddReview({ close }) {
	const stars = Array.from({ length: 5 }, (_, index) => index + 1)

	async function handleSubmit(e) {
		e.preventDefault()
		console.log('review submitted!')
	}

	return (
		<Overlay>
			<form
				className="w-4/5 max-w-md mx-auto flex flex-col gap-4 p-6 rounded-sm bg-inputBorder text-black shadow-sm relative"
				onSubmit={handleSubmit}
			>
				<h4 className="text-lg font-semibold capitalize">add review</h4>
				<button
					type="button"
					onClick={close}
					className="inline-block absolute top-6 right-2 object-contain w-10 aspect-square"
				>
					<img src={closeIcon} alt="" />
				</button>
				<h6 className="my-2 capitalize text-base">{'chowdeck'}</h6>
				<div className="w-full flex items-center justify-evenly gap-4 my-3">
					{stars.map((count) => (
						<FaStar
							key={count}
							className="text-4xl cursor-pointer inline-block text-ecoGreen peer peer-hover:text-ecoGreen transition-colors duration-200"
						/>
					))}
				</div>
				<h6 className="font-semibold text-lg">Review</h6>
				<textarea
					name="review"
					id="review"
					required
					className="w-full resize-none h-40 p-3 rounded-md bg-white border border-ecoLightGreen shadow-sm outline-none focus-within:border-ecoGreen"
					placeholder="Tell us about this innovation"
				></textarea>
				<button
					type="submit"
					className="capitalize bg-ecoGreen text-white py-3 w-4/5 flex items-center justify-center rounded-lg mx-auto mt-8 text-lg px-8 focus-within:outline-ecoGreen focus-within:outline-2 focus-within:shadow-lg focus-within:rounded-lg focus-within:bg-ecoGreen/70 transition-all"
				>
					submit review
				</button>
			</form>
		</Overlay>
	)
}
