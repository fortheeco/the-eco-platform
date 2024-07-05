import { Link, isRouteErrorResponse, useRouteError } from 'react-router-dom'
import NotFound from '../components/Routes/NotFound'

export default function ErrorElement() {
	const error = useRouteError()

	if (isRouteErrorResponse(error)) {
		if (error.status === 404) {
			return <NotFound />
		}

		if (error.status === 401) {
			return <div>You aren't authorized to see this</div>
		}

		if (error.status === 503) {
			return <div>Looks like our API is down</div>
		}
	}

	return (
		<section className="w-full h-full flex flex-col items-center justify-center gap-4">
			<h2 className="">Oops!..Something went wrong</h2>
			<Link to={'/'} className="font-semibold text-ecoGreen text-2xl">
				Back to home
			</Link>
		</section>
	)
}
