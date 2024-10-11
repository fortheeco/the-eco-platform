import Cookies from 'js-cookie'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../../../api/axios'
import sideImg from '../../../assets/signup/innovation-bulb.svg'
import { useAuthContext } from '../../../hooks/useAuthContext'
import { PrimaryBtn } from '../../utils/Button'
import SignupSteps from '../SignupSteps'
import SplitLayout from '../SplitLayout'

export default function Terms() {
	const checkboxInitialState = new Array(terms.length).fill(false)
	const [checkboxState, setCheckboxState] = useState(checkboxInitialState)
	const [isPending, setIsPending] = useState(false)
	const [error, setError] = useState(null)
	const navigate = useNavigate()
	const { dispatch } = useAuthContext()

	function toggleCheckbox(itemIndex) {
		const updatedState = checkboxState.map((item, index) =>
			// invert checkbox state (true/false)
			index === itemIndex ? !item : item
		)
		setCheckboxState(updatedState)
	}

	const isDisabled = checkboxState.some((input) => !Boolean(input)) || isPending

	async function handleSubmit(e) {
		e.preventDefault()

		setIsPending(true)
		setError(null)
		// TODO complete this
		const res = await api.get(
			'https://theeco.pythonanywhere.com/api/organisation/get-innovation'
		)
		dispatch({ type: 'LOGIN', token: res.token, user: res.data })
		navigate('/innovation')
	}

	return (
		<SplitLayout img={sideImg} heading={'welcome to ECO Innovation Hub'}>
			<div className="w-full flex justify-between items-center mb-20">
				<p>Half way there, Almost there</p>
			</div>
			<h4 className="text-2xl sm:text-3xl md:text-4xl underline capitalize mb-10 block font-bold">
				terms and conditions
			</h4>

			<form
				onSubmit={handleSubmit}
				className="w-full flex flex-col gap-4 lg:gap-8"
			>
				<div className="flex flex-col w-full gap-y-6">
					{terms.map((item, index) => (
						<label key={index} className="w-fit flex items-center gap-2">
							<input
								type="checkbox"
								name={item}
								checked={checkboxState[index]}
								onChange={() => toggleCheckbox(index)}
								id={item.replace(/\s+/g, '-')}
								value={item}
								className="w-4 h-4"
							/>
							<span className="inline-block capitalize">{item}</span>
						</label>
					))}
				</div>
				{/* <button
					type="button"
					className="text-ecoGreen font-bold  self-start capitalize"
				>
					captcha verification
				</button> */}
				{error && (
					<small className="text-center text-rose-500 font-nunito text-lg font-semibold inline-block w-full max-w-screen-sm mx-auto mt-2">
						{error}
					</small>
				)}

				<div className="w-full flex gap-4 mt-40 mb-10 justify-between items-center">
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
			<SignupSteps length={6} activeStep={6} />
		</SplitLayout>
	)
}

const terms = [
	'Agree to ECO Terms and Conditions',
	'Agree to Privacy Policy',
	'Agree to Annual Listing Fee (100,000 Naira)',
]
