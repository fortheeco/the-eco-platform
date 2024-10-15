import { createPortal } from 'react-dom'
// import { Outlet } from 'react-router-dom'

export default function Overlay({ children, hideOverlay = null }) {
	return createPortal(
		<dialog
			className="w-screen h-screen bg-black/80 fixed inset-0 flex items-center justify-center gap-5 px-20 py-40 z-50"
			onClick={hideOverlay}
		>
			{children}
		</dialog>,
		document.body
	)
}
