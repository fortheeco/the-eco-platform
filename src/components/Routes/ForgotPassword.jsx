import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import { toast } from 'react-toastify'
import api from '../../api/axios'
import { validateEmail } from '../../helpers/validate-form'
import { layout } from '../../style'
import Nav from '../Nav/Nav'
import GetOTP from '../utils/GetOTP'

export default function ForgotPassword() {
	const [email, setEmail] = useState('')
	const [isPending, setIsPending] = useState(false)
	const [error, setError] = useState(null)
	const [message_id, setId] = useState('')
	const [showOTPForm, setShowOTPForm] = useState(false)
	const [otpError, setOtpError] = useState(null)
	const navigate = useNavigate()
	const [formError, setFormError] = useState(null)

	function handleChange(e) {
		setError(null)
		setEmail(e.target.value)
		setFormError(null)
	}

	async function requestOTP(e) {
		e.preventDefault()
		const inputError = validateEmail(email)
		setFormError(inputError)

		if (inputError) {
			return
		}
		setIsPending(true)
		setError(null)
		try {
			const response = await api.post('request-reset-password/', { email })
			console.log(response)
			setIsPending(false)
			setError(null)
			setId(response.data?.message_id)
			setShowOTPForm(true)
		} catch (err) {
			let logErr =
				err?.response?.data?.email[0] ||
				'Something went wrong... please refresh and try again'
			setError(logErr)
			console.error(err)
			setIsPending(false)
		}
	}

	async function validateOTP(e, otp) {
		otp = otp.join('')
		e.preventDefault()
		setIsPending(true)
		setOtpError(null)

		try {
			const res = await api.post('password-reset-verify-otp/', {
				otp,
				message_id,
			})
			setOtpError(null)
			setIsPending(false)
			console.log(res)
			navigate('/reset-password', { state: { email } })
		} catch (err) {
			let logErr =
				err?.response?.data?.email[0] ||
				'Something went wrong... please refresh and try again'
			setOtpError(logErr)
			setIsPending(false)
		}
	}

	async function handleRetry() {
		console.log('Retrying...')
	}

	return (
		<div className="relative w-full">
			<Nav />
			{/* {error && toast.error(error)} */}
			<section className={`w-full bg-white ${layout.section}`}>
				<div className="lg:py-16 rounded-lg shadow-xl bg-ecoGreen/5 border-t-4 border-ecoGreen relative w-full flex flex-col items-center justify-center mt-28 lg:px-16 py-6">
					{!showOTPForm ? (
						<form className="w-full flex flex-col items-center justify-center max-w-screen-ss">
							<h2 className="capitalize font-bold text-2xl lg:text-3xl text-center mb-4 font-nunito">
								forgot password
							</h2>
							<p className="text-lg text-nav/70 my-6 text-center">
								To reset your password, enter the email address you used to
								register your account. A 5 digit code would be sent to this
								address.
							</p>
							<label className="flex flex-col mt-3 mb-4 gap-3 w-full">
								<span className="capitalize font-semibold text-lg">
									email address
								</span>
								<input
									type="email"
									required
									minLength={6}
									maxLength={80}
									value={email}
									onChange={handleChange}
									autoFocus
									aria-description="Enter your email to reset your password"
									placeholder="example@email.com"
									className="focus-within:bg-ecoGreen/10 bg-transparent rounded-md outline-0 w-full h-12 p-4 placeholder:font-semibold border-2 border-black/20 focus-within:border-ecoGreen transition-all duration-300"
								/>
							</label>
							{error && (
								<small className="text-base text-rose-500 font-semibold inline-block">
									{error}
								</small>
							)}
							{formError && (
								<small className="text-base text-rose-500 font-semibold inline-block">
									{formError}
								</small>
							)}

							<button
								onClick={requestOTP}
								disabled={isPending}
								className="capitalize bg-ecoGreen text-white w-[95%]  px-8 py-3 flex justify-center rounded-md text-lg mx-auto font-semibold mt-6 mb-4 hover:bg-ecoGreen/80 disabled:bg-slate-300 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none focus-within:outline-ecoGreen focus-within:outline-2 focus-within:shadow-lg focus-within:rounded-xl focus-within:bg-ecoGreen/70 transition-all"
							>
								{isPending ? 'loading' : 'reset password'}
							</button>
							<p className="text-center ">
								Don't have an account{' '}
								<Link to={'/signup'} className="capitalize text-ecoGreen">
									register here
								</Link>
							</p>
						</form>
					) : (
						<GetOTP
							email={email}
							error={otpError}
							isPending={isPending}
							handleSubmit={validateOTP}
							retryFunc={handleRetry}
						/>
					)}
				</div>
			</section>
		</div>
	)
}
