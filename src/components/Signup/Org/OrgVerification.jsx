import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import api from '../../../api/axios'
import { PrimaryBtn } from '../../utils/Button'
import { Dropzone } from '../../utils/Dropzone'
import SplitLayout from '../SplitLayout'

const initialState = {
	first_document: null,
	second_document: null,
	third_document: null,
}
export default function OrgVerification() {
	const [documents, setDoc] = useState(initialState)
	const [isPending, setIsPending] = useState(false)
	const [error, setError] = useState(null)
	const navigate = useNavigate()
	const isDisabled =
		Object.values(documents).some((doc) => !Boolean(doc)) || isPending

	async function handleSubmit(e) {
		e.preventDefault()

		setIsPending(true)
		setError(null)
		// https://theeco.pythonanywhere.com/api/organisation/upload-verification-documents
		await api
			.post('organisation/upload-verification-documents', documents, {
				headers: { 'Content-Type': 'multipart/form-data' },
			})
			.then((res) => {
				setError(null)
				toast.success(res.data?.message)
				console.log(res)
				setTimeout(() => {
					navigate('/signup/organization/area-of-focus')
				}, 2000)
			})
			.catch((err) => {
				console.error(err)
				let logErr =
					err?.response.data.detail ||
					err?.message ||
					'Oops... Something went wrong! Please try again'
				// toast.error(logErr)
				setError(logErr)
			})
			.finally(() => {
				setIsPending(false)
			})
		return
	}

	return (
		<SplitLayout>
			{/* <article className="w-full bg-slate-200"> */}
			<div className="w-full flex justify-between items-center mb-10 sm:mb-20">
				<p>Great work, keep going 👍🏾</p>
			</div>
			<div className="w-full flex flex-col-reverse sm:flex-row justify-between items-start gap-6 mb-10">
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
					className="font-bold text-ecoGreen text-lg self-end inline-block absolute top-0 right-8 sm:static"
				>
					Skip
				</Link>
			</div>

			<form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
				<h4 className="font-semibold capitalize mt-4 text-lg">
					supporting document
				</h4>
				<Dropzone setState={setDoc} name={'first_document'} />
				<h4 className="font-semibold capitalize mt-4 text-lg">
					supporting document
				</h4>
				<Dropzone setState={setDoc} name={'second_document'} />
				<h4 className="font-semibold capitalize mt-4 text-lg">
					supporting document
				</h4>
				<Dropzone setState={setDoc} name={'third_document'} />

				{error && (
					<small className="text-center text-rose-500 font-nunito text-lg font-semibold inline-block w-full max-w-screen-sm mx-auto mt-2">
						{error}
					</small>
				)}

				<div className="w-full flex gap-4 mt-32 mb-10 justify-center sm:justify-between items-center">
					<button
						type="button"
						onClick={() => history.back()}
						className="hidden capitalize bg-transparent text-ecoGreen py-3 sm:flex justify-center rounded-full border-2 border-ecoGreen text-lg px-10 focus-within:bg-ecoGreen focus-within:text-white focus-within:shadow-lg  transition-all"
					>
						back
					</button>
					<PrimaryBtn
						type="submit"
						props={{ disabled: isDisabled }}
						variant={
							'disabled:bg-ecoGreen/30 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none'
						}
						content={isPending ? 'loading...' : 'save & continue'}
					/>
				</div>
			</form>
		</SplitLayout>
	)
}
