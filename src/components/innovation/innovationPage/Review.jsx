import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css/sea-green'
import { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { toast } from 'react-toastify'
import api from '../../../api/axios'
import closeIcon from '../../../assets/SVG/close-circle.svg'
import { formatResError } from '../../../helpers/FormatErrorMessage'
import { imageFromWord } from '../../../helpers/ImageFromWord'
import Overlay from '../../utils/Overlay'

const options = {
	arrows: false,
	perPage: 2,
	type: 'slide',
	rewind: true,
	rewindByDrag: true,
	autoplay: true,
	loop: true,
	interval: 6000,
	gap: '2rem',
	drag: 'free',
	mediaQuery: 'min',
	breakpoints: {
		640: {
			perPage: 1,
		},
	},
}

// new Splide('.splide', options)

export default function Reviews({ id, name }) {
	const [reviews, setReviews] = useState([])
	const [showModal, setShowModal] = useState(false)

	function toggleModal() {
		setShowModal((prev) => !prev)
	}

	useEffect(() => {
		const controller = new AbortController()

		async function getReviews() {
			try {
				const res = await api.get(`organisation/get-innovation-reviews/${id}`, {
					signal: controller.signal,
				})
				setReviews(res.data.data)
				// console.log(res.data)
			} catch (err) {
				console.error(err)
			}
		}
		getReviews()

		return () => controller.abort('request ended abruptly')
		// rerender whenever the user interacts with the add-review modal
	}, [showModal])

	return (
		<section className="w-full flex flex-col min-h-[10rem] my-8">
			<h5 className="text-xl font-semibold capitalize md:text-2xl">
				innovation review
			</h5>
			<article className="w-full flex items-center relative">
				{reviews.length === 0 && (
					<p className="mt-4">No reviews for this innovation yet!</p>
				)}
				{reviews.length >= 1 && (
					<Splide
						// className="px-0"
						aria-label="innovation reviews"
						options={options}
						// options={}
					>
						{reviews.map((review) => (
							<SplideSlide key={review.id}>
								<ReviewCard review={review} />
							</SplideSlide>
						))}
					</Splide>
				)}
			</article>
			<button
				type="button"
				onClick={toggleModal}
				className="capitalize bg-ecoGreen text-white py-3 w-fit flex items-center justify-center rounded-lg mx-auto mt-8 text-lg px-8 focus-within:outline-ecoGreen focus-within:outline-2 focus-within:shadow-lg focus-within:rounded-lg focus-within:bg-ecoGreen/70 transition-all"
			>
				add review
			</button>
			{showModal && <AddReview close={toggleModal} id={id} name={name} />}
		</section>
	)
}

function ReviewCard({ review }) {
	return (
		<div className="w-full bg-[#FBFBFB] border-4 border-nav/5 p-6 md:p-8 rounded-md">
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
						{[...Array(review.score)].map((_, index) => (
							<FaStar key={index} className="text-orange text-2xl pr-1" />
						))}
					</div>
				</div>
			</div>
			<p>{review.details}</p>
		</div>
	)
}
// TODO innovation owners shouldn't be able to review their own innovations
// TODO a user can't add more than one review to an innovation (MAYBE)
function AddReview({ close, id, name }) {
	const stars = Array.from({ length: 5 }, (_, index) => index + 1)
	const [activeScore, setActiveScore] = useState(0)
	const [details, setDetails] = useState('')
	const [isPending, setIsPending] = useState(false)
	const [error, setError] = useState(null)

	const isDisabled = activeScore === 0 || isPending || !details

	async function handleSubmit(e) {
		e.preventDefault()

		if (isDisabled || details.length < 20) {
			return
		}

		try {
			setIsPending(true)
			setError(null)
			const res = await api.post(`organisation/review-innovation/${id}`, {
				details,
				score: activeScore,
			})
			toast.success(res.data?.message)

			setTimeout(() => {
				close()
			}, 1000)
		} catch (err) {
			let logErr = formatResError(err)
			setError(logErr)
			console.error(err)
		} finally {
			setTimeout(() => {
				setIsPending(false)
			}, 2000)
		}
	}

	function handleKeyDown(e) {
		// Trigger form submission if user press ctrl + Enter
		if (e.ctrlKey && e.key === 'Enter') {
			handleSubmit(e)
		}
	}

	return (
		<Overlay>
			<form
				className="w-full max-w-screen-ss mx-auto flex flex-col gap-4 p-6 rounded-sm bg-inputBorder text-black shadow-sm relative"
				onSubmit={handleSubmit}
				onKeyDown={handleKeyDown}
			>
				<h4 className="text-lg font-semibold capitalize">add review</h4>
				<button
					type="button"
					onClick={close}
					className="inline-block absolute top-6 right-2 object-contain w-10 aspect-square"
				>
					<img src={closeIcon} alt="" />
				</button>
				<h6 className="my-2 capitalize text-base">{name}</h6>
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
					name="details"
					id="details"
					value={details}
					onChange={(e) => setDetails(e.target.value)}
					required
					minLength={20}
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
					disabled={isDisabled}
					className="capitalize bg-ecoGreen text-white py-3 w-4/5 flex items-center justify-center rounded-lg mx-auto mt-4 text-lg px-8 focus-within:outline-ecoGreen focus-within:outline-2 focus-within:shadow-lg focus-within:rounded-lg focus-within:bg-ecoGreen/70 transition-all disabled:bg-ecoGreen/30 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
				>
					{!isPending ? 'submit review' : 'loading...'}
				</button>
			</form>
		</Overlay>
	)
}
