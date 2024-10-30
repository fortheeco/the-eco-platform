import { useState } from 'react'
import DatePicker from 'react-multi-date-picker'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import api from '../../../api/axios'
import sideImg from '../../../assets/signup/innovation-bulb.svg'
import { formatResError } from '../../../helpers/FormatErrorMessage'
import { PrimaryBtn } from '../../utils/Button'
import { Dropzone } from '../../utils/Dropzone'
import { FormInput } from '../../utils/FormInput'
import SignupSteps from '../SignupSteps'
import SplitLayout from '../SplitLayout'

// launch_date: new Date(),
const initialState = {
	innovation_name: '',
	type_of_innovation: '',
	innovation_type: '',
	area_of_innovation: '',
	description: '',
	category: '',
	target_user: '',
	website_url: '',
	attachments: [],
	innovation_location: '',
}

export default function InnovationDetails() {
	const checkboxInitialState = new Array(areaOfFocus.length).fill(false)
	const [formData, setFormData] = useState(initialState)
	const [documents, setDocuments] = useState([])
	const [date, setDate] = useState(initialState.launch_date)
	const [checkboxState, setCheckboxState] = useState(checkboxInitialState)
	const [isPending, setIsPending] = useState(false)
	const [error, setError] = useState(null)
	const navigate = useNavigate()

	const isDisabled =
		Object.values(formData).some((input) => !Boolean(input)) || isPending

	function handleChange(e) {
		const { name, value } = e.target
		setFormData((prev) => ({ ...prev, [name]: value }))
	}

	function stringFromCheckbox(itemIndex) {
		const updatedState = checkboxState.map((item, index) =>
			// invert checkbox state (true/false)
			index === itemIndex ? !item : item
		)

		// create new array from checkbox values
		let arrValues = []
		updatedState.filter((item, index) => {
			if (item === true) {
				arrValues.push(areaOfFocus[index])
			}
		})
		let categoryString = arrValues.join(',')
		// set state
		setFormData((prev) => ({ ...prev, category: categoryString }))
		setCheckboxState(updatedState)
	}
	// TODO test/complete this
	async function handleSubmit(e) {
		e.preventDefault()
		if (documents.length === 0) {
			toast.error('Supporting document(s) are required!')
			return
		}

		const formToSubmit = new FormData()
		// append form fields to formData
		for (const key in formData) {
			formToSubmit.append(key, formData[key])
		}

		Array.from(documents).map((file, index) => {
			formToSubmit.append(`attachments[${index}]`, file)
		})

		setIsPending(true)
		setError(null)

		try {
			const res = await api.post(
				'organisation/innovation-details',
				formToSubmit,
				{
					headers: { 'Content-Type': 'multipart/form-data' },
				}
			)

			setIsPending(false)
			setError(null)
			toast.success(res.data?.message)
			setTimeout(() => {
				navigate('/signup/organization/impact-and-reach')
			}, 2000)
		} catch (err) {
			console.error(err)
			let logErr = formatResError(err)
			setError(logErr)
			setIsPending(false)
		}
		return
	}

	return (
		<SplitLayout img={sideImg} heading={'welcome to ECO Innovation Hub'}>
			{/* <article className="w-full bg-slate-200"> */}
			<div className="w-full flex justify-between items-center mb-20">
				<p>Great!!, Let&apos;s get the processing going 👍🏾</p>
			</div>
			<h4 className="text-2xl sm:text-3xl md:text-4xl underline capitalize mt-6 mb-10 block font-bold">
				innovation details
			</h4>

			<form
				onSubmit={handleSubmit}
				className="w-full flex flex-col gap-4 lg:gap-8"
			>
				<FormInput
					label="innovation name"
					value={formData.innovation_name}
					handleChange={handleChange}
					name="innovation_name"
					minLength={6}
					maxLength={30}
					placeholder="Enter your innovation name"
				/>

				<label className="block w-full">
					<span className="text-lg capitalize">type of innovation</span>
					<select
						name="type_of_innovation"
						value={formData.type_of_innovation}
						onChange={handleChange}
						className="flex mt-3 p-2 gap-3 bg-nav/5 rounded-md input-parent transition-all duration-200 outline-0 border-0 w-full pr-2"
						required
					>
						<option value="">Select innovation type</option>
						{innovType.map((item) => (
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
					<span className="text-lg capitalize">innovation sector</span>
					<select
						name="innovation_type"
						value={formData.innovation_type}
						onChange={handleChange}
						className="flex mt-3 p-2 gap-3 bg-nav/5 rounded-md input-parent transition-all duration-200 outline-0 border-0 w-full pr-2"
						required
					>
						<option value="">Select innovation sector</option>
						{innovSector.map((sector) => (
							<option key={sector} className="capitalize" value={sector}>
								{sector}
							</option>
						))}
					</select>
				</label>
				<label className="block w-full">
					<span className="text-lg capitalize">area of innovation</span>
					<select
						name="area_of_innovation"
						value={formData.area_of_innovation}
						onChange={handleChange}
						className="flex mt-3 p-2 gap-3 bg-nav/5 rounded-md input-parent transition-all duration-200 outline-0 border-0 w-full pr-2"
						required
					>
						<option value="">Select area your innovation is centered on</option>
						{innovArea.map((item) => (
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
					<span className="text-lg capitalize">description</span>
					<textarea
						required
						value={formData.description}
						onChange={handleChange}
						name="description"
						minLength={9}
						// maxLength={200}
						placeholder="Provide a detailed description of your innovation, including its
                        purpose, features, and benefits"
						className="outline-0 border-0 w-full resize-none flex mt-3 px-4 h-20 gap-3 bg-nav/5 rounded-md"
					/>
				</label>
				<fieldset className="w-full">
					<legend className="mb-2 inline-block capitalize text-lg font-semibold text-nav/70">
						area of focus
					</legend>
					<div className="flex w-full gap-x-5 gap-y-6 flex-wrap">
						{areaOfFocus.map((item, index) => (
							<label key={item} className="w-fit flex items-center gap-2">
								<input
									type="checkbox"
									checked={checkboxState[index]}
									onChange={() => stringFromCheckbox(index)}
									name={item}
									id={item.replace(/\s+/g, '-')}
									value={item}
									className="w-4 h-4"
								/>
								<span className="inline-block capitalize">{item}</span>
							</label>
						))}
					</div>
				</fieldset>
				<label className="block w-full">
					<span className="text-lg capitalize">technological category</span>
					<select
						name="category"
						value={formData.category}
						onChange={handleChange}
						className="flex mt-3 p-2 gap-3 bg-nav/5 rounded-md input-parent transition-all duration-200 outline-0 border-0 w-full pr-2"
						required
					>
						<option value="">Select technological category</option>
						{techCategory.map((item) => (
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
					<span className="text-lg capitalize">target user</span>
					<select
						name="target_user"
						value={formData.target_user}
						onChange={handleChange}
						className="flex mt-3 p-2 gap-3 bg-nav/5 rounded-md input-parent transition-all duration-200 outline-0 border-0 w-full pr-2"
						required
					>
						<option value="">Select area your target user type</option>
						{targetUser.map((item) => (
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
				<label className="w-full flex flex-col">
					<span className="text-lg capitalize">launch date</span>
					<DatePicker
						value={date}
						onChange={setDate}
						format="DD-MM-YYYY"
						placeholder="DD-MM-YYYY"
						name="launch_date"
						minDate={formData.launch_date}
						inputClass="block mt-3 px-4 h-12 bg-nav/5 rounded-md outline-0 border-0 w-full pr-2 focus-within:border-b-2 focus-within:border-ecoGreen transition-all duration-200"
					/>
				</label>
				<FormInput
					value={formData.website_url}
					handleChange={handleChange}
					name="website_url"
					label="website or demo URL"
					placeholder="www.website.com"
				/>
				<FormInput
					name="innovation_location"
					value={formData.innovation_location}
					handleChange={handleChange}
					label="innovation location"
					placeholder=""
				/>
				<label className="w-full block">
					<span className="text-lg capitalize my-4 inline-block">
						supporting documents
					</span>

					<Dropzone setState={setDocuments} maxFiles={5} />
				</label>

				{error && (
					<small className="text-center text-rose-500 font-nunito text-lg font-semibold inline-block w-full max-w-screen-sm mx-auto mt-2">
						{error}
					</small>
				)}

				<div className="w-full flex gap-4 mt-32 mb-10 justify-between items-center">
					<button
						type="button"
						onClick={() => history.back()}
						className="capitalize bg-transparent text-ecoGreen py-3 flex justify-center rounded-full border-2 border-ecoGreen text-lg px-10 focus-within:bg-ecoGreen focus-within:text-white focus-within:shadow-lg  transition-all"
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
			<SignupSteps length={4} activeStep={2} />
		</SplitLayout>
	)
}

const innovType = ['product', 'service', 'research']
const innovSector = [
	'information technology',
	'financials',
	'health care',
	'Consumer discretionary',
	'Communication services',
	'Industrials',
	'Consumer staples',
	'Energy',
	'Utilities',
	'Materials',
	'Real estate.',
]

const innovArea = ['energy', 'media', 'data', 'digital', 'design']

const targetUser = ['individual', 'business', 'public']

const areaOfFocus = [
	'environmental sustainability',
	'community development',
	'quality education',
	'economic development',
	'education',
	'health',
	'social services',
	'others',
]

const techCategory = [
	'EduTech',
	'FInTech',
	'Insuretech',
	'Health Tech',
	'AI (Artificial Intelligence)',
	'Cleantech',
	'Biotech',
	'Govtech',
	'Martech',
	'Proptech',
]
