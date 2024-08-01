import { Link } from 'react-router-dom'
import errorIcon from '../../assets/404.png'
import oopsIcon from '../../assets/oops!-text.svg'
import Nav from '../Nav/Nav'
import Footer from '../innovation/Footer'

export default function NotFound() {
	return (
		<>
			<div className="w-full block mx-auto relative font-nunito">
				<Nav />
				<section className="w-full relative top-28 lg:top-0 lg:px-10 pb-10 lg:-mb-20">
					<div className="block w-11/12 mx-auto lg:-mb-16">
						<img
							src={oopsIcon}
							alt="oops!"
							className="inline-block w-[90%] absolute lg:top-0 opacity-90 mb-8 isolate -z-[1]"
						/>
					</div>
					<article className="w-4/5 max-w-[40rem] mx-auto lg:mt-24 mb-8 flex flex-col items-center justify-center text-center z-[2]">
						<section className="flex flex-col justify-center items-center">
							<img
								src={errorIcon}
								alt="error 404"
								className="w-full inline-block lg:mt-[10rem]"
							/>
							<h1 className="text-xl sm:text-2xl sm:font-semibold ml-12 -mt-10 lg:text-4xl sm:-mt-16 lg:ml-20">
								Page not found
							</h1>
						</section>
						<p className="my-8 mx-auto lg:w-4/5">
							Looks like you're in uncharted territory. The page you're looking
							for has gone missing! Please check the URL and try again, or
							return to our homepage to explore our other offerings.
						</p>
						<Link
							to={'/'}
							className="capitalize bg-ecoGreen text-white w-full py-3 lg:w-4/5 rounded-md text-lg font-semibold mx-auto focus-within:outline-ecoGreen focus-within:outline-2 focus-within:shadow-lg focus-within:rounded-none focus-within:bg-ecoGreen/70 transition-all"
						>
							Back to Home
						</Link>
					</article>
				</section>
				<Footer />
			</div>
		</>
	)
}
