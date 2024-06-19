import { Link } from 'react-router-dom'
import { layout } from '../../style'

export default function CTA() {
	return (
		<article
			className={`w-full my-10 lg:my-20 relative block after:block after:inset-0 after:absolute after:bg-black/60 after:z-[1] ${layout.section} innov-cta`}
		>
			<div className="w-full flex flex-col items-center justify-center gap-4 p-10 lg:px-20 text-white/80 text-center relative z-[2]">
				<p className="max-w-lg leading-normal lg:text-lg mb-4">
					Join our PALs network and unleash your tech skills on innovative
					projects. Be part of our team and shape the <br />{' '}
					<strong className="font-bold uppercase text-2xl">
						future of technology.
					</strong>
				</p>
				<Link
					to={'/ipals'}
					className="bg-ecoGreen text-white w-fit mx-auto inline-block rounded-md text-lg px-10 py-3 font-semibold hover:bg-ecoGreen/70 focus-within:outline-ecoGreen focus-within:outline-2 focus-within:shadow-lg focus-within:rounded-none focus-within:bg-ecoGreen/70 transition-all"
				>
					Join the PALs network
				</Link>
			</div>
		</article>
	)
}
