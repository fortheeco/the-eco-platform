import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import api from '../../../api/axios'
import { PrimaryBtn } from '../../utils/Button'
import { FormInput } from '../../utils/FormInput'
import SplitLayout from '../SplitLayout'

const initialState = {
	organization_name: '',
	organization_type: '',
	mission_statement: '',
	description: '',
	registration_year: new Date().getFullYear(),
	registration_number: '',
}

export default function OrgDetails() {
	const [formData, setFormData] = useState(initialState)
	const [isPending, setIsPending] = useState(false)
	const [error, setError] = useState(null)

	// const [formError, setFormError] = useState({})
	const navigate = useNavigate()

	const isDisabled =
		Object.values(formData).some((input) => !Boolean(input)) || isPending

	function handleChange(e) {
		const { name, value } = e.target
		setFormData((prev) => ({ ...prev, [name]: value }))
		// clear previous error for current input
		// setFormError((prev) => ({ ...prev, [name]: null }))
	}

	async function handleSubmit(e) {
		e.preventDefault()
		console.log(formData)

		setIsPending(true)
		setError(null)

		await api
			.post('organisation/add_organisation_details', formData)
			.then((res) => {
				setError(null)
				// toast.success(res.data?.message)
				console.log(res)
				setTimeout(() => {
					navigate('/signup/organization/contact')
				}, 2000)
			})
			.catch((err) => {
				console.error(err)
				let logErr =
					err?.response.data.detail ||
					err?.message ||
					'Oops... Something went wrong! Please try again'
				// toast.error(logErr)
				setError(logErr)
			})
			.finally(() => {
				setIsPending(false)
			})
		return
	}

	return (
		<SplitLayout>
			<div className="w-full flex justify-between items-center mb-20">
				<p>Let&apos;s begin your organization Information 👍🏾</p>
			</div>
			<h4 className="text-2xl sm:text-3xl md:text-4xl underline capitalize mt-6 mb-10 block font-bold">
				organization Information
			</h4>

			<form
				onSubmit={handleSubmit}
				className="w-full flex flex-col gap-4 lg:gap-8"
			>
				<FormInput
					label="organization name"
					value={formData.organization_name}
					handleChange={handleChange}
					minLength={3}
					maxLength={30}
					placeholder="Enter your organization name"
					name="organization_name"
				/>

				<label className="block w-full">
					<span className="text-lg capitalize">type of organization</span>
					<select
						name="organization_type"
						value={formData.organization_type}
						onChange={handleChange}
						className="flex mt-3 p-2 gap-3 bg-nav/5 rounded-md input-parent transition-all duration-200 outline-0 border-0 w-full pr-2"
						required
					>
						<option value="">Select organization type</option>
						{orgType.map((item) => (
							<option
								className="capitalize"
								value={item}
								key={item.replace(/\s+/g, '')}
							>
								{item}
							</option>
						))}
					</select>
				</label>

				<label className="block w-full">
					<span className="text-lg capitalize">mission statement</span>
					<textarea
						required
						name="mission_statement"
						value={formData.mission_statement}
						onChange={handleChange}
						minLength={9}
						maxLength={200}
						placeholder="Organization mission statement"
						className="outline-0 border-0 w-full resize-none flex mt-3 px-4 h-20 gap-3 bg-nav/5 rounded-md"
					/>
				</label>

				<label className="block w-full">
					<span className="text-lg capitalize">organization description</span>
					<textarea
						required
						name="description"
						value={formData.description}
						onChange={handleChange}
						minLength={9}
						maxLength={200}
						placeholder="Provide a brief overview of your organization, its goals and key activities"
						className="outline-0 border-0 w-full resize-none flex mt-3 px-4 h-20 gap-3 bg-nav/5 rounded-md"
					/>
				</label>
				<FormInput
					name="registration_year"
					type="number"
					maxLength={4}
					minLength={4}
					value={formData.registration_year}
					handleChange={handleChange}
					label="year established"
					placeholder="What year was your organization established"
				/>
				<FormInput
					name="registration_number"
					type="number"
					value={formData.registration_number}
					handleChange={handleChange}
					label="registration number"
					placeholder="Your organization registration number"
				/>
				{error && (
					<small className="text-center text-rose-500 font-nunito text-lg font-semibold inline-block w-full max-w-screen-sm mx-auto mt-2">
						{error}
					</small>
				)}

				<div className="w-full flex gap-4 mt-20 lg:mt-32 mb-10 justify-center sm:justify-between items-center">
					<button
						type="button"
						onClick={() => history.back()}
						className="hidden text-ecoGreen py-3 sm:flex justify-center rounded-full border-2 border-ecoGreen text-lg px-10 focus-within:bg-ecoGreen focus-within:text-white focus-within:shadow-lg  transition-all"
					>
						back
					</button>
					<PrimaryBtn
						type="submit"
						props={{ disabled: isDisabled }}
						variant={
							'disabled:bg-ecoGreen/30 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none'
						}
						content={isPending ? 'loading...' : 'save & continue'}
					/>
				</div>
			</form>
			{/* </article> */}
		</SplitLayout>
	)
}

const orgType = [
	'NGO',
	'non profit',
	'government agency',
	'corporation',
	'educational institution',
	'community group',
	'others',
]
