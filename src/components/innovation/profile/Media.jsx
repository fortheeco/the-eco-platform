import ProfileWrapper from './ProfileWrapper'

export default function Media() {
	const media = []

	return (
		<ProfileWrapper>
			<div className="w-full flex gap-8 flex-wrap">
				{media.length === 0 && <p>No images for this innovation yet!</p>}
				{media.map((image) => (
					<img
						key={image}
						src={image}
						className="h-40 aspect-square object-fill object-center"
					/>
				))}
			</div>
			<button
				type="button"
				className="capitalize bg-ecoGreen text-white py-3 w-fit flex items-center justify-center rounded-lg mx-auto mt-8 text-lg px-8 focus-within:outline-ecoGreen focus-within:outline-2 focus-within:shadow-lg focus-within:rounded-lg focus-within:bg-ecoGreen/70 hover:bg-ecoBlue transition-all"
			>
				edit images
			</button>
		</ProfileWrapper>
	)
}
