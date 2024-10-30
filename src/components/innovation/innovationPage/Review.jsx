import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css/sea-green'
// import '@splidejs/react-splide/css'
import { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import api from '../../../api/axios'
import closeIcon from '../../../assets/SVG/close-circle.svg'
import { imageFromWord } from '../../../helpers/ImageFromWord'
import Overlay from '../../utils/Overlay'

// mediaQuery: 'min',
//   breakpoints: {
// 		640: {
// 			destroy: true,
// 		},
//   }

const options = {
	autoWidth: true,
	autoHeight: true,
	arrows: false,
	// perPage: 2,
	type: 'slide',
	rewind: true,
	rewindByDrag: true,
	autoplay: true,
	interval: 500,
	drag: 'free',
	// mediaQuery: 'min',
	// breakpoints: {
	// 	640: {
	// 		perPage: 1,
	// 	},
	// },
}

new Splide('.splide', options)

export default function Reviews({ reviews = [], id }) {
	const [showModal, setShowModal] = useState(false)
	function toggleModal() {
		setShowModal((prev) => !prev)
	}
	return (
		<section className="w-full flex flex-col gap-4 min-h-[10rem] my-8">
			<h5 className="text-xl font-semibold capitalize md:text-2xl mb-4">
				innovation review
			</h5>
			<article className="w-full flex gap-4 items-center relative">
				{reviews.length === 0 && <p>No reviews for this innovation yet!</p>}
				<Splide
					aria-label="innovation reviews"
					hasTrack={true}
					// options={}
				>
					{reviews.map((review) => (
						<SplideSlide key={review.id}>
							<ReviewCard review={review} />
						</SplideSlide>
					))}
				</Splide>
			</article>
			<button
				type="button"
				onClick={toggleModal}
				className="capitalize bg-ecoGreen text-white py-3 w-fit flex items-center justify-center rounded-lg mx-auto mt-8 text-lg px-8 focus-within:outline-ecoGreen focus-within:outline-2 focus-within:shadow-lg focus-within:rounded-lg focus-within:bg-ecoGreen/70 transition-all"
			>
				add review
			</button>
			{showModal && <AddReview close={toggleModal} id={id} />}
		</section>
	)
}

function ReviewCard({ review }) {
	return (
		<div className="w-full, sm:w-1/2 bg-[#FBFBFB] border-4 border-nav/5 p-6 md:p-8 rounded-md">
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

function AddReview({ close, id }) {
	const stars = Array.from({ length: 5 }, (_, index) => index + 1)
	const [activeScore, setActiveScore] = useState(0)
	const [detail, setDetail] = useState('')
	const [isPending, setIsPending] = useState(false)
	const [error, setError] = useState(null)

	async function handleSubmit(e) {
		e.preventDefault()
		console.log(activeScore, detail)
		try {
			setIsPending(true)
			setError(null)
			const res = await api.post(
				`https://theeco.pythonanywhere.com/api/organisation/review-innovation/${id}`,
				{ detail, score: activeScore }
			)
			console.log(res)
			console.log('review submitted!')
			close()
		} catch (err) {
			let logErr =
				err?.response.data.error ||
				err?.response.data.detail ||
				err?.message ||
				'Oops... Something went wrong! Please refresh and try again'
			setError(logErr)
			console.log(err)
		} finally {
			setTimeout(() => {
				setIsPending(false)
			}, 2000)
		}
	}

	return (
		<Overlay>
			<form
				className="w-full max-w-screen-ss mx-auto flex flex-col gap-4 p-6 rounded-sm bg-inputBorder text-black shadow-sm relative"
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
					{stars.map((score) => (
						<label className="" key={score}>
							<FaStar
								color={score <= activeScore ? '#1DB559' : '#fff'}
								onClick={() => setActiveScore(score)}
								onMouseOver={() => setActiveScore(score)}
								className="text-4xl cursor-pointer inline-block text-ecoGreen peer peer-hover:text-ecoGreen transition-all duration-200"
							/>
							<input
								type="radio"
								name="score"
								id="score"
								value={score}
								className="invisible"
							/>
						</label>
					))}
				</div>
				<h6 className="font-semibold text-lg">Review</h6>
				<textarea
					name="detail"
					id="detail"
					value={detail}
					onChange={(e) => setDetail(e.target.value)}
					required
					className="w-full resize-none h-40 p-3 rounded-md bg-white border border-ecoLightGreen shadow-sm outline-none focus-within:border-ecoGreen"
					placeholder="Tell us about this innovation"
				></textarea>
				{error && (
					<small className="text-sm font-light text-red mt-4 w-fit mx-auto">
						{error}
					</small>
				)}
				<button
					type="submit"
					disabled={isPending}
					className="capitalize bg-ecoGreen text-white py-3 w-4/5 flex items-center justify-center rounded-lg mx-auto mt-4 text-lg px-8 focus-within:outline-ecoGreen focus-within:outline-2 focus-within:shadow-lg focus-within:rounded-lg focus-within:bg-ecoGreen/70 transition-all"
				>
					submit review
				</button>
			</form>
		</Overlay>
	)
}
