import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import api from '../../../api/axios'
import locationIcon from '../../../assets/signup/location.svg'
import userAvatar from '../../../assets/signup/user-avatar.png'
import { useAuthContext } from '../../../hooks/useAuthContext'
import { layout, styles } from '../../../style'

export default function UserDetails() {
	const { dispatch } = useAuthContext()
	const [isPending, setIsPending] = useState(false)
	const [error, setError] = useState(null)
	const navigate = useNavigate()
	const { state } = useLocation()
	const { formData: user } = state || {}
	const [formData, setFormData] = useState({
		...user,
		image: null,
		location: '',
	})
	const [imgUrl, setImgUrl] = useState(userAvatar)

	const shortenedName = user?.full_name.split(' ')[0] || ''

	function handleFileChange(e) {
		e.preventDefault()
		const file = e.target.files[0]
		if (file) {
			if (!file.type.startsWith('image/')) {
				toast.info('Please select a valid image file.')
				return
			}

			// Check if file size is more than 2MB
			if (file.size > 2 * 1024 * 1024) {
				toast.info('Image size should not exceed 2MB.')
				return
			}
			const imgFile = URL.createObjectURL(file)
			setImgUrl(imgFile)
			// encode image as a multipart/form-data
			const form = new FormData()
			form.set('image', file, file.name)
			setFormData((prev) => ({ ...prev, image: form.get('image') }))
		}
	}

	function handleBtnClicked() {
		document.getElementById('upload-avatar').click()
	}

	async function handleSubmit(e) {
		e.preventDefault()
		if (formData.location === '') {
			toast.info('Please add your location')
			return
		}
		if (!formData.image) {
			toast.info('A valid profile image is required!')
			return
		}
		setIsPending(true)
		setError(null)

		await api
			.post(
				'complete_profile/',
				{ ...formData },
				{
					headers: { 'Content-Type': 'multipart/form-data' },
				}
			)
			.then((res) => {
				setIsPending(false)
				setError(null)
				dispatch({
					type: 'LOGIN',
					token: res.data.token,
					user: res.data.user,
				})
				navigate('/signup/user/skillset', {
					state: {},
					replace: true,
				})
			})
			.catch((err) => {
				let logErr =
					handleFetchError(err?.response?.data) ||
					'Oops... Something went wrong! Please try again'
				setIsPending(false)
				setError(logErr)
			})
	}

	useEffect(() => {
		if (!user?.full_name) {
			dispatch({ type: 'LOGOUT' })
			navigate('/signup/user')
		}
	}, [])

	// req error is in the structure: error.response.data[fieldname(s)][0]
	// return an error message based on req error
	function handleFetchError(resError) {
		let fieldNames = Object.keys(formData)
		let errors = []
		fieldNames.forEach((fieldName) => {
			if (resError[fieldName]) {
				errors.push(resError[fieldName][0])
			}
		})

		return errors.join('<br/>')
	}

	return (
		<section className={`w-full ${layout.section}`}>
			{/* {error && toast.error(error)} */}
			<form
				onSubmit={handleSubmit}
				className={`bg-container relative w-full px-6 ${styles.paddingY} ${styles.paddingX}`}
			>
				<p className="flex absolute right-6 top-16 text-lg">Step 2/3</p>
				<h2 className="font-semibold text-xl capitalize mb-3 lg:text-3xl lg:font-bold">
					welcome, {shortenedName}
				</h2>
				<p className="text-lg text-nav">
					Glad to have you here, help us know you better.
				</p>
				<div className="flex flex-col my-8 lg:justify-start lg:gap-20 lg:flex-row w-full items-center justify-center gap-3">
					<img
						src={imgUrl}
						alt="user avatar"
						className="w-40 h-40 object-fill object-center rounded-full"
					/>
					<label className="flex flex-col items-center lg:items-start gap-4">
						<input
							type="file"
							name="image"
							// value={formData.avatar}
							id="upload-avatar"
							accept="image/*"
							onChange={handleFileChange}
							className="hidden"
						/>
						<button
							type="button"
							onClick={handleBtnClicked}
							className="w-fit rounded-md flex items-center px-8 py-3 text-white bg-ecoGreen"
						>
							Upload image
						</button>
						<small className="text-lg text-nav/70">
							Image size shouldn't exceed 2mb
						</small>
					</label>
				</div>
				<hr className="w-full h-[2px] bg-nav/30" />
				<h2 className="font-semibold text-xl mt-8 lg:text-3xl lg:font-bold capitalize mb-3">
					location
				</h2>
				<p className="text-lg text-nav/70 my-6">
					Tell us the location you are reporting from
				</p>
				<label className="flex mt-3 pr-4 gap-3 bg-ecoGreen/10 rounded-md has-[:focus]:border-b-2 has-[:focus]:border-ecoGreen w-full lg:w-1/2">
					<img
						src={locationIcon}
						alt="map icon"
						className="h-12  inline-block p-2"
					/>
					<input
						type="text"
						required
						value={formData.location}
						onChange={(e) =>
							setFormData((prev) => ({ ...prev, location: e.target.value }))
						}
						minLength={6}
						maxLength={80}
						autoComplete="location"
						aria-description="location"
						placeholder="Enter your location"
						className="bg-transparent outline-0 w-full border-0"
					/>
				</label>
				{error && (
					<small className="text-center text-rose-500 font-nunito text-lg font-semibold inline-block w-full mt-2">
						{error}
					</small>
				)}
				<button
					type="submit"
					disabled={isPending}
					// onClick={handleSubmit}
					className="capitalize bg-ecoGreen text-white w-full py-3 lg:w-1/3 flex justify-center rounded-md text-lg mx-auto mt-16 mb-4 disabled:bg-slate-300 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none focus-within:outline-ecoGreen focus-within:outline-2 focus-within:shadow-lg focus-within:rounded-none focus-within:bg-ecoGreen/70 transition-all"
				>
					{isPending ? 'Loading' : 'next'}
				</button>
			</form>
		</section>
	)
}
