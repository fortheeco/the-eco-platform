import { useState } from 'react'
import { Link } from 'react-router-dom'
import SettingsWrapper from './SettingsWrapper'

export default function ResetAccountData() {
	const [showModal, setShowModal] = useState(false)

	return (
		<SettingsWrapper>
			<section className="w-full">
				<h4 className="text-2xl font-nunito capitalize w-full p-2 mb-6 border-b border-black">
					reset account data
				</h4>
				<div className="w-full text-center m-8">
					<h6 className="text-2xl">
						Are you sure you want to delete your account data?
					</h6>
					<p className="text-nav/70 max-w-screen-xs my-4 mx-auto text-lg">
						All the problems, project and ideas posted on ECO would be lost and
						you won&apos;t be able to recover any back{' '}
					</p>
					<div className="w-full flex items-center mt-4 gap-4 text-white">
						<Link
							to={'/profile'}
							className="w-1/2 py-2 px-8 bg-slate-400 text-lg rounded-md"
						>
							No, don't delete
						</Link>
						<button
							onClick={() => setShowModal(true)}
							className="w-1/2 py-2 px-8 bg-red text-lg rounded-md"
						>
							Yes, delete data
						</button>
					</div>
				</div>
			</section>
		</SettingsWrapper>
	)
}
