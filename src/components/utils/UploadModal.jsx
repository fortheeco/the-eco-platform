import { Dropzone } from './Dropzone'
import Overlay from './Overlay'

export function UploadModal({
	setState,
	hideModal,
	name,
	handleSubmit,
	maxFiles = 1,
	isDisable = false,
	error = null,
}) {
	return (
		<Overlay>
			<section className="w-full max-w-screen-ss flex flex-col gap-6 p-8 sm:p-20 bg-white text-black rounded-md shadow-md">
				<Dropzone name={name} setState={setState} maxFiles={maxFiles} />
				{error && <small className="text-red">{error}</small>}
				<div className="w-full flex gap-10 items-center justify-center">
					<button
						type="button"
						disabled={isDisable}
						className="bg-slate-300 inline-block px-10 py-4 capitalize rounded-md hover:bg-slate-400 transition-colors"
						onClick={hideModal}
					>
						cancel
					</button>
					<button
						type="button"
						disabled={isDisable}
						className="bg-ecoGreen inline-block px-10 py-4 capitalize rounded-md text-white hover:bg-ecoBlue transition-colors disabled:bg-ecoGreen/50 disabled:text-slate-600"
						onClick={handleSubmit}
					>
						{isDisable ? 'loading...' : 'save'}
					</button>
				</div>
			</section>
		</Overlay>
	)
}
