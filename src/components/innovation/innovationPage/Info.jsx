import { useEffect, useState } from 'react'
import { PiMapPinArea } from 'react-icons/pi'
import api from '../../../api/axios'
import webIcon from '../../../assets/innovation/web-icon-black.svg'
// import { useFetch } from '../../../hooks/useFetch'

export default function Info({ innovation }) {
	const [orgDetails, setOrgDetails] = useState(null)

	useEffect(() => {
		const controller = new AbortController()

		async function getOrgDetails() {
			try {
				const res = await api.get('organisation/details', {
					signal: controller.signal,
				})
				setOrgDetails(res.data.data)
				// console.log(res.data)
			} catch (err) {
				console.error(err)
			}
		}
		getOrgDetails()

		return () => controller.abort('request ended abruptly')
	}, [])

	return (
		<>
			<article className="w-full bg-[#FBFBFB] border-4 border-nav/5 p-6 md:p-8 rounded-md">
				<h4 className="text-2xl font-bold">Impact and Reach</h4>
				<p className="text-base leading-relaxed my-6">
					{innovation?.current_adoption
						? innovation?.current_adoption
						: 'No information provided'}
				</p>
				<h4 className="text-2xl font-bold">Funding and Support Received</h4>
				<p className="text-base leading-relaxed mb-2">
					{innovation?.funding_and_support_received
						? innovation?.funding_and_support_received
						: 'No funding and support received yet'}
				</p>
			</article>
			<section
				className="w-full bg-[#FBFBFB] border-4 border-nav/5 mt-10 rounded-md"
				aria-description="innovation contact info"
			>
				<address className="border-b-2 border-[#ACB2B0] p-6 w-full not-italic font-normal">
					<h5 className="text-2xl font-bold capitalize">
						{orgDetails?.organisation_name}
					</h5>
					<p className="my-2 text-lg font-light capitalize">
						{orgDetails?.organisation_type}
					</p>
					<div className="w-full flex flex-wrap gap-8 sm:gap-16">
						<p className="text-base">
							<PiMapPinArea className="inline-block pr-2 text-3xl" />
							{orgDetails?.organisation_address}
						</p>
						<div className="flex">
							<img
								src={webIcon}
								aria-hidden
								className="w-6 sm:w-8 pr-2"
								alt=""
							/>
							<a
								href={orgDetails?.organisation_url}
								className="text-lg hover:text-ecoGreen transition-colors"
								target="_blank"
								rel="noopener noreferrer"
							>
								{orgDetails?.organisation_url}
							</a>
						</div>
					</div>
				</address>
				<address className="p-6 w-full not-italic font-normal">
					<h5 className="text-2xl font-bold capitalize mb-4 md:mb-7">
						contact person
					</h5>
					<div className="flex w-full gap-10">
						<div className="w-fit flex flex-col gap-4 mr-8 capitalize">
							<h6 className="text-xl font-semibold">
								{orgDetails?.first_contact_person}
							</h6>
							<p>{orgDetails?.job_title}</p>
						</div>
						<div className="w-fit flex flex-col gap-4 mr-8 capitalize">
							<a
								href={`mailto:${orgDetails?.first_person_email}`}
								className="text-lg hover:text-ecoGreen transition-colors"
							>
								{orgDetails?.first_person_email}
							</a>
							<a
								href={`tel:${orgDetails?.phone_number}`}
								className="text-lg hover:text-ecoGreen transition-colors"
							>
								{orgDetails?.phone_number}
							</a>
						</div>
					</div>
				</address>
			</section>
		</>
	)
}
