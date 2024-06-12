import { layout, styles } from '../../../style'

export default function OrgVerification() {
	return (
		<section className={`w-full ${layout.section}`}>
			<div
				className={`bg-container relative w-full px-6 ${styles.paddingY} ${styles.paddingX}`}
			>
				<p className="flex absolute right-6 top-8 text-lg">Step 3/3</p>
				<h2 className="font-semibold text-xl capitalize mb-3 lg:text-3xl lg:font-bold">
					verification
				</h2>
				<p className="text-lg text-nav/70 mt-8">Help us verify your company.</p>

				<label className="flex flex-col items-start gap-2 my-10">
					<span>Company registration number</span>
					<input
						type="text"
						required
						placeholder="Registration Number"
						className="p-5 rounded-md bg-ecoGreen/10 text-black capitalize text-xl w-full lg:w-1/2"
					/>
				</label>
				<hr className="w-full h-[2px] bg-nav/30" />
				<h2 className="font-semibold text-xl mt-8 lg:text-3xl lg:font-bold capitalize mb-3">
					social media
				</h2>
				<p className="text-lg text-nav/70 my-6">
					Tell us how to find you online
				</p>
				<label className="flex mt-3 h-12 px-5 gap-3 bg-ecoGreen/10 rounded-md w-full lg:w-1/2">
					<input
						type="text"
						maxLength={90}
						autoComplete="on"
						aria-description="your company's website"
						placeholder="Your company's website"
						className="bg-transparent outline-0 w-full border-0"
					/>
				</label>

				<button
					type="submit"
					className="capitalize bg-ecoGreen text-white w-full py-3 lg:w-1/3 flex justify-center rounded-md text-lg mx-auto mt-16 mb-4"
				>
					next
				</button>
			</div>
		</section>
	)
}
