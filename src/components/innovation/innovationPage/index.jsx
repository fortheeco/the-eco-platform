import { useLocation } from 'react-router-dom'
import testImage from '../../../assets/jackets.jpg'
import Nav from '../../Nav/Nav'
import CTA from '../CTA'
import Footer from '../Footer'
import Header from './Header'
import Info from './Info'
import Intro from './Intro'
import MediaResources from './MediaResources'
import Reviews from './Review'

export default function InnovationProfile() {
	// const { id } = useParams()
	const { state } = useLocation()
	// TODO get innovation by id instead of passing through state

	return (
		<div className="w-full block relative">
			<Nav />
			<section className="w-full pt-20 bg-dimWhite font-nunito">
				<Header profileImg={state?.profile_image} />
				<section className="w-full relative block md:max-w-[80%] mx-auto px-6">
					<Intro innovation={state} />
					<MediaResources media={state?.innovation_attachements} />
					<Info innovation={state} />
					<Reviews name={state?.innovation_name} id={state?.id} />
				</section>
				<CTA />
				<Footer />
			</section>
		</div>
	)
}
