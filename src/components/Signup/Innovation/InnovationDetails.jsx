import sideImg from '../../../assets/signup/innovation-bulb.svg'
import { PrimaryBtn } from '../../utils/Button'
import { FormInput } from '../../utils/FormInput'
import SplitLayout from '../SplitLayout'

export default function InnovationDetails() {
	async function handleSubmit(e) {
		e.preventDefault()
		console.log('form submitted')
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
					minLength={6}
					maxLength={30}
					placeholder="Enter your innovation name"
				/>

				<label className="block w-full">
					<span className="text-lg capitalize">type of innovation</span>
					<select
						name="org-type"
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
						name="org-type"
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
						name="org-type"
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
						minLength={9}
						maxLength={200}
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
						{category.map((item) => (
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
					<span className="text-lg capitalize">target user</span>
					<select
						name="org-type"
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
				<label className="w-full block">
					<span className="text-lg capitalize">launch date</span>
					<input
						type="date"
						placeholder="DD/MM/YY"
						required
						className="flex mt-3 px-4 h-12 gap-3 bg-nav/5 rounded-md outline-0 border-0 w-full pr-2 focus-within:border-b-2 focus-within:border-ecoGreen transition-all duration-200"
					/>
				</label>
				<FormInput label="website or demo URL" placeholder="www.website.com" />
				<FormInput name="location" label="innovation location" placeholder="" />
				<FormInput
					name="image"
					label="upload screenshots or promotional material"
					type="file"
					props={{ accept: 'image/*' }}
					placeholder="click to upload"
				/>

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

const innovType = ['product', 'service', 'rsearch']

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
