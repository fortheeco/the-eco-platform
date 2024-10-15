import { useParams } from 'react-router-dom'
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
	const { id } = useParams()

	console.log(id)
	return (
		<div className="w-full block relative">
			<Nav />
			<section className="w-full pt-20 bg-dimWhite font-nunito">
				<Header />
				<section className="w-full relative block md:max-w-[80%] mx-auto px-6">
					<Intro />
					<MediaResources />
					<Info />
					<Reviews reviews={reviews} />
				</section>
				<CTA />
				<Footer />
			</section>
		</div>
	)
}

const reviews = [
	{
		name: 'ahmed david',
		count: 4,
		id: 1,
		avatar: null,
		review:
			'Sem lacus pharetra sit malesuada velit faucibus sed. Pellentesque semper adipiscing mattis accumsan egestas. Integer morbi ipsum ullamcorper dictum cras ultrices eu adipiscing mi. Velit et congue pulvinar id et augue facilisis',
	},
	{
		name: 'john doe',
		count: 4,
		id: 2,
		avatar: testImage,
		review:
			'Sem lacus pharetra sit malesuada velit faucibus sed. Pellentesque semper adipiscing mattis accumsan egestas. Integer morbi ipsum ullamcorper dictum cras ultrices eu adipiscing mi. Velit et congue pulvinar id et augue facilisis',
	},
]
