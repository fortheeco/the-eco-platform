import sideImg from '../../../assets/signup/innovation-bulb.svg'
import { PrimaryBtn } from '../../utils/Button'
import SplitLayout from '../SplitLayout'

export default function Terms() {
	async function handleSubmit(e) {
		e.preventDefault()
		console.log('form submitted')
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
					{terms.map((item) => (
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
				<button
					type="button"
					className="text-ecoGreen font-bold  self-start capitalize"
				>
					captcha verification
				</button>

				<div className="w-full flex gap-4 mt-40 mb-10 justify-between items-center">
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

const terms = [
	'Agree to ECO Terms and Conditions',
	'Agree to Privacy Policy',
	'Agree to Annual Listing Fee (100,000 Naira)',
]
