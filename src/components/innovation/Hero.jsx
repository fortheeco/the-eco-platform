import { Link } from 'react-router-dom'
import { layout } from '../../style'
import './innovation.css'

export default function Hero() {
	return (
		<article className={`w-full ${layout.section} innov-hero my-20`}>
			<div className="w-full sm:w-1/2 text-white p-10 lg:pl-16">
				<h1 className="font-bold text-2xl lg:text-3xl lg:mb-3 font-nunito leading-relaxed">
					Innovation AI <br />
					Map
				</h1>
				<p className="mb-8 lg:mb-14 leading-relaxed text-base xl:text-lg text-dimWhite max-w-xs">
					Are you a Developer, and like to join a communtity of developers
					building the future of Africa?
				</p>
				<Link
					to={'/signup'}
					className=" bg-ecoGreen text-white w-fit rounded-md text-lg px-4 py-3 font-semibold hover:bg-ecoGreen/70 focus-within:outline-ecoGreen focus-within:outline-2 focus-within:shadow-lg focus-within:rounded-none focus-within:bg-ecoGreen/70 transition-all"
				>
					Join our Developer circle
				</Link>
			</div>
		</article>
	)
}
