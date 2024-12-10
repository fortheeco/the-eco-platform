import { useState } from 'react'
// import api from '../../../api/axios'
import { getImgUrl } from '../../../helpers/get-img-url'
import Overlay from '../../utils/Overlay'

export default function MediaResources({ media = [] }) {
	return (
		<section className="w-full bg-[#FBFBFB] border-4 border-nav/5 p-6 md:p-8 rounded-md my-10">
			<h4 className="text-2xl font-bold capitalize">
				Media & Promotional Resources
			</h4>
			<div className="w-full min-h-[5rem] my-6">
				{media.length == 0 ? (
					<small>no images added...</small>
				) : (
					<DisplayImages media={media} />
				)}
			</div>
		</section>
	)
}

function DisplayImages({ media }) {
	const [showOverlay, setOverlay] = useState(false)

	function toggleOverlay() {
		setOverlay(true)
	}

	function hideOverlay(e) {
		// e.stopImmediatePropagation()
		setOverlay(false)
	}

	return (
		<div className="w-full flex justify-start gap-4 relative">
			{media.map((img) => (
				<img
					key={img.file}
					src={getImgUrl(img.file)}
					onClick={toggleOverlay}
					alt=""
					className="w-1/4 aspect-square object-fill object-center cursor-pointer bg-ecoLightGreen"
				/>
			))}

			{showOverlay && (
				<Overlay hideOverlay={hideOverlay}>
					{media.map((img) => (
						<img
							src={img}
							key={img}
							className="w-full max-h-screen aspect-square object-contain object-center"
							alt=""
							// draggable
							// onDragEnd={hideOverlay}
						/>
					))}
				</Overlay>
			)}
		</div>
	)
}
