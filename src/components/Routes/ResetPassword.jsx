import { useState } from 'react'
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import api from '../../api/axios'
import { validatePassword } from '../../helpers/validate-form'
import { layout } from '../../style'
import Nav from '../Nav/Nav'

export default function ResetPassword() {
	const [new_password, setPswd] = useState('')
	const [pswd2, setPswd2] = useState('')
	const [error, setError] = useState(null)
	const [formError, setFormError] = useState(null)
	const [formError2, setFormError2] = useState(null)
	const [isPending, setIsPending] = useState(false)
	const { state } = useLocation()
	const { email } = state || ''
	const navigate = useNavigate()

	function handleChange(e) {
		setFormError(null)
		setPswd(e.target.value)
	}

	function handleChange2(e) {
		setFormError2(null)
		setPswd2(e.target.value)
	}

	async function handleSubmit(e) {
		e.preventDefault()
		const inputError = validatePassword(new_password)
		setFormError(inputError)
		if (!pswd2) {
			setFormError2('Please re-enter your password')
			return
		}
		if (pswd2 !== new_password) {
			setFormError2('The two passwords do not match')
			return
		}

		if (formError || formError2) return

		setIsPending(true)
		setError(null)

		try {
			// https://theeco.pythonanywhere.com/api/reset-password/
			await api.post('reset-password/', { email, new_password })
			toast.success('Password changed successfully!')
			setError(null)
			setTimeout(() => {
				navigate('/')
			}, 2000)
		} catch (err) {
			let logErr =
				err?.response?.data?.detail ||
				'Something went wrong... please refresh and try again'
			setError(logErr)
			console.error(err)
		} finally {
			setIsPending(false)
		}
	}

	return (
		<div className="relative w-full">
			<Nav />
			{error && toast.error(error)}
			<section className={`w-full bg-white ${layout.section}`}>
				<div className="lg:py-16 rounded-lg shadow-xl bg-ecoGreen/5 border-t-4 border-ecoGreen relative w-full flex flex-col items-center justify-center mt-32 lg:mt-28 lg:px-16 p-6">
					<form className="w-full flex flex-col items-center justify-center max-w-screen-ss">
						<h2 className="capitalize font-bold text-2xl lg:text-3xl text-center mb-4 font-nunito">
							Reset password
						</h2>

						<PasswordInput
							label={'new password'}
							value={new_password}
							handleChange={handleChange}
						/>
						{!formError && (
							<small
								className="text-sm self-start mb-5"
								aria-description="password validation requirement"
							>
								Must be at least 8 characters.
							</small>
						)}

						{formError && (
							<small className="text-base text-rose-500 -mt-2 mb-3 font-semibold inline-block  self-start">
								{formError}
							</small>
						)}
						<PasswordInput
							label={'re-enter new password'}
							value={pswd2}
							handleChange={handleChange2}
						/>
						{formError2 && (
							<small className="text-base text-rose-500 font-semibold inline-block  self-start">
								{formError2}
							</small>
						)}
						{error && (
							<small className="text-base text-rose-500 font-semibold inline-block  self-start">
								{error}
							</small>
						)}

						<button
							onClick={handleSubmit}
							disabled={isPending || !new_password}
							className="capitalize bg-ecoGreen text-white w-[95%]  px-8 py-3 flex justify-center rounded-md text-lg mx-auto font-semibold mt-6 mb-4 hover:bg-ecoGreen/80 disabled:bg-slate-300 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none focus-within:outline-ecoGreen focus-within:outline-2 focus-within:shadow-lg focus-within:rounded-xl focus-within:bg-ecoGreen/70 transition-all"
						>
							{isPending ? 'loading' : 'confirm'}
						</button>
					</form>
				</div>
			</section>
		</div>
	)
}

function PasswordInput({ label, value, handleChange }) {
	const [showPswd, setShowPswd] = useState(false)

	return (
		<label className="flex flex-col mt-3 mb-4 gap-2 w-full">
			<span className="capitalize font-semibold text-lg">{label}</span>
			<div className="flex mt-2 pr-2 gap-3 bg-slate-50/5 rounded-md relative border-2 border-black/40 transition-all duration-200">
				<input
					type={showPswd ? 'text' : 'password'}
					// disabled={isPending || isSuccess}
					name="password"
					value={value}
					onChange={handleChange}
					placeholder="Enter your new password"
					className="focus-within:bg-ecoGreen/10 bg-transparent rounded-md outline-0 w-full h-12 p-4 pr-2"
				/>
				<div
					className="flex w-10 items-center justify-center text-2xl"
					onClick={() => setShowPswd((pswd) => !pswd)}
				>
					{showPswd ? <IoEyeOutline /> : <IoEyeOffOutline />}
				</div>
			</div>
		</label>
	)
}
