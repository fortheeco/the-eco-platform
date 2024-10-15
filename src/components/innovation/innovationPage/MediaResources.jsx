import { useState } from 'react'
import { createPortal } from 'react-dom'
import testImage from '../../../assets/jackets.jpg'
import Overlay from '../../utils/Overlay'

const mediaImages = [testImage]

export default function MediaResources() {
	return (
		<section className="w-full bg-[#FBFBFB] border-4 border-nav/5 p-6 md:p-8 rounded-md my-10">
			<h4 className="text-2xl font-bold capitalize">
				Media & Promotional Resources
			</h4>
			<div className="w-full min-h-[5rem] my-6">
				{mediaImages.length == 0 ? (
					<small>no images added...</small>
				) : (
					<DisplayImages />
				)}
			</div>
		</section>
	)
}

function DisplayImages() {
	const [showOverlay, setOverlay] = useState(false)

	function toggleOverlay() {
		setOverlay(true)
		console.log('showing overlay')
	}
	function hideOverlay(e) {
		// e.stopImmediatePropagation()
		setOverlay(false)
	}

	return (
		<div className="w-full flex justify-start gap-4 relative">
			<img
				src={mediaImages[0]}
				onClick={toggleOverlay}
				alt=""
				className="w-1/4 aspect-square object-fill object-center cursor-pointer"
			/>
			{mediaImages[1] && (
				<img
					src={mediaImages[1]}
					onClick={toggleOverlay}
					alt=""
					className="w-1/4 aspect-square object-fill object-center cursor-pointer"
				/>
			)}
			{showOverlay && (
				<Overlay hideOverlay={hideOverlay}>
					{mediaImages.map((img) => (
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
