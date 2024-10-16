import { useState } from 'react'
import { FormInput } from '../../utils/FormInput'
import ProfileWrapper from './ProfileWrapper'

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
	innovation_location: '',
	// attachments: [],
}

export default function InnovationProfileDetails() {
	const checkboxInitialState = new Array(category.length).fill(false)
	const [formData, setFormData] = useState(initialState)
	// const [date, setDate] = useState(initialState.launch_date)
	const [checkboxState, setCheckboxState] = useState(checkboxInitialState)

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
				arrValues.push(category[index])
			}
		})
		let categoryString = arrValues.join(',')
		// set state
		setFormData((prev) => ({ ...prev, category: categoryString }))
		setCheckboxState(updatedState)
	}

	async function handleSubmit(e) {
		e.preventDefault()
	}
	return (
		<ProfileWrapper>
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
					<span className="text-lg capitalize">innovation type</span>
					<select
						name="innovation_type"
						value={formData.innovation_type}
						onChange={handleChange}
						className="flex mt-3 p-2 gap-3 bg-nav/5 rounded-md input-parent transition-all duration-200 outline-0 border-0 w-full pr-2"
						required
					>
						<option value="">Select innovation type</option>
						<option className="capitalize" value="online">
							online
						</option>
						<option className="capitalize" value="physical">
							physical
						</option>
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
						innovation category
					</legend>
					<div className="flex w-full gap-x-5 gap-y-6 flex-wrap">
						{category.map((item, index) => (
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
				{/* <label className="w-full flex flex-col">
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
				</label> */}
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
			</form>
		</ProfileWrapper>
	)
}

const innovType = ['product', 'service', 'research']

const innovArea = ['energy', 'media', 'data', 'digital', 'design']

const targetUser = ['individual', 'business', 'public']

const category = [
	'environmental sustainability',
	'community development',
	'quality education',
	'economic development',
	'education',
	'health',
	'social services',
	'others',
]
