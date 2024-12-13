import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../../api/axios'
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
	const [innovation, setInnovation] = useState([])
	const { id } = useParams()

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

	useEffect(() => {
		const controller = new AbortController()

		async function getInnovations() {
			try {
				const res = await api.get('organisation/all-innovations', {
					signal: controller.signal,
				})
				setInnovation(res.data.data[id])
				console.log(res.data)
			} catch (err) {
				console.error(err)
			}
		}
		getInnovations()

		return () => {
			controller.abort('request ended abruptly')
		}
	}, [])

	async function handleSubmit(e) {
		e.preventDefault()
	}
	return (
		<ProfileWrapper>
			<form
				// onSubmit={handleSubmit}
				className="w-full flex flex-col gap-4 lg:gap-8"
			>
				<FormInput
					label="innovation name"
					value={innovation?.innovation_name}
					// handleChange={handleChange}
					name="innovation_name"
					props={{ disabled: true }}
					placeholder="Enter your innovation name"
				/>

				<label className="block w-full">
					<span className="text-lg capitalize">type of innovation</span>
					<select
						name="type_of_innovation"
						value={formData.type_of_innovation}
						// onChange={handleChange}
						className="flex mt-3 p-2 gap-3 bg-nav/5 rounded-md input-parent transition-all duration-200 outline-0 border-0 w-full pr-2 disabled:text-slate-500"
						disabled
					>
						<option value={innovation?.type_of_innovation}>
							{innovation?.type_of_innovation}
						</option>
					</select>
				</label>
				<label className="block w-full">
					<span className="text-lg capitalize">innovation type</span>
					<select
						name="innovation_type"
						value={innovation?.innovation_type}
						// onChange={handleChange}
						className="flex mt-3 p-2 gap-3 bg-nav/5 rounded-md input-parent transition-all duration-200 outline-0 border-0 w-full pr-2 disabled:text-slate-500"
						required
						disabled
					>
						<option value={innovation?.innovation_type}>
							{innovation?.innovation_type}
						</option>
					</select>
				</label>
				<label className="block w-full">
					<span className="text-lg capitalize">area of innovation</span>
					<select
						name="area_of_innovation"
						value={innovation?.area_of_innovation}
						// onChange={handleChange}
						className="flex mt-3 p-2 gap-3 bg-nav/5 rounded-md input-parent transition-all duration-200 outline-0 border-0 w-full pr-2 disabled:text-slate-500"
						required
						disabled
					>
						<option value={innovation?.area_of_innovation}>
							{innovation?.area_of_innovation}
						</option>
					</select>
				</label>

				<label className="block w-full">
					<span className="text-lg capitalize">description</span>
					<textarea
						required
						disabled
						value={innovation?.description}
						// onChange={handleChange}
						name="description"
						// maxLength={200}
						placeholder="Provide a detailed description of your innovation, including its
                        purpose, features, and benefits"
						className="outline-0 border-0 w-full resize-none flex mt-3 px-4 h-20 gap-3 bg-nav/5 rounded-md disabled:text-slate-500"
					/>
				</label>
				<fieldset className="w-full">
					<legend className="mb-2 inline-block capitalize text-lg font-semibold text-nav/70">
						innovation category
					</legend>
					<div className="flex w-full gap-x-5 gap-y-6 flex-wrap">
						{innovation?.category &&
							innovation?.category.map((item) => (
								<label key={item} className="w-fit flex items-center gap-2">
									<input
										type="checkbox"
										checked
										disabled
										// onChange={() => stringFromCheckbox(index)}
										name={item}
										id={item.replace(/\s+/g, '-')}
										value={item}
										className="w-4 h-4 disabled:text-slate-500"
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
						value={innovation?.target_user}
						disabled
						// onChange={handleChange}
						className="flex mt-3 p-2 gap-3 bg-nav/5 rounded-md input-parent transition-all duration-200 outline-0 border-0 w-full pr-2 disabled:text-slate-500"
						required
					>
						<option value={innovation?.target_user}>
							{innovation?.target_user}
						</option>
					</select>
				</label>

				<FormInput
					value={innovation?.website_url}
					props={{ disabled: true }}
					// handleChange={handleChange}
					name="website_url"
					label="website or demo URL"
					placeholder="www.website.com"
				/>
				<FormInput
					name="innovation_location"
					value={innovation?.innovation_location || ''}
					props={{ disabled: true }}
					// handleChange={handleChange}
					label="innovation location"
					placeholder=""
				/>
			</form>
		</ProfileWrapper>
	)
}

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
