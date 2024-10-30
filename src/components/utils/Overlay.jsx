import { createPortal } from 'react-dom'
// import { Outlet } from 'react-router-dom'

export default function Overlay({ children, hideOverlay = null }) {
	return createPortal(
		<dialog
			className="w-screen h-screen bg-black/50 fixed inset-0 flex flex-col items-center justify-center gap-5 sm:px-20 py-40 z-50"
			onClick={hideOverlay}
		>
			{children}
		</dialog>,
		document.body
	)
}
