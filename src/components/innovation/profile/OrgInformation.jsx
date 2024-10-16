import { FormInput } from '../../utils/FormInput'
import ProfileWrapper from './ProfileWrapper'

export default function OrgInformation() {
	async function handleSubmit(e) {
		e.preventDefault()
	}
	return (
		<ProfileWrapper>
			<form
				onSubmit={handleSubmit}
				className="w-full flex flex-col gap-4 lg:gap-8"
			>
				<FormInput
					label={'organization name'}
					minLength={6}
					maxLength={50}
					placeholder="Enter your organization name"
				/>
				<label className="block w-full">
					<span className="text-lg capitalize">type of organization</span>
					<select
						name="org-type"
						className="flex mt-3 p-2 gap-3 bg-nav/5 rounded-md input-parent transition-all duration-200 outline-0 border-0 w-full pr-2"
						required
					>
						<option value="">Select organization type</option>
						{orgType.map((item) => (
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
				<FormInput
					label="primary contact person"
					minLength={4}
					maxLength={30}
					placeholder="First Name & Last Name"
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
						<option value="+234">+234</option>
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
			</form>
		</ProfileWrapper>
	)
}

const orgType = [
	'NGO',
	'non profit',
	'government agency',
	'corporation',
	'educational institution',
	'community group',
	'others',
]
