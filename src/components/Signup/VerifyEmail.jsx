import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from '../../api/axios'
import { layout } from '../../style'
import OtpInput from '../../utils/OtpInput'

const NUMBER_OF_DIGITS = 5

export default function VerifyEmail() {
	const [otp, setOtp] = useState(new Array(NUMBER_OF_DIGITS).fill(''))
	const [isDisabled, setIsDisabled] = useState(false)
	const [error, setError] = useState(null)
	const [isPending, setIsPending] = useState(false)
	const navigate = useNavigate()
	const { state } = useLocation()
	const { formData, id } = state || {}
	const [messageId, setMessageId] = useState(id)

	console.log(formData)

	async function handleSubmit(e) {
		e.preventDefault()
		const isComplete = otp.every((item) => item !== '')

		if (!isComplete) {
			toast.error('Invalid OTP')
			return
		} else {
			await axios
				.post('verify_email/', {
					message_id: messageId,
					otp_code: otp.join(''),
				})
				.then((response) => {
					toast.success(response.data?.message)
					setIsPending(false)
					setError(null)
					navigate('/signup/user/details', {
						state: { formData },
						replace: true,
					})
				})
				.catch((err) => {
					let logErr =
						err?.response.data?.message ||
						'Oops... Something went wrong! Please try again'

					setIsPending(false)
					setError(logErr)
				})
		}
	}

	async function resendOTP() {
		await axios
			.post('/signup/', { email: formData.email })
			.then((response) => {
				setIsPending(false)
				setError(null)
				setMessageId(response.data.message_id)
			})
			.catch((err) => {
				console.error(err)
				setIsPending(false)
				setError(err)
			})
			.finally(() => {
				setIsDisabled(true)
			})
	}

	// Redirect the user back to the beginning if there's no record of the user
	useEffect(() => {
		if (!formData?.email || formData.email === '') {
			navigate('/signup/user', { replace: true })
		}
	}, [])

	return (
		<article className={`w-full relative ${layout.section}`}>
			{error && toast.error(error)}
			<form
				onSubmit={handleSubmit}
				className="globe-bg relative w-full min-h-[60vh] flex flex-col items-center justify-start py-10 lg:px-32 md:px-10 lg:py-20"
			>
				<h2 className="font-bold text-2xl md:text-3xl text-ecoGreen">
					O.T.P Verification
				</h2>
				<p className="w-full text-base lg:text-xl max-w-screen-sm text-center my-8">
					A message with a {NUMBER_OF_DIGITS} digit verification code has been
					sent to your registered email address. Kindly check and input it
				</p>
				<OtpInput numberOfDigits={NUMBER_OF_DIGITS} otp={otp} setOtp={setOtp} />
				<button
					type="button"
					disabled={isDisabled || isPending}
					onClick={resendOTP}
					className="capitalize text-ecoGreen bg-transparent w-fit text-lg font-semibold mx-auto inline-block outline-0 mt-8 disabled:text-slate-400 disabled:no-underline hover:underline transition-all duration-300 hover:text-ecoGreen/70"
				>
					resend O.T.P
				</button>
				<button
					type="submit"
					className="capitalize bg-ecoGreen text-white py-3 w-fit px-20 rounded-md text-lg font-semibold mx-auto flex my-10 lg:my-20 hover:bg-ecoGreen/80 transition-all focus:outline-ecoGreen focus:shadow-md"
				>
					{isPending ? 'Loading' : 'verify email'}
				</button>
			</form>
		</article>
	)
}
