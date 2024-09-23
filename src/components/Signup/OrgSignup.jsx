import Cookies from 'js-cookie'
import { useState } from 'react'
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import api from '../../api/axios'
import { validateEmail, validatePassword } from '../../helpers/validate-form'
import { PrimaryBtn } from '../utils/Button'

const initialState = {
	email: '',
	recovery_phone_number: '',
	password: '',
}
function validateNumber(phoneNumber) {
	let error

	if (!phoneNumber.trim() || !Number(phoneNumber)) {
		error = 'A valid recovery number is required'
	}

	return error
}

export default function OrgSignup() {
	const [showPswd, setShowPswd] = useState(false)
	const [formData, setFormData] = useState(initialState)
	const [isPending, setIsPending] = useState(false)
	const [error, setError] = useState(null)
	const [formError, setFormError] = useState({})
	const navigate = useNavigate()

	function handleChange(e) {
		const { name, value } = e.target
		setFormData((prev) => ({ ...prev, [name]: value }))
		// clear previous error for current input
		setFormError((prev) => ({ ...prev, [name]: null }))
	}

	async function handleSubmit(e) {
		e.preventDefault()
		const email = validateEmail(formData.email)
		const password = validatePassword(formData.password)
		const recovery_phone_number = validateNumber(formData.recovery_phone_number)

		// is there any input error
		if (email || password || recovery_phone_number) {
			setFormError({ email, password, recovery_phone_number })
			return
		}

		setIsPending(true)
		setError(null)

		await api
			.post('organisation/signup', formData)
			.then((res) => {
				setError(null)
				toast.success(res.data?.message)
				Cookies.set('token', res.data?.token)

				setTimeout(() => {
					navigate('details')
				}, 2000)
			})
			.catch((err) => {
				console.error(err)
				let logErr =
					err?.response.data.message ||
					err?.message ||
					'Oops... Something went wrong! Please try again'
				toast.error(logErr)
				setError(logErr)
			})
			.finally(() => {
				setIsPending(false)
			})
		return
	}

	return (
		<>
			<div className="w-full flex justify-between items-center mb-20">
				<p>Awesome!!, Account type set 👍🏿</p>
				<Link
					to={'/signup'}
					className="text-ecoGreen capitalize font-semibold hidden sm:inline-block"
				>
					go back
				</Link>
			</div>
			<h4 className="text-2xl sm:text-3xl md:text-4xl underline capitalize my-6 block font-bold">
				login details
			</h4>

			<form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
				<label className="block w-full">
					<span className="text-lg capitalize">email address</span>
					<input
						type="email"
						disabled={isPending}
						name="email"
						value={formData.email}
						onChange={handleChange}
						placeholder="example@email.com"
						className={`mt-3 gap-3 h-10 rounded-md relative input-parent transition-all bg-nav/10 inline-block outline-0 w-full border-0 focus-within:border-b-2 focus-within:border-ecoGreen p-4 duration-200 ${
							formError.email ? 'border-2 border-red' : ''
						}`}
					/>
					{formError.email && (
						<small className="text-base text-rose-500 mt-2 inline-block">
							{formError.email}
						</small>
					)}
				</label>

				<label className="block w-full">
					<span className="text-lg capitalize">account recovery number</span>
					<input
						type="tel"
						name="recovery_phone_number"
						disabled={isPending}
						// minLength={9}
						maxLength={80}
						value={formData.recovery_phone_number}
						onChange={handleChange}
						placeholder="Enter phone number"
						className={`mt-3 gap-3 h-10 rounded-md relative input-parent transition-all bg-nav/10 inline-block outline-0 w-full border-0 focus-within:border-b-2 focus-within:border-ecoGreen p-4 duration-200 ${
							formError.recovery_phone_number ? 'border-2 border-red' : ''
						}`}
					/>
					{formError.recovery_phone_number && (
						<small className="text-base text-rose-500 mt-2 inline-block">
							{formError.recovery_phone_number}
						</small>
					)}
				</label>

				<label className="block w-full">
					<span className="text-lg capitalize">password</span>
					<div
						className={`flex mt-3 gap-3 rounded-md relative input-parent bg-nav/10 transition-all duration-200 ${
							formError.password ? 'input-error' : ''
						}`}
					>
						<input
							type={showPswd ? 'text' : 'password'}
							disabled={isPending}
							name="password"
							value={formData.password}
							onChange={handleChange}
							placeholder="*******"
							className="h-10 rounded-md inline-block outline-0 w-full border-0 bg-transparent px-4"
						/>
						<div
							className="flex w-10 items-center justify-center text-2xl"
							onClick={() => setShowPswd((pswd) => !pswd)}
						>
							{showPswd ? <IoEyeOutline /> : <IoEyeOffOutline />}
						</div>
					</div>
					{formError.password && (
						<small className="text-base text-rose-500 mt-2 inline-block">
							{formError.password}
						</small>
					)}
				</label>
				<div className="w-full flex gap-4 mt-20 lg:mt-32 mb-10 justify-center sm:justify-between items-center">
					<Link
						to={'/signup'}
						className="hidden capitalize bg-transparent text-ecoGreen py-3 sm:flex justify-center rounded-full border-2 border-ecoGreen text-lg px-10 focus-within:bg-ecoGreen focus-within:text-white focus-within:shadow-lg  transition-all"
					>
						back
					</Link>
					<PrimaryBtn
						type="submit"
						props={{ disabled: isPending }}
						variant={
							'disabled:bg-ecoGreen/30 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none'
						}
						content={isPending ? 'loading...' : 'save & continue'}
					/>
				</div>
				{error && (
					<small className="text-center text-rose-500 font-nunito text-lg font-semibold inline-block w-full max-w-screen-sm mx-auto mt-2">
						{error}
					</small>
				)}
			</form>
			{/* </article> */}
		</>
	)
}
