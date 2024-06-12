import Nav from '../Nav/Nav'
import CTA from '../innovation/CTA'
import Categories from '../innovation/Categories'
import Footer from '../innovation/Footer'
import Hero from '../innovation/Hero'
import Highlights from '../innovation/Highlights'

export default function Innovation() {
	return (
		<div className="w-full relative" id="innovation">
			<Nav />
			<section className="w-full pt-20">
				<Hero />
				<Categories />
				<Highlights />
				<CTA />
				<Footer />
			</section>
		</div>
	)
}
