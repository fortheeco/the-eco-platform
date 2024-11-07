import { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa6'
import { NavLink, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import api from '../../../api/axios'
import editIcon from '../../../assets/SVG/edit-2.svg'
import { formatResError } from '../../../helpers/FormatErrorMessage'
// import { useFetch } from '../../../hooks/useFetch'
import { getImgUrl } from '../../../helpers/get-img-url'
import { layout } from '../../../style'
import { UploadModal } from '../../utils/UploadModal'

export default function ProfileWrapper({ children }) {
	const [showProfileModal, setShowProfileModal] = useState(false)
	const [showLogoModal, setShowLogoModal] = useState(false)
	// const {
	// 	data,
	// 	error: isError,
	// 	isPending: fetching,
	// } = useFetch('organisation/all-innovations')
	const { id } = useParams()
	// const innovation = data[id]
	const [isPending, setIsPending] = useState(false)
	const [error, setError] = useState(null)
	const [innovation, setInnovation] = useState([])
	const [images, setState] = useState({
		profile: null,
		logo: null,
	})

	useEffect(() => {
		const controller = new AbortController()

		async function getInnovations() {
			try {
				const res = await api.get('organisation/all-innovations', {
					signal: controller.signal,
				})
				setInnovation(res.data.data[id])
				setState((prev) => ({
					...prev,
					profile: getImgUrl(innovation.profile_image),
					logo: getImgUrl(innovation.logo),
				}))
				console.log(res.data)
			} catch (err) {
				console.error(err)
			}
		}
		getInnovations()

		return () => controller.abort('request ended abruptly')
	}, [])

	async function uploadProfile() {
		setError(null)
		setIsPending(true)
		try {
			const res = await api.post(
				'organisation/upload-innovation-profile',
				{
					'profile-image': images.profile,
				},
				{ headers: { 'Content-Type': 'multipart/form-data' } }
			)
			console.log(res)
			toast.success(res.data.message)
			setIsPending(false)
			setShowProfileModal(false)
			// setState(prev => ({...prev, profile}))
		} catch (err) {
			// console.error(err)
			let logError = formatResError(err)
			setError(logError)
		}
	}

	async function uploadLogo() {
		setError(null)
		setIsPending(true)
		try {
			const res = await api.post(
				'organisation/upload-innovation-logo',
				{
					logo: images.logo,
				},
				{ headers: { 'Content-Type': 'multipart/form-data' } }
			)
			// console.log(res)
			toast.success(res.data.message)
			setIsPending(false)
			setShowLogoModal(false)
			// setState(prev => ({...prev, profile}))
		} catch (err) {
			// console.error(err)
			let logError = formatResError(err)
			setError(logError)
		}
	}

	return (
		<section className={`w-full bg-white text-black ${layout.section}`}>
			<article className="relative w-full p-12 md:p-0 mt-20 md:mt-28">
				<div className="w-full">
					<div className="w-full relative h-[20rem] bg-inputBorder">
						{images.profile && (
							<img
								src={images.profile}
								alt="innovation header image"
								className="w-full h-full object-fill object-center"
							/>
						)}
						<button
							type="button"
							onClick={() => setShowProfileModal(true)}
							className="flex place-content-center p-4 absolute w-16 sm:w-20 aspect-square rounded-full top-1/2 left-1/2 -translate-y-1/2 z-10 bg-white border-2 border-ecoGreen shadow-md"
						>
							<img
								src={editIcon}
								alt="edit image"
								className="w-10 aspect-auto"
							/>
						</button>
					</div>
					<div className="w-full flex items-center gap-4 my-4">
						<div className="w-16 aspect-square rounded-full sm:w-20 md:w-32 inline-block relative bg-inputBorder border-1 border-ecoGreen shadow-sm">
							{images.logo && (
								<img
									src={images.logo}
									alt="innovation icon"
									className="w-full aspect-square object-fill object-center rounded-full"
								/>
							)}
							<button
								type="button"
								onClick={() => setShowLogoModal(true)}
								className="flex place-content-center p-1 absolute w-8 sm:w-10 aspect-square rounded-full top-1/2 right-0 -translate-y-1/2 z-10 bg-white border-2 border-ecoGreen shadow-md"
							>
								<img
									src={editIcon}
									alt="edit image"
									className="w-full aspect-auto"
								/>
							</button>
						</div>

						<div className="inline-block">
							<h4 className="text-2xl font-semibold md:text-3xl capitalize">
								{innovation.innovation_name}
							</h4>
							<p className="flex items-center">
								<FaStar role="button" className="text-2xl text-orange pr-1" />
								{innovation.review_average}
							</p>
						</div>
						<p className="text-base ml-20">{innovation.liked_by} likes</p>
					</div>
				</div>
				<nav className="w-full max-w-screen-md flex items-center justify-start mt-16 mb-8 gap-5 md:gap-12 border-b-2">
					{navLinks.map((link) => (
						<NavLink
							key={link.url}
							to={`/innovation/${id}/profile/${link.url}`}
							className={({ isActive }) =>
								`${
									isActive
										? 'border-black text-black font-normal border-b-2'
										: 'border-0 text-[#606060] font-light'
								} capitalize text-lg w-fit inline-block`
							}
						>
							{link.text}
						</NavLink>
					))}
				</nav>
				<section className="w-full block max-w-screen-sm">{children}</section>
			</article>
			{showProfileModal && (
				<UploadModal
					setState={setState}
					name={'profile'}
					hideModal={() => setShowProfileModal(false)}
					handleSubmit={uploadProfile}
					isDisable={isPending}
					error={error}
				/>
			)}
			{showLogoModal && (
				<UploadModal
					setState={setState}
					name={'logo'}
					hideModal={() => setShowLogoModal(false)}
					handleSubmit={uploadLogo}
					isDisable={isPending}
					error={error}
				/>
			)}
		</section>
	)
}

// function UploadModal({ setState, setShowModal, name, submit }) {
// 	return (
// 		<Overlay>
// 			<section className="w-full max-w-screen-ss flex flex-col gap-6 p-8 sm:p-20 bg-white text-black rounded-md shadow-md">
// 				<Dropzone name={name} setState={setState} maxFiles={1} />
// 				<div className="w-full flex gap-10 items-center justify-center">
// 					<button
// 						type="button"
// 						className="bg-slate-300 inline-block px-10 py-4 capitalize rounded-md hover:bg-slate-400 transition-colors"
// 						onClick={() => setShowModal(false)}
// 					>
// 						cancel
// 					</button>
// 					<button
// 						type="button"
// 						className="bg-ecoGreen inline-block px-10 py-4 capitalize rounded-md text-white hover:bg-ecoBlue transition-colors"
// 						onClick={submit}
// 					>
// 						save
// 					</button>
// 				</div>
// 			</section>
// 		</Overlay>
// 	)
// }

const navLinks = [
	{ text: 'organization information', url: 'information' },
	{ text: 'innovation details', url: 'details' },
	{ text: 'impact and reach', url: 'impact-and-reach' },
	{ text: 'media', url: 'media' },
]
