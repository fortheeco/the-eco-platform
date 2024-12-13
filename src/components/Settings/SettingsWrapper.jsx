import { layout } from '../../style'
import Sidebar from './Sidebar'

export default function SettingsWrapper({ children }) {
	return (
		<>
			<section className={`w-full bg-[#FBFBFB] ${layout.section}`}>
				<div className="relative flex gap-10 w-full min-h-screen mt-32 lg:pr-8 py-6">
					<Sidebar />
					<article className="relative w-full h-fit p-12 ml-8 bg-white shadow-sm rounded-sm">
						{children}
					</article>
				</div>
			</section>
		</>
	)
}
