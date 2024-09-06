import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import api from '../../../api/axios'
import { PrimaryBtn } from '../../utils/Button'
import { FormInput } from '../../utils/FormInput'
import SplitLayout from '../SplitLayout'

const initialState = {
	primary_area_of_focus: '',
	secondary_area_of_focus: '',
	sdg_goals_targeted: '',
	geographical_area_of_operation_one: '',
}

export default function AreaOfFocus() {
	const [formData, setFormData] = useState(initialState)
	const [focusCheckedState, setFocusCheckedState] = useState(
		new Array(focusArray.length).fill(false)
	)

	const [SDGCheckedState, setSDGCheckedState] = useState(
		new Array(SDGArray.length).fill(false)
	)

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
			{/* <article className="w-full bg-slate-200"> */}
			<div className="w-full flex justify-between items-center mb-20">
				<p>Great work, keep going 👍🏾</p>
			</div>
			<h4 className="text-2xl sm:text-3xl md:text-4xl underline capitalize mb-10 block font-bold">
				areas of focus
			</h4>

			<form
				onSubmit={handleSubmit}
				className="w-full flex flex-col gap-4 lg:gap-8"
			>
				<label className="block w-full">
					<span className="text-lg capitalize">primary area of focus</span>
					<select
						name="primary_area_of_focus"
						value={formData.primary_area_of_focus}
						onChange={handleChange}
						className="flex mt-3 p-2 gap-3 bg-nav/5 rounded-md input-parent transition-all duration-200 outline-0 border-0 w-full"
					>
						<option value="">Select area of focus</option>
						{focusArray.map((item) => (
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
				<fieldset className="w-full">
					<legend className="mb-2 inline-block capitalize text-lg font-semibold text-nav/70">
						secondary areas of focus
					</legend>
					<div className="flex w-full gap-x-5 gap-y-6 flex-wrap">
						{focusArray.map((item) => (
							<label key={item} className="w-fit flex items-center gap-2">
								<input
									type="checkbox"
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
				<fieldset className="w-full">
					<legend className="mb-2 inline-block capitalize text-lg font-semibold text-nav/70">
						geographic area of operation
					</legend>
					<FormInput
						name="name"
						placeholder="Enter location 1"
						minLength={5}
						maxLength={100}
					/>
					<label className="w-full block">
						<input
							name="location"
							type="text"
							placeholder="Enter location 2 (optional)"
							className="flex mt-3 px-4 h-12 gap-3 bg-nav/5 rounded-md outline-0 border-0 w-full pr-2 focus-within:border-b-2 focus-within:border-ecoGreen transition-all duration-200"
						/>
					</label>
				</fieldset>
				<fieldset className="w-full">
					<legend className="mb-2 inline-block capitalize text-lg font-semibold text-nav/70">
						sustainable development goals (SDGs) targeted
					</legend>
					<div className="flex w-full gap-x-5 gap-y-6 flex-wrap">
						{SDGArray.map((item) => (
							<label key={item} className="w-fit flex items-center gap-2">
								<input
									type="checkbox"
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

				{error && (
					<small className="text-center text-rose-500 font-nunito text-lg font-semibold inline-block w-full max-w-screen-sm mx-auto mt-2">
						{error}
					</small>
				)}

				<div className="w-full flex gap-4 mt-32 mb-10 justify-center sm:justify-between items-center">
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
const focusArray = [
	'environmental sustainability',
	'community development',
	'quality education',
	'economic development',
	'education',
	'health',
	'social services',
	'others',
]

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
