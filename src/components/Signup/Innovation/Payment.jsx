import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../../../api/axios'
import sideImg from '../../../assets/signup/innovation-bulb.svg'
import paystackIcon from '../../../assets/signup/Paystack.png'
import { formatResError } from '../../../helpers/FormatErrorMessage'
import { PrimaryBtn } from '../../utils/Button'
import SignupSteps from '../SignupSteps'
import SplitLayout from '../SplitLayout'

export default function Payments() {
	const [isPending, setIsPending] = useState(false)
	const [error, setError] = useState(null)
	const [isSuccess, setIsSuccess] = useState(false)
	const navigate = useNavigate()

	useEffect(() => {
		const controller = new AbortController()

		async function getOrgDetails() {
			setIsPending(true)
			setError(null)
			try {
				const res = await api.get('organisation/details', {
					signal: controller.signal,
				})
				// check if the user has already paid
				if (res.data?.paid_account) {
					navigate('/signup/organization/details')
				} else {
					console.log('not yet paid')
				}

				setIsPending(false)
				// console.log(res.data)
			} catch (err) {
				console.error(err)
				let fetchError = formatResError(err)
				setError(fetchError)
				setIsPending(false)
			}
		}
		getOrgDetails()

		return () => controller.abort('request ended abruptly')
	}, [])

	async function handleSubmit(e) {
		e.preventDefault()
		setIsPending(true)
		setError(null)
		try {
			// get auth link for making payment with Paystack
			const res = await api.get('organisation/make-payment')
			// open the unique link in a new tab
			window.open(res.data.data?.authorization_url)
			setIsSuccess(true)
		} catch (err) {
			console.error(err)
			let fetchError = formatResError(err)
			setError(fetchError)
		}
	}

	return (
		<SplitLayout img={sideImg} heading={'welcome to ECO Innovation Hub'}>
			{/* <div className="w-full flex justify-between items-center mb-20">
				<p>Final Step and you are done</p>
			</div> */}
			<h4 className="text-2xl sm:text-3xl md:text-4xl underline capitalize mb-10 block font-bold">
				payment information
			</h4>
			<article className="flex max-w-xs w-full mx-auto aspect-square rounded-xl shadow-md border-2 border-ecoGreen relative">
				<small className="inline-block text-ecoGreen text-base font-bold font-nunito absolute top-1/4 left-1/2 z-10 -translate-x-1/2 italic">
					powered by
				</small>
				<img
					src={paystackIcon}
					alt="powered by Paystack"
					className="w-full object-contain rounded-xl"
				/>
			</article>

			<form
				onSubmit={handleSubmit}
				className="w-full flex flex-col gap-4 lg:gap-8 mt-6 lg:mt-16"
			>
				{error && <p className="text-red text-center">{error}</p>}
				{isSuccess && (
					<p className="text-ecoGreen text-base text-center">
						After making payment, refresh this page to continue
					</p>
				)}
				<div className="w-full flex flex-col sm:flex-row gap-4 mt-40 mb-10 justify-between items-center">
					<button
						type="button"
						onClick={() => history.back()}
						className="hidden capitalize bg-transparent text-ecoGreen py-3 sm:flex justify-center rounded-full border-2 border-ecoGreen text-lg px-10 focus-within:bg-ecoGreen focus-within:text-white focus-within:shadow-lg  transition-all"
					>
						back
					</button>
					<PrimaryBtn
						type="submit"
						props={{ disabled: isPending || isSuccess }}
						variant={
							'disabled:bg-ecoGreen/30 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none'
						}
						content={
							!isPending || isSuccess ? 'proceed with payment' : 'loading...'
						}
					/>
				</div>
			</form>
			<SignupSteps length={6} activeStep={6} />
		</SplitLayout>
	)
}
