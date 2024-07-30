import countryList from '../../data/countries.json'
import { PrimaryBtn } from '../../utils/Button'
import { FormInput } from '../../utils/FormInput'
import SplitLayout from '../SplitLayout'

export default function OrgContact() {
	async function handleSubmit(e) {
		e.preventDefault()
		console.log('form submitted')
	}
	return (
		<SplitLayout>
			{/* <article className="w-full bg-slate-200"> */}
			<div className="w-full flex justify-between items-center mb-20">
				<p>Halfway there, Almost there</p>
			</div>
			<h4 className="text-2xl sm:text-3xl md:text-4xl underline capitalize mb-10 block font-bold">
				contact Information
			</h4>

			<form
				onSubmit={handleSubmit}
				className="w-full flex flex-col gap-4 lg:gap-8"
			>
				<FormInput
					label={'primary contact person'}
					type="text"
					name="name"
					minLength={6}
					maxLength={50}
					placeholder="Enter full name"
				/>
				<FormInput
					name="title"
					label="job title"
					minLength={4}
					maxLength={30}
					placeholder="Enter job title"
				/>
				<FormInput
					name="email"
					type="email"
					label="email address"
					minLength={6}
					maxLength={40}
					placeholder="example@email.com"
				/>
				<label htmlFor="phone" className="inline-block mt-4 -mb-4 capitalize">
					phone number
				</label>
				<div className="w-full flex h-12 bg-nav/5 rounded-md">
					<select
						name="country-code"
						id="country-code"
						className="h-full w-20 p-2 inline-block mr-2 bg-transparent outline-0"
					>
						{countryList.map((cn) => (
							<option value={cn.phone_code} key={cn.country_name}>
								+{cn.phone_code}
							</option>
						))}
						{/* <option value="+234">+234</option> */}
					</select>
					<input
						type="tel"
						name="phone"
						id="phone"
						required
						minLength={10}
						maxLength={11}
						className="w-full h-full border-l-2 p-4 bg-transparent outline-0"
					/>
				</div>
				<FormInput
					name="year"
					label="year established"
					minLength={4}
					maxLength={6}
					placeholder="What year was your organization established?"
				/>
				<FormInput
					name="address"
					label="organization address"
					minLength={5}
					maxLength={50}
					placeholder="Where is your organization located"
				/>
				<FormInput
					name="org-url"
					label="organization URL"
					minLength={5}
					maxLength={100}
					placeholder="www.example.com"
					required={false}
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

// const contactInputs = [{}]
