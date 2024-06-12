import { useState } from 'react'
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from '../../../api/axios'
import bannerImg from '../../../assets/ecoBannerImage.png'
import genderIcon from '../../../assets/signup/gender-icon.svg'
import userIcon from '../../../assets/signup/profile.svg'
import passwordIcon from '../../../assets/signup/security-safe.svg'
import emailIcon from '../../../assets/signup/sms.svg'
import { validateForm } from '../../../helpers/validate-form'
import useSignup from '../../../hooks/useSignup'
import AuthNav from '../AuthNav'
import SplitLayout from '../SplitLayout'

const initialState = {
	full_name: '',
	email: '',
	gender: 'custom',
	password: '',
}

export default function Individual() {
	const [showPswd, setShowPswd] = useState(false)
	const [formData, setFormData] = useState(initialState)
	const { signup, error, isPending } = useSignup()
	const [formError, setFormError] = useState({})

	function handleChange(e) {
		const { name, value } = e.target
		setFormData((prev) => ({ ...prev, [name]: value }))
		// clear previous error for current input
		setFormError((prev) => ({ ...prev, [name]: null }))
	}

	async function handleSubmit(e) {
		e.preventDefault()
		const errors = validateForm(formData)
		setFormError(errors)

		if (Object.keys(errors).length === 0) {
			// await signup({ ...formData })
			const response = await axios.post('/signup/', formData.email)
			console.log(formData)
			return
		}
		console.error('Invalid credentials')
	}

	return (
		<div className="w-full block relative">
			{/* {error && toast.error(error, { position: 'top-center' })} */}
			<SplitLayout>
				<article className={`w-full md:p-10 lg:shadow-lg globe-bg`}>
					<AuthNav />
					<h4
						className={`text-2xl underline text-center my-6 block lg:text-3xl`}
					>
						Create an Account for free
					</h4>
					<form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
						<label className="block w-full">
							<span className="text-lg capitalize">full name</span>
							<div
								className={`flex mt-3 gap-3 bg-ecoGreen/10 rounded-md relative input-parent transition-all duration-200 ${
									formError.full_name ? 'input-error' : ''
								}`}
							>
								<img
									src={userIcon}
									alt="user avatar"
									className="h-12  inline-block p-2"
								/>
								<input
									type="text"
									disabled={isPending}
									name="full_name"
									value={formData.full_name}
									onChange={handleChange}
									placeholder="John Doe"
									className="bg-transparent inline-block relative outline-0 w-full border-0 pr-2"
								/>
							</div>
							{formError.full_name && (
								<small className="text-base text-rose-500 mt-2 inline-block">
									{formError.full_name}
								</small>
							)}
						</label>
						<label className="block w-full">
							<span className="text-lg capitalize">Gender</span>
							<div className="flex mt-3 pr-4 gap-3 bg-ecoGreen/10 rounded-md input-parent transition-all duration-200">
								<img
									src={genderIcon}
									alt="gender avatar"
									className="h-12  inline-block p-2"
								/>
								<select
									disabled={isPending}
									value={formData.gender}
									name="gender"
									onChange={handleChange}
									className="bg-transparent outline-0 border-0 capitalize w-full pr-2"
								>
									<option value="custom">custom</option>
									<option value="male">male</option>
									<option value="female">female</option>
								</select>
							</div>
						</label>

						<label className="block w-full">
							<span className="text-lg capitalize">email address</span>
							<div
								className={`flex mt-3 gap-3 bg-ecoGreen/10 rounded-md relative input-parent transition-all duration-200 ${
									formError.email ? 'input-error' : ''
								}`}
							>
								<img
									src={emailIcon}
									alt="email avatar"
									className="h-12  inline-block p-2"
								/>
								<input
									type="email"
									disabled={isPending}
									name="email"
									value={formData.email}
									onChange={handleChange}
									placeholder="example@email.com"
									className="bg-transparent outline-0 border-0 w-full pr-2"
								/>
							</div>
							{formError.email && (
								<small className="text-base text-rose-500 mt-2 inline-block">
									{formError.email}
								</small>
							)}
						</label>

						<label className="block w-full">
							<span className="text-lg capitalize">password</span>
							<div
								className={`flex mt-3 gap-3 bg-ecoGreen/10 rounded-md relative input-parent transition-all duration-200 ${
									formError.password ? 'input-error' : ''
								}`}
							>
								<img
									src={passwordIcon}
									alt="security avatar"
									className="h-12  inline-block p-2"
								/>
								<input
									type={showPswd ? 'text' : 'password'}
									disabled={isPending}
									name="password"
									value={formData.password}
									onChange={handleChange}
									placeholder="*******"
									className="bg-transparent outline-0 border-0 w-full pr-2"
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
						<p className="my-4 text-lg text-center">
							Already have an account?{' '}
							<Link
								to={'/sign-in'}
								className="capitalize lg:font-semibold text-ecoGreen focus-within:font-bold focus-within:outline-0 focus-within:underline transition-all"
							>
								Login to your portal
							</Link>
						</p>

						<button
							type="submit"
							disabled={isPending}
							className="capitalize bg-ecoGreen text-white w-full py-3 lg:w-4/5 rounded-md text-lg font-semibold mx-auto disabled:bg-slate-300 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none focus-within:outline-ecoGreen focus-within:outline-2 focus-within:shadow-lg focus-within:rounded-none focus-within:bg-ecoGreen/70 transition-all"
						>
							{isPending ? 'loading...' : 'create account'}
						</button>
						{error && (
							<small className="text-center text-rose-500 font-nunito text-lg inline-block w-full mt-6">
								{error}
							</small>
						)}
					</form>
				</article>
				<div className="hidden w-full ml-auto lg:block">
					<img
						src={bannerImg}
						alt="a hightlight of ECO's homepage"
						className="w-full h-auto inline-block object-contain"
					/>
				</div>
			</SplitLayout>
			<Link
				to={'/signup/organization'}
				className="block text-ecoGreen underline text-lg text-center lg:font-bold lg:text-left lg:ml-[20%] mt-16"
			>
				Create organization account
			</Link>
		</div>
	)
}
