import bannerImg from '../../assets/signup/side-img.png'

export default function SplitLayout({ img, heading, children }) {
	const displayImg = img || bannerImg
	const title = heading || 'Welcome to ECO AFRICA'
	return (
		<section className="w-full justify-between items-stretch mt-10 grid grid-cols-1 lg:grid-cols-2 lg:gap-10 lg:m-0 font-nunito globe-bg">
			<aside className="hidden w-full h-full lg:flex flex-col bg-ecoGreen text-white p-20">
				<h1 className="text-6xl xl:text-8xl font-bold leading-snug">{title}</h1>
				<p className="text-lg">
					Placerat elit aenean pretium vulputate nunc vitae. Proin justo blandit
					eget aenean lorem non aliquet tortor pretium. Eget euismod vitae sed
					nibh tincidunt vitae sed nullam lobortis.
				</p>
				<div className="w-4/5 object-contain object-center block">
					<img
						src={displayImg}
						alt="a hightlight of ECO's homepage"
						className="w-full h-auto inline-block object-contain"
					/>
				</div>
			</aside>
			<div className="w-full h-full flex items-start flex-col relative lg:pt-10 lg:pr-10">
				{children}
			</div>
		</section>
	)
}
