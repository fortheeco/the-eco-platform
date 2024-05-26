import { useState } from 'react'
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import AuthNav from '../Signup/AuthNav'
import SplitLayout from '../Signup/SplitLayout'
import bannerImg from '../assets/ecoBannerImage.png'
import checkmarkIcon from '../assets/signup/check.svg'
import passwordIcon from '../assets/signup/security-safe.svg'
import emailIcon from '../assets/signup/sms.svg'
import squareIcon from '../assets/signup/squacle.svg'

export function SignIn() {
	const [showPswd, setShowPswd] = useState(false)

	async function handleSubmit(e) {
		e.preventDefault()
		console.log('form submitted')
	}

	return (
		<div className="w-full block relative py-10 lg:py-20 font-nunito sm:px-8 lg:px-20">
			<SplitLayout>
				<article className={`w-full md:p-10 lg:shadow-lg globe-bg`}>
					<AuthNav />
					<h4
						className={`text-lg sm:text-2xl font-semibold underline text-center my-6 block lg:text-3xl`}
					>
						Continue to your account using
					</h4>
					<form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
						<label className="block w-full">
							<span className="text-lg capitalize">email address</span>
							<div className="flex mt-3 pr-4 gap-3 bg-ecoGreen/10 rounded-md">
								<img
									src={emailIcon}
									alt="email avatar"
									className="h-12  inline-block p-2"
								/>
								<input
									type="email"
									required
									minLength={6}
									maxLength={80}
									autoComplete="on"
									placeholder="example@email.com"
									className="bg-transparent outline-0 border-0 w-full pr-2"
								/>
							</div>
						</label>

						<label className="block w-full mt-4">
							<span className="text-lg capitalize">password</span>
							<div className="flex mt-3 pr-4 gap-3 bg-ecoGreen/10 rounded-md">
								<img
									src={passwordIcon}
									alt="security avatar"
									className="h-12  inline-block p-2"
								/>
								<input
									type={showPswd ? 'text' : 'password'}
									required
									minLength={6}
									maxLength={100}
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
						</label>
						<label className="flex items-center gap-3 mt-3">
							<div className="flex relative w-6 h-6">
								<input
									type="checkbox"
									name="remember-me"
									id="remember-me"
									className="w-0 h-0 invisible peer"
								/>
								<img src={squareIcon} alt="checked" className="w-full h-full" />
								<img
									src={checkmarkIcon}
									alt="checked"
									className="w-[14px] inline-block top-[6px] left-[4px] invisible object-contain absolute peer-checked:visible"
								/>
							</div>
							<span>Remember me</span>
						</label>

						<button
							type="submit"
							className="capitalize bg-ecoGreen text-white py-3 w-4/5 rounded-md text-lg font-semibold mx-auto inline-block my-6"
						>
							login
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
				<div className="hidden w-full ml-auto lg:block">
					<img
						src={bannerImg}
						alt="a hightlight of ECO's homepage"
						className="w-full h-auto inline-block object-contain"
					/>
				</div>
			</SplitLayout>
		</div>
	)
}
