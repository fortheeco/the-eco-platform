import React, { useEffect, useRef, useState } from 'react'

export default function OtpInput({ numberOfDigits, otp, setOtp }) {
	// const [otp, setOtp] = useState(new Array(numberOfDigits).fill(''))
	const otpBoxReference = useRef([])

	function handleChange(value, index) {
		let newArr = [...otp]
		newArr[index] = value
		setOtp(newArr)

		if (value && index < numberOfDigits - 1) {
			otpBoxReference.current[index + 1].focus()
		}
	}

	function handleBackspaceAndEnter(e, index) {
		if (e.key === 'Backspace' && !e.target.value && index > 0) {
			otpBoxReference.current[index - 1].focus()
		}
		if (e.key === 'Enter' && e.target.value && index < numberOfDigits - 1) {
			otpBoxReference.current[index + 1].focus()
		}
	}

	useEffect(() => {
		otpBoxReference.current[0]?.focus()
	}, [])

	return (
		<article className="w-full lg:w-1/2 flex items-center justify-center gap-4">
			{otp.map((digit, index) => (
				<input
					key={index}
					value={digit}
					// required
					maxLength={1}
					onChange={(e) => handleChange(e.target.value, index)}
					onKeyUp={(e) => handleBackspaceAndEnter(e, index)}
					ref={(reference) => (otpBoxReference.current[index] = reference)}
					className={`w-12 lg:w-20 aspect-square font-bold text-xl lg:text-3xl flex items-center justify-center text-center h-auto p-3 rounded-md bg-ecoGreen/10 border-ecoGreen border-0 focus:border-2 focus:outline-none`}
				/>
			))}
		</article>
	)
}
