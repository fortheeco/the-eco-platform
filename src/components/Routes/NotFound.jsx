import { Link } from 'react-router-dom'
import errorIcon from '../../assets/404.png'
import oopsIcon from '../../assets/oops!-text.svg'
import Nav from '../Nav/Nav'

export default function NotFound() {
	return (
		<div className="w-full relative block mx-auto">
			<Nav />
			<div className="block w-11/12 mx-auto -mb-16">
				<img
					src={oopsIcon}
					alt="oops!"
					className="inline-block w-full absolute top-0 opacity-60 mb-8 isolate -z-[1]"
				/>
			</div>
			<section className="w-4/5 max-w-[40rem] mx-auto mt-24 mb-8 flex flex-col items-center justify-center text-center z-[2]">
				<section className="flex flex-col justify-center items-center">
					<img src={errorIcon} alt="error 404" className="w-full" />
					<h1 className="text-2xl -mt-16 ml-20 text-ecoOrange">
						Page not found
					</h1>
				</section>
				<p className="mt-8 mx-auto w-4/5">
					Looks like you're in uncharted territory. The page you're looking for
					has gone missing! Please check the URL and try again, or return to our
					homepage to explore our other offerings.
				</p>
				<Link
					to={'/'}
					className="capitalize bg-ecoGreen text-white w-full py-3 lg:w-4/5 rounded-md text-lg font-semibold mx-auto focus-within:outline-ecoGreen focus-within:outline-2 focus-within:shadow-lg focus-within:rounded-none focus-within:bg-ecoGreen/70 transition-all"
				>
					Back to Home
				</Link>
			</section>
		</div>
	)
}
