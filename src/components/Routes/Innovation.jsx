import CTA from '../innovation/CTA'
import Categories from '../innovation/Categories'
import Footer from '../innovation/Footer'
import Hero from '../innovation/Hero'
import Highlights from '../innovation/Highlights'

export default function Innovation() {
	return (
		<section className="w-full relative" id="innovation">
			<Hero />
			<Categories />
			<Highlights />
			<CTA />
			<Footer />
		</section>
	)
}
