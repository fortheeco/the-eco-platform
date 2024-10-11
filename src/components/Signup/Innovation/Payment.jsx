import sideImg from '../../../assets/signup/innovation-bulb.svg'
import { PrimaryBtn } from '../../utils/Button'
import SignupSteps from '../SignupSteps'
import SplitLayout from '../SplitLayout'

export default function Payments() {
	async function handleSubmit(e) {
		e.preventDefault()
		console.log('form submitted')
	}

	return (
		<SplitLayout img={sideImg} heading={'welcome to ECO Innovation Hub'}>
			<div className="w-full flex justify-between items-center mb-20">
				<p>Final Step and you are done</p>
			</div>
			<h4 className="text-2xl sm:text-3xl md:text-4xl underline capitalize mb-10 block font-bold">
				payment information
			</h4>

			<form
				onSubmit={handleSubmit}
				className="w-full flex flex-col gap-4 lg:gap-8"
			>
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
			<SignupSteps length={6} activeStep={6} />
		</SplitLayout>
	)
}
