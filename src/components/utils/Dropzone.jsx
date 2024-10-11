import { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { toast } from 'react-toastify'
import uploadIcon from '../../assets/signup/featured-icon.svg'

export function Dropzone({ setState, name, maxFiles = 1 }) {
	const [images, setImages] = useState([])
	const isSingleFile = maxFiles === 1
	const formData = new FormData()

	const onDrop = useCallback((acceptedFiles) => {
		const imageUrls = acceptedFiles.map((file) => handleFileChange(file))
		setImages(imageUrls)
		// if it's a single file, set state as a string
		if (isSingleFile) {
			let file = acceptedFiles[0]
			formData.set(name, file)
			setState((prev) => ({ ...prev, [name]: formData.get(name) }))
		} else {
			// transform file in parent component
			setState(acceptedFiles)
		}
	}, [])

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
		accept: { 'image/*': [] },
		multiple: !isSingleFile,
		maxFiles: maxFiles,
	})

	function handleFileChange(file) {
		if (file) {
			if (!file.type.startsWith('image/')) {
				toast.error('Please select a valid image file.')
				return
			}

			// Check if file size is more than 2MB
			if (file.size > 2 * 1024 * 1024) {
				toast.error('File size is too big')
				return
			}
			const imgFile = URL.createObjectURL(file)
			return imgFile
		}
	}

	return (
		<div
			{...getRootProps()}
			className={`rounded-lg sm:min-h-[10rem] flex flex-col items-center justify-center p-4 bg-dimWhite shadow-sm border-2 cursor-pointer ${
				isDragActive ? 'border-ecoGreen' : 'border-nav/10 '
			}`}
		>
			<input {...getInputProps()} />
			{isDragActive ? (
				<p>Drop the file here ...</p>
			) : images.length === 0 ? (
				<div className="flex flex-col max-w-md mx-auto items-center gap-3 text-center">
					<img
						src={uploadIcon}
						alt="file upload icon"
						className="w-20 object-contain aspect-square"
					/>
					<p>
						<span className="font-bold text-purple-600">Click to upload</span>{' '}
						or drag and drop SVG, PNG, JPG or GIF (max. 800x400px) Upload max.
						{` ${maxFiles} `}
						documents in total
					</p>
				</div>
			) : (
				<div className="relative flex flex-wrap justify-center gap-4 px-6 w-4/5 h-fit">
					{images.map((img) => (
						<img
							src={img}
							key={img}
							className="w-auto h-20 object-contain inline-block"
							alt="supporting document"
						/>
					))}
				</div>
			)}
		</div>
	)
}
