import { useParams } from 'react-router-dom'
import Nav from '../../Nav/Nav'
import CTA from '../CTA'
import Footer from '../Footer'
import Header from './Header'
import Info from './Info'
import Intro from './Intro'
import MediaResources from './MediaResources'

export default function InnovationProfile() {
	const { id } = useParams()

	console.log(id)
	return (
		<div className="w-full block relative">
			<Nav />
			<section className="w-full pt-20 bg-dimWhite font-nunito">
				<Header />
				<section className="w-full relative block md:max-w-[80%] mx-auto">
					<Intro />
					<MediaResources />
					<Info />
				</section>
				<CTA />
				<Footer />
			</section>
		</div>
	)
}
