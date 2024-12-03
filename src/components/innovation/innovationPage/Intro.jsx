import { FaStar } from 'react-icons/fa6'
import thumbsupIcon from '../../../assets/innovation/thumbs-up.svg'
import webIcon from '../../../assets/innovation/web-icon.svg'
import { getImgUrl } from '../../../helpers/get-img-url'
import { likeInnovation } from '../../../helpers/like-innovation'

export default function Intro({ innovation }) {
	// console.log('Intro Innovation: ', innovation)
	return (
		<>
			<div className="w-full flex items-center gap-4 my-4">
				<img
					src={getImgUrl(innovation?.logo)}
					alt=""
					title={`${innovation?.innovation_name}'s logo`}
					className="w-12 aspect-square object-fill object-center rounded-full sm:w-20 md:w-32 inline-block bg-ecoLightGreen self-start"
				/>
				<div className="inline-block mr-auto">
					<h4 className="text-2xl font-semibold md:text-3xl capitalize max-w-[12ch] xs:max-w-[20rem] sm:max-w-[30ch] overflow-hidden whitespace-nowrap text-ellipsis">
						{innovation?.innovation_name}
					</h4>
					<p className="flex">
						<FaStar role="button" className="text-2xl text-orange pr-1" />
						{innovation?.review_average}
					</p>
				</div>
				<div className="flex flex-col ml-auto">
					<img
						src={thumbsupIcon}
						onClick={() => likeInnovation(innovation.id)}
						alt="like innovation"
						className="w-5 sm:w-12 aspect-square cursor-pointer"
					/>
					<p className="text-xs sm:text-base">{innovation?.liked_by} likes</p>
				</div>
			</div>
			<ul className="w-full flex justify-between flex-wrap items-start gap-6 list-none">
				<li className="text-lg capitalize">
					<span className="font-bold">innovation type:</span>{' '}
					{innovation?.type_of_innovation}
				</li>
				<li className="text-lg capitalize">
					<span className="font-bold">innovation category:</span>{' '}
					{innovation?.category?.map((item) => item).join(',')}
				</li>
				<li className="text-ecoGreen text-lg font-semibold flex items-center">
					<img src={webIcon} aria-hidden className="w-6 md:w-10 pr-2" alt="" />
					<a
						href={innovation?.website_url}
						target="_blank"
						rel="noopener noreferrer"
					>
						{innovation?.website_url}
					</a>
				</li>
			</ul>
			<article className="w-full my-8">
				<h5 className="text-xl font-semibold capitalize md:text-2xl mb-4">
					about
				</h5>
				<p className="text-base leading-relaxed">{innovation?.description}</p>
			</article>
		</>
	)
}
