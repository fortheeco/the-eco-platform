import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../../api/axios'
import Nav from '../../Nav/Nav'
import CTA from '../CTA'
import Footer from '../Footer'
import Header from './Header'
import Info from './Info'
import Intro from './Intro'
import MediaResources from './MediaResources'
import Overview from './Overview'
import Reviews from './Review'

export default function InnovationProfile() {
	const [innovation, setInnovation] = useState([])
	const { id } = useParams()

	useEffect(() => {
		const controller = new AbortController()

		async function getInnovation() {
			try {
				const res = await api.get(`organisation/get-innovation/${id}`, {
					signal: controller.signal,
				})
				setInnovation(res.data.data)
				// console.log('Single innovation: ', res.data)
			} catch (err) {
				console.error(err)
			}
		}
		getInnovation()

		return () => {
			controller.abort('request ended abruptly')
		}
	}, [])

	return (
		<div className="w-full block relative">
			<Nav />
			<section className="w-full pt-20 bg-dimWhite font-nunito">
				<Header profileImg={innovation?.profile_image} />
				<section className="w-full relative block md:max-w-[80%] mx-auto px-6">
					<Intro innovation={innovation} />
					<Overview innovation={innovation} />
					<MediaResources media={innovation?.innovation_attachements} />
					<Info innovation={innovation} />
					<Reviews name={innovation?.innovation_name} id={id} />
				</section>
				<CTA />
				<Footer />
			</section>
		</div>
	)
}
