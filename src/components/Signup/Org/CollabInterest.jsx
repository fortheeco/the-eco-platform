// import { Link } from 'react-router-dom'
import { PrimaryBtn } from '../../utils/Button'
import { FormInput } from '../../utils/FormInput'
import SplitLayout from '../SplitLayout'

export default function CollabInterest() {
	async function handleSubmit(e) {
		e.preventDefault()
		console.log('form submitted')
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
						{collabArray.map((item) => (
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

				<label className="w-full block">
					<label className="w-full">
						Describe the types of projects you're interested in
					</label>
					<textarea
						name="location"
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
						{resourcesArray.map((item) => (
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
						Resources you need
					</legend>
					<div className="flex w-full gap-x-5 gap-y-6 flex-wrap">
						{resourcesArray.map((item) => (
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

				<div className="w-full flex flex-col gap-5 mt-6">
					<label className="w-fit flex items-center gap-2">
						<input type="checkbox" name="eco-terms" className="w-4 h-4" />
						<span className="inline-block ">
							Agree to ECO Terms and Conditions
						</span>
					</label>
					<label className="w-fit flex items-center gap-2">
						<input type="checkbox" name="eco-privacy" className="w-4 h-4" />
						<span className="inline-block ">Agree to Privacy Policy</span>
					</label>
					<button
						type="button"
						className="text-ecoGreen font-bold  self-start capitalize"
					>
						captcha verification
					</button>
				</div>

				<div className="w-full flex gap-4 mt-32 mb-10 justify-between items-center">
					<button
						type="button"
						onClick={() => history.back()}
						className="capitalize bg-transparent text-ecoGreen py-3 flex justify-center rounded-full border-2 border-ecoGreen text-lg px-10 focus-within:bg-ecoGreen focus-within:text-white focus-within:shadow-lg  transition-all"
					>
						back
					</button>
					<PrimaryBtn type="submit" content="save & continue" />
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
