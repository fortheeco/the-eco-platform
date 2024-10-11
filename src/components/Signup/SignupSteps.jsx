export default function SignupSteps({ length = 1, activeStep = 1 }) {
	// create an array based on length, and fill it with numbers starting from 1
	const stepsArray = Array.from({ length }, (_, index) => index + 1)

	return (
		<aside className="w-fit ml-auto mr-0 flex items-center justify-end gap-4 my-2 px-4">
			{stepsArray.map((step) => (
				<div
					key={step}
					className={
						step === activeStep
							? 'bg-ecoGreen w-8 h-3 rounded-full shadow-sm'
							: 'w-3 h-3 rounded-full bg-[#071C4233] shadow-sm'
					}
				></div>
			))}
		</aside>
	)
}
