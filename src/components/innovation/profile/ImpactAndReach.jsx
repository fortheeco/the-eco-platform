import { useState } from 'react'
import { FormInput } from '../../utils/FormInput'
import ProfileWrapper from './ProfileWrapper'

const initialState = {
	current_adoption: '',
	sdg_goals_targeted: [],
	funding_and_support_received: '',
	geographic_area_of_operation_one: '',
	geographic_area_of_operation_two: '',
	// secondary_area_of_focus: [],
}

export default function InnovationImpact() {
	const checkboxInitialState = new Array(SDGArray.length).fill(false)
	const [formData, setFormData] = useState(initialState)
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
				arrValues.push(SDGArray[index])
			}
		})
		// set state
		setFormData((prev) => ({ ...prev, sdg_goals_targeted: arrValues }))
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
				<label className="block w-full">
					<span className="text-lg capitalize">current adoption</span>
					<textarea
						required
						value={formData.current_adoption}
						name="current_adoption"
						onChange={handleChange}
						minLength={9}
						maxLength={200}
						placeholder="Describe the current adoption and impact of your innovation,
                        including number of users, regions covered, and any measurable outcomes"
						className="outline-0 border-0 w-full resize-none flex mt-3 px-4 h-20 gap-3 bg-nav/5 rounded-md"
					/>
				</label>
				<fieldset className="w-full">
					<legend className="mb-2 inline-block capitalize text-lg font-semibold text-nav/70">
						sustainable development goals (SDGs) targeted
					</legend>
					<div className="flex w-full gap-x-5 gap-y-6 flex-wrap">
						{SDGArray.map((item, index) => (
							<label key={index} className="w-fit flex items-center gap-2">
								<input
									type="checkbox"
									name="sdg_goals_targeted"
									checked={checkboxState[index]}
									onChange={() => stringFromCheckbox(index)}
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
					<span className="text-lg capitalize">
						funding and support received
					</span>
					<textarea
						required
						name="funding_and_support_received"
						value={formData.funding_and_support_received}
						onChange={handleChange}
						minLength={9}
						maxLength={200}
						placeholder="Describe any funding or support received for this innovation,
                        including grants, investments, and partnerships"
						className="outline-0 border-0 w-full resize-none flex mt-3 px-4 h-20 gap-3 bg-nav/5 rounded-md"
					/>
				</label>

				<fieldset className="w-full">
					<legend className="mb-2 inline-block capitalize text-lg font-semibold text-nav/70">
						geographic area of operation
					</legend>
					<FormInput
						name="geographic_area_of_operation_one"
						value={formData.geographic_area_of_operation_one}
						handleChange={handleChange}
						placeholder="Enter location 1"
						minLength={5}
						maxLength={100}
					/>
					<label className="w-full block">
						<input
							name="geographic_area_of_operation_two"
							value={formData.geographic_area_of_operation_two}
							onChange={handleChange}
							type="text"
							placeholder="Enter location 2 (optional)"
							className="flex mt-3 px-4 h-12 gap-3 bg-nav/5 rounded-md outline-0 border-0 w-full pr-2 focus-within:border-b-2 focus-within:border-ecoGreen transition-all duration-200"
						/>
					</label>
				</fieldset>
			</form>
		</ProfileWrapper>
	)
}

const SDGArray = [
	'no poverty',
	'zero hunger',
	'quality education',
	'good health and well-being',
	'gender equality',
	'clean water and sanitation',
	'affordable and clean energy',
	'decent work and economic growth',
	'reduced inequality',
	'industry innovation, and infrastructure',
	'climate action',
	'responsible consumption and production',
	'life on land',
	'peace and justice strong institutions',
	'partnership to achieve the goals',
]
