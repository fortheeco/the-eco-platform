import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from '../../../api/axios'
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
		image: null,
		location: '',
	})

	// clear the state from the router
	// navigate(pathname, { replace: true, state: {} })

	const shortenedName = user?.full_name.split(' ')[0] || ''

	function handleFileChange(e) {
		const file = e.target.files[0]
		if (file) {
			if (!file.type.startsWith('image/')) {
				alert('Please select a valid image file.')
				return
			}

			// Check if file size is more than 2MB
			if (file.size > 2 * 1024 * 1024) {
				alert('Image size should not exceed 2MB.')
				return
			}

			const imageUrl = URL.createObjectURL(file)
			setFormData((prev) => ({ ...prev, image: imageUrl }))
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

		await axios
			.post(
				'complete_profile/',
				{ ...user, ...formData },
				{
					headers: { 'Content-Type': 'application/json' },
					// withCredentials: true,
				}
			)
			.then((response) => {
				setIsPending(false)
				setError(null)
				console.log(response)
				dispatch({
					type: 'LOGIN',
					token: response.data.token,
					user: response.data.user,
				})
				navigate('/signup/user/skillset', {
					state: {},
					replace: true,
				})
				window.history.replaceState({}, '')
			})
			.catch((err) => {
				let logErr =
					err?.response.data.error ||
					'Oops... Something went wrong! Please try again'
				setIsPending(false)
				setError(logErr)
			})
	}

	return (
		<section className={`w-full ${layout.section}`}>
			{error && toast.error(error)}
			<form
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
						src={formData.image || userAvatar}
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
				<button
					disabled={isPending}
					onClick={handleSubmit}
					className="capitalize bg-ecoGreen text-white w-full py-3 lg:w-1/3 flex justify-center rounded-md text-lg mx-auto mt-16 mb-4 disabled:bg-slate-300 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none focus-within:outline-ecoGreen focus-within:outline-2 focus-within:shadow-lg focus-within:rounded-none focus-within:bg-ecoGreen/70 transition-all"
				>
					{isPending ? 'Loading' : 'next'}
				</button>
			</form>
		</section>
	)
}
