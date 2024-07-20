import sideImg from '../../../assets/signup/innovation-bulb.svg'
import { PrimaryBtn } from '../../utils/Button'
import { FormInput } from '../../utils/FormInput'
import SplitLayout from '../SplitLayout'

export default function ImpactAndReact() {
	async function handleSubmit(e) {
		e.preventDefault()
		console.log('form submitted')
	}

	return (
		<SplitLayout img={sideImg} heading={'welcome to ECO Innovation Hub'}>
			<div className="w-full flex justify-between items-center mb-20">
				<p>Great work, keep going 👍🏾</p>
			</div>
			<h4 className="text-2xl sm:text-3xl md:text-4xl underline capitalize mb-10 block font-bold">
				impact and reach
			</h4>

			<form
				onSubmit={handleSubmit}
				className="w-full flex flex-col gap-4 lg:gap-8"
			>
				<label className="block w-full">
					<span className="text-lg capitalize">current adoption</span>
					<textarea
						required
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

				<label className="block w-full">
					<span className="text-lg capitalize">
						funding and support received
					</span>
					<textarea
						required
						minLength={9}
						maxLength={200}
						placeholder="Describe any funding or support received for this innovation,
                        including grants, investments, and partnerships"
						className="outline-0 border-0 w-full resize-none flex mt-3 px-4 h-20 gap-3 bg-nav/5 rounded-md"
					/>
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
						name="location"
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
		</SplitLayout>
	)
}

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
