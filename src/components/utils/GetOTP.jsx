import { useState } from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import OtpInput from '../../utils/OtpInput'

export default function GetOTP({
	handleSubmit,
	retryFunc,
	email,
	error,
	isPending,
	numberOfDigits = 5,
}) {
	const [otp, setOtp] = useState(new Array(numberOfDigits).fill(''))

	return (
		<form
			onSubmit={(e) => handleSubmit(e, otp)}
			className="w-full flex flex-col items-center justify-center max-w-screen-ss"
		>
			<h2 className="font-bold text-2xl md:text-3xl text-black">
				Check your email
			</h2>
			<p className="w-full text-base lg:text-xl max-w-screen-sm text-center my-8">
				We sent a verification code to {email}. Please enter it here
			</p>
			<OtpInput numberOfDigits={numberOfDigits} otp={otp} setOtp={setOtp} />
			{error && (
				<small className="text-base text-rose-500 font-semibold inline-block">
					{error}
				</small>
			)}

			<button
				type="submit"
				disabled={isPending}
				className="capitalize bg-ecoGreen text-white py-3 w-fit px-20 rounded-md text-lg font-semibold mx-auto flex mt-10 mb-2 lg:mt-20 hover:bg-ecoGreen/80 transition-all focus:outline-ecoGreen focus:shadow-md"
			>
				{isPending ? 'Loading' : 'verify email'}
			</button>
			<p>
				Didn't receive the email?{' '}
				<button
					type="button"
					disabled={isPending}
					onClick={retryFunc}
					className="capitalize text-ecoGreen bg-transparent w-fit text-lg font-semibold mx-auto inline-block outline-0 focus-within:underline disabled:text-slate-400 disabled:no-underline hover:underline transition-all duration-300 hover:text-ecoGreen/70"
				>
					click here to resend
				</button>
			</p>
			<Link
				to={'/login'}
				className="text-ecoGreen flex items-center gap-2 text-lg font-semibold mt-12 lg:mt-20 text-center hover:gap-4 transition-all outline-0 focus-within:underline"
			>
				<BiArrowBack /> Back to log in
			</Link>
		</form>
	)
}
