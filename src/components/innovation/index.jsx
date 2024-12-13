import Nav from '../Nav/Nav'
import CTA from './CTA'
import Categories from './Categories'
import Footer from './Footer'
import Hero from './Hero'
import Highlights from './Highlights'

export default function InnovationPage() {
	return (
		<div className="w-full relative" id="innovation-page">
			<Nav />
			<section className="w-full pt-20 bg-dimWhite">
				<Hero />
				<Categories />
				<Highlights />
				<CTA />
				<Footer />
			</section>
		</div>
	)
}
