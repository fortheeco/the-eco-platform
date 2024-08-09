import { layout } from '../../style'
import './innovation.css'

export default function Hero() {
	return (
		<article className={`w-full ${layout.section} my-20`}>
			<div className="w-full text-black text-center p-10">
				<h1 className="font-bold text-3xl lg:text-5xl lg:mb-3 font-nunito leading-relaxed">
					Innovations coming out of Africa
				</h1>
				<p className="w-full mx-auto leading-relaxed text-lg lg:text-2xl text-nav/50 max-w-lg">
					Ultrices quam at sagittis augue volutpat dui potenti semper risus.
					Fermentum in dapibus aliquam amet.
				</p>
			</div>
		</article>
	)
}
