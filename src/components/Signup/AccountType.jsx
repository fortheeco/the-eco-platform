import { Link } from 'react-router-dom'
import bannerImg from '../assets/ecoBannerImage.png'
import orgIcon from '../assets/org-icon.svg'
import userIcon from '../assets/user-octagon.svg'
import AuthNav from './AuthNav'
import SplitLayout from './SplitLayout'
import './signup.css'

export default function AccountType() {
	return (
		<SplitLayout>
			<article className={`w-full md:p-10 lg:shadow-lg globe-bg`}>
				<AuthNav />
				<h4 className={`text-2xl underline text-center my-6 block lg:text-3xl`}>
					Create an Account
				</h4>
				<div className="grid grid-cols-2 gap-3 md:gap-8 lg:gap-20 w-full justify-between mt-16">
					<Link
						to={'user'}
						className="w-full flex flex-col items-center justify-center gap-5 p-6 rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-200 active:scale-75"
					>
						<img
							src={userIcon}
							alt="new user avatar"
							className="w-10 aspect-square mt-6 object-fill"
						/>
						<h4 className=" md:text-xl uppercase">individual</h4>
						<small className="capitalize text-base">free</small>
					</Link>
					<Link
						to={'organization'}
						className="w-full flex flex-col items-center justify-center gap-5 p-6 rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-200 active:scale-75"
					>
						<img
							src={orgIcon}
							alt="new organization avatar"
							className="w-10 aspect-square mt-6 object-fill"
						/>
						<h4 className=" md:text-xl uppercase">organization</h4>
						<small className="capitalize text-base">19,999</small>
					</Link>
				</div>
				<p className="text-center w-full text-lg mt-8 mb-4">
					Organization accounts become ECO Partners
				</p>
				<a
					href="#"
					className="block mb-20 w-full text-base text-center text-ecoGreen underline"
				>
					Learn more about ECO Partners
				</a>
			</article>
			<div className="hidden w-full ml-auto lg:block">
				<img
					src={bannerImg}
					alt="a hightlight of ECO's homepage"
					className="w-full h-auto inline-block object-contain"
				/>
			</div>
		</SplitLayout>
	)
}
