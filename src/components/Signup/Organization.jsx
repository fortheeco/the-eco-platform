import { useState } from 'react'
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import bannerImg from '../assets/signup/org-account-icon.png'
import AuthNav from './AuthNav'
import SplitLayout from './SplitLayout'

const companyTypes = ['manufacturing', 'agriculture', 'engineering']

export default function Organization() {
	const [showPswd, setShowPswd] = useState(false)
	const [companiesArr, setCompaniesArr] = useState(companyTypes)

	async function handleSubmit(e) {
		e.preventDefault()
		console.log('form submitted')
	}

	return (
		<div className="w-full block relative">
			<SplitLayout>
				<article className={`w-full md:p-10 lg:shadow-lg globe-bg`}>
					<AuthNav />
					<h4 className="text-lg sm:text-xl md:text-2xl underline text-center my-6 block lg:text-3xl font-bold">
						Create an organization account for free
					</h4>
					<div className="lg:hidden w-full my-8 flex flex-col items-center justify-center text-center gap-4">
						<img
							src={bannerImg}
							alt="organization account"
							className="w-3/5 h-auto inline-block object-contain"
						/>
						<h4 className="text-lg font-semibold">
							Leader accounts for organization
						</h4>
						<span className="bg-ecoGreen text-white font-semibold px-10 py-2 rounded-md">
							₦1999
						</span>
					</div>
					<form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
						<label className="block w-full">
							<span className="text-lg capitalize">name of company</span>
							<div className="flex h-12 mt-3 px-4 gap-3 bg-ecoGreen/10 rounded-md">
								<input
									type="text"
									required
									minLength={6}
									maxLength={30}
									placeholder="John Doe"
									className="bg-transparent outline-0 w-full border-0 pr-2 focus:border-b-2"
								/>
							</div>
						</label>
						<label className="block w-full">
							<span className="text-lg capitalize">type of company</span>
							<div className="flex mt-3 px-4 h-12 gap-3 bg-ecoGreen/10 rounded-md">
								<select
									required
									className="bg-transparent outline-0 border-0  capitalize w-full pr-2"
								>
									{companiesArr.map((compType) => (
										<option value={compType} key={compType}>
											{compType}
										</option>
									))}
								</select>
							</div>
						</label>

						<label className="block w-full">
							<span className="text-lg capitalize">email address</span>
							<div className="flex mt-3 px-4 h-12 gap-3 bg-ecoGreen/10 rounded-md">
								<input
									type="email"
									required
									minLength={6}
									maxLength={80}
									placeholder="example@email.com"
									className="bg-transparent outline-0 border-0 w-full pr-2"
								/>
							</div>
						</label>

						<label className="block w-full">
							<span className="text-lg capitalize">password</span>
							<div className="flex mt-3 px-4 h-12 gap-3 bg-ecoGreen/10 rounded-md">
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
						<p className="my-4 text-lg text-center">
							Already have an account?{' '}
							<Link
								to={'/sign-in'}
								className="capitalize lg:font-semibold text-ecoGreen"
							>
								Login to your portal
							</Link>
						</p>

						<button
							type="submit"
							className="capitalize bg-ecoGreen text-white w-full py-3 lg:w-4/5 rounded-md text-lg font-semibold mx-auto"
						>
							create account
						</button>
					</form>
				</article>
				<div className="hidden w-full ml-auto lg:flex flex-col items-center justify-center text-center">
					<img
						src={bannerImg}
						alt="organization account"
						className="w-full h-auto inline-block object-contain"
					/>
					<h4 className="text-4xl font-nunito font-bold">
						Leader accounts for <br />
						organization <span className="text-ecoGreen block">₦1999</span>
					</h4>
				</div>
			</SplitLayout>
			<Link
				to={'/sign-up/organization'}
				className="block text-ecoGreen underline text-lg text-center lg:font-bold lg:text-left lg:ml-[20%] mt-16"
			>
				Create organization account
			</Link>
		</div>
	)
}
