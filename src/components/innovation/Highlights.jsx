import mainImg from '../../assets/innovation/highlight-img.png'

export default function Highlights() {
	return (
		<article className="w-full mt-8">
			<div className="w-full flex flex-col items-center justify-center gap-4">
				<h3 className="text-xl font-bold text-center sm:text-2xl lg:text-3xl max-w-screen-sm mb-4 px-8">
					Join us to build social and sustainable innovation from early stage
					ambassadors to expert partners.
				</h3>
				<div className="w-full innov-highlight">
					<p className="text-lg text-center max-w-2xl mx-auto px-6">
						We have trusted PALs with great experience and professional skills
						that can help you work on your ideas and help you bring them into
						reality.
					</p>
					<div className="w-full max-w-xs sm:max-w-screen-ss mx-auto mt-10 lg:my-20">
						<img
							src={mainImg}
							className="w-full object-contain object-center"
							alt=""
						/>
					</div>
				</div>
			</div>
		</article>
	)
}
