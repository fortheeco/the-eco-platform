import { FaStar } from 'react-icons/fa6'
import icon from '../../../assets/innovation/chowdeck_icon.png'
import thumbsupIcon from '../../../assets/innovation/thumbs-up.svg'
import webIcon from '../../../assets/innovation/web-icon.svg'

export default function Intro() {
	return (
		<>
			<div className="w-full flex flex-col sm:flex-row items-center gap-4 my-4">
				<img
					src={icon}
					alt="innovation icon"
					className="w-12 aspect-square object-fill object-center rounded-full sm:w-20 md:w-32 inline-block"
				/>
				<div className="inline-block mr-auto">
					<h4 className="text-2xl font-semibold md:text-3xl capitalize">
						chowdeck
					</h4>
					<p className="flex">
						<FaStar role="button" className="text-2xl text-orange pr-1" />
						{4.7}
					</p>
				</div>
				<div className="flex flex-col ml-auto">
					<img
						src={thumbsupIcon}
						alt="like innovation"
						className="w-8 sm:w-16 aspect-square cursor-pointer"
					/>
					<p className="text-base">{200} likes</p>
				</div>
			</div>
			<ul className="w-full flex justify-between gap-6 list-none">
				<li className="text-lg capitalize">
					<span className="font-bold">innovation type:</span> {'software'}
				</li>
				<li className="text-lg capitalize">
					<span className="font-bold">innovation category:</span>{' '}
					{'social services'}
				</li>
				<li className="text-ecoGreen text-lg font-semibold flex">
					<img src={webIcon} aria-hidden className="w-6 md:w-10 pr-2" alt="" />
					<a href={'#'} target="_blank" rel="noopener noreferrer">
						{'www.example.com'}
					</a>
				</li>
			</ul>
			<article className="w-full my-8">
				<h5 className="text-xl font-semibold capitalize md:text-2xl mb-4">
					about
				</h5>
				<p className="text-base leading-relaxed">
					{
						'Chowdeck is a technology company that provides logistics services to both vendors and consumers. This potentially allows food vendors to deliver meals seamlessly while also providing consumers with an easy platform to order meals from their favourite restaurants in their city. Hungry? Too tired to cook? Have friends over, or do you simply need to chop life? Download Chowdeck, and lets deliver happiness to your doorstep in minutes.'
					}
				</p>
			</article>
		</>
	)
}
