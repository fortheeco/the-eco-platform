import { useState } from 'react'
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import checkmarkIcon from '../../assets/signup/check.svg'
import passwordIcon from '../../assets/signup/security-safe.svg'
import emailIcon from '../../assets/signup/sms.svg'
import squareIcon from '../../assets/signup/squacle.svg'
import { validateEmail, validatePassword } from '../../helpers/validate-form'
import useLogin from '../../hooks/useLogin'
import AuthNav from '../Signup/AuthNav'
import SplitLayout from '../Signup/SplitLayout'

const initialState = {
	email: '',
	password: '',
}

export function SignIn() {
	const [showPswd, setShowPswd] = useState(false)
	const [checked, setChecked] = useState(true)
	const [formData, setFormData] = useState(initialState)
	const { signin, error, isPending } = useLogin()
	const [formError, setFormError] = useState({})

	function handleChange(e) {
		const { name, value } = e.target
		setFormData((prev) => ({ ...prev, [name]: value }))
		setFormError((prev) => ({ ...prev, [name]: null }))
	}

	async function handleSubmit(e) {
		e.preventDefault()
		let emailError = validateEmail(formData.email)
		let pswdError = validatePassword(formData.password)
		setFormError({ email: emailError, password: pswdError })

		if (emailError || pswdError) {
			return
		}
		await signin(formData.email, formData.password)
		return
	}

	return (
		<SplitLayout>
			<article className={`w-full`}>
				<AuthNav />
				<h4
					className={`text-lg sm:text-2xl font-semibold underline text-center my-6 block lg:text-3xl`}
				>
					Continue to your account using
				</h4>
				<form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
					<label className="block w-full">
						<span className="text-lg capitalize">email address</span>
						<div className="flex mt-3 pr-4 gap-3 bg-ecoGreen/10 rounded-md input-parent">
							<img
								src={emailIcon}
								alt="email avatar"
								className="h-12  inline-block p-2"
							/>
							<input
								type="email"
								name="email"
								value={formData.email}
								onChange={handleChange}
								placeholder="example@email.com"
								className="bg-transparent outline-0 border-0 w-full pr-2 focus-within:outline-0 autofill:bg-ecoGreen/20"
							/>
						</div>
						{formError.email && (
							<small
								aria-description="email input validation error"
								className="inline-block text-lg text-rose-600 text-center"
							>
								{formError.email}
							</small>
						)}
					</label>

					<label className="block w-full mt-4">
						<span className="text-lg capitalize">password</span>
						<div className="flex mt-3 pr-4 gap-3 bg-ecoGreen/10 rounded-md input-parent">
							<img
								src={passwordIcon}
								alt="security avatar"
								className="h-12  inline-block p-2"
							/>
							<input
								type={showPswd ? 'text' : 'password'}
								name="password"
								value={formData.password}
								onChange={handleChange}
								placeholder="*******"
								className="bg-transparent outline-0 border-0 w-full pr-2 focus-within:outline-0"
							/>
							<div
								className="flex w-10 items-center justify-center text-2xl"
								onClick={() => setShowPswd((pswd) => !pswd)}
							>
								{showPswd ? <IoEyeOutline /> : <IoEyeOffOutline />}
							</div>
						</div>
						{formError.password && (
							<small
								aria-description="password input validation error"
								className="inline-block text-lg text-rose-600 text-center"
							>
								{formError.password}
							</small>
						)}
					</label>
					<label className="flex items-center gap-3 mt-3">
						<div className="flex relative w-6 h-6">
							<input
								checked={checked}
								onChange={() => setChecked((prev) => !prev)}
								type="checkbox"
								name="remember-me"
								id="remember-me"
								className="w-0 h-0 invisible peer"
							/>
							<img
								src={squareIcon}
								alt="checked"
								className="w-full h-full peer-focus:shadow-md"
							/>
							<img
								src={checkmarkIcon}
								alt="checked"
								className="w-[14px] inline-block top-[6px] left-[4px] invisible object-contain absolute peer-checked:visible"
							/>
						</div>
						<span>Remember me</span>
					</label>
					{error && (
						<small className="inline-block text-lg text-rose-600 text-center">
							{error}
						</small>
					)}
					<button
						type="submit"
						disabled={isPending}
						className="capitalize bg-ecoGreen text-white py-3 w-4/5 rounded-md text-lg font-semibold mx-auto inline-block mb-6"
					>
						{isPending ? 'Loading...' : 'login'}
					</button>

					<Link
						to={'/iforgot'}
						className="font-semibold text-ecoGreen text-lg text-center capitalize"
					>
						forgot password?
					</Link>
					<p className="my-4 text-lg text-center">
						Don't have an account yet?{' '}
						<Link
							to={'/sign-up'}
							className="capitalize lg:font-semibold text-ecoGreen"
						>
							Join PALs network
						</Link>
					</p>
				</form>
			</article>
		</SplitLayout>
	)
}
