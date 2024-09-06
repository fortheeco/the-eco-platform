import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import api from '../../../api/axios'
import countryList from '../../data/countries.json'
import { PrimaryBtn } from '../../utils/Button'
import { FormInput } from '../../utils/FormInput'
import SplitLayout from '../SplitLayout'

const initialState = {
	first_contact_person: '',
	job_title: '',
	first_person_email: '',
	phone_number: '',
	organisation_address: '',
	organisation_url: '',
}

export default function OrgContact() {
	const [formData, setFormData] = useState(initialState)
	const [countryCode, setCode] = useState(countryList[0].phone_code)
	const [isPending, setIsPending] = useState(false)
	const [error, setError] = useState(null)
	const isDisabled =
		Object.values(formData).some((input) => !Boolean(input)) || isPending

	// const [formError, setFormError] = useState({})
	const navigate = useNavigate()

	function handleChange(e) {
		const { name, value } = e.target
		setFormData((prev) => ({ ...prev, [name]: value }))
		// clear previous error for current input
		// setFormError((prev) => ({ ...prev, [name]: null }))
	}

	// https://theeco.pythonanywhere.com/api/organisation/contact_info
	async function handleSubmit(e) {
		e.preventDefault()

		setIsPending(true)
		setError(null)

		console.log(formData)

		await api
			.post('organisation/contact_info', {
				...formData,
				phone_number: countryCode + prev.phone_number,
			})
			.then((res) => {
				setError(null)
				toast.success(res.data?.message)
				console.log(res)
				// setTimeout(() => {
				// 	navigate('/signup/organization/verification')
				// }, 2000)
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
			{/* <article className="w-full bg-slate-200"> */}
			<div className="w-full flex justify-between items-center mb-20">
				<p>Halfway there, Almost there</p>
			</div>
			<h4 className="text-2xl sm:text-3xl md:text-4xl underline capitalize mb-10 block font-bold">
				contact Information
			</h4>

			<form
				onSubmit={handleSubmit}
				className="w-full flex flex-col gap-4 lg:gap-8"
			>
				<FormInput
					label={'primary contact person'}
					type="text"
					name="first_contact_person"
					value={formData.first_contact_person}
					handleChange={handleChange}
					minLength={4}
					maxLength={50}
					placeholder="Enter full name"
				/>
				<FormInput
					name="job_title"
					value={formData.job_title}
					handleChange={handleChange}
					label="job title"
					minLength={3}
					maxLength={30}
					placeholder="Enter job title"
				/>
				<FormInput
					name="first_person_email"
					value={formData.first_person_email}
					handleChange={handleChange}
					type="email"
					label="email address"
					minLength={6}
					maxLength={40}
					placeholder="example@email.com"
				/>
				<label htmlFor="phone" className="inline-block mt-4 -mb-4 capitalize">
					phone number
				</label>
				<div className="w-full flex h-12 bg-nav/5 rounded-md">
					<select
						name="country-code"
						value={countryCode}
						onChange={(e) => setCode(e.target.value)}
						id="country-code"
						className="h-full w-20 p-2 inline-block mr-2 bg-transparent outline-0"
					>
						{countryList.map((cn) => (
							<option value={cn.phone_code} key={cn.country_name}>
								+{cn.phone_code}
							</option>
						))}
						{/* <option value="+234">+234</option> */}
					</select>
					<input
						type="tel"
						name="phone_number"
						value={formData.phone_number}
						onChange={handleChange}
						id="phone"
						required
						minLength={5}
						maxLength={11}
						className="w-full h-full border-l-2 p-4 bg-transparent outline-0"
					/>
				</div>

				<FormInput
					name="organisation_address"
					value={formData.organisation_address}
					handleChange={handleChange}
					label="organization address"
					minLength={5}
					maxLength={50}
					placeholder="Where is your organization located"
				/>
				<FormInput
					name="organisation_url"
					value={formData.organisation_url}
					handleChange={handleChange}
					label="organization URL"
					minLength={5}
					maxLength={100}
					placeholder="www.example.com"
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
						className="hidden capitalize bg-transparent text-ecoGreen py-3 sm:flex justify-center rounded-full border-2 border-ecoGreen text-lg px-10 focus-within:bg-ecoGreen focus-within:text-white focus-within:shadow-lg  transition-all"
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

// const contactInputs = [{}]
