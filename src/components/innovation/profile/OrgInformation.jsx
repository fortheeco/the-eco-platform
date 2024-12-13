import { useEffect, useState } from 'react'
import api from '../../../api/axios'
import { FormInput } from '../../utils/FormInput'
import ProfileWrapper from './ProfileWrapper'

export default function OrgInformation() {
	const [orgDetails, setOrgDetails] = useState(null)

	useEffect(() => {
		const controller = new AbortController()

		async function getOrgDetails() {
			try {
				const res = await api.get('organisation/details', {
					signal: controller.signal,
				})
				setOrgDetails(res.data.data)
				console.log(res.data)
			} catch (err) {
				console.error(err)
			}
		}
		getOrgDetails()

		return () => {
			controller.abort('request ended abruptly')
		}
	}, [])

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
					value={orgDetails?.organisation_name}
					props={{ disabled: true }}
				/>
				<label className="block w-full">
					<span className="text-lg capitalize">type of organization</span>
					<select
						name="org-type"
						className="flex mt-3 p-2 gap-3 bg-nav/5 rounded-md input-parent transition-all duration-200 outline-0 border-0 w-full pr-2"
						required
						disabled
					>
						<option value={orgDetails?.organisation_type}>
							{orgDetails?.organisation_type}
						</option>
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
					value={orgDetails?.first_contact_person}
					props={{ disabled: true }}
				/>
				<FormInput
					name="title"
					label="job title"
					minLength={4}
					maxLength={30}
					placeholder="Enter job title"
					value={orgDetails?.job_title}
					props={{ disabled: true }}
				/>
				<FormInput
					name="email"
					type="email"
					label="email address"
					placeholder="example@email.com"
					value={orgDetails?.first_person_email}
					props={{ disabled: true }}
				/>
				<label htmlFor="phone" className="inline-block mt-4 -mb-4 capitalize">
					phone number
				</label>
				<div className="w-full flex h-12 bg-nav/5 rounded-md">
					{/* <select
						name="country-code"
						id="country-code"
						className="h-full w-20 p-2 inline-block mr-2 bg-transparent outline-0"
					>
						<option value="+234">+234</option>
					</select> */}
					<input
						type="tel"
						name="phone"
						id="phone"
						disabled
						value={orgDetails?.recovery_phone_number}
						className="w-full h-full border-l-2 p-4 bg-transparent outline-0 disabled:text-slate-500"
					/>
				</div>
				<FormInput
					name="address"
					label="organization address"
					placeholder="Where is your organization located"
					value={orgDetails?.organisation_address}
					props={{ disabled: true }}
				/>
				<FormInput
					name="website url"
					label="organization URL"
					placeholder="www.example.com"
					value={orgDetails?.organisation_url}
					props={{ disabled: true }}
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
