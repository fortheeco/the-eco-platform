import { PiMapPinArea } from 'react-icons/pi'
import webIcon from '../../../assets/innovation/web-icon-black.svg'

export default function Info() {
	return (
		<>
			<article className="w-full bg-[#FBFBFB] border-4 border-nav/5 p-6 md:p-8 rounded-md">
				<h4 className="text-2xl font-bold">Impact and Reach</h4>
				<p className="text-base leading-relaxed my-6">
					{
						'Turpis risus porttitor quam nunc ridiculus mi eu et ullamcorper. Consequat est consectetur sit diam facilisi lobortis. Sit sed cras nascetur egestas scelerisque senectus. Odio purus enim fusce est lobortis ac vitae. Tortor felis elementum et cursus viverra nunc nisi at purus. Sed non vestibulum mus eu suspendisse mattis in urna suspendisse. Lacus morbi quam odio sed bibendum diam purus quis.'
					}
				</p>
				<h4 className="text-2xl font-bold">Funding and Support Received</h4>
				<p className="text-base leading-relaxed mb-8">
					{
						'Turpis risus porttitor quam nunc ridiculus mi eu et ullamcorper. Consequat est consectetur sit diam facilisi lobortis. Sit sed cras nascetur egestas scelerisque senectus. Odio purus enim fusce est lobortis ac vitae. Tortor felis elementum et cursus viverra nunc nisi at purus. Sed non vestibulum mus eu suspendisse mattis in urna suspendisse. Lacus morbi quam odio sed bibendum diam purus quis.'
					}
				</p>
			</article>
			<section
				className="w-full bg-[#FBFBFB] border-4 border-nav/5 mt-10 rounded-md"
				aria-description="innovation contact info"
			>
				<address className="border-b-2 border-[#ACB2B0] p-6 w-full not-italic font-normal">
					<h5 className="text-2xl font-bold capitalize">
						parent organization name
					</h5>
					<p className="my-2 text-lg font-light capitalize">{'agrotech'}</p>
					<div className="w-full flex flex-wrap gap-8 sm:gap-16">
						<p className="text-base">
							<PiMapPinArea className="inline-block pr-2 text-2xl" />
							{'7b Oba Dosunmu Street, Ikeja GRA Lagos NG, GRA, Ikeja 100271'}
						</p>
						<div className="flex">
							<img
								src={webIcon}
								aria-hidden
								className="w-4 md:w-6 pr-2"
								alt=""
							/>
							<a
								href={'#'}
								className="text-lg hover:text-ecoGreen transition-colors"
								target="_blank"
								rel="noopener noreferrer"
							>
								{'www.example.com'}
							</a>
						</div>
					</div>
				</address>
				<address className="p-6 w-full not-italic font-normal">
					<h5 className="text-2xl font-bold capitalize mb-4 md:mb-7">
						contact person
					</h5>
					<div className="flex w-full gap-10">
						<div className="w-fit flex flex-col gap-4 mr-8 capitalize">
							<h6 className="text-xl font-semibold">{'andrew timothy'}</h6>
							<p>{'customer success'}</p>
						</div>
						<div className="w-fit flex flex-col gap-4 mr-8 capitalize">
							<a
								href={`mailto:${'Andrew.Timothy@emil.com'}`}
								className="text-lg hover:text-ecoGreen transition-colors"
							>
								{'Andrew.Timothy@emil.com'}
							</a>
							<a
								href={`tel:${'+234 (9) 535 2349 840'}`}
								className="text-lg hover:text-ecoGreen transition-colors"
							>
								{'+234 (9) 535 2349 840'}
							</a>
						</div>
					</div>
				</address>
			</section>
		</>
	)
}
