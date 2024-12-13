import Cookies from 'js-cookie'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import api from '../../../api/axios'
import { useAuthContext } from '../../../hooks/useAuthContext'
import { PrimaryBtn } from '../../utils/Button'
import SplitLayout from '../SplitLayout'

const initialState = {
	intended_collaborators: '',
	interested_project_description: '',
	offered_resources: '',
	needed_resources: '',
}

export default function CollabInterest() {
	const checkboxInitialState = {
		collab: new Array(collabArray.length).fill(false),
		offered: new Array(resourcesArray.length).fill(false),
		needed: new Array(resourcesArray.length).fill(false),
	}
	const [checkboxState, setCheckboxState] = useState(checkboxInitialState)
	const [checkboxValues, setCheckboxValues] = useState({
		collab: '',
		offered: '',
		needed: '',
	})
	const [formData, setFormData] = useState(initialState)
	const [ecoTermsCheckbox, toggleTermsCheckbox] = useState(false)
	const [privacyCheckbox, togglePrivacy] = useState(false)
	const { dispatch } = useAuthContext()

	const [isPending, setIsPending] = useState(false)
	const [error, setError] = useState(null)
	const navigate = useNavigate()

	function toggleCheckbox(dispatchFn) {
		dispatchFn((prev) => !prev)

		// debug
		setFormData((prev) => ({
			...prev,
			intended_collaborators: checkboxValues.collab,
			offered_resources: checkboxValues.offered,
			needed_resources: checkboxValues.needed,
		}))
	}
	function handleChange(e) {
		const { name, value } = e.target
		setFormData((prev) => ({ ...prev, [name]: value }))
	}

	function stringFromCheckbox(stateName, itemIndex, arr) {
		const updatedState = checkboxState[stateName].map((item, index) =>
			index === itemIndex ? !item : item
		)

		let arrayValues = []
		updatedState.filter((item, index) => {
			if (item === true) {
				arrayValues.push(arr[index])
			}
		})

		// set state
		setCheckboxValues((prev) => ({
			...prev,
			[stateName]: arrayValues.join(','),
		}))
		setCheckboxState((prev) => ({ ...prev, [stateName]: updatedState }))
	}

	const isDisabled =
		[
			ecoTermsCheckbox,
			privacyCheckbox,
			formData.interested_project_description,
		].some((value) => !Boolean(value)) || isPending

	async function handleSubmit(e) {
		e.preventDefault()

		setFormData((prev) => ({
			...prev,
			intended_collaborators: checkboxValues.collab,
			offered_resources: checkboxValues.offered,
			needed_resources: checkboxValues.needed,
		}))

		setIsPending(true)
		setError(null)
		// submit data
		const res = await api.post('organisation/collaboration_details', formData)

		setError(null)
		toast.success(res.data?.message)
		// get current user/org access token
		const token = Cookies.get('token')
		// get current logged in org account details
		api
			.get('organisation/get_organisation_details')
			.then((response) => {
				console.log(response)

				dispatch({
					type: 'LOGIN',
					user: response.data,
					token,
				})
				setTimeout(() => {
					navigate('/profile')
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
				<p>Here we are 😎</p>
			</div>
			<h4 className="text-2xl sm:text-3xl md:text-4xl underline capitalize mb-10 block font-bold">
				collaboration interests
			</h4>

			<form
				onSubmit={handleSubmit}
				className="w-full flex flex-col gap-4 lg:gap-8"
			>
				<fieldset className="w-full">
					<legend>What type of collaborators are you looking for?</legend>
					<div className="flex w-full mt-4 gap-x-5 gap-y-6 flex-wrap">
						{collabArray.map((item, index) => (
							<label
								key={item}
								className="w-fit flex items-center cursor-pointer gap-2"
							>
								<input
									type="checkbox"
									name={item}
									checked={checkboxState.collab[index]}
									onChange={() =>
										stringFromCheckbox('collab', index, collabArray)
									}
									id={item.replace(/\s+/g, '-')}
									value={item}
									className="w-4 h-4"
								/>
								<span className="inline-block capitalize">{item}</span>
							</label>
						))}
					</div>
				</fieldset>

				<label className="w-full block">
					<label className="w-full">
						Describe the types of projects you're interested in
					</label>
					<textarea
						name="interested_project_description"
						value={formData.interested_project_description}
						onChange={handleChange}
						required
						minLength={10}
						type="text"
						placeholder="Provide a brief overview of your organization, its goals, and key
							activities"
						className="flex mt-3 p-4 h-28 resize-none w-full gap-3 bg-nav/5 rounded-md outline-0 border-0 pr-2 focus-within:border-b-2 focus-within:border-ecoGreen transition-all duration-200"
					/>
				</label>
				<fieldset className="w-full">
					<legend className="mb-2 inline-block capitalize text-lg font-semibold text-nav/70">
						Resources you can offer
					</legend>
					<div className="flex w-full gap-x-5 gap-y-6 flex-wrap">
						{resourcesArray.map((item, index) => (
							<label
								key={item}
								className="w-fit flex items-center cursor-pointer gap-2"
							>
								<input
									type="checkbox"
									name={item}
									checked={checkboxState.offered[index]}
									onChange={() =>
										stringFromCheckbox('offered', index, resourcesArray)
									}
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
						Resources you need
					</legend>
					<div className="flex w-full gap-x-5 gap-y-6 flex-wrap">
						{resourcesArray.map((item, index) => (
							<label
								key={item}
								className="w-fit flex items-center cursor-pointer gap-2"
							>
								<input
									type="checkbox"
									name={item}
									checked={checkboxState.needed[index]}
									onChange={() =>
										stringFromCheckbox('needed', index, resourcesArray)
									}
									id={item.replace(/\s+/g, '-')}
									value={item}
									className="w-4 h-4"
								/>
								<span className="inline-block capitalize">{item}</span>
							</label>
						))}
					</div>
				</fieldset>

				<div className="w-full flex flex-col gap-5 mt-6">
					<label className="w-fit flex items-center cursor-pointer gap-2">
						<input
							type="checkbox"
							name="eco-terms"
							checked={ecoTermsCheckbox}
							onChange={() => toggleCheckbox(toggleTermsCheckbox)}
							className="w-4 h-4"
						/>
						<span className="inline-block ">
							Agree to ECO Terms and Conditions
						</span>
					</label>
					<label className="w-fit flex items-center cursor-pointer gap-2">
						<input
							type="checkbox"
							checked={privacyCheckbox}
							onChange={() => toggleCheckbox(togglePrivacy)}
							name="eco-privacy"
							className="w-4 h-4"
						/>
						<span className="inline-block ">Agree to Privacy Policy</span>
					</label>
					{/* <button
						type="button"
						className="text-ecoGreen font-bold  self-start capitalize"
					>
						captcha verification
					</button> */}
				</div>
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

const collabArray = ['partners', 'ambassadors', 'leaders']

const resourcesArray = [
	'funding',
	'volunteers',
	'expertise',
	'training',
	'technology',
	'facilities',
	'others',
]
