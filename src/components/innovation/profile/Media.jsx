import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../../api/axios'
import { UploadModal } from '../../utils/UploadModal'
import ProfileWrapper from './ProfileWrapper'

export default function Media() {
	const [showModal, setShowModal] = useState(false)
	const [media, setMedia] = useState([])
	// const [innovation, setInnovation] = useState([])
	const { id } = useParams()

	useEffect(() => {
		const controller = new AbortController()

		async function getInnovations() {
			try {
				const res = await api.get('organisation/all-innovations', {
					signal: controller.signal,
				})
				setMedia(res.data.data[id][innovation_attachements])
				console.log(res.data)
			} catch (err) {
				console.error(err)
			}
		}
		getInnovations()

		return () => controller.abort('request ended abruptly')
	}, [])

	return (
		<ProfileWrapper>
			<div className="w-full flex gap-8 flex-wrap">
				{media.length === 0 && <p>No images for this innovation yet!</p>}
				{media.map((image) => (
					<img
						key={image}
						src={URL.createObjectURL(image)}
						className="h-40 aspect-square object-fill object-center"
					/>
				))}
			</div>
			<button
				type="button"
				onClick={() => setShowModal(true)}
				className="capitalize bg-ecoGreen text-white py-3 w-fit flex items-center justify-center rounded-lg mx-auto mt-8 text-lg px-8 focus-within:outline-ecoGreen focus-within:outline-2 focus-within:shadow-lg focus-within:rounded-lg focus-within:bg-ecoGreen/70 hover:bg-ecoBlue transition-all"
			>
				edit images
			</button>
			{showModal && (
				<UploadModal
					setState={setMedia}
					hideModal={() => setShowModal(false)}
					maxFiles={5}
				/>
			)}
		</ProfileWrapper>
	)
}
