import { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import uploadIcon from '../../assets/signup/featured-icon.svg'

export function Dropzone({ setState }) {
	const [img, setImg] = useState(null)
	const onDrop = useCallback((acceptedFiles) => {
		let file = acceptedFiles[0]
		const imgUrl = handleFileChange(file)
		setState(file)
		setImg(imgUrl)
	}, [])

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
		accept: { 'image/*': [] },
		multiple: false,
	})

	return (
		<div
			{...getRootProps()}
			className={`rounded-lg sm:h-[10rem] flex flex-col items-center justify-center p-4 bg-dimWhite shadow-sm border-2 cursor-pointer ${
				isDragActive ? 'border-ecoGreen' : 'border-nav/10 '
			}`}
		>
			<input {...getInputProps()} />
			{isDragActive ? (
				<p>Drop the file here ...</p>
			) : !img ? (
				<div className="flex flex-col max-w-md mx-auto items-center gap-3 text-center">
					<img
						src={uploadIcon}
						alt="file upload icon"
						className="w-20 object-contain aspect-square"
					/>
					<p>
						<span className="font-bold text-purple-600">Click to upload</span>{' '}
						or drag and drop SVG, PNG, JPG or GIF (max. 800x400px) Upload max. 5
						documents in total
					</p>
				</div>
			) : (
				<div className="relative block w-fit h-full">
					<img
						src={img}
						className="w-auto h-full object-contain inline-block"
						alt="supporting document"
					/>
				</div>
			)}
		</div>
	)
}

function handleFileChange(file) {
	// const file = e.target.files[0]
	if (file) {
		if (!file.type.startsWith('image/')) {
			alert('Please select a valid image file.')
			return
		}

		// Check if file size is more than 2MB
		if (file.size > 2 * 1024 * 1024) {
			alert('File size is too big')
			return
		}
		const imgFile = URL.createObjectURL(file)
		// setImgUrl(imgFile)
		// encode image as a multipart/form-data
		// const form = new FormData()
		// form.set('image', file, file.name)
		// setFormData((prev) => ({ ...prev, image: form.get('image') }))
		return imgFile
	}
}
