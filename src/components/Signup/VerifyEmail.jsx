import { useState } from 'react'
import { toast } from 'react-toastify'
import { layout } from '../../style'
import OtpInput from '../../utils/OtpInput'

const numberOfDigits = 5

export default function VerifyEmail() {
	const [otp, setOtp] = useState(new Array(numberOfDigits).fill(''))

	function handleSubmit(e) {
		e.preventDefault()
		const isComplete = otp.every((item) => item !== '')

		if (!isComplete) {
			console.log('Invalid OTP')
			toast.error('Invalid OTP', { position: 'top-center' })
			return
		} else {
			alert('Email verified')
		}
	}

	return (
		<article className={`w-full relative ${layout.section}`}>
			<form
				onSubmit={handleSubmit}
				className="globe-bg relative w-full min-h-[60vh] flex flex-col items-center justify-start py-10 lg:px-32 md:px-10 lg:py-20"
			>
				<h2 className="font-bold text-2xl md:text-3xl text-ecoGreen">
					O.T.P Verification
				</h2>
				<p className="w-full text-base lg:text-xl max-w-screen-sm text-center my-8">
					A message with a 6 digit verification code has been sent to your
					registered email address. Kindly check and input it
				</p>
				<OtpInput numberOfDigits={numberOfDigits} otp={otp} setOtp={setOtp} />
				<button
					type="button"
					className="capitalize text-ecoGreen bg-transparent w-fit text-lg font-semibold mx-auto inline-block outline-0 mt-8 hover:underline transition-all duration-300 hover:text-ecoGreen/70"
				>
					resend O.T.P
				</button>
				<button
					type="submit"
					className="capitalize bg-ecoGreen text-white py-3 w-fit px-20 rounded-md text-lg font-semibold mx-auto flex my-10 lg:my-20 hover:bg-ecoGreen/80 transition-all focus:outline-ecoGreen focus:shadow-md"
				>
					verify email
				</button>
			</form>
		</article>
	)
}
