import { useState } from 'react'
import { Link } from 'react-router-dom'
import { PrimaryBtn } from '../../utils/Button'
import { Dropzone } from '../../utils/Dropzone'
import SplitLayout from '../SplitLayout'

export default function OrgVerification() {
	const [doc, setDoc] = useState(null)
	async function handleSubmit(e) {
		e.preventDefault()
		console.log('form submitted')
	}

	return (
		<SplitLayout>
			{/* <article className="w-full bg-slate-200"> */}
			<div className="w-full flex justify-between items-center mb-20">
				<p>Great work, keep going 👍🏾</p>
			</div>
			<div className="w-full flex justify-between items-start gap-6 mb-10">
				<div className="flex flex-col">
					<h4 className="text-2xl sm:text-3xl md:text-4xl underline capitalize block font-bold">
						verification documents
					</h4>
					<small className="text-lg italic">
						(optional but if not done would not be verified)
					</small>
				</div>
				<Link
					to={'/signup/organization/area-of-focus'}
					className="font-bold text-ecoGreen text-lg"
				>
					Skip
				</Link>
			</div>

			<form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
				<h4 className="font-semibold capitalize mt-4 text-lg">
					supporting document
				</h4>
				<Dropzone setState={setDoc} />
				<h4 className="font-semibold capitalize mt-4 text-lg">
					supporting document
				</h4>
				<Dropzone setState={setDoc} />
				<h4 className="font-semibold capitalize mt-4 text-lg">
					supporting document
				</h4>
				<Dropzone setState={setDoc} />
				<div className="w-full flex gap-4 mt-32 mb-10 justify-between items-center">
					<button
						type="button"
						onClick={() => history.back()}
						className="capitalize bg-transparent text-ecoGreen py-3 flex justify-center rounded-full border-2 border-ecoGreen text-lg px-10 focus-within:bg-ecoGreen focus-within:text-white focus-within:shadow-lg  transition-all"
					>
						back
					</button>
					<PrimaryBtn type="submit" content="save & continue" />
				</div>
			</form>
			{/* </article> */}
		</SplitLayout>
	)
}

// const contactInputs = [{}]
